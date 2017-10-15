var babelTranspiler = require('broccoli-babel-transpiler');
var MergeTrees      = require('broccoli-merge-trees');
var sass            = require('broccoli-sass');
var source          = require('broccoli-source');
var watchify        = require('broccoli-watchify');

var WatchedDir = source.WatchedDir;

var BABEL_OPTIONS = {
  presets: [
    ['env', {
      targets: {
        browsers: 'last 2 versions',
      },
    }],
  ],
};

var inputHtml = new WatchedDir('src/html');
var outputHtml = inputHtml;

var inputJs = new WatchedDir('src/js');
var transpiledJs = babelTranspiler(inputJs, BABEL_OPTIONS);
var outputJs = watchify(transpiledJs, {
  browserify: {
    entries: ['index.js'],
    paths: [__dirname + '/node_modules'],
  },
  outputFile: 'index.js',
});

var inputStyles = new WatchedDir('src/styles');
var outputCss = sass([inputStyles], 'app.scss', 'index.css');

module.exports = new MergeTrees([
  outputCss,
  outputHtml,
  outputJs,
]);
