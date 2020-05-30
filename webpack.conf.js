var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry:'./http-proxy/index.js',
  output:{
    path:__dirname,
    filename:'build.js'
  },
  devServer: {
    inline: true,
    port: 8181,
    proxy: {
      '/': {
        target: 'http://127.0.0.1:8001',
        changeOrigin: true
      }
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './http-proxy/index.html',
      filename: 'index.html'
    })
  ]
}