// called from package.json

//   process.env["goog_map_api"] = 'goog_map_api' Config Var = abcdefgh**_Google_Map_API_Key_**ijelmen

console.log("Heroku start, Google Maps API key = ", process.env["goog_map_api"]);

require("./web-server/gmap-dragdrop-react-server.js")();
