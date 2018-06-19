var critical = require('critical')

critical.generate({
    // Inline the generated critical-path CSS
    // - true generates HTML
    // - false g\enerates CSS
    inline: false,

    // Your base directory
    base: '../output',

    // HTML source file
    src: 'index.html',

    // Viewports
    dimensions: [{
        height: 200,
        width: 500
    }, {
        height: 900,
        width: 1200
    }],

    // Target for final HTML output.
    // use some css file when the inline option is not set
    dest: '../themes/pathology-theme/templates/blocks/above-the-fold.css',

    // Minify critical-path CSS when inlining
    minify: true,

    // Extract inlined styles from referenced stylesheets
    extract: false,

    // Prefix for asset directory
    //pathPrefix: '/MySubfolderDocrot',

    // ignore css rules
    //ignore: ['font-face',/some-regexp/],

    // overwrite default options
    //ignoreOptions: {}
  });
