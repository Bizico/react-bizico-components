const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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

    new HtmlWebpackPlugin({inject: 'body', template: path.resolve(demoDir, 'src/index.html')}),
  ],
};
