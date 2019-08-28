const withCSS = require('@zeit/next-css');
const withImages = require('next-images');

const webpackConfig = withImages(
  withCSS({
    target: 'server',
    module: {
      noParse: /\.wasm$/,
      rules: [
        {
          test: /\.wasm$/,
          loaders: ['base64-loader'],
          type: 'javascript/auto',
        },
      ],
    },
    webpack(config) {
      config.module.rules.push({
        test: /\.(png|svg|eot|otf|ttf|woff|woff2)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 8192,
            publicPath: '/_next/static/',
            outputPath: 'static/',
            name: '[name].[ext]',
          },
        },
      });

      return config;
    },
  }),
);

console.log('webpack=>', webpackConfig);
console.log('webpack.module.rules=>', webpackConfig.module.rules);
console.log('webpack.webpack=>', webpackConfig.webpack);

module.exports = webpackConfig;
