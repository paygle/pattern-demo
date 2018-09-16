import webpackConfig from './webpack.config'
// import pageRoutes from './router.config'

// ref: https://umijs.org/config/
export default {

  publicPath: '/',

  base: '/pattern', // 部署到非根目录

  // exportStatic: { htmlSuffix: true }, // 静态化选项

  // dynamicRoot: true, // 静态化到任何目录

  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: true,
      title: 'Pattern WWW',
      dll: true,
      pwa: true,
      routes: {
        exclude: [],
      },
      hardSource: true,
    }],
  ],
  // webpack 配置
  chainWebpack: webpackConfig

  // 路由配置， 默认不启动手动配置
  // routes: pageRoutes,
}
