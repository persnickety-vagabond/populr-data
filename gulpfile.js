var gulp = require('gulp');
var shell = require('gulp-shell');

/* JSDoc */
gulp.task('jsdoc', shell.task([
  './node_modules/jsdoc/jsdoc.js -c ./conf.json ./server.js -r README.md'
]));
