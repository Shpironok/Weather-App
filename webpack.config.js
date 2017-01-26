module.exports = {
  context: __dirname + '/app/js',
  entry: './app.js',
  output: {
    path: __dirname + '/app/js',
    filename: './build.js'
  },
  module: {
    loaders: [
      {test: /\.js$/, loader: 'babel'},
      {test: /\.html$/, loader: 'raw'},
      {test: /\.css$/, loader: 'style!css'},
      {test: /\.scss$/, loader: 'style!css!sass'}
    ]
  }
};