var gulp  = require('gulp');
var shell = require('gulp-shell');

require('dotenv').config();



/*
 Run our static site generator to build the pages
*/
gulp.task('generate', shell.task('npx eleventy'));


/**
  Our gulp tasks live in their own files,
  for the sake of clarity.
 */
require('./gulp-src/tasks');


/*
  compile the assets to the correct destination
*/
gulp.task('assets', gulp.parallel(
  'styles'
));



gulp.task('build:local', gulp.series(
    'generate',
    'image:opt',
    'assets'
));