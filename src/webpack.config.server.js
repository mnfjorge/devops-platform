const WebPackNodeExternals = require('webpack-node-externals')

module.exports = {
  entry: {
    server: './server/index.js'
  },
  devtool: 'inline-source-map',
  target: 'node',
  externals: [WebPackNodeExternals()],
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
  }
}