import webpack from "webpack";
import HTMLWebpackPlugin from "html-webpack-plugin";
import { BuildOptions } from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export const buildPlugins = ({ paths }: BuildOptions): webpack.WebpackPluginInstance[] => {

  return [
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin(),
    new HTMLWebpackPlugin({
      template: paths.html
    })
  ]
}