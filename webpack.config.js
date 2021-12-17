const path = require("path");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
const Dotenv = require('dotenv-webpack');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { loader } = require("mini-css-extract-plugin");

plugins = [
  new NodePolyfillPlugin(),
  new Dotenv(),
  new MiniCssExtractPlugin(),
];

let mode = 'development'
if (process.env.NODE_ENV === 'production') {
  mode = 'production';
}

module.exports = {
  mode: mode,
  // entry: "./src/index.js",
  // output: {
  //   //filename: "main.js",
  //   path: path.resolve(__dirname, "dist"),
  // },
  devtool: 'source-map',
  devServer: {
    static: './dist',
    hot: true
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
