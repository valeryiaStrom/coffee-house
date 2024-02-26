const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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
      assetModuleFilename: 'static/images/[hash][ext]',
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
          use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
        },
        {
          test: /\.html$/,
          loader: "html-loader",
        },
        {
          test: /\.(png|svg|jpg|jpeg)$/,
          type: "asset",
        },
      ],
    },

    plugins: [
      new MiniCssExtractPlugin({ filename: "style.css" }),
    ],
  };

  return config;
};
