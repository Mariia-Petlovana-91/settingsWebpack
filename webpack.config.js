const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

module.exports = {
  mode:"development",
  entry: './src/index.js',
  output:{
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.scss$/i,
        use: [MiniCssExtractPlugin.loader,"css-loader","sass-loader",],
      },
    ],
    },
  plugins: [ 
  new HtmlWebpackPlugin({
    template : "src/index.html"
  }),
    new MiniCssExtractPlugin({

    }),
],
  devServer: {
	static:'./',
	port: 8080,
  open:true,
    },
};