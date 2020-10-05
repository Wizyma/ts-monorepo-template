---
to: views/<%= name %>/webpack.config.js
---
const config = require('../../configurations/webpack/webpack.views');
const fileLoaders = require('../../configurations/webpack/loaders/file');
const styleLoaders = require('../../configurations/webpack/loaders/style');

module.exports = {
  ...config,
  entry: './src/index.tsx',
  module: {
    ...config.module,
    rules: [...config.module.rules, ...fileLoaders, ...styleLoaders],
  },
};
