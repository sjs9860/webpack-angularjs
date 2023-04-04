const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js'
  },
  mode: 'development',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.html$/,
        exclude: /index.html$/,
        use: 'html-loader'
      },
      {
        test: /dummyBundle\.js/,
        use: 'script-loader'
      },
      // {
      //   test: /dummyBundle-module\.js/,
      //   use: [{
      //     loader: 'exports-loader',
      //     options: 'dummy_bundle'
      //   }]
      // },
    ]
  },
  devtool: 'inline-source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, "dist")
    },
    hot: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html',
    })
  ],
  // optimization: {
  //   minimize: true,
  // },
  resolve: {
    alias: {
      './login/login.component.js': path.resolve(__dirname, './login/login.component.js'),
    }
  }
};
