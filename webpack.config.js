
const webpack = require('webpack');
const path = require("path");
const dotenv = require("dotenv");

const env = dotenv.config().parsed;

let envVars;
if (env) {
    envVars = Object.keys(env).reduce((prev, next) => {
        prev[`process.env.${next}`] = JSON.stringify(env[next]);
        return prev;
    }, {});
}

const plugins = env ? [new webpack.DefinePlugin(envVars)] : [];

module.exports = {
    entry: {
        app: path.resolve(__dirname, "./") + "/src/App.tsx"
    },
    output: {
        filename: "./javascript/webpack.bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader"
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            },
        ]
    },
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        modules: ["node_modules", path.resolve(__dirname, "./src")],
      },
    mode: "development",
    plugins,
};