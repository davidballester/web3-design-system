import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

import pkg from './package.json';

export default {
  input: 'src/index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true,
    },
  ],
  external: [
    'react',
    'react-dom',
  ],
  plugins: [
    babel({
      exclude: 'node_modules/**',
    }),
    resolve({
      extensions: [
        '.jsx',
        '.js',
      ],
    }),
    commonjs(),
  ],
};
