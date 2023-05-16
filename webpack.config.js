const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const HtmlMinimizerPlugin = require("html-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
module.exports = {
  entry: './src/index.js',
  mode:"production", 
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
      new HtmlMinimizerPlugin (),
      new TerserPlugin()
    ],
  },
  plugins: [new HtmlWebpackPlugin({
    template:"./template.html",
    inject:"body",
    filename:"home.html"
  }),
  new HtmlWebpackPlugin({
    template:"./public/index.html",
    inject:"body",
    filename:"galary.html"
  }),
 new MiniCssExtractPlugin({filename:"home.css"})],
  module: {
    rules: [
      {
        test: /\.css$/i,
        // use: ["style-loader", "css-loader"],
       
        use: [ MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
         use: {loader:'file-loader' ,
         options:{
          name:"[name].[ext]",
          outputPath:"imgs"
         }}
  }
    ],
  },
  devServer: {
    compress: true,
    port: 9000,
  },
};