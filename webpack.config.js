const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { DefinePlugin } = require('webpack');

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.join(__dirname, '/dist'), // the bundle output path
    filename: 'bundle.js', // the name of the bundle
  },
  target: 'web',
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/app/index.html', // to import index.html file inside index.js
    }),
    new DefinePlugin({
      'process.env.HASH_ROUTER': JSON.stringify(
        process.env.HASH_ROUTER || 'false',
      ),
    }),
  ],
  devServer: {
    port: 3030, // you can change the port
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/, // .js, .jsx, .ts, .tsx files
        exclude: /node_modules/, // excluding the node_modules folder
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(sa|sc|c)ss$/, // styles files
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|otf|svg)$/, // to import images and fonts
        loader: 'url-loader',
        options: { limit: false },
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  devtool: process.env.NODE_ENV === 'production' ? false : 'eval-source-map',
};
