const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
  mode: 'development',
    entry: {
        main: path.resolve(__dirname, './src/index.js'),
    },
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: 'bundle.[chunkhash].js'
    }, 
    plugins: [
      new HTMLWebpackPlugin({
        title: 'Virtual keyboard', 
        template: './src/index.html',
        inject: 'body',
      }),
      new CleanWebpackPlugin(),
    ],
    devServer: {
      port: 4200,
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        }
      ]
    }
}

