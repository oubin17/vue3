export const devServer = {
  // host: "127.0.0.1",
  // port: 80,
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
      target: "http://127.0.0.1:80", //跨域地址
      changeOrigin: true, //支持跨域
      rewrite: (path) => path.replace(/^\/api/, '') //重写路径
    }
  }
};