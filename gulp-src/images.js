var gulp  = require('gulp');
const imagemin = require('gulp-imagemin');


gulp.task('image:opt', function(done) {
    gulp.src(['img/*', 'img/**/*'])
		.pipe(imagemin())
		.pipe(gulp.dest('dist/img'));
    done();
  });