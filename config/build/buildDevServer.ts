import { Configuration as DevServerConfiguration } from "webpack-dev-server"
import { BuildOptions } from "./types/config";

export const buildDevServer = (options: BuildOptions): DevServerConfiguration => {
  const { paths, port } = options
  return {
    static: {
      directory: paths.watch
    },
    open: true,
    port
  }
}