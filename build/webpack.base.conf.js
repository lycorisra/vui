var path = require('path')
var webpack = require('webpack')
var config = require('../config')
var utils = require('./utils')
var entry = require('../src/entry')
var main = entry[utils.getArgv('-c')] || './demos/index.js';

var extractTextPlugin = require("extract-text-webpack-plugin")

var projectRoot = path.resolve(__dirname, '../')

var env = process.env.NODE_ENV

var rootPath = process.env.NODE_PATH.replace(';','') || path.join(__dirname, 'node_modules');
// var rootPath = 'F:/webfrontend/nodejs/node_modules' || path.join(__dirname, 'node_modules');
console.log(process.env.NODE_PATH,'process.env.NODE_PATH');
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
        /* 注意：这句代码会报如下错误：
		ERROR in F:/webfrontend/nodejs/~/css-loader?sourceMap!F:/webfrontend/nodejs/~/vue-loader/lib/style-compiler?{"vue":true,"id":"data-v-739f9002","scoped":false,"h
		asInlineConfig":false}!F:/webfrontend/nodejs/~/vue-loader/lib/selector.js?type=styles&index=0!./src/components/select/src/select.vue
		Module build failed: TypeError: Path must be a string. Received undefined
			at assertPath (path.js:7:11)
			at Object.relative (path.js:538:5)
			at Object.<anonymous> (F:\webfrontend\nodejs\node_modules\css-loader\lib\loader.js:102:19)
			at Array.map (native)
			at Object.<anonymous> (F:\webfrontend\nodejs\node_modules\css-loader\lib\loader.js:99:31)
			at F:\webfrontend\nodejs\node_modules\css-loader\lib\processCss.js:201:3
		@ F:/webfrontend/nodejs/~/vue-loader/~/vue-style-loader!F:/webfrontend/nodejs/~/css-loader?sourceMap!F:/webfrontend/nodejs/~/vue-loader/lib/style-compiler?{"vu
		e":true,"id":"data-v-739f9002","scoped":false,"hasInlineConfig":false}!F:/webfrontend/nodejs/~/vue-loader/lib/selector.js?type=styles&index=0!./src/components/s
		elect/src/select.vue 4:14-354 13:3-17:5 14:22-362
		@ ./src/components/select/src/select.vue
		@ F:/webfrontend/nodejs/~/babel-loader/lib!F:/webfrontend/nodejs/~/vue-loader/lib/selector.js?type=script&index=0!./src/components/select/app.vue
		@ ./src/components/select/app.vue
		@ ./src/components/select/main.js
		@ multi ./build/dev-client ./src/components/select/main.js
		查看错误信息，发现是从css-loader模块中loader.js第101行抛出的异常，github上查找该原因，解决办法：
		配置如下（未验证）new LoaderOptionsPlugin({
						context: config.context
					})或注释如下代码
		参考链接：https://github.com/webpack-contrib/css-loader/issues/337
				 https://github.com/webpack-contrib/sass-loader/issues/285
				 
		*/
		// new webpack.LoaderOptionsPlugin({
		// 	options: {
        //         /*vue: {
        //             css: extractTextPlugin.extract({ fallback: 'vue-style-loader', use: 'css-loader' })
        //         }*/
		// 	}
		// }),
        new extractTextPlugin({ filename: 'vui.css', disable: false, allChunks: true })
    ]
}