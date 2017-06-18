'use strict'

// gmap_activities_entry.jsx

import {GmapDragDrop, GmapGroups, KmsDistance, SvgButtons, MarkerIcons, MapStyles} from 'gmap-dragdrop-react'

const activities_data = require('./activities_data.jsx')

const {NORTH_SHORE_OUTING, SASAMAT_OUTING, STEVESTON_OUTING, STANLEY_PARK_OUTING}=activities_data
let activity_locations = [NORTH_SHORE_OUTING]

function drawStarShape(from_location, to_locations) {
  let star_pattern = []
  if (from_location.lat !== undefined) {
    star_pattern.push(from_location)
    for (let a_to_location of to_locations) {
      star_pattern.push(a_to_location)
      star_pattern.push(from_location)
    }
  }
  return star_pattern
}

function getOutingDistanceStar(lat_lng_obj) {
  let a_location
  var colored_locations = this.filterByPropertyValue('pin_color', lat_lng_obj.pin_color)
  if (colored_locations.length === 0) {
    return false
  }
  for (let location_index in colored_locations) {
    a_location = colored_locations[location_index]
    if (a_location.group_type) {
      break
    }
  }
  lat_lng_obj.extra_text = KmsDistance.getKms(lat_lng_obj, a_location)
  return 0            // DO_NOT_PROCESS_NEXT_ITEM_IN_GROUP
}

function generateMemberStar(lat_lng_obj) {
  const outing_color = lat_lng_obj.pin_color
  let new_lat_lng = Object.assign({}, lat_lng_obj)
  let location_id = this._unixTimeId()
  const input_id = this._unixTimeId()
  delete new_lat_lng.group_type
  new_lat_lng.content_text = this.labelInput(location_id, 'Activity', 'gmap_activities', input_id)
  new_lat_lng.title_text = ''
  new_lat_lng.location_id = location_id
  new_lat_lng.pin_color = outing_color
  delete new_lat_lng.marker_svg
  this.getOutingDistance(new_lat_lng)
  this.locationAdd(new_lat_lng)
  this.drawPolyline(outing_color)
  document.getElementById(input_id).focus()
}

let lat_start = activity_locations[0][0].group_lat
let lng_start = activity_locations[0][0].group_lng
let zoom_start = activity_locations[0][0].group_zoom

const activity_options = {
  change_rebounding: false
  , init_zoom: zoom_start
  , pin_scale: 0.05
  , lat_center: lat_start
  , lng_center: lng_start
  , pin_svg: MarkerIcons.PIN_SVG_NO_HOLE
  , sub_type: 'star_lines'
  , map_styles: MapStyles.RETRO_STYLE
}

const GOOGLE_MAP_KEY = "AIzaSyCE3HSVtJ6yOEkHiBpyoR_iU00gqYgTkfk"
let gmap_activities = ReactDOM.render(<GmapGroups
        google_map_key={GOOGLE_MAP_KEY}
        map_locations={activity_locations}
        map_options={activity_options}
/>, document.getElementById('gmap-activites-id'))

gmap_activities.drawShape = drawStarShape
gmap_activities.getOutingDistance = getOutingDistanceStar
gmap_activities.generateMember = generateMemberStar

module.exports = {
  gmap_activities, GmapDragDrop, SvgButtons,
  NORTH_SHORE_OUTING, SASAMAT_OUTING, STEVESTON_OUTING, STANLEY_PARK_OUTING
}