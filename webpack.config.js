const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');
const {name, description, version, author, license, homepage} = require('./package.json');
const year = new Date().getFullYear();

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
  },
  plugins: [
    new webpack.BannerPlugin({
      banner: `touch-x v${version}\n${description}\n${license}(c) n${year} ${author}\n${homepage}`,
    })
  ]
};
