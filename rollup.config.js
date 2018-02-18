import babel from 'rollup-plugin-babel'
import uglify from 'rollup-plugin-uglify'
import replace from 'rollup-plugin-replace'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import filesize from 'rollup-plugin-filesize'
import { minify } from 'uglify-es'
import pkg from './package.json'

export default [
  // Browser build configuration.
  {
    input: 'src/ReactScrollie.js',
    output: {
      name: 'ReactScrollie',
      file: pkg.browser,
      format: 'umd',
      sourcemap: true,
      globals: {
        react: 'React'
      }
    },
    external: ['react'],
    plugins: [
      babel({
        exclude: ['node_modules/**']
      }),
      resolve({
        customResolveOptions: {
          moduleDirectory: ['node_modules']
        }
      }),
      commonjs({
        include: /node_modules/
      }),
      replace({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }),
      uglify({}, minify),
      filesize()
    ]
  },

  // CommonJS (for Node) and ES module (for bundlers) build.
  {
    input: 'src/ReactScrollie.js',
    output: [
      // CJS module configuration.
      {
        file: pkg.main,
        format: 'cjs',
        sourcemap: true
      },
      // ES module configuration.
      {
        file: pkg.module,
        format: 'es',
        sourcemap: true
      }
    ],
    external: [
      ...Object.keys(pkg.dependencies),
      ...Object.keys(pkg.peerDependencies)
    ],
    plugins: [babel(), resolve(), uglify({}, minify), filesize()]
  }
]
