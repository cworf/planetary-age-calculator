const gulp = require('gulp');

gulp.task('copyStuff', function(){
	gulp.src('dev/index.html')
		.pipe(gulp.dest('./dist'));
	gulp.src('dev/css/master.css')
		.pipe(gulp.dest('./dist/css'));
})
