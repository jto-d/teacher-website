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
};
