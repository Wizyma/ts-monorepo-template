const HtmlWebpackPlugin = require('html-webpack-plugin');

const htmlPlugin = {
  development: [
    new HtmlWebpackPlugin({
      inject: true,
      template: 'public/index.html',
    }),
  ],
  production: [
    new HtmlWebpackPlugin({
      hash: true,
      inject: true,
      template: 'public/index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),
  ],
}[process.env.NODE_ENV || 'development'];

module.exports = htmlPlugin;
