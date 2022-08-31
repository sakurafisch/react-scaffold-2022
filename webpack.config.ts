import path from "path";

import webpack from "webpack";

export default {
  entry: "./src/index.tsx",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/preset-env", "@babel/preset-typescript"] }
      },
      {
        test: /\.tsx$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: {
          presets: [
            "@babel/preset-env",
            "@babel/preset-react",
            "@babel/preset-typescript"
          ]
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  resolve: {
    extensions: [
      "*",
      ".ts",
      ".tsx",
      ".js",
      ".jsx"
    ]
  },
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/dist",
    filename: "bundle.js"
  },
  devServer: {
    static: { directory: path.join(__dirname, "public/") },
    port: 3000,
    devMiddleware: { publicPath: "http://localhost:3000/dist/" },
    hot: true
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
};
