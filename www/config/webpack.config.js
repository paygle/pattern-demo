import path from 'path';
import webpack from 'webpack'
import { env } from 'process'

// 文档参考 https://github.com/neutrinojs/webpack-chain
export default (config) => {

  // 设置 alias
  config.resolve.alias.set('src', path.resolve(__dirname, '../src/'))

};

