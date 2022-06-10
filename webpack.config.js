// npx webpack-cli

// npx webpack-cli --node-env 'development'

let the_mode = "production";
let optimization = { minimize: true };
let prod_devel_file = "is_production.webpack.txt";

if (process.env.NODE_ENV === "development") {
  the_mode = "development";
  optimization = { minimize: false };
  prod_devel_file = "is_DEVELOPMENT.webpack.txt";
}
const RemovePlugin = require("remove-files-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const path = require("path");
const css_loader = { test: /\.css$/, use: "css-loader" };

const image_loader = {
  test: /\.(png|jpg|gif)$/i,
  use: [
    {
      loader: "url-loader",
      options: {
        limit: 8192,
      },
    },
  ],
};

var react_cdns = {
  react: "React",
  "react-dom": "ReactDOM",
  "prop-types": "PropTypes",
};

var webpack_files = {
  all_entr: "/compiled-javascript/gmap_all_entry.js",
  activities_entr: "/compiled-javascript/gmap_activities_entry.js",
  dynamic_entr: "/compiled-javascript/gmap_dynamic_entry.js",
  events_entr: "/compiled-javascript/gmap_events_entry.js",
  hike_entr: "/compiled-javascript/gmap_hike_entry.js",
  malls_entr: "/compiled-javascript/gmap_malls_entry.js",
  simple_entr: "/compiled-javascript/gmap_simple_entry.js",
};
var browser_files = {
  filename: "[name].js",
  path: path.resolve(__dirname, "public"),
};

module.exports = {
  entry: webpack_files,
  mode: the_mode,
  optimization: optimization,
  externals: react_cdns,
  output: browser_files,
  module: {
    rules: [image_loader, css_loader],
  },
  plugins: [
    new RemovePlugin({
      before: {
        include: ["./public/is_production.webpack.txt", "./public/is_DEVELOPMENT.webpack.txt"],
      },
    }),

    new CopyPlugin({
      patterns: [{ from: "jsx-javascript/prod-dev-file.txt", to: prod_devel_file }],
    }),
  ],
};
