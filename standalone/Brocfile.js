var babelTranspiler = require('broccoli-babel-transpiler');
var concat = require('broccoli-concat');
var MergeTrees = require('broccoli-merge-trees');

var vendorTree = 'external';
var srcTree = 'src';

var transpiledSrcTree = babelTranspiler(srcTree, {
  moduleIds: true,
  modules: 'amd',
});

var jsTree = new MergeTrees([vendorTree, transpiledSrcTree]);

var appTree = concat(jsTree, {
  headerFiles: ['vendor/loader.js'],
  footerFiles: ['auto-start.js'],
  inputFiles: '**/*.js',
  outputFile: 'index.js',
});

module.exports = appTree;
