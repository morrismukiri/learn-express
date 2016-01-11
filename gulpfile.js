var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var nodemon = require('gulp-nodemon');

var jsFiles = ['*.js', 'routes/*.js', 'views/*.js'];

gulp.task('style', function () {
	return gulp.src(jsFiles)
		.pipe(jshint())
		.pipe(jshint.reporter('jshint-stylish', { verbose: true })).pipe(jscs());
});

gulp.task('serve', ['style'], function () {
	var options={
	script: './bin/www',
	delayTime:1,
	env:{
		port: 8080
	},	
	watch:jsFiles
	};
	return nodemon(options)
			.on('start',function (ev) {
				console.log('==================\nserver started...\n==================');
			})
			.on('restart',function (ev) {
				console.log('===============\nServer restarted\n===============');
			})
			.on('stop',function (ev) {
				console.log('server stopped');
			});
});