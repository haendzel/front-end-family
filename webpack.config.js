const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js?$/,
        loader: 'standard-loader',
        exclude: /(node_modules|bower_components)/,
        options: {
          parser: 'babel-eslint'
        }
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.pcss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
            loader: 'postcss-loader'
          }]
        })
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
            loader: 'css-loader'
          }]
        })
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [{
          loader: 'file-loader'
        }]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'index.html')
    }),
  ],
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    historyApiFallback: true
  }
}
