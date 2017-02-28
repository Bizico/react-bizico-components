const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const demoDir = path.resolve(__dirname, '../../demo');
const demoSrc = path.resolve(demoDir, 'src');
const demoDist = path.resolve(demoDir, 'dist');
const srcDir = path.resolve(__dirname, '../../src');

module.exports = function () {
  return {
    entry: [
      './index.js',
    ],
    output: {
      filename: '[hash].[name].js',
      path: demoDist,
      publicPath: '/'
    },
    context: demoSrc,
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
          test: /\.json$/,
          loader: 'json-loader'
        },
        {
          test: /\.(jpg|png|gif)$/,
          loader: 'file-loader'
        },
        {
          test: /\.(png|woff|woff2|eot|ttf|svg)$/,
          use: {
            loader: 'url-loader',
            options: {
              limit: 100000
            }
          }
        }
      ]
    },
    plugins: [
      new ExtractTextPlugin({allChunks: false, filename: 'styles.css'}),
      new HtmlWebpackPlugin({inject: 'body', template: path.resolve(demoDir, 'src/index.html')}),
    ],
  }
};
