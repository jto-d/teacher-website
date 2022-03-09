const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    calendar: './src/js/calendar.js',
    admin: './src/js/admin.js',
    login: './src/js/login.js'
  },
  output: {
    path: path.resolve(__dirname, 'build', 'target'),
    publicPath: '/',
    filename: '[name].bundle.js',
    chunkFilename: '[id].bundle_[chunkhash].js',
    sourceMapFilename: '[file].map'
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'calendar.html',
      template: 'src/calendar.html',
      chunks: ['calendar']
    }),
    new HtmlWebpackPlugin({
      filename: 'admin.html',
      template: 'src/admin.html',
      chunks: ['admin']
    }),
    new HtmlWebpackPlugin({
        filename: 'login.html',
        template: 'src/login.html',
        chunks: ['login']
      })
  ]
  
};