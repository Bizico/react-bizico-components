var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

const demoDir = path.resolve(__dirname, '../../demo');
const demoSrc = path.resolve(demoDir, 'src');
const demoDist = path.resolve(demoDir, 'dist');
const srcDir = path.resolve(__dirname, '../../src');

let config = {
  context: demoSrc,
  entry: [
    './index.js',
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
          demoSrc
        ],
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss/,
        include: [
          srcDir,
          demoSrc
        ],
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.css$/,
        include: [
          srcDir,
          /node_modules/
        ],
        loaders: ['style-loader', 'css-loader']
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