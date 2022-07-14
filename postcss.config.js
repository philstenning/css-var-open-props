const OpenProps = require('open-props')
const postcssImport = require('postcss-import')
const postcssNesting = require('postcss-nesting')
const postcssJitProps = require('postcss-jit-props')

module.exports = {
  plugins: [postcssImport(), postcssJitProps(OpenProps), postcssNesting()]
}
