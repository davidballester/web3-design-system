import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import serve from 'rollup-plugin-serve';

export default {
  input: 'src/index.jsx',
  output: {
    file: 'site/index.js',
    format: 'iife',
  },
  plugins: [
    resolve({
      jsnext: true,
      main: true,
      browser: true,
      extensions: [
        '.js',
        '.jsx',
        '.html',
        '.css',
      ],
    }),
    commonjs({
      include: [
        'node_modules/**',
      ],
      namedExports: {
        'node_modules/react/index.js': [
          'cloneElement',
          'Component',
          'createContext',
          'createElement',
        ],
        'node_modules/react-is/index.js': [
          'isElement',
          'isValidElementType',
          'ForwardRef',
        ],
      },
    }),
    babel({
      exclude: 'node_modules/**',
    }),
    replace({
      'process.env.NODE_ENV': '\'production\'',
    }),
    serve('site'),
  ],
};
