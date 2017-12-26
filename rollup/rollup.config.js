import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
  input: 'js/app.js',
  output: {
    file: 'dist/index.js',
    format: 'umd'
  },
  plugins: [
    commonjs(),
    nodeResolve()
  ]
};
