module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/public',
    filename: '/public/bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    }]
  },
  resolve: {
    root: __dirname,
    alias: {
      searchbar: 'src/containers/searchbar.js',
      weatherList: 'src/containers/weatherList.js',
      sparkline: 'src/components/SparkLine.js',
      map: 'src/components/map.js'
    },
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
