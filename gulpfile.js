var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jscs= require('gulp-jscs');

var jsFiles = ['*.js', 'routes/*.js', 'views/*.js'];

gulp.task('style', function () {
	return gulp.src(jsFiles)
		.pipe(jshint())
		.pipe(jshint.reporter('jshint-stylish', { verbose: true })).pipe(jscs());
});