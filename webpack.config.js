const path = require("path");
require("regenerator-runtime/runtime");

const rules = [
  {
    test: /\.tsx?/,
    exclude: /node_modules/,
    loader: "babel-loader",
  },
  {
    test: /\.css$/,
    use: ["style-loader", "css-loader"],
  },
];

module.exports = {
  target: "web",
  mode: "development",
  entry: [
    "./node_modules/regenerator-runtime/runtime.js",
    "./src/index.tsx",
    "./src/styles/index.css",
  ],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },
  module: { rules },
  resolve: { extensions: [".ts", ".tsx", ".js"] },
  devServer: {
    contentBase: "./public",
    port: 3000,
  },
};
