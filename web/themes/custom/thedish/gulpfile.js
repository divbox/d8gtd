var gulp = require('gulp');
var sass = require('gulp-sass');
// var uglify = require('gulp-uglify');
var browserSync = require('browser-sync');

var paths = {
    sass: ['src/assets/styles/*.scss'],
    css: 'assets/css',
    js_src: ['node_modules/bootstrap/dist/js/bootstrap.min.js'],
    js_dest: 'assets/js',
    templates: 'templates'
};

gulp.task('styles', function () {
    "use strict";
    return gulp.src(paths.sass)
        .pipe(sass())
        .pipe(gulp.dest(paths.css))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('js', function () {
    "use strict";
    return gulp.src(paths.js_src)
        .pipe(gulp.dest(paths.js_dest));
});

gulp.task('watch:code', function () {
    "use strict";
    gulp.watch([
        paths.templates
    ], gulp.series(browserSync.reload));
});

gulp.task('watch:styles', function () {
    "use strict";
    gulp.watch([
        paths.sass
    ], gulp.series('styles'));
});

gulp.task('watch', gulp.parallel('watch:code', 'watch:styles'));

gulp.task('serve', gulp.series('styles', gulp.parallel('js', 'watch')));
//     .on('change', function (evt) {
//         console.log('[watcher] File ' + evt.path.replace(/.*(?=sass)/, '') + ' was ' + evt.type + ', compiling...');
//     });
// );

gulp.task('default', gulp.series('serve'));
