export type BuildMode = "production" | "development"

export interface BuildPaths  {
  entry: string,
  html: string,
  build: string,
}
export interface BuildOptions {
  mode: BuildMode,
  paths: BuildPaths
}