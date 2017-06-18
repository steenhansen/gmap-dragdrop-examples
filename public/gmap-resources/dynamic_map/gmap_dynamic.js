'use strict'

// gmap_dynamic.js

let dynamic_gmap_a, dynamic_gmap_b, saved_locations_a = [], saved_locations_b = []

if (window.GmapDragDrop === undefined) {
  window.GmapDragDrop = GLOBAL_WEBPACK.gmap_dynamic_entry.GmapDragDrop
}
const GOOGLE_MAP_KEY = "AIzaSyCE3HSVtJ6yOEkHiBpyoR_iU00gqYgTkfk"

function createMapA() {
  let the_locations
  if (saved_locations_a.length === 0) {
    the_locations = [{ lat: 49.448333
                        , lng: -123.2002442
                        , title_text: 'Unnecessary Mountain'
                        , can_move: false }
                    , { lat: 49.4125595
                        , lng: -123.1919322
                        , title_text: 'Mount Strachan'
                        , can_move: false
                        , pin_color: '#cc0' }]
  } else {
    the_locations = saved_locations_a
  }
  const dynamic_properties = {
    google_map_key: GOOGLE_MAP_KEY
    , map_locations: the_locations
    , map_options: {map_type: 'terrain'}
  }
  dynamic_gmap_a = window.GmapDragDrop.browserFactory('gmap-dynamic-id-A', dynamic_properties)
  document.getElementById('create_a').disabled=true
  document.getElementById('destroy_a').disabled=false
}

function destroyMapA() {
  saved_locations_a = dynamic_gmap_a.locationsGetAll()
  GmapDragDrop.browserDestroy(dynamic_gmap_a)
  document.getElementById('create_a').disabled=false
  document.getElementById('destroy_a').disabled=true
}

function createMapB() {
  let the_locations
  if (saved_locations_b.length === 0) {
    the_locations = [ { lat: 49.4256143
                          , lng: -123.2137832
                          , title_text: 'Saint Marks Summit'
                          , pin_color: 'blue'
                          , can_move: false }
                      , { lat: 49.3948431
                          , lng: -123.2315385
                          , title_text: 'Black Mountain'
                          , pin_color: 'white'
                          , can_move: false }]
  } else {
    the_locations = saved_locations_b
  }
  const dynamic_properties = {
    google_map_key: GOOGLE_MAP_KEY
    , map_locations: the_locations
    , map_options: {map_type: 'hybrid'}
  }
  dynamic_gmap_b = window.GmapDragDrop.browserFactory('gmap-dynamic-id-B', dynamic_properties)
  document.getElementById('create_b').disabled=true
  document.getElementById('destroy_b').disabled=false
}

function destroyMapB() {
  saved_locations_b = dynamic_gmap_b.locationsGetAll()
  GmapDragDrop.browserDestroy(dynamic_gmap_b)
  document.getElementById('create_b').disabled=false
  document.getElementById('destroy_b').disabled=true
}


if ('not used, but will' === 'stop eslint error message'){
  destroyMapB()
  destroyMapA()
}

createMapA()
createMapB()