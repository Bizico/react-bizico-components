/*
  This is production only.
 */

let path = require('path');
let webpack = require('webpack');
let webpackMerge = require('webpack-merge');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = function (env) {
  let srcDir = path.resolve(__dirname, '../../src');

  let baseConfig = {
    entry: {
      'b-components': './src/index.js'
    },
    output: {
      path: path.resolve(__dirname, '../../dist'),
      filename: '[name].bundle.js',
      library: 'bComponents'
    },
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.js$/,
          include: [
            srcDir
          ],
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        {
          test: /\.(scss|css)$/,
          include: [
            srcDir,
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
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('production')
        }
      }),
      new ExtractTextPlugin({filename: '[name].css', disable: false, allChunks: true}),
      new webpack.optimize.CommonsChunkPlugin({
        names: ['vendor', 'manifest'],
        minChunks: function (module) {
          // this assumes your vendor imports exist in the node_modules directory
          return module.context && module.context.indexOf('node_modules') !== -1;
        }
      }),
      new webpack.optimize.UglifyJsPlugin({
        sourceMap: true,
        mangle: {
          screw_ie8: true,
          keep_fnames: true
        },
        compress: {
          screw_ie8: true
        },
        comments: false
      })
    ]
  };

  let es = {
    output: {
      path: path.resolve(__dirname, '../../es')
    }, plugins: [
      new CleanWebpackPlugin(['es'], {
        root: path.resolve(__dirname, '../../'),
        verbose: true,
        dry: false
      })
    ]
  };

  let umd = {
    output: {
      path: path.resolve(__dirname, '../../umd'),
      libraryTarget: 'umd'
    }, plugins: [
      new CleanWebpackPlugin(['umd'], {
        root: path.resolve(__dirname, '../../'),
        verbose: true,
        dry: false
      })
    ]
  };

  return [es, umd].map((target) => {
    return webpackMerge(baseConfig, target)
  });
};
