var path = require('path');
var webpackMerge = require('webpack-merge');
var webpackCommonConfig = require('./webpack.config.common');
var DefinePlugin = require('webpack/lib/DefinePlugin');
var ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

module.exports = webpackMerge(webpackCommonConfig, {
    devtool: 'cheap-module-eval-source-map',

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: '/'
    },

    devServer: {
        historyApiFallback: true,
        inline: true,
        port: 9999
    },

    plugins: [
        new DefinePlugin({
            'ENV': 'dev'
        }),
        new ExtractTextWebpackPlugin('[name].css')
    ]
});