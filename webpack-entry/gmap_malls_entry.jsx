'use strict'

// gmap_malls_entry.jsx

import {GmapDragDrop, SvgButtons, MapStyles} from 'gmap-dragdrop-react'

const malls_data = require('./malls_data.jsx')

const {
        PACIFIC, OAKRIDGE, PARK_ROYAL, CAPILANO, RICHMOND, LANSDOWNE, ABERDEEN, LOUGHEED
        , BRENTWOOD, METROPOLIS, GUILDFORD, CENTRAL_CITY, COQUITLAM, ROYAL_CITY
}=malls_data

var new_input_id

const mall_options = {
  max_zoom: 13
  , street_view: false
  , zoom_control: false
  , map_type_control: false
  , map_styles: MapStyles.NIGHT_STYLE
  , onDragDrop: (e)=> {
    const {location_data, gmap_event} = e.gmap_params
    new_input_id = gmap_event._unixTimeId()
    if (location_data.showing_info_window !== undefined) {
      location_data.title_text = gmap_event.labelInput(location_data.location_id, 'New Location', 'gmap_malls', new_input_id)
    }
    return location_data
  }
  , onAfterAdd: ()=> {
    //const {location_data, gmap_event} = e.gmap_params
    if (document.getElementById(new_input_id) !== null) {
      document.getElementById(new_input_id).focus()
    }
  }
  , onDoubleClick: (e)=> {
    const {gmap_event} = e.gmap_params
    const {latLng} = e
    gmap_event.locationAdd(latLng)
  }
}

const mall_locations = [PACIFIC, OAKRIDGE]
const GOOGLE_MAP_KEY = "AIzaSyCE3HSVtJ6yOEkHiBpyoR_iU00gqYgTkfk"
let gmap_malls = ReactDOM.render(<GmapDragDrop
        google_map_key={GOOGLE_MAP_KEY}
        lat_center={49.275314}
        lng_center={-122.8547288}
        map_locations={mall_locations}
        map_options={mall_options}
/>, document.getElementById('gmap-mall-id'))

module.exports = {
  gmap_malls, GmapDragDrop, SvgButtons
  , GUILDFORD, CENTRAL_CITY, COQUITLAM, LOUGHEED, BRENTWOOD, METROPOLIS, ROYAL_CITY
  , RICHMOND, LANSDOWNE, ABERDEEN, PARK_ROYAL, CAPILANO, PACIFIC, OAKRIDGE
}