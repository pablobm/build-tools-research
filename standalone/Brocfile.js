var babelTranspiler = require('broccoli-babel-transpiler');
var Funnel          = require('broccoli-funnel');
var MergeTrees      = require('broccoli-merge-trees');
var sass            = require('broccoli-sass-source-maps');
var source          = require('broccoli-source');
var watchify        = require('broccoli-watchify');

var WatchedDir = source.WatchedDir;

var root = new WatchedDir('.');
var inputJsTree = new WatchedDir('src/js');
var inputScssTree = new WatchedDir('src/styles');

var transpiledTree = babelTranspiler(inputJsTree);
var outputJsTree = watchify(transpiledTree, {
  browserify: {
    entries: ['app.js'],
    paths: [__dirname + '/node_modules'],
  },
  outputFile: 'index.js',
});

var outputCssTree = sass([inputScssTree], 'app.scss', 'index.css', {});

var outputHtmlTree = new Funnel(root, { srcDir: 'src', destDir: '.', include: ['index.html'] });

module.exports = new MergeTrees([
  outputCssTree,
  outputHtmlTree,
  outputJsTree,
]);
