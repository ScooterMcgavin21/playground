const path = require("path");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

plugins = [
  new CleanWebpackPlugin(),
  new NodePolyfillPlugin(),
  new Dotenv(),
  new MiniCssExtractPlugin(),
  new HtmlWebpackPlugin({
    template: './src/index.html',
  }),
];

let mode = 'development'
if (process.env.NODE_ENV === 'production') {
  mode = 'production';
}

module.exports = {
  mode: mode,
  entry: "./src/index.js",
  output: {
    //filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  devtool: 'source-map',
  devServer: {
    static: './dist',
    hot: true,
    // proxy: {
    //   '/api': {
    //     target: 'http://localhost:3000',
    //     secure: false
    //   },
    // },
  },

  resolve: {
    extensions: ['.js', '.json', '.ts'],
  },

  module: {
    rules: [
      {   // supports sass aswell which im not using
        test: /\.(c[ac]|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader, 
          'css-loader', 
          'postcss-loader',
        ], 
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        },
      },
    ],
  },

  plugins: plugins

  
};
