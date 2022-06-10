// node start-webserver 5001

console.log("Running on Heroku with API key as", process.env["goog-map-api"]);

require("./web-server/gmap-dragdrop-react-server.js")(port_number);
