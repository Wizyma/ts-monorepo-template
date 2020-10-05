---
to: services/<%= name %>/webpack.config.js
---
const config = require('../../configurations/webpack/webpack.node');

module.exports = {
  ...config,
  entry: './src/index.tsx'
};
