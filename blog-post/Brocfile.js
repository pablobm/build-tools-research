var source = require('broccoli-source');
var WatchedDir = source.WatchedDir;
var inputHtml = new WatchedDir('src/html');
var outputHtml = inputHtml;

module.exports = outputHtml;
