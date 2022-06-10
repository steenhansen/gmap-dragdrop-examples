// node local-server abcdefgh**_Google_Map_API_Key_**ijelmen

process.env["goog-map-api"] = process.argv[2];
require("./web-server/gmap-dragdrop-react-server.js")();
