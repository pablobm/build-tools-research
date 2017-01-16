var babelTranspiler = require('broccoli-babel-transpiler');
var MergeTrees      = require('broccoli-merge-trees');
var sass            = require('broccoli-sass');
var source          = require('broccoli-source');
var watchify        = require('broccoli-watchify');

var WatchedDir = source.WatchedDir;

var inputHtml = new WatchedDir('src/html');
var outputHtml = inputHtml;

var inputJs = new WatchedDir('src/js');
var transpiledJs = babelTranspiler(inputJs);
var outputJs = watchify(transpiledJs, {
  outputFile: 'index.js',
});

var inputStyles = new WatchedDir('src/styles');
var outputCss = sass([inputStyles], 'app.scss', 'index.css');

module.exports = new MergeTrees([
  outputCss,
  outputHtml,
  outputJs,
]);
