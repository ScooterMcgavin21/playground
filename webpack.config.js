const path = require("path");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")
module.exports = {
  mode: 'development',
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  devtool: 'source-map',

  plugins: [new NodePolyfillPlugin()]

  
};
