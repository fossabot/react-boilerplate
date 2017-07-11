const { join } = require('path');
const webpack = require('webpack');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const ExtractText = require('extract-text-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const OfflinePlugin = require('offline-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const Clean = require('clean-webpack-plugin');
const Copy = require('copy-webpack-plugin');
const HTML = require('html-webpack-plugin');

const root = join(__dirname, '..');

module.exports = isProd => {
	// base plugins array
	const plugins = [
		new Clean(['client'], { root }),
		new Copy([{ context: 'client-src/static/', from: '**/*.*', to: 'static' }]),
		new CaseSensitivePathsPlugin(),
		new webpack.optimize.CommonsChunkPlugin({ name: 'vendor' }),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(isProd ? 'production' : 'development')
		}),
		new HTML({ template: 'client-src/index.html' }),
		new StyleLintPlugin({
			options: {
				configFile: '../',
				quiet: false,
				ignorePath: 'node_modules',
				syntax: 'scss'
			}
		}),
		new webpack.LoaderOptionsPlugin({
			options: {
				postcss: [
					require('autoprefixer')({ browsers: ['last 2 version', 'not ie <= 10'] })
				]
			}
		})
	];

	if (isProd) {
		plugins.push(
			new webpack.LoaderOptionsPlugin({ minimize: true, debug: true }),
			new ImageminPlugin({
				test: /\.(jpe?g|png|gif|svg)$/i,
		    optipng: {
	        optimizationLevel: 7,
		    },
		    pngquant: {
	        quality: '65-90',
	        speed: 4,
		    },
		    gifsicle: {
	        optimizationLevel: 3,
		    },
		    svgo: {
	        plugins: [{
            removeViewBox: false,
            removeEmptyAttrs: true,
	        }],
		    },
		    jpegtran: {
	        progressive: true,
		    },
	    }),
			new webpack.optimize.UglifyJsPlugin({
				output: {
					comments: 0
				},
				compress: {
					unused: 1,
					warnings: 0,
					comparisons: 1,
					conditionals: 1,
					negate_iife: 0, // <- for `LazyParseWebpackPlugin()`
					dead_code: 1,
					if_return: 1,
					join_vars: 1,
					evaluate: 1
				}
			}),
			new ExtractText('main.[hash].css'),
			new OfflinePlugin({
	      safeToUseOptionalCaches: true,
	      responseStrategy: 'cache-first',
	      excludes: ['**/*.map'],
	      externals: [
	        '/'
	      ],
	      ServiceWorker: {
	        events: true,
	        navigateFallbackURL: '/',
	      },
	      AppCache: {
	        events: true,
	      }
	    })
		);
	} else {
		// dev only
		plugins.push(
			new webpack.HotModuleReplacementPlugin(),
			new webpack.NamedModulesPlugin()
		);
	}

	return plugins;
};
