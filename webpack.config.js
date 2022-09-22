// webpack.config.js
var path = require('path');

module.exports = {
	entry: ['./src/index'], // .js after index is optional
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js',
	},
	resolve: {
		extensions: ['.js', '.vue', '.json'],
		alias: {
			vue$: 'vue/dist/vue.esm.js',
			'@': resolve('src'),
		},
	},
};
