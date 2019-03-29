var project = require('./_project.js');
var gulp    = require('gulp');
var browserSync = require('browser-sync');


gulp.task('browser-sync', function(done) {
    browserSync.init({
        server: {
            baseDir: project.buildDest
        }
    });
    done();
});


gulp.task('serve', gulp.parallel('generate', 'watch', 'meetup:get', 'image:opt', 'browser-sync'));