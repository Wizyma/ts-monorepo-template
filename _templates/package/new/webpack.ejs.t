---
to: packages/<%= name %>/webpack.config.js
---
const fs = require('fs');
const path = require('path');

const config = require('../../configurations/webpack/webpack.config');
const cwd = process.cwd();
const modules = fs.readdirSync(path.resolve(cwd, './src'));

const entries = modules.reduce((folders, folder) => {
  const stat = fs.statSync(path.resolve(cwd, 'src', folder));
  if (stat.isFile()) {
    const split = folder.split('.');

    return {
      ...folders,
      [split[0]]: `./src/${folder}`,
    };
  }

  const indexFile = fs
    .readdirSync(path.resolve(cwd, 'src', folder))
    .filter((file) => file.includes('index.'))[0];
  return { ...folders, [folder]: `./src/${folder}/${indexFile}` };
}, {});

module.exports = {
  ...config,
  entry: entries,
  output: {
    ...config.output,
    filename: ({ chunk: { name } }) => {
      return `${name.toLowerCase()}.js`;
    },
  },
};
