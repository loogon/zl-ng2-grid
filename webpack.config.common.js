var path = require('path');
var webpack = require('webpack');
var DefinePlugin = require('webpack/lib/DefinePlugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        polyfills: './src/polyfills.ts',
        app: './src/bootstrap.ts',
        lib: [path.resolve(__dirname, 'src', 'vendors.ts')]
    },

    module: {
        rules: [{
                test: /\.ts$/,
                loader: [
                    'awesome-typescript-loader',
                    'angular2-template-loader'
                ]
            },
            {
                test: /\.html$/,
                loader: 'html-loader',
                include: path.join(__dirname, 'src/app')
            },
            {
                test: /\.css$/,
                exclude: [path.join(__dirname, 'src/app'), path.join(__dirname, 'src/wd-grid')],
                loader: ExtractTextWebpackPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                })
            },
            {
                test: /\.css$/,
                include: path.join(__dirname, 'src/app'),
                loader: 'raw-loader'
            }
        ]
    },

    resolve: {
        extensions: ['.ts', '.js']
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'zl-ng2-grid test',
            template: 'src/index.html'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: ['polyfills', 'lib', 'app']
        })
    ]
};