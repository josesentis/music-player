var webpack = require("webpack");
var path = require("path");
var CopyWebpackPlugin = require("copy-webpack-plugin");
var ImageminPlugin = require("imagemin-webpack-plugin").default;

var BUILD_DIR = path.resolve(__dirname, "dist");
var APP_DIR = path.resolve(__dirname, "src/app");
var ASSETS_DIR = path.resolve(__dirname, "src/assets");

var config = {
    entry: APP_DIR + "/index.jsx",
    output: {
        path: BUILD_DIR + "/js",
        filename: "main.js"
    },
    module: {
        loaders: [
            {
                test: /\.jsx?/,
                include: APP_DIR,
                loader: "babel-loader"
            },
            {
                test: /\.json$/,
                include: APP_DIR,
                loader: "json-loader"
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: ASSETS_DIR + "/images", to: BUILD_DIR + "/images" },
            { from: ASSETS_DIR + "/audio", to: BUILD_DIR + "/audio" }
        ]),
        new ImageminPlugin({ test: BUILD_DIR + "/images/**" })
    ]
};

module.exports = config;
