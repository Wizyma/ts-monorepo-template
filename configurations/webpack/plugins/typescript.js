const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  views: [new ForkTsCheckerWebpackPlugin()],
};
