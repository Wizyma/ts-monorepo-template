import { RuleSetRule } from 'webpack';
const fileLoaders: RuleSetRule[] = [
  {
    test: /\.js$/,
    loader: 'source-map-loader',
    exclude: [/node_modules\//],
  },
  {
    test: /\.jpe?g$|\.gif$|\.ico$|\.png$|\.PNG$|\.svg$|\.woff(2)?$|\.ttf$|\.eot$/,
    loader: 'file-loader',
    options: {
      name: 'public/[name].[ext]',
    },
  },
];

export default fileLoaders;
