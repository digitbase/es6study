const path = require("path");

module.exports = {
    entry: "./app.js",
    output: {
        path: path.join(__dirname, "dist"),
        filename: "bundle.js",
    },
    devServer: {
        port: 3000,
        publicPath: "/dist",
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                "style-loader",
                'css-loader'
            ]
        }]
    },
};