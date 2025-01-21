const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,  
  configureWebpack: {
    devtool: "source-map"
  },
  devServer: {  
    port: 8080,
    // proxy: {
    //   '/api': {
    //     target: 'http://localhost:8081',
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '^/api': ''
    //     }
    //   }
  } 
})


// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })
 
// const debug = process.env.NODE_ENV !== 'production'
 
// module.exports = {
//   lintOnSave: false, // 修改成false 就是不检查了
 
//   productionSourceMap: false,
//   //devtool: "cheap-module-source-map",
//   //"devtool": "source-map",
//   configureWebpack: config => {
//     //console.log(workspaceFolder)
//     if (debug) { // 开发环境配置
//       config.devtool = 'source-map'
//     }
//   },
// }
