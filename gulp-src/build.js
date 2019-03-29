var project = require('./_project.js');
var gulp    = require('gulp');



gulp.task('build', gulp.series('meetup:get', 'image:opt', 'generate'));