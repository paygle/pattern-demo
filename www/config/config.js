
// ref: https://umijs.org/config/
export default {
  publicPath: '/',
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
}
