import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'
import rollupTypescript from 'rollup-plugin-typescript2'

import pkg from './package.json'

const input = 'src/index.ts'

const typescriptPlugin = rollupTypescript({
  typescript: require('typescript')
})

export default [
  {
    input,
    output: {
      file: pkg.browser,
      name: 'DS',
      format: 'umd',
      sourcemap: process.env.NODE_ENV === 'dev'
    },
    plugins: [typescriptPlugin, serve(), livereload()]
  }
]
