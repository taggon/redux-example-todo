var path = require('path');
var webpack = require('webpack');

var output = {
  path: path.join(__dirname, 'dist'),
  publicPath: '/dist/'
}

var commonLoaders = [
  { test: /\.jsx?$/, loader: 'babel', exclude: /node_modules/ },
  { test: /\.css$/,  loader: 'style!raw' }
];

module.exports = [
  {
    name: 'browser',
    entry: './src/index.js',
    output: Object.assign({}, output, {filename: 'bundle.js'}),
    module: {
      loaders: commonLoaders
    },
    plugins: [
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin()
    ],
    devtool: 'cheap-module-eval-source-map',
  },
  {
    name: 'server',
    entry: './src/page.js',
    target: 'node',
    output: Object.assign({}, output, {filename: 'page.js', libraryTarget: 'commonjs2'}),
    module: {
      loaders: commonLoaders
    }
  }
];
