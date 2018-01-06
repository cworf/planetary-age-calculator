const gulp = require('gulp'),
	del = require('del'),
	lib = require('bower-files') ({
		  "overrides":{
		    "bootstrap" : {
		      "main": [
		        "less/bootstrap.less",
		        "dist/css/bootstrap.css",
		        "dist/js/bootstrap.js"
		      ]
		    }
		  }
	  }),
	uglify = require('gulp-uglify'),
	concat = require('gulp-concat');


gulp.task('clean', function(){
	del(['tmp', 'dist']);
});

gulp.task('copyHTML', ['clean'], function(){
	gulp.src('dev/css/master.css')
		.pipe(gulp.dest('./dist/css'));
});
gulp.task('copyCSS', ['copyHTML'], function(){
	gulp.src('dev/css/master.css')
		.pipe(gulp.dest('./dist/css'));
});

gulp.task('bowerCSS', ['copyCSS'], function () {
	gulp.src(lib.ext('css').files) //grab css
		.pipe(concat('vendor.css'))
		.pipe(gulp.dest('./dist/css'));
});

// gulp.task('bowerJS', ['bowerCSS'], function(){
// 	gulp.src(lib.ext('js').files) //grab js
// 	.pipe(concat('vendor.min.js'))
// 	.pipe(uglify())
// 	.pipe(gulp.dest('./dist/js'));
// });
