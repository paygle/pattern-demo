import path from 'path';

// 文档参考 https://github.com/neutrinojs/webpack-chain
export default (config, { webpack }) => {

  // 设置 alias
  config.resolve.alias.set('src', path.resolve(__dirname, '../src/'))

};
