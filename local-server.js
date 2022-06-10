// node start-webserver 5001

var fs = require("fs");

const first_arg = process.argv[2];
if (Number.isInteger(Number(first_arg))) {
  var port_number = Number(first_arg);
} else {
  var port_number = 5000;
}

process.env["goog-map-api"] = process.argv[2];
require("./web-server/gmap-dragdrop-react-server.js")(port_number);
