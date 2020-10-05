const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const { BundleStatsWebpackPlugin } = require('bundle-stats-webpack-plugin');
const { DuplicatesPlugin } = require('inspectpack/plugin');
const { getAliasForProject } = require('@microsoft/webpack-project-references-alias');
const nodeExternals = require('webpack-node-externals');
const path = require('path');

const tsLoaders = require('./loaders/typescript-views');
const { views } = require('./plugins/typescript');

const cwd = process.cwd();
const pkgJson = require(path.resolve(cwd, 'package.json'));

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  context: cwd,
  entry: 'index.ts',
  output: {
    libraryTarget: 'commonjs2',
    filename: 'index.js',
    library: pkgJson.name,
    publicPath: '/dist',
    path: path.resolve(cwd, 'dist'),
  },
  module: {
    rules: [...tsLoaders],
  },
  target: 'web',
  devtool: Boolean(process.env.NODE_ENV === 'development') && 'inline-source-map',
  plugins: [
    ...views,
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
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
    alias: getAliasForProject(),
  },
  externals: [
    ...Object.keys(pkgJson.peerDependencies || {}),
    nodeExternals({
      modulesDir: path.resolve(__dirname, '../../node_modules'),
    }),
  ],
};
