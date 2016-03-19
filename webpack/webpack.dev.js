'use strict';

const HtmlWebpack = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const ChunkWebpack = webpack.optimize.CommonsChunkPlugin;

module.exports = {
    debug: true,
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        open: true
    },
    devtool: 'source-map',
    entry: {
        app: ['./src/app/scripts/bootstrap'],
        vendor: ['./src/app/scripts/vendor']
    },
    module: {
        loaders: [
            { loader: 'raw!sass', test: /.scss$/ },
            { loader: 'raw', test: /.html$/ },
            { exclude: /node_modules/, loader: 'ts', test: /.ts$/ }
        ]
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, '../dist')
    },
    plugins: [
        new ChunkWebpack({
            filename: 'vendor.bundle.js',
            minChunks: Infinity,
            name: 'vendor'
        }),
        new HtmlWebpack({
            filename: 'index.html',
            inject: 'body',
            template: './src/app/index.html'
        })
    ],
    resolve: {
        extensions: [ '', '.js', '.ts' ]
    }
};