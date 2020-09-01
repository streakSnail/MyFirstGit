/**
 * 项目中的相关配置
 */
let proxyObj = {
  '/api': {
    target: 'http://192.168.2.19:9009',
    ws: true,
    changOrigin: true,
    pathRewrite: {
        '^/api': '/'
    }
  },
}
module.exports = {
  devServer: {
    open: false,
    host: '0.0.0.0',
    port: 8080,
    https: false,
    hotOnly: false,
    proxy: proxyObj,
    disableHostCheck: true
  }
}