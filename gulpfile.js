const gulp = require('gulp');
const pug = require('gulp-pug');
const less = require('gulp-less');
const clean = require('gulp-clean');
const plumber = require('gulp-plumber');
const imagemin = require('gulp-imagemin');
const minifyCSS = require('gulp-csso');
const terser = require('gulp-terser');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync');

const bs = browserSync.create();
const rootFiles = ['./src/*.*'];
const vendorFiles = ['./src/vendor/**/*.*'];

// Clean build directory
function cleanTask() {
    return gulp.src('./build', { read: false, allowEmpty: true })
        .pipe(clean())
        .pipe(plumber());
}

// Move root files to build
function moveRoot() {
    return gulp.src(rootFiles)
        .pipe(gulp.dest('./build'))
        .pipe(plumber());
}

// Move vendor files to build
function moveVendor() {
    return gulp.src(vendorFiles, { base: './src' })
        .pipe(gulp.dest('./build'))
        .pipe(plumber());
}

// Compile Pug templates to HTML
function html() {
    return gulp.src(['src/templates/*.pug', '!./src/templates/**/_*.pug'])
        .pipe(plumber())
        .pipe(pug({ pretty: true }))
        .pipe(gulp.dest('./build'));
}

// Compile LESS to CSS
function css() {
    return gulp.src('src/styles/*.less')
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(minifyCSS())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./build/css'))
        .pipe(bs.stream());
}

// Concatenate and minify JavaScript
function js() {
    return gulp.src('src/javascript/*.js')
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(concat('app.min.js'))
        .pipe(terser())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./build/js'));
}

// Optimize images
function img() {
    return gulp.src('src/images/**/*')
        .pipe(plumber())
        .pipe(imagemin([
            imagemin.gifsicle({ interlaced: true }),
            imagemin.mozjpeg({ progressive: true }),
            imagemin.optipng({ optimizationLevel: 5 }),
            imagemin.svgo({
                plugins: [
                    { name: 'removeViewBox', active: false },
                    { name: 'cleanupIDs', active: false }
                ]
            })
        ]))
        .pipe(gulp.dest('./build/images'));
}

// Development server with live reload
function serve() {
    bs.init({
        server: {
            baseDir: './build'
        },
        port: 3000,
        notify: false
    });

    // Watch for changes
    gulp.watch('src/styles/**/*.less', css);
    gulp.watch('src/templates/**/*.pug', gulp.series(html, bs.reload));
    gulp.watch('src/javascript/**/*.js', gulp.series(js, bs.reload));
    gulp.watch('src/images/**/*', gulp.series(img, bs.reload));
    gulp.watch(rootFiles.concat(vendorFiles), gulp.series(moveRoot, moveVendor, bs.reload));
}

// Build task for production
const build = gulp.series(
    cleanTask,
    gulp.parallel(moveRoot, moveVendor, html, css, js, img)
);

// Export tasks
exports.cleanTask = cleanTask;
exports.moveRoot = moveRoot;
exports.moveVendor = moveVendor;
exports.html = html;
exports.css = css;
exports.js = js;
exports.img = img;
exports.serve = serve;
exports.build = build;
exports.clean = cleanTask;

// Default development task
exports.default = gulp.series(build, serve);