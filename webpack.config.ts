import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import { BuildPaths } from "./config/build/types/config";
import path from "path";

const paths: BuildPaths = {
  entry: path.resolve(__dirname, "src", "index.ts"),
  html: path.resolve(__dirname, "src", "index.html"),
  build: path.resolve(__dirname, "build")
}

const config = buildWebpackConfig({
  mode: "development",
  paths
})

export default config