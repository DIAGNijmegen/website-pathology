var gulp = require('gulp');
var log = require('fancy-log');
var critical = require('critical').stream;

// Generate & Inline Critical-path CSS
gulp.task('critical', function () {
    return gulp.src('../output/**/*.html')
        .pipe(critical({base: '../output/', inline: true, css: ['../output/theme/css/theme.min.css']}))
        .on('error', function(err) { log.error(err.message); })
        .pipe(gulp.dest('../output'));
});
