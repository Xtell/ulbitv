import webpack from "webpack";
import {BuildOptions, BuildPaths} from "./types/config";
import path from "path";

export const buildResolvers = (options: BuildOptions): webpack.ResolveOptions => {

  return {
    alias: options.aliases,
    extensions: [ '.tsx', '.ts', '.js' ],
    modules: [options.paths.src, "node_modules"]
  }
}