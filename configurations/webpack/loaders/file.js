module.exports = [
  {
    enforce: 'pre',
    test: /\.js$/,
    loader: 'source-map-loader',
    exclude: [/node_modules\//],
  },
  {
    test: /\.(woff|woff2|eot|ttf|otf|svg|png|jpg|gif)$/,
    loader: 'file-loader',
  },
];
