const DefinePlugin = require("webpack").DefinePlugin
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack").container
  .ModuleFederationPlugin;
const CopyWebpackPlugin = require('copy-webpack-plugin');

const fs = require('fs');
const path = require("path");

const mode = process.env.NODE_ENV == 'production' ? 'production' : 'development'

const deps = require(path.join(process.cwd(), './package.json')).dependencies
const sharedDeps = 
    ['@dhis2/ui', '@dhis2/app-runtime', '@dhis2/d2-i18n', 'moment']
    .filter(dep => !!deps[dep])
    .reduce((out, dep) => { out[dep] = deps[dep]; return out }, {})

const overrideHtmlFile = path.join(process.cwd(), 'public/index.html')
const indexHtmlFile = fs.existsSync(overrideHtmlFile) ? overrideHtmlFile : path.join(__dirname, "public/index.html")

// const entrypoint = path.resolve(process.cwd(), require(path.join(process.cwd(), 'd2.config.js')).entryPoints.app)
// console.log(entrypoint)
module.exports = {
  entry: './src/index.js', //path.join(__dirname, "src/index.js"),
  mode,
  resolve: {
    // modules: [path.join(process.cwd(), 'node_modules')],
    // alias: {
    //   app$: entrypoint
    // },
    // descriptionFiles: [path.join(process.cwd(), 'package.json')],
  },
  devServer: {
    contentBase: path.join(process.cwd(), "dist"),
    headers: { 'Access-Control-Allow-Origin': '*' },
    port: 3001,
  },
  devtool: 'source-map',
  output: {
    publicPath: "auto",
    chunkFilename: "[name].[contenthash].js",
  },
  module: {
    rules: [
        {
            test: /\.m?js$/,
            type: "javascript/auto",
            resolve: {
            fullySpecified: false,
            },
        },
        {
            test: /\.jsx?$/,
            loader: require.resolve("babel-loader"),
            exclude: /node_modules/,
            options: {
              extends: require.resolve("@dhis2/cli-app-scripts/config/babel.config.js")
            // presets: [require.resolve("babel-preset-react-app")],
            },
        },
        {
          test: /\.css$/i,
          use: [require.resolve("style-loader"), require.resolve("css-loader")],
        },
        {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: 'asset/resource',
        },
    ],
  },
  plugins: [
    new DefinePlugin({
        'process.env': JSON.stringify(process.env),
        'process.env.NODE_ENV': JSON.stringify(mode),
        'process.env.REACT_APP_DHIS2_BASE_URL': JSON.stringify(process.env.REACT_APP_DHIS2_BASE_URL || 'https://d2.winged.tech/2.34dev')
    }),
    new ModuleFederationPlugin({
      name: "app1",
      filename: "remoteEntry.js",
      remotes: {
        "shell": "shell@http://localhost:10000/remoteEntry.js"
      },
      exposes: {
      },
      shared: { 
          ...sharedDeps,
          react: { singleton: true }, 
          "react-dom": { singleton: true }
      },
    }),
    new CopyWebpackPlugin({
        patterns: [
            {
              from: path.join(__dirname, 'public'),
              globOptions: {
                ignore: ["**/index.html"],
              }
            },
            {
              from: path.join(process.cwd(), 'public'),
              globOptions: {
                ignore: ["**/index.html"],
              }
            }
        ],
    }),
    new HtmlWebpackPlugin({
      title: require(path.join(process.cwd(), 'd2.config.js')).title,
      template: indexHtmlFile,
    }),
  ],
};