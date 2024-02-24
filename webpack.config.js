const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env, options) => {
  const isProd = options.mode === "production";

  const config = {
    mode: isProd ? "production" : "development",
    devtool: isProd ? "eval" : "source-map",
    watch: !isProd,
    entry: ["./src/index.js", "./src/sass/style.scss"],
    output: {
      path: path.join(__dirname, "dist"),
      filename: "main.js",
      clean: true,
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: [["@babel/preset-env"]],
            },
          },
        },
        {
          test: /\.scss$/,
          use: [
            MiniCssExtractPlugin.loader,
            "css-loader",
            "sass-loader",
          ],
        },
        {
          test: /\.html$/,
          loader: "html-loader",
        },
      ],
    },

    plugins: [
      new HtmlWebpackPlugin({ template: "index.html" }),
      new MiniCssExtractPlugin({ filename: "style.css" }),
    ],
  };

  return config;
};
