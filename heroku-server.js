// called from package.json

//   process.env["goog-map-api"] = 'goog-map-api' Config Var = abcdefgh**_Google_Map_API_Key_**ijelmen

console.log("Heroku start, Google Maps API key = ", process.env["goog-map-api"]);

console.log("all config ", process.env);

require("./web-server/gmap-dragdrop-react-server.js")();
