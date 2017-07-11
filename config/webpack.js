const { join } = require("path");
const ExtractText = require("extract-text-webpack-plugin");

const setup = require("./setup");

const client = join(__dirname, "../client");
const exclude = /(node_modules)/;

module.exports = env => {
	const isProd = env && env.production;

	return {
		entry: {
			app: "./client-src/index.js",
			vendor: [
				// pull these to a `vendor.js` file
				"react", "react-dom",
			]
		},
		output: {
			path: client,
			filename: "[name].[hash].js",
			publicPath: "/"
		},
		module: {
			rules: [
	      {
          enforce: 'pre',
          test: /\.js$/,
          exclude: exclude,
          loader: 'eslint-loader',
          options: {
          	quiet: false,
            failOnWarning: false,
            failOnError: true
          }
	      },
	      {
					test: /\.js?$/,
					exclude: exclude,
					use: {
		        loader: 'babel-loader',
		      }
				},
				{
					test: /\.(sass|scss)$/,
					loader: isProd ? ExtractText.extract({
						fallback: "style-loader",
						use: "css-loader!postcss-loader!sass-loader"
					}) : "style-loader!css-loader!postcss-loader!sass-loader"
				},
        {
	        test: /\.(eot|svg|ttf|woff|woff2)$/,
	        loader: 'file-loader?name=static/fonts/[name].[ext]'
        }
			]
		},
		plugins: setup(isProd),
		devtool: !isProd && "source-map",
		devServer: {
			contentBase: client,
			port: process.env.PORT || 3000,
			historyApiFallback: true,
			compress: isProd,
			inline: !isProd,
			hot: !isProd
		}
	};
};
