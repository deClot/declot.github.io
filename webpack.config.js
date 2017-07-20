'use strict';

let HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: __dirname + '/frontend',
    entry: './main',
    output: {
        path: __dirname + '/public',
        filename: 'main.js'
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + '/frontend/index.pug'
        })
    ],

    resolve: {
        modules: ['node_modules'],
        extensions: ['*', '.js', '.styl', '.pug']
    },

    resolveLoader: {
        modules: ['node_modules'],
        moduleExtensions: ['*-loader', '*'],
        extensions: ['*', '.js']
    },

    module: {

        loaders: [{
            test:   /\.css$/,
            loader: 'style!css!autoprefixer?browsers=last 2 versions'
        }, {
            test:   /\.styl$/,
            loader: 'style-loader!css-loader!stylus-loader?resolve url'
        }, {
            test: /\.pug$/,
            loader: 'pug-loader'
        }, {
            test: /\.(png|ipg|svg|ttf|eot|woff|woff2)$/,
            loader: 'file-loader?name=[path][name].[ext]'
        }]
    },

    watch: true,

    watchOptions: {
        aggregateTimeout: 100
    }
};
