import webpack from "webpack";
import { BuildOptions } from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
export const buildLoaders = (options: BuildOptions): webpack.RuleSetRule[] => {
  const { isDev } = options
  const tsLoader = {
    test: /\.tsx?$/,
    loader: 'ts-loader',
    options: {
      appendTsSuffixTo: [/\.vue$/],
    },
    exclude: /node_modules/,
  }

  const vueLoader = {
      test: /\.vue$/,
      loader: 'vue-loader'
  }
  const cssLoader = {
    test: /\.pcss$/i,
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: (resourcePath: string) => Boolean(resourcePath.includes(".module")),
            localIdentName: isDev ? "[local]--[hash:base64:5]" : "[hash:base64:5]",
          },
          importLoaders: 1,
        },
      },
      "postcss-loader" ],
  }

  return [ tsLoader, vueLoader, cssLoader ]
}