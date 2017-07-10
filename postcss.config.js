module.exports = {
  plugins: {
    'postcss-import': {},
    'cssnano': {},
    'autoprefixer': {
      browsers: ['last 2 versions', 'not ie 10'],
    },
  },
};