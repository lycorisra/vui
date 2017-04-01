var path = require('path')
var config = require('../config')
var utils = require('./utils')
var entry = require('../src/entry')
var main = entry[utils.getArgv('-c')] || './demos/index.js';

var extractTextPlugin = require("extract-text-webpack-plugin")

var projectRoot = path.resolve(__dirname, '../')

var env = process.env.NODE_ENV

var rootPath = 'F:/webfrontend/nodejs/node_modules' || path.join(__dirname, 'node_modules');

module.exports = {
	entry: {
		app: main
	},
	output: {
		path: config.build.assetsRoot,
		publicPath: process.env.NODE_ENV === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath,
		filename: '[name].js'
	},
    // externals: {
    //     vue: {
    //         root: 'Vue',
    //         commonjs: 'vue',
    //         commonjs2: 'vue',
    //         amd: 'vue'
    //     }
    // },
	resolve: {
		root: [
			rootPath
		],
		extensions: ['', '.js', '.vue'],
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
		root: rootPath
	},
	module: {
		loaders: [
			{
				test: /\.vue$/,
				loader: 'vue'
			},
			{
				test: /\.js$/,
				loader: 'babel'
			},
			{
				test: /\.css$/,
				loaders: ['style', 'css']
				// loader:  extractTextPlugin.extract("style-loader","css-loader")
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
	// eslint: {
	//   formatter: require('eslint-friendly-formatter')
	// },
	vue: {
		loaders: {
			css: extractTextPlugin.extract('vue-style-loader', 'css-loader')
		}
	},
	// devtool: '#eval-source-map',
	plugins: [
		// new webpack.BannerPlugin('This file is created by zhaoda'),
		// new webpack.optimize.CommonsChunkPlugin('vender', 'vender.js'),
		new extractTextPlugin("index.css", { allChunks: true }) 
		// new webpack.optimize.UglifyJsPlugin({
		// 	compress: {
		// 		warnings: false
		// 	}
		// })
	]
}
