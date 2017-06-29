'use strict'

var ski_hills = GLOBAL_WEBPACK.gmap_simple_entry.ski_hills

function dumpToDiv() {
  var json_ski = ski_hills.locationsGetAll()
  var json_string =  JSON.stringify(json_ski, null, 2)
  document.getElementById("dump-area").value=json_string
}

if ('not used, but will' === 'stop eslint error message'){
  dumpToDiv()
}