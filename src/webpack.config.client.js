const CopyWebPackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: {
    client: './client/index.js'
  },
  devtool: 'inline-source-map',
  target: 'web',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(css)$/,
        exclude: /node_modules/,
        use: {
          loader: 'css-loader'
        }
      }
    ]
  },
  plugins: [
    new CopyWebPackPlugin([
      { from: 'public', to: '', ignore: '*.html' }
    ])
  ]
}