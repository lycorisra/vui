var path = require('path')
var webpack = require('webpack')
var extractTextPlugin = require("extract-text-webpack-plugin");

var rootPath = process.env.NODE_PATH || path.join(__dirname, 'node_modules');

module.exports = {
    entry: {
        bundle: './index.js',
        // vender: ['vue', 'vue-router']
    },
    output: {
        path: path.resolve('../../../dist/select/'),
        publicPath: '/dist',
        filename: 'vue-ui.js'
            // filename: 'todo.js'
    },
    externals: {
        vue: {
            root: 'Vue',
            commonjs: 'vue',
            commonjs2: 'vue',
            amd: 'vue'
        }
    },
    resolve: {
        root: [
            rootPath
        ],
        extensions: ['', '.js', '.vue'],
        alias: {
            examples: path.join(__dirname, './src/examples/')
        }
    },
    resolveLoader: {
        root: rootPath
    },
    module: {
        loaders: [{
                test: /\.vue$/,
                loader: 'vue'
            },
            {
                test: /\.js$/,
                loader: 'babel'
            },
            {
                test: /\.css$/,
                // use: ExtractTextPlugin.extract({
                // 	fallback: "style-loader",
                // 	use: "css-loader"
                // }),
                loader: extractTextPlugin.extract("style-loader", "css-loader")
            },
            {
                test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                loader: 'url-loader?limit=50000&name=[path][name].[ext]'
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file',
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
                loader: 'vue-markdown-loader!vue'
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
        noInfo: true
    },
    vue: {
        loaders: {
            css: extractTextPlugin.extract('vue-style-loader', 'css-loader')
        }
    },
    // devtool: '#eval-source-map',
    plugins: [
        // new webpack.BannerPlugin('This file is created by zhaoda'),
        // new webpack.optimize.CommonsChunkPlugin('vender', 'vender.js'),
        new extractTextPlugin("[name].css", { allChunks: true })
        // new webpack.optimize.UglifyJsPlugin({
        // 	compress: {
        // 		warnings: false
        // 	}
        // })
    ]
}

// 生产环境，运行npm run build 则执行到这里
if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map'
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ])
}