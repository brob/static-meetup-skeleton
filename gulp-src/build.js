var project = require('./_project.js');
var gulp    = require('gulp');



gulp.task('build', gulp.series('image:opt', 'generate'));