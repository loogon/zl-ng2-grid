var path = require("path");

module.exports = {
    entry: {
        app: "./src/bootstrap.ts",
        //lib: [path.resolve(__dirname, "vendors.ts")]
    },

    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js",
        publicPath: "http://localhost:9999/"
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: "awesome-typescript-loader"
            }
        ]
    },

    resolve: {
        extensions: [".ts", ".js"]
    },

    devtool: "cheap-module-eval-source-map",

    devServer: {
        historyApiFallback: true,
        inline: true,
        port: 9999
    },

    plugins: [

    ]
};