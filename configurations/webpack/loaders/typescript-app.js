const tsImportPluginFactory = require('ts-import-plugin');
const tsTransformPaths = require('@zerollup/ts-transform-paths');

module.exports = [
  {
    test: /\.ts(x?)$/,
    use: [
      {
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                modules: false,
              },
            ],
            '@babel/preset-react',
          ],
          plugins: [
            '@babel/plugin-transform-runtime',
            '@babel/plugin-transform-regenerator',
            '@babel/plugin-proposal-private-methods',
            '@babel/plugin-proposal-class-properties',
          ],
        },
      },
      {
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
          getCustomTransformers: (program) => {
            const transformer = tsTransformPaths(program);

            return {
              before: [
                transformer.before,
                tsImportPluginFactory({ libraryDirectory: 'lib', libraryName: 'antd', style: 'css' }),
                tsImportPluginFactory({ libraryName: '@ant-design/icons' }),
              ],
              afterDeclarations: [transformer.afterDeclarations],
            };
          },
        },
      },
    ],
    exclude: /node_modules/,
  },
];
