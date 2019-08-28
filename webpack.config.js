module.exports = {
  entry: __dirname + '/client/components/index.jsx',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/public'
  },
  module: {
    
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|server|db)/,
        use: {
          loader: 'babel-loader',
        }
      }
    ]
  }
}