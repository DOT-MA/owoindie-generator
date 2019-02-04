
const webpack = require('webpack');
const path = require("path");
const dotenv = require("dotenv");

const env = dotenv.config().parsed ? dotenv.config().parsed : {
    REACT_APP_DISCORD_WEBHOOK: env.REACT_APP_IMAGUR_ID,
    REACT_APP_IMAGUR_ID: env.REACT_APP_IMAGUR_ID,
};

const envVars = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next]);
    return prev;
}, {});

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
    plugins: [
        new webpack.DefinePlugin(envVars)
    ]
};