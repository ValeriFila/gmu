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
        path: path.resolve(__dirname, 'docs'),
        // Имя файла со сборкой:
        filename: 'bundle.js',
        assetModuleFilename: 'images/[name][ext]'
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
                    MiniCssExtractPlugin.loader, 'css-loader'
                ],

            },
            {
                test:/\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource',
            }
        ]
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'docs'),
        },
        compress: true,
        port: 9000,
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        preferAbsolute: true,
        modules: [path.resolve(__dirname, 'src'), 'node_modules']
    }
}
