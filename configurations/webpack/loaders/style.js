module.exports = [
  {
    test: /\.scss$/,
    loader: 'sass-loader',
  },
  {
    test: /\.css$/,
    use: ['style-loader', 'css-loader'],
    exclude: /\.module\.css$/,
  },
  {
    test: /\.css$/,
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          importLoaders: 1,
          modules: true,
        },
      },
    ],
    include: /\.module\.css$/,
  },
  {
    test: /\.(less)$/,
    loader: 'less-loader',
  },
];
