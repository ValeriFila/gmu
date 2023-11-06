// path — встроенный в Node.js модуль
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {ProgressPlugin} = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// import HtmlWebpackPlugin from 'html-webpack-plugin';
// import { ProgressPlugin } from 'webpack';
// import path from 'path';

module.exports = {
    // Указываем путь до входной точки:
    entry: path.resolve(__dirname, 'src', 'index.js'),
    // Описываем, куда следует поместить результат работы:
    output: {
        clean: true,
        // Путь до директории (важно использовать path.resolve):
        path: path.resolve(__dirname, 'dist'),
        // Имя файла со сборкой:
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'index.html'),
        }),
        new ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        })
    ],
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[path][name]__[local]--[hash:base64:8]'
                            },
                        },
                    },
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        preferAbsolute: true,
        modules: [path.resolve(__dirname, 'src'), 'node_modules']
    }
}
