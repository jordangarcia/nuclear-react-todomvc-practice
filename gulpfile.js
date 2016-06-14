var gulp = require('gulp');
var connect = require('gulp-connect');
var shell = require('gulp-shell');

gulp.task('connect', function() {
  connect.server({
    root: './',
    port: 3000,
  });
});

gulp.task('webpack', shell.task([
  './node_modules/webpack/bin/webpack.js --watch --progress --colors'
]))

gulp.task('default', ['connect', 'webpack']);
