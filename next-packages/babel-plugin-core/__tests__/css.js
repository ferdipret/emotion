import babelTester from 'babel-tester'
import plugin from '@emotion/babel-plugin-core'
import path from 'path'

babelTester(
  '@emotion/babel-plugin-core css',
  path.join(__dirname, '..', '..', 'css.macro', '__tests__'),
  {
    plugins: [plugin],
    transform: src => src.replace(/\.macro/g, '')
  }
)
