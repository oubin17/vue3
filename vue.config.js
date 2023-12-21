module.exports = {
  devServer: {
    host: "127.0.0.1",
    port: 5190,
    proxy: {
      '/template': {
        target: 'http://127.0.0.1:8080',
        ws: true,
        changeOrigin: true, //允许跨域
        pathRewrite: {
          '^/template': '',
        }
      },
      '/api': {
        target: "http://gmall-h5-api.atguigu.cn", //跨域地址
        changeOrigin: true, //支持跨域
        rewrite: (path) => path.replace(/^\/api/, '')   //重写路径

      }
    }
  }
}


// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [vue()],
//   server: {
//     proxy: {

//       '/api': {
//         target: "http://gmall-h5-api.atguigu.cn", //跨域地址
//         changeOrigin: true, //支持跨域
//         rewrite: (path) => path.replace(/^\/api/, '')   //重写路径

//       },
//       '/template': {
//         target: 'http://localhost:8080',
//         ws: true,
//         changeOrigin: true, //允许跨域
//         pathRewrite: {
//           '^/template': '',
//         }
//       }
//     }
//   }
// })