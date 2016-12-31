var esTranspiler = require('broccoli-babel-transpiler');

var srcTree = 'src';
var es6Tree = esTranspiler(srcTree);

module.exports = es6Tree;
