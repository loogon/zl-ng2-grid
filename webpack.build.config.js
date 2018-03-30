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

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[hash].js',
        publicPath: '/'
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
                include: path.join(__dirname, 'src')
            },
            {
                include: path.join(__dirname, 'node_modules/font-awesome/fonts'),
                loader: 'file-loader?name=fonts/[name].[ext]'
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
                include: path.join(__dirname, 'src'),
                loader: 'raw-loader'
            }
        ]
    },

    resolve: {
        extensions: ['.ts', '.js']
    },

    devtool: 'cheap-module-source-map',

    devServer: {
        historyApiFallback: true,
        inline: true,
        port: 9999
    },

    plugins: [
        new CleanWebpackPlugin(['dist']),
        new DefinePlugin({
            'ENV': '"prod"'
        }),
        new HtmlWebpackPlugin({
            title: 'zl-ng2-grid test',
            template: 'src/index.html'
        }),
        new ExtractTextWebpackPlugin('css/[name].[hash].css'),
        new webpack.optimize.UglifyJsPlugin({
            comments: false,
            compress: {
                warnings: false
            }
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'lib', 'polyfills']
        })
    ]
};