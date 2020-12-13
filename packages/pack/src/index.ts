import { DuplicatesPlugin } from 'inspectpack/plugin';
import { getAliasForProject } from '@microsoft/webpack-project-references-alias';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import path from 'path';

import tsLoaders from './loaders/typescript';
import fileLoaders from './loaders/files';
import styleLoaders from './loaders/styles';
import { Configuration } from 'webpack';

const cwd = process.cwd();

const configuration: Configuration = {
  mode: (process.env.NODE_ENV as Configuration['mode']) ?? 'development',
  context: cwd,
  entry: path.resolve(cwd, 'src/index.ts'),
  output: {
    path: path.resolve(cwd, 'dist'),
    filename: '[name].[contenthash].js',
  },
  devtool: Boolean(process.env.NODE_ENV === 'development') && 'inline-source-map',
  module: {
    rules: [...tsLoaders, ...fileLoaders, ...styleLoaders],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.tsx', '.ts'],
    alias: {
      ...getAliasForProject(),
    },
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'public/[name].css?version=[contenthash]',
    }),
    new webpack.ProgressPlugin({}),
    new BundleAnalyzerPlugin({
      analyzerMode: process.env.ANALYZER ? 'server' : 'disabled',
      openAnalyzer: Boolean(process.env.ANALYZER),
      analyzerPort: 3000,
    }),
    new DuplicatesPlugin({
      emitErrors: false,
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

export default configuration;
