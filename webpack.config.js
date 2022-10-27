const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin');
const dotEnv = require('dotenv-webpack');
const path = require('path');
const paths = require('./paths');

const tsconfigFile = path.join(paths.root, 'tsconfig.json');

const getConfig = () => {
	/**
	 * @type {import('webpack').Configuration}
	 */
	const config = {
		entry: path.join(paths.src, 'index.tsx'),
		output: {
			path: paths.build,
			filename: 'static/js/[name].[contenthash:8].js',
			chunkFilename: 'static/js/[name].[contenthash:8].chunk.js',
			assetModuleFilename: 'static/media/[name].[hash][ext]',
			clean: true,
		},
		resolve: {
			plugins: [
				new TsconfigPathsPlugin({
					configFile: tsconfigFile,
				}),
			],
			extensions: ['.ts', '.tsx', '.js', '.jsx'],
		},
		externals: '/node_modules/',
		module: {
			rules: [
				{
					test: /\.tsx?$/,
					use: 'babel-loader',
					exclude: /node_modules/,
				},
				{
					test: /\.css$/,
					use: [
						{
							loader: MiniCssExtractPlugin.loader,
						},
						{
							loader: 'css-loader',
							options: {
								modules: {
									auto: /\.module.css$/,
									localIdentName: '[name]__[hash:base64]',
								},
							},
						},
					],
				},
			],
		},
		plugins: [
			new HtmlWebpackPlugin({
				template: path.join(paths.public, 'index.html'),
				inject: 'head',
				filename: 'index.html',
				minify: true,
			}),
			new MiniCssExtractPlugin(),
			new dotEnv({
				path: './.env.local',
			}),
		],
	};

	return config;
};

module.exports = getConfig;
