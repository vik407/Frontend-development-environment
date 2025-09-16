# Frontend Development Environment

A modern HTML + JavaScript + CSS development template featuring Pug templates, LESS preprocessing, and a Gulp 5.x build system designed for educational purposes and rapid prototyping.

## 🚀 Quick Start

### Prerequisites
- **Node.js**: Version 18.0.0 or higher
- **npm**: Version 8.0.0 or higher

### Installation
```bash
# Clone the repository
git clone <repository-url>
cd frontend-development-environment

# Install dependencies
npm install

# Start development server with live reload
npm run dev
```

The development server will start at `http://localhost:3000` with live reload functionality.

## 📁 Project Structure

```
src/
├── templates/           # Pug templates
│   ├── index.pug       # Main entry point
│   └── shared/         # Reusable components
│       ├── _head.pug   # HTML head section
│       └── _footer.pug # Footer component
├── styles/             # LESS stylesheets
│   ├── main.less       # Main styles
│   └── variables.less  # LESS variables and tokens
├── javascript/         # JavaScript source files
│   ├── main.js        # Application entry point
│   └── functions.js   # Utility functions
├── images/            # Image assets
├── vendor/            # Third-party libraries
└── [root files]      # Static assets (favicon, robots.txt, etc.)
```

## 🛠️ Available Commands

- **`npm run dev`** - Start development server with live reload
- **`npm run build`** - Build for production
- **`npm run clean`** - Clean build directory
- **`npm start`** - Alias for `npm run dev`
- **`npm test`** - Run build test

## 🔧 Build System

The build system uses **Gulp 5.x** with modern async task composition:

### Features
- **Template Compilation**: Pug → HTML with pretty formatting
- **Style Processing**: LESS → CSS with minification and source maps
- **JavaScript Bundling**: Concatenation, minification with Terser
- **Image Optimization**: Automatic compression for all image formats
- **Live Reload**: BrowserSync for cross-device testing
- **Source Maps**: Full debugging support for styles and scripts

### Modern Dependencies
- **Gulp**: 5.0.1 (latest stable)
- **BrowserSync**: 3.0.3+ (modern development server)
- **LESS**: 5.0.0 (current CSS preprocessor)
- **Pug**: 5.0.0 (latest template engine)
- **Terser**: 2.1.0 (modern JavaScript minifier)

## 📦 Built Output

The build process generates optimized assets in the `build/` directory:

```
build/
├── css/
│   ├── main.css           # Compiled and minified styles
│   ├── main.css.map       # Source map for debugging
│   ├── variables.css      # Variable definitions
│   └── variables.css.map  # Variables source map
├── js/
│   ├── app.min.js         # Concatenated and minified scripts
│   └── app.min.js.map     # JavaScript source map
├── images/                # Optimized image assets
├── vendor/                # Third-party libraries
└── index.html             # Compiled HTML from Pug templates
```

## 🎯 Educational Focus

This template is designed for learning modern frontend development:

- **No Framework Lock-in**: Pure HTML, CSS, and JavaScript output
- **Modern Tooling**: Current build tools and best practices
- **Clear Architecture**: Organized file structure and component patterns
- **Development Workflow**: Professional development server setup
- **Source Maps**: Full debugging capabilities during development

## 🔄 Live Development Workflow

1. **Template Changes**: Edit `.pug` files → automatic HTML regeneration
2. **Style Changes**: Edit `.less` files → automatic CSS compilation and injection
3. **Script Changes**: Edit `.js` files → automatic bundling and reload
4. **Image Changes**: Add/edit images → automatic optimization and reload
5. **Cross-Device Testing**: Access `External` URL for mobile/tablet testing

## 🔒 Security & Performance

- **Modern Dependency Stack**: All packages updated to current stable versions
- **Security Auditing**: Regular `npm audit` checks for vulnerabilities
- **Performance Optimized**: Minified assets with compression
- **Source Maps**: Development debugging without performance impact

## 📋 Requirements

- **Node.js**: 18.0.0+ (supports ES2022+ features)
- **npm**: 8.0.0+ (modern package management)
- **Browser**: Modern browsers with ES6+ support

## 🤝 Contributing

This project is designed for educational use. Feel free to fork, modify, and adapt for your learning needs.

---

**Author**: Victor Hernandez
**Email**: vik407@gmail.com
**Version**: 2.0.0 (Modernized 2024)
**Made with**: Node.js + Gulp + Modern Web Technologies
