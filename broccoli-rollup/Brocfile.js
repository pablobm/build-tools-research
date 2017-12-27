var babelTranspiler = require('broccoli-babel-transpiler');
var MergeTrees      = require('broccoli-merge-trees');
var sass            = require('broccoli-sass');
var source          = require('broccoli-source');
var watchify        = require('broccoli-watchify');

var WatchedDir = source.WatchedDir;

var inputHtmlTree = new WatchedDir('src/html');
var inputJsTree = new WatchedDir('src/js');
var inputScssTree = new WatchedDir('src/styles');

var outputHtmlTree = inputHtmlTree;

var transpiledTree = babelTranspiler(inputJsTree);
var outputJsTree = watchify(transpiledTree, {
  browserify: {
    entries: ['app.js'],
    paths: ['.', __dirname + '/node_modules'],
  },
  outputFile: 'index.js',
});

var outputCssTree = sass([inputScssTree], 'app.scss', 'index.css', {});

module.exports = new MergeTrees([
  outputCssTree,
  outputHtmlTree,
  outputJsTree,
]);
