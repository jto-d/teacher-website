const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
  entry: {
    calendar: './src/calendar.js',
    admin: './src/admin.js',
    login: './src/login.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist', 'js'),
    publicPath: '/',
    filename: '[name].bundle.js',
    chunkFilename: '[id].bundle_[chunkhash].js',
    sourceMapFilename: '[file].map'
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          format: {
            comments: false,
          },
        },
        extractComments: false,
      }),
    ],
  },
  experiments: {
    topLevelAwait: true,
  },
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     filename: 'calendar.html',
  //     template: 'src/calendar.html',
  //     chunks: ['calendar']
  //   }),
  //   new HtmlWebpackPlugin({
  //     filename: 'admin.html',
  //     template: 'src/admin.html',
  //     chunks: ['admin']
  //   }),
  //   new HtmlWebpackPlugin({
  //       filename: 'login.html',
  //       template: 'src/login.html',
  //       chunks: ['login'],
  //     })
  // ]
  
};