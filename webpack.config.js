var webpack = require('webpack');

module.exports = {
    entry: './app.module.js',
    devtool: 'source-map',
    output: {
        filename: './main.js'
    },
	devServer: {
		inline: true,
		port: 3000
	},
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['es2015']
            }
        }]
    }
};