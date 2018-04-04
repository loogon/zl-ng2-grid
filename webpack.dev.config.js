var path = require('path');
var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var DefinePlugin = require('webpack/lib/DefinePlugin');
var ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
var webpackCommonConfig = require('./webpack.config.common');

module.exports = webpackMerge(webpackCommonConfig, {
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: 'http://localhost:9999/'
    },

    devtool: 'cheap-module-eval-source-map',

    devServer: {
        historyApiFallback: true,
        inline: true,
        port: 9999
    },

    plugins: [
        new DefinePlugin({
            'ENV': '"dev"'
        }),
        new ExtractTextWebpackPlugin('css/[name].css'),
    ]
});