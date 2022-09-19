const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: "/src/main.js",
  module: {
    rules: [
      {
        test: /\.html/,
        use : [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      },
      {
        test: /.(css|scss)$/,
        use: [
          "style-loader", //Procesar estilos en linea
          "css-loader", //procesar estilos en archivos css
          "sass-loader", //procesar estilos en archivos scss
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              ['@babel/preset-env', { targets: "defaults" }]
            ]
          }
        }
      },
      {
        test: /\.(png|jpg|svg|gif|jpeg)$/,
        use: [
          "file-loader"
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "./src/index.html"}),
    new MiniCSSExtractPlugin()
  ]
}