var MergeTrees = require('broccoli-merge-trees');
var sass       = require('broccoli-sass');
var source     = require('broccoli-source');

var WatchedDir = source.WatchedDir;

var inputHtml = new WatchedDir('src/html');
var outputHtml = inputHtml;

var inputStyles = new WatchedDir('src/styles');
var outputCss = sass([inputStyles], 'app.scss', 'index.css');

module.exports = new MergeTrees([
  outputCss,
  outputHtml,
]);
