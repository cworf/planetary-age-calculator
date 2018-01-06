const gulp = require('gulp'),
	del = require('del');



gulp.task('clean', function(){
	del(['tmp', 'dist']);
})

gulp.task('copyStuff', ['clean'], function(){
	gulp.src('dev/index.html')
		.pipe(gulp.dest('./dist'));
	gulp.src('dev/css/master.css')
		.pipe(gulp.dest('./dist/css'));
})
