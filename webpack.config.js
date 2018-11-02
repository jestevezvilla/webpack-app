const webpack = require('webpack');
const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const pkg = require('./package');

const config = {
  entry: ['whatwg-fetch', '@babel/polyfill', './src/index.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: `assets/js/${pkg.name}${pkg.version}.js`,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              camelCase: true,
              importLoaders: 1,
              localIdentName: '[name]__[local]___[hash:base64:5]',
              modules: true,
            },
          },
          'postcss-loader',
        ],
      },
      {
        test: /\.font\.js/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'webfonts-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    contentBase: './dist',
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': "jquery'",
      'window.$': 'jquery',
    }),
    new MiniCssExtractPlugin({
      filename: `assets/css/${pkg.name}${pkg.version}.css`,
    }),
  ],
};

module.exports = config;
