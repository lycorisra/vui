var path = require('path')
var webpack = require('webpack')
var config = require('../config')
var utils = require('./utils')
var entry = require('../src/entry')
var main = entry[utils.getArgv('-c')] || './demos/index.js';

var extractTextPlugin = require("extract-text-webpack-plugin")

var projectRoot = path.resolve(__dirname, '../')

var env = process.env.NODE_ENV

var rootPath = process.env.NODE_PATH || path.join(__dirname, 'node_modules');

module.exports = {
    entry: {
        app: main
    },
    output: {
        path: config.build.assetsRoot,
        publicPath: process.env.NODE_ENV === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath,
        filename: '[name].js'
    },
    /*externals: {
        vue: {
            root: 'Vue',
            commonjs: 'vue',
            commonjs2: 'vue',
            amd: 'vue'
        }
    },*/
    resolve: {
        extensions: ['.js', '.vue'],
        modules: [rootPath, path.join(__dirname, '../node_modules'), "node_modules"],
        // fallback: [path.join(__dirname, '../node_modules')],
        alias: {
            'vue$': 'vue/dist/vue.common.js',
            'demos': path.resolve(__dirname, '../demos'),
            'src': path.resolve(__dirname, '../src'),
            'assets': path.resolve(__dirname, '../src/assets'),
            'components': path.resolve(__dirname, '../src/components')
        }
    },
    resolveLoader: {
        // fallback: [path.join(__dirname, '../node_modules')],
        /*modules: [rootPath],*/
        modules: [rootPath, "node_modules"]
    },
    module: {
        loaders: [{
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                /*loader: 'style-loader!css-loader'*/
                loader: extractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })
            },
            {
                test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                loader: 'url-loader?limit=50000&name=[path][name].[ext]'
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                query: {
                    name: '[name].[ext]?[hash]'
                }
            },
            {
                test: /\.json/,
                loader: 'json-loader'
            },
            {
                test: /\.md/,
                loader: 'vue-markdown-loader!vue-loader'
            }
        ]
    },
    // devtool: '#eval-source-map',
    /*devServer: {
        historyApiFallback: true,
        noInfo: true
    },*/
    plugins: [
        new webpack.LoaderOptionsPlugin({
            options: {
                /*vue: {
                    css: extractTextPlugin.extract({ fallback: 'vue-style-loader', use: 'css-loader' })
                }*/
            }
        }),
        new extractTextPlugin({ filename: 'vui.css', disable: false, allChunks: true })
    ]
}