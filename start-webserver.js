// node start-webserver 5000

const port_number = process.argv[2]
require('./web-server/gmap-dragdrop-react-server.js')(port_number)

