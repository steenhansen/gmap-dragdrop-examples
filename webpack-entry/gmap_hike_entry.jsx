'use strict'

// gmap_hike_entry.jsx

import {GmapDragDrop, GmapGroups, KmsDistance, SvgButtons, MarkerIcons, MapStyles} from 'gmap-dragdrop-react'

const hikes_data = require('./hikes_data.jsx')
const {BURKE_MOUNTAIN_HIKE, SWAN_HIKE, ALOUETTE_HIKE, BASTION_HIKE}=hikes_data

function drawLineShape(from_location, to_locations) {
  let line_pattern = []
  if (from_location.lat !== undefined) {
    line_pattern.push(from_location)
    for (let a_to_location of to_locations) {
      let order_index = a_to_location.order_index
      line_pattern[order_index] = a_to_location
    }
  }
  return line_pattern
}

function getOutingDistanceLine(lat_lng_obj) {
  let next_location_id = 0
  const order_index = lat_lng_obj.order_index
  if (order_index > 0) {
    const previous_index = order_index - 1
    const next_index = order_index + 1

    var colored_locations = this.filterByPropertyValue('pin_color', lat_lng_obj.pin_color)
    for (let location_index in colored_locations) {
      let a_location = colored_locations[location_index]
      if (previous_index === a_location.order_index) {
        lat_lng_obj.extra_text = KmsDistance.getKms(lat_lng_obj, a_location)
      } else if (next_index === a_location.order_index) {
        next_location_id = a_location.location_id
      }
    }
  }
  return next_location_id
}

function generateMemberLine() {
}

let hike_locations = [BASTION_HIKE]
let lat_start = hike_locations[0][0].group_lat
let lng_start = hike_locations[0][0].group_lng
let zoom_start = hike_locations[0][0].group_zoom

const hike_options = {
  change_rebounding: false
  , init_zoom: zoom_start
  , pin_scale: 0.05
  , pin_svg: MarkerIcons.PIN_SVG_NO_HOLE
  , map_styles: MapStyles.BLUE_WATER
  , lat_center: lat_start
  , lng_center: lng_start
  , sub_type: 'snake_line'
}
const GOOGLE_MAP_KEY = "AIzaSyCE3HSVtJ6yOEkHiBpyoR_iU00gqYgTkfk"
let gmap_hikes = ReactDOM.render(<GmapGroups
        google_map_key={GOOGLE_MAP_KEY}
        map_locations={hike_locations}
        map_options={hike_options}
/>, document.getElementById('gmap-hikes'))

gmap_hikes.drawShape = drawLineShape
gmap_hikes.getOutingDistance = getOutingDistanceLine
gmap_hikes.generateMember = generateMemberLine

module.exports = {
  gmap_hikes, GmapDragDrop, SvgButtons,
  BURKE_MOUNTAIN_HIKE, ALOUETTE_HIKE, SWAN_HIKE, BASTION_HIKE
}