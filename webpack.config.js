const path = require("path");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webfontsGenerator = require('webfonts-generator');
const CopyWebpackPlugin = require('copy-webpack-plugin');

webfontsGenerator({
    files: [
      './svg/call.svg',
      './svg/sun.svg',
      './svg/ice-cream.svg',
      './svg/right-arrow.svg',
      './svg/placeholder.svg',
      './svg/zoom.svg',
      './svg/menu.svg',
    ],
    dest: './src/scss/icon-fonts',
    fontName: 'custom-icon',
    html: true,
    templateOptions: {
      classPrefix: 'custom-icon-',
      baseSelector: '.custom-icon'
    }
}, function(error) {
    if (error) {
      console.log('Fail!', error);
    } else {
      console.log('Done!');
  }
});

module.exports = {
  entry: "./src/app.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: { presets: ["@babel/preset-env"] }
        }
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.twig$/,
        use: [
          'raw-loader',
          {
            loader: 'twig-html-loader',
            options: {
              data: (context) => {
                const data = path.join(__dirname, 'data.json');
                context.addDependency(data);
                return context.fs.readJsonSync(data, { throws: false }) || {};
              }
            }
          }
        ]
      },
      {
        test   : /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        use : { loader: 'file-loader' }
      },
      {
        test: /\.css/,
        use: 'raw-loader'
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'main.css'
    }),
    new HtmlWebpackPlugin({
      hash: true,
      template: './templates/pages/index.html.twig',
      filename: './index.html'
    }),
    new HtmlWebpackPlugin({
      hash: true,
      template: './templates/pages/detail_article.html.twig',
      filename: './detail_article.html'
    }),
    new CopyWebpackPlugin([
      {from:'src/images',to:'images'}
    ]),
    new CopyWebpackPlugin([
      {from:'src/fonts',to:'fonts'}
    ]),
  ]
};
