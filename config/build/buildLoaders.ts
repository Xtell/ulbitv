import webpack from "webpack";
import { BuildOptions } from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
export const buildLoaders = (options: BuildOptions): webpack.RuleSetRule[] => {
  const { isDev } = options
  const tsLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
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
          },
          importLoaders: 1,
        },
      },
      "postcss-loader" ],
  }
  return [ tsLoader, cssLoader ]
}