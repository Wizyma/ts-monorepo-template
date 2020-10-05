---
to: apps/<%= name %>/webpack.config.js
---
const config = require('../../configurations/webpack/webpack.app');
const fileLoaders = require('../../configurations/webpack/loaders/file');

module.exports = (env, argv) => {
  if (argv.hot) {
    // Cannot use 'contenthash' when hot reloading is enabled.
    config.output.filename = '[name].[hash].js';
  }

  return {
    ...config,
    entry: './src/index.tsx',
    module: {
      ...config.module,
      rules: [...config.module.rules, ...fileLoaders],
    },
  };
};
