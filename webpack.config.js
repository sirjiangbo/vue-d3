'use strict';

const path = require('path');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.join(__dirname, './dist'),
		filename: 'vue-d3.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: ['babel-loader']
			},
			{
				test: /\.vue$/,
				use: ['vue-loader']
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.(woff|woff2|svg|eot|ttf)\??.*$/,
				use: ['file-loader']
			}
		]
	},
	watch: true
};