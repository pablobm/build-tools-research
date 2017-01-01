var babelTranspiler = require('broccoli-babel-transpiler');
var concat = require('broccoli-concat');
var MergeTrees = require('broccoli-merge-trees');
var Funnel = require('broccoli-funnel');

function pickSubtree(node, path) {
  return new Funnel(node, { srcDir: path, destDir: path });
}

var root = '.';

var externalTree = pickSubtree(root, 'external');
var srcTree = pickSubtree(root, 'src');

var transpiledSrcTree = babelTranspiler(srcTree, {
  moduleIds: true,
  modules: 'amd',
  getModuleId: function(path) {
    return path.replace(/^src\//, '');
  },
});

var jsTree = new MergeTrees([externalTree, transpiledSrcTree]);

var appTree = concat(jsTree, {
  headerFiles: ['external/vendor/loader.js'],
  footerFiles: ['external/auto-start.js'],
  inputFiles: '**/*.js',
  outputFile: 'index.js',
});

module.exports = appTree;
