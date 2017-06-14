'use strict';

const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OfflinePlugin = require('offline-plugin');

module.exports =  {
    context: __dirname + '/frontend',

    entry: "./contacts",
    output: {
        path: __dirname + '/docs',
        filename: "app.js",
        library: "contacts"
    },

    devtool: "eval",

    module: {
        loaders: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            {
                test: /\.png$/,
                loader: "url-loader?limit=100000"
            },
            {
                test: /\.jpg$/,
                loader: "file-loader"
            },
            {
                test: /\.(woff2?|eot|svg|ttf)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: [
                  {
                    loader: 'url-loader',
                    options: {
                      limit: 50000,
                      mimetype: 'application/font-woff',
                      name: 'assets/fonts/[hash].[ext]'
                    }
                  }
                ]
            },
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + '/frontend/index.html',
            filename: 'index.html',
        }),
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV),
            LANG: JSON.stringify('ru')
        }),
        new ExtractTextPlugin('bundle.css'),
        new OfflinePlugin({
            autoUpdate: true,
            responseStrategy: 'network-first'
        })
    ]
};