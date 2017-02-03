var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

let demoDir = path.resolve(__dirname, '../../demo');
let srcDir = path.resolve(__dirname, '../../src');

let config = {
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    path.resolve(demoDir, 'src/index.js'),
  ],
  output: {
    path: path.resolve(demoDir, 'dist/'),
    filename: '[hash].[name].js',
    // filename: 'bundle.js',
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

  devtool: 'inline-source-map',

  context: path.resolve(demoDir, 'src'),
  devServer: {
    hot: true,
    // enable HMR on the server

    contentBase: path.resolve(demoDir, 'dist/'),
    // match the output path

    publicPath: '/'
    // match the output `publicPath`
  },

  plugins: [
    new HtmlWebpackPlugin({inject: 'body', template: path.resolve(demoDir, 'src/index.html')}),

    new webpack.HotModuleReplacementPlugin(),
    // enable HMR globally

    new webpack.NamedModulesPlugin(),
    // prints more readable module names in the browser console on HMR updates

  ],
};


module.exports = config;