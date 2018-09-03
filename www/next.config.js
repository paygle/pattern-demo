/* eslint-disable */
const withLess = require('@zeit/next-less')
const withTypescript = require('@zeit/next-typescript')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');


// 修复：require 样式文件时防止类型错误
if (typeof require !== 'undefined') {
  require.extensions['.less'] = (file) => {}
}


module.exports = withTypescript({
  webpack(config, options) {
    // Do not run type checking twice: 输出中看到 Typescript 错误列表
    if (options.isServer) config.plugins.push(new ForkTsCheckerWebpackPlugin())

    return config
  }
})

module.exports = withLess()
