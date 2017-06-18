'use strict'

var jsonPromise = require('jsonfile-promised')
var fsPromise = require('fs-promise')

const WEBPACK_CHUNKS = 'web-server/webpack_js_chunks.json'

function chunkhashEntry(bundle_name, req) {
  const host_url = req.headers.host
  return jsonPromise.readFile(WEBPACK_CHUNKS)
          .then(js_file_parts => {
            const js_bundle = js_file_parts[bundle_name]['js']
            const chunkhash_url = '//' + host_url + '/' + js_bundle
            return chunkhash_url
          })
          .catch(err => console.error(err))
}

function readResourceFile(public_static_files, resource_path) {
  const file_contents = fsPromise.readFile(public_static_files + resource_path, 'utf8')
  return file_contents
}

function readEntryJsx(gmap_jsx) {
  const file_contents = fsPromise.readFile('webpack-entry/' + gmap_jsx, 'utf8')
  return file_contents
}

function html2Text(a_string_1) {
  const a_string_2 = a_string_1.replace(/</g, '&lt;')
  const a_string_3 = a_string_2.replace(/>/g, '&gt;')
  return a_string_3
}

module.exports = {
  chunkhashEntry: chunkhashEntry
  , readResourceFile: readResourceFile
  , readEntryJsx: readEntryJsx
  , html2Text: html2Text
  ,
}
