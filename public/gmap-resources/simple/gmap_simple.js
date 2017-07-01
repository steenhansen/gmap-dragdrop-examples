'use strict'

var ski_hills = GLOBAL_WEBPACK.gmap_simple_entry.ski_hills
var __GDDR_DEBUG__ = GLOBAL_WEBPACK.gmap_simple_entry.__GDDR_DEBUG__



function dumpToDiv() {
  var json_ski = ski_hills.locationsGetAll()
  var json_string =  JSON.stringify(json_ski, null, 2)
  document.getElementById("dump-area").value=json_string
}

if ('not used, but will' === 'stop eslint error message'){
  dumpToDiv()
}