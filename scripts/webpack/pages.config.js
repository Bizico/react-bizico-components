var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

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
    publicPath: '/react-bizico-components'
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
        test: /\.(scss|css)$/,
        include: [
          srcDir,
          demoDir,
          /node_modules/
        ],
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                sourceMap: true,
                importLoaders: 1,
                localIdentName: '[local]'
              }
            }, 'sass-loader'
          ],
          fallback: 'style-loader'
        })
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000'
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin(['docs'], {
      root: path.resolve(__dirname, '../../'),
      verbose: true,
      dry: false,
      exclude: ['404.html']
    }),
    new ExtractTextPlugin({allChunks: false, filename: 'styles.css'}),

    new HtmlWebpackPlugin({inject: 'body', template: path.resolve(demoDir, 'src/index.html')}),
  ],
};


module.exports = config;