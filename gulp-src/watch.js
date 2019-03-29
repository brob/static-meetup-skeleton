var project = require('./_project.js');
var gulp    = require('gulp');


gulp.task("watch", function () {
  // gulp.watch(project.buildSrc + "/js/**/*", gulp.parallel('scripts'));
  gulp.watch("scss/**/*", gulp.parallel('styles'));
  gulp.watch(["templates/*", "templates/**/*", "*.html", "*.md", "*.css", "**/*.md"],  gulp.parallel('generate'));
});
