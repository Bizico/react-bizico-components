var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

let demoDir = path.resolve(__dirname, '../../demo');
let srcDir = path.resolve(__dirname, '../../src');

let config = {
  entry: [
    path.resolve(demoDir, 'src/index.js'),
  ],
  output: {
    path:  path.resolve(__dirname, '../../docs'),
    filename: '[hash].[name].js',
    publicPath: ''
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          srcDir,
          path.resolve(demoDir, 'src')
        ],
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss/,
        include: [
          srcDir,
          path.resolve(demoDir, 'src')
        ],
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.css$/,
        include: [
          srcDir
        ],
        loaders: ['style-loader', 'css-loader', 'postcss-loader']
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin(['docs/*'], {
      root: path.resolve(__dirname, '../../'),
      verbose: true,
      dry: false
    }),
    new HtmlWebpackPlugin({inject: 'body', template: path.resolve(demoDir, 'src/index.html')}),
  ],
};


module.exports = config;