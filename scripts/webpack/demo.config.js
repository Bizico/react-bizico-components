const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const demoDir = path.resolve(__dirname, '../../demo');
const demoSrc = path.resolve(demoDir, 'src');
const demoDist = path.resolve(demoDir, 'dist');
const srcDir = path.resolve(__dirname, '../../src');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './index.js',
  ],
  output: {
    filename: '[hash].[name].js',
    path: demoDist,
    publicPath: '/'
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
        test: /\.scss|css$/,
        include: [
          srcDir
        ],
        exclude: [
          demoDir
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
        test: /\.scss|css$/,
        include: [
          demoDir,
          /node_modules/
        ],
        exclude: [
          srcDir
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
      }
    ]
  },

  devtool: 'inline-source-map',
  context: demoSrc,
  devServer: {
    contentBase: demoDist,
    historyApiFallback: true,
    hot: true,
    publicPath: '/',
    inline: true,
    watchOptions: {
      ignored: /node_modules/,
      aggregateTimeout: 300,
      poll: 300
    }
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),

    new ExtractTextPlugin({allChunks: false, filename: 'styles.css'}),
    new HtmlWebpackPlugin({inject: 'body', template: path.resolve(demoDir, 'src/index.html')}),
  ],
};
