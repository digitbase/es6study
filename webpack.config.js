const path = require("path");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const HtmlWebpackPlugin = require("_html-webpack-plugin@4.3.0@html-webpack-plugin");
const webpack = require("webpack");
const requireDirectory = require("require-directory");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
    .BundleAnalyzerPlugin;

const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
    optimization: {
        minimizer: [
            new TerserPlugin({
                cache: true,
                parallel: true,
                terserOptions: {
                    compress: {
                        unused: true,
                        drop_debugger: true,
                        drop_console: true,
                        dead_code: true
                    }
                }
            })
        ]
    },
    resolve: {
        extensions: [".jsx", ".js", ".json", ".wasm"],
    },
    entry: path.resolve(__dirname, "src/index.jsx"),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
    },
    // devServer: {
    //     port: 3000,
    //     progress: true,
    //     publicPath: "/dist",
    //     //openPage: "./dist/index.html",
    //     //contentBase: "./dist",
    // },
    module: {
        rules: [{
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.jsx?/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        babelrc: false,
                        presets: ["@babel/preset-env", "@babel/preset-react"],
                        cacheDirectory: false,
                    },
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src/index.html"),
            filename: "index.html",
        }),
        new webpack.HotModuleReplacementPlugin(),
        new BundleAnalyzerPlugin(),
    ],

    devServer: {
        hot: true,
    },
};