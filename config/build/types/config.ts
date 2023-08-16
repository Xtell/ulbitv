import webpack from "webpack";
export type BuildMode = "production" | "development"

export interface BuildPaths {
    entry: string,
    html: string,
    build: string,
    watch: string,
    src: string,
}

export interface BuildOptions {
    mode: BuildMode,
    paths: BuildPaths,
    port: number,
    isDev: boolean,
    aliases: webpack.ResolveOptions["alias"]
}

export interface BuildEnv {
    mode: BuildMode,
    port: number
}