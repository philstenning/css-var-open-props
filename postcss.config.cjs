const postcssJitProps = require('postcss-jit-props')
const OpenProps = require('open-props')
const postcssImport = require('postcss-import')

module.exports = {
  plugins: [
    // not used but seems to be needed to make jit-props work
    postcssImport(),
    postcssJitProps(OpenProps)
  ]
}
