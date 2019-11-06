const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: path.resolve(__dirname, '../src/index.js'),
    mode: 'production',
    devServer: {
        contentBase: path.resolve(__dirname, '../dist'),
        hot: true,
        historyApiFallback: true,
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: [
                    { loader: 'react-hot-loader/webpack' },
                    { loader: 'babel-loader' },
                ],
                exclude: /node_modules/,
            },
            {
                enforce: 'pre',
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'eslint-loader',
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader',
                ],
            },
            {
                test: [/\.sass$/, /\.scss$/],
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    { loader: 'sass-loader' },
                ],
            },
        ],
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'bundle.js',
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../src/public/', 'index.html'),
            filename: 'index.html',
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.ProvidePlugin({
            _: 'lodash',
            React: 'react',
            ReactDOM: 'react-dom',
        }),
    ],
};
