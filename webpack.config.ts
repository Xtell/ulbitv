import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import { BuildEnv, BuildPaths } from "./config/build/types/config";
import path from "path";

const paths: BuildPaths = {
  entry: path.resolve(__dirname, "src", "index.ts"),
  html: path.resolve(__dirname, "src", "index.html"),
  build: path.resolve(__dirname, "build"),
  watch: path.resolve(__dirname, "src")
}

const config = (env: BuildEnv) => {
  const { mode = "development", port = 9000 }: BuildEnv = env
  const isDev = mode === "development"
  return buildWebpackConfig({
    mode,
    paths,
    port,
    isDev
  })
}

export default config