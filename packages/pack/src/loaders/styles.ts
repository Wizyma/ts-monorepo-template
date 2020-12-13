import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const styles = [
  {
    test: /\.s[ac]ss$/i,
    use: [
      MiniCssExtractPlugin.loader,
      // Translates CSS into CommonJS
      'css-loader',
      // Compiles Sass to CSS
      'sass-loader',
    ],
  },
  {
    test: /\.css$/,
    use: [MiniCssExtractPlugin.loader, 'css-loader'],
    exclude: /\.module\.css$/,
  },
  {
    test: /\.(less)$/,
    loader: 'less-loader',
  },
];

export default styles;
