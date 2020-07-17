import vue from 'rollup-plugin-vue'
import { terser } from 'rollup-plugin-terser'
import replace from '@rollup/plugin-replace'
import filesize from 'rollup-plugin-filesize'
import resolve from 'rollup-plugin-node-resolve'
import copy from 'rollup-plugin-copy-assets'
import serve from 'rollup-plugin-serve'

const dev = process.env.ROLLUP_WATCH

export default {
  input: 'src/app.js',
  output: {
    file: 'dist/pong.js',
    format: 'amd'
  },
  plugins: [
    vue(),
    !dev && replace({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    resolve({
      mainFields: ['browser', 'jsnext', 'module', 'main'],
      include: 'node_modules/**',
      preferBuiltins: true
    }),
    terser(),
    copy({
      assets: [
        './src/assets'
      ]
    }),
    filesize(),
    dev && serve('dist')
  ]
}
