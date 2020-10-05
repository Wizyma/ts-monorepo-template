const { BundleStatsWebpackPlugin } = require('bundle-stats-webpack-plugin');
const { DuplicatesPlugin } = require('inspectpack/plugin');
const { getAliasForProject } = require('@microsoft/webpack-project-references-alias');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const path = require('path');

const tsLoaders = require('./loaders/typescript-views');
const cwd = process.cwd();

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  context: cwd,
  entry: 'index.ts',
  output: {
    path: path.resolve(cwd, 'dist'),
  },
  devtool: Boolean(process.env.NODE_ENV === 'development') && 'inline-source-map',
  module: {
    rules: [...tsLoaders],
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
    new BundleAnalyzerPlugin({
      analyzerMode: process.env.ANALYZER ? 'server' : 'disabled',
      openAnalyzer: Boolean(process.env.ANALYZER),
      analyzerPort: 3000,
    }),
    new BundleStatsWebpackPlugin({
      outDir: '../stats',
    }),
    new DuplicatesPlugin({
      emitErrors: true,
      emitHandler: true,
    }),
  ],
};
