const path = require("path");

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
                loader: "awesome-typescript-loader",
                exclude: [/node_modules/]
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader",
                exclude: [/node_modules/]
            },
        ]
    },
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        modules: ["node_modules", path.resolve(__dirname, "./src")],
      },
    mode: "development",
};