const path = require('path');
const webpack = require('webpack');

const demoSrc = path.resolve(__dirname, '../../demo/src');
const demoDist = path.resolve(__dirname, '../../demo/dist');
/*
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
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000'
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
*/

const baseConfig = require('./pages');
const webpackMerge = require('webpack-merge');


module.exports = function (env) {
  return webpackMerge({
    entry: [
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server'
    ],
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
    ]
  }, baseConfig())
};