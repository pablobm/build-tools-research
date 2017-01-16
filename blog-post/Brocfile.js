var source = require('broccoli-source');
var WatchedDir = source.WatchedDir;
var inputHtml = new WatchedDir('src/html');

module.exports = inputHtml;
