var path = require('path');
var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var DefinePlugin = require('webpack/lib/DefinePlugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
var webpackCommonConfig = require('./webpack.config.common');

module.exports = webpackMerge(webpackCommonConfig, {
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[hash].js',
        publicPath: '/'
    },

    devtool: 'cheap-module-source-map',

    plugins: [
        new CleanWebpackPlugin(['dist']),
        new DefinePlugin({
            'ENV': '"prod"'
        }),
        new ExtractTextWebpackPlugin('css/[name].[hash].css'),
        new webpack.optimize.UglifyJsPlugin({
            comments: false,
            compress: {
                warnings: false
            }
        })
    ]
});