module.exports = {
  entry: "./src/index.js",
  output: {
    path: "/dist/",
    filename: "bundle.js"
  },
  devServer: {
    inline: true,
    contentBase: "./dist",
    port: 3000
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_module)/,
        loader: 'babel-loader?presets[]=latest,presets[]=react,presets[]=stage-0'
      }
    ]
  }
}
