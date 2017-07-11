module.exports = {
  plugins: {
    'postcss-import': {},
    'cssnano': {},
    'css-mqpacker': {},
    'autoprefixer': {
      browsers: ['last 2 versions', 'not ie 10'],
    },
  },
};