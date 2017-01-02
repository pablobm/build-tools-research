var babelTranspiler = require('broccoli-babel-transpiler');
var concat          = require('broccoli-concat');
var Funnel          = require('broccoli-funnel');
var MergeTrees      = require('broccoli-merge-trees');
var sass            = require('broccoli-sass-source-maps');

function pickSubtree(node, path) {
  return new Funnel(node, { srcDir: path, destDir: path });
}

var root = '.';

var externalTree = pickSubtree(root, 'external');
var inputJsTree = pickSubtree(root, 'src/js');
var inputScssTree = pickSubtree(root, 'src/styles');

var transpiledTree = babelTranspiler(inputJsTree, {
  moduleIds: true,
  modules: 'amd',
  getModuleId: function(path) {
    return path.replace(/^src\/js\//, '');
  },
});

var jsTree = new MergeTrees([externalTree, transpiledTree]);

var outputJsTree = concat(jsTree, {
  headerFiles: ['external/vendor/loader.js'],
  footerFiles: ['external/auto-start.js'],
  inputFiles: '**/*.js',
  outputFile: 'index.js',
});

var outputCssTree = sass([inputScssTree], 'src/styles/app.scss', 'index.css', {});

var outputHtmlTree = new Funnel(root, { srcDir: 'src', destDir: '.', include: ['index.html'] });

module.exports = new MergeTrees([
  outputCssTree,
  outputHtmlTree,
  outputJsTree,
]);
