var babelTranspiler = require('broccoli-babel-transpiler');
var Funnel          = require('broccoli-funnel');
var MergeTrees      = require('broccoli-merge-trees');
var sass            = require('broccoli-sass-source-maps');
var watchify        = require('broccoli-watchify');

var root = '.';
var inputJsTree = 'src/js';
var inputScssTree = 'src/styles';

var transpiledTree = babelTranspiler(inputJsTree);
var outputJsTree = watchify(transpiledTree, {
  browserify: {
    entries: ['app.js']
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
