const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    libraryTarget: 'umd'
  },
  optimization: {
    minimize: true, 
    minimizer: [new TerserPlugin({extractComments: false})] 
  },
  resolve: {
    fallback: {
      fs: false,
      path: false
    }
  },
  module: {
    rules: [
      {
        test: [/.js$/],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      { // load as text file under lib/*/*.css
        test: [/.css$|.html$/],
        type: 'asset/source'
      }
    ]
  }
};
