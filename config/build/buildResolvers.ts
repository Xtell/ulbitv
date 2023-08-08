import webpack from "webpack";
import {BuildOptions, BuildPaths} from "./types/config";

export const buildResolvers = (options: BuildOptions): webpack.ResolveOptions => {

  return {
    extensions: [ '.tsx', '.ts', '.js' ],
      modules: [options.paths.src, "node_modules"]
  }
}