const typescriptLoader = [
  {
    test: /\.(m?js|ts(x?))$/,
    use: [
      {
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                useBuiltIns: 'usage',
                corejs: 3,
                modules: false,
                debug: true,
                targets: {
                  browsers: ['defaults', 'not IE 11', 'maintained node versions'],
                },
              },
            ],
            '@babel/preset-react',
            '@babel/preset-typescript',
          ],
          plugins: [
            [
              '@babel/plugin-transform-runtime',
              {
                corejs: 3,
              },
            ],
            '@babel/plugin-transform-regenerator',
            '@babel/plugin-proposal-private-methods',
            '@babel/plugin-proposal-class-properties',
            '@babel/plugin-transform-arrow-functions',
            '@babel/plugin-syntax-object-rest-spread',
          ],
        },
      },
      {
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
        },
      },
    ],
    exclude: [/\bcore-js\b/, /\bwebpack\/buildin\b/, /node_modules/],
  },
];

export default typescriptLoader;
