let path = require('path');
let webpack = require('webpack');
let webpackMerge = require('webpack-merge');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let CleanWebpackPlugin = require('clean-webpack-plugin');


let pagesConfig = require('./pages.config');

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
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({filename: '[name].css', disable: false, allChunks: true}),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest'],
      minChunks: function (module) {
        // this assumes your vendor imports exist in the node_modules directory
        return module.context && module.context.indexOf('node_modules') !== -1;
      }
    }),
    new CleanWebpackPlugin(['es', 'umd'], {
      root: path.resolve(__dirname, '../../'),
      verbose: true,
      dry: false,
      exclude: ['shared.js']
    })
  ]

};

let es = {
  output: {
    path: path.resolve(__dirname, '../../es')
  }
};

let umd = {
  output: {
    path: path.resolve(__dirname, '../../umd'),
    libraryTarget: 'umd'
  }
};

let targets = [es, umd].map((target) => {
  return webpackMerge(baseConfig, target)
});

targets.unshift(pagesConfig);

module.exports = targets;