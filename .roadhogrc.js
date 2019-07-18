const path = require('path');
const pxtorem = require('postcss-pxtorem');
const svgSpriteDirs = [
  require.resolve('antd-mobile').replace(/warn\.js$/, ''), // antd-mobile 内置svg
  path.resolve(__dirname, 'src/my-project-svg-foler'),  // 业务代码本地私有 svg 存放目录
];

export default {
  entry: "src/index.js",
  extraBabelPlugins: [
    ["import", { "style": "css", "libraryName": "antd-mobile" }],
  ],
  env: {
    development: {
      "extraBabelPlugins": [
        "transform-decorators-legacy",
        "dva-hmr",
        "transform-runtime",
      ],
    },
    production: {
      "extraBabelPlugins": [
        "transform-runtime"
      ]
    }
  },
  watchDelay: 2000,
  extraPostCSSPlugins: [
    pxtorem({
      rootValue: 100,
      propWhiteList: [],
    }),
  ],
  svgSpriteLoaderDirs: svgSpriteDirs,
  proxy: {
    "/api": {
      target: "http://jsonplaceholder.typicode.com/",
      changeOrigin: true,
      pathRewrite: { "^/api" : "" }
    }
  }
  //...
}
