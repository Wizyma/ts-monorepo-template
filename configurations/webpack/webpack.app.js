const { BundleStatsWebpackPlugin } = require('bundle-stats-webpack-plugin');
const { DuplicatesPlugin } = require('inspectpack/plugin');
const { getAliasForProject } = require('@microsoft/webpack-project-references-alias');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const tsLoaders = require('./loaders/typescript-app');
const htmlPlugin = require('./plugins/html');
const cwd = process.cwd();

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  context: cwd,
  entry: ['react-hot-loader/patch', './src/index.tsx'],
  output: {
    path: path.resolve(cwd, 'dist'),
    filename: '[name].[contenthash].js',
  },
  devtool: Boolean(process.env.NODE_ENV === 'development') && 'inline-source-map',
  module: {
    rules: [
      ...tsLoaders,
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
        exclude: /\.module\.css$/,
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
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
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.tsx', '.ts'],
    alias: {
      ...getAliasForProject(),
    },
  },
  devServer: {
    contentBase: './dist',
  },
  plugins: [
    ...htmlPlugin,
    new BundleAnalyzerPlugin({
      analyzerMode: process.env.ANALYZER ? 'server' : 'disabled',
      openAnalyzer: Boolean(process.env.ANALYZER),
      analyzerPort: 3000,
    }),
    new BundleStatsWebpackPlugin({
      outDir: '../stats',
    }),
    new MiniCssExtractPlugin(),
    new DuplicatesPlugin({
      emitErrors: true,
      emitHandler: true,
    }),
  ],
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
};
