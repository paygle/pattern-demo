import webpackConfig from './webpack.config'
import { env } from 'process'
// import pageRoutes from './router.config'

// ref: https://umijs.org/config/
export default {

  publicPath: '/pattern/',

  base: '/pattern/', // 部署到非根目录

  exportStatic: { htmlSuffix: true }, // 静态化选项

  // dynamicRoot: true, // 静态化到任何目录

  define: {
    "BASE_URL": env.NODE_ENV === 'production' ? '/pattern/' : '/'
  },

  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      polyfills: ['ie10'],
      antd: true,
      dva: true,
      dynamicImport: true,
      title: 'Pattern WWW',
      dll: true,
      pwa: true,
      routes: {
        exclude: [],
      },
      // hardSource: true, // 开启这个之后 define 选项失效

      // scripts、headScripts 以及 links 的 href 属性，支持 publicPath 变量
      // chunks: ['vendor', 'umi'],

      // 在 umi.js 后面
      // scripts: [
      //   { src: 'http://cdn/a.js' },
      //   { content: `alert('a');` },
      // ],

      //  放在 <head> 里，在 umi.js 之前
      // headScripts: [],

      // metas: [
      //   { charset: 'utf-8' },
      // ],

      // links: [
      //   { rel: 'stylesheet', href: 'http://cdn/a.css' },
      // ]
    }],
  ],
  // webpack 配置
  chainWebpack: webpackConfig

  // 路由配置， 默认不启动手动配置
  // routes: pageRoutes,
}

