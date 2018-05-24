const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');

var commonConfig = {
  output: {
    path: path.resolve(__dirname + '/dist/'),
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        include: __dirname,
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin( {
      minimize : true,
      sourceMap : false,
      mangle: true,
      compress: {
        warnings: false
      }
    })
  ]
};

module.exports = [

  // Config 1: For browser environment
  merge(commonConfig, {
    entry: path.resolve(__dirname + '/src/plugin.js'),
    output: {
      filename: 'vue-emoji.min.js',
      libraryTarget: 'window',
      library: 'VueEmoji'
    }
  }),

  // Config 2: For Node-based development environments
  merge(commonConfig, {
    entry: path.resolve(__dirname + '/src/index.js'),
    output: {
      filename: 'vue-emoji.js',
      libraryTarget: 'umd',

      // These options are useful if the user wants to load the module with AMD
      library: 'vue-emoji',
      umdNamedDefine: true
    }
  })
];
