"use strict"

// gmap_events_entry.jsx
  
import {GmapDragDrop, KmsDistance} from 'gmap-dragdrop-react'

const VANCOUVER = {lat: 49.27324752004365, lng: -123.1184429292939, title_text: "Vancouver"}
const RICHMOND = {lat: 49.16650744083447, lng: -123.11981622030953, title_text: "Richmond"}
const BURNABY = {lat: 49.24904940098245, lng: -122.99072686484078, title_text: "Burnaby"}
const NEW_WESTMINSTER = {lat: 49.21138429632658, lng: -122.91770640661935, title_text: "New Westminster"}
const COQUITLAM = {lat: 49.285790021849046, lng: -122.79685679724435, title_text: "Coquitlam"}
const SURREY = {lat: 49.17952591962596, lng: -122.85865489294747, title_text: "Surrey"}
const NORTH_VANCOUVER = {lat: 49.323845935661964, lng: -123.0742615824006, title_text: "North Vancouver"}
const WEST_VANCOUVER = {lat: 49.33816525290107, lng: -123.16283885290841, title_text: "West Vancouver"}
const PORT_MOODY = {lat: 49.28489423464641, lng: -122.87376109411935, title_text: "Port Moody"}
const PORT_COQUITLAM = {lat: 49.25532412674462, lng: -122.77831736853341, title_text: "Port Coquitlam"}

const events_locations = [VANCOUVER, RICHMOND, BURNABY, NEW_WESTMINSTER, COQUITLAM, SURREY
  , NORTH_VANCOUVER, WEST_VANCOUVER, PORT_MOODY, PORT_COQUITLAM]

const event_options = {

  onReady: (e)=> {
    const {gmap_event} = e.gmap_params
    const container_id = gmap_event._gmapDragDrop_vars.container_id
    console.log(`onReady : in div with id of '${container_id}' is ready`)
  }

  , onCenterChanged: (e)=> {
    const {moved_center, gmap_event} = e.gmap_params
    console.log(`onCenterChanged : at ${moved_center.lat}, ${moved_center.lng}`, gmap_event._object_type)
    return true
  }

  , onZoomChanged: (e)=> {
    const {map_zoom, gmap_event} = e.gmap_params
    console.log(`onZoomChanged : with has a new zoom of ${map_zoom}`, gmap_event._object_type)
    return true
  }

  , onMouseMove: (e) => {
    const {gmap_event} = e.gmap_params
    const rand_33 = Math.floor(Math.random() * 33)
    if (rand_33 === 0) {
      const {latLng, pageX, pageY} = e
      const lat = latLng.lat()
      const lng = latLng.lng()
      console.log(`onMouseMove (of 1/33) : at ${lat},${lng}  ${pageX},${pageY}`, gmap_event._object_type)
    }
  }

  , onDoubleClick: (e)=> {
    const {gmap_event} = e.gmap_params
    const {latLng, pixel} = e
    const lat = latLng.lat()
    const lng = latLng.lng()
    console.log(`onDoubleClick : at ${lat},${lng}  ${pixel.x},${pixel.y}`)
    gmap_event.locationAdd(latLng)
  }

  , onAdd: (e)=> {
    const {location_data, gmap_event} = e.gmap_params
    console.log('onAdd : with this data', gmap_event._object_type)
    console.dir(location_data)
    return location_data
  }

  , onAfterAdd: (e)=> {
    const {location_data, gmap_event} = e.gmap_params
    console.log('onAfterAdd : with this data', gmap_event._object_type)
    console.dir(location_data)
  }

  , onRightClick: (e)=> {
    const {gmap_event} = e.gmap_params
    const {latLng, pixel} = e
    const lat = latLng.lat()
    const lng = latLng.lng()
    console.log(`onRightClick : at ${lat},${lng}  ${pixel.x},${pixel.y}`, gmap_event._object_type)
  }

  , onRightClickMarker: (e)=> {
    const {location_id, gmap_event} = e.gmap_params
    const marker_data = gmap_event.locationGet(location_id)
    console.log('onRightClickMarker : with this data')
    console.dir(marker_data)
    gmap_event.locationDelete(location_id)
  }

  , onDelete: (e)=> {
    const {location_data, gmap_event} = e.gmap_params
    console.log('onDelete : with this data', gmap_event._object_type)
    console.dir(location_data)
    return true
  }

  , onDragStartMarker: (e)=> {
    const {location_data, gmap_event} = e.gmap_params
    location_data.title_text = 'onDragStartMarker : ' + location_data.title_text
    console.log('onDragStartMarker : with this data', gmap_event._object_type)
    return location_data
  }

  , onDragMarker: (e) => {
    const {start_lat_lng, location_id, page_x, page_y, gmap_event} = e.gmap_params
    console.log('onDragMarker :', start_lat_lng, location_id, page_x, page_y, gmap_event._object_type)
  }

  , onDragEndMarker: (e)=> {
    const {from_location, gmap_event} = e.gmap_params
    console.log('onDragEndMarker : with this data', gmap_event._object_type)
    console.dir(from_location)
  }

  , onDragDrop: (e)=> {
    const {location_data, gmap_event} = e.gmap_params
    console.log('onDragDrop : with this data', gmap_event._object_type)
    console.dir(location_data)
    if (location_data.from_lat === undefined) {
      location_data.title_text = 'onDragDrop 0km'
    } else {
      const from_location = {lat: location_data.from_lat, lng: location_data.from_lng}
      const to_location = {lat: location_data.lat, lng: location_data.lng}
      const km_distance = KmsDistance.getKms(from_location, to_location)
      location_data.title_text = `onDragDrop ${km_distance}`
    }
    return location_data
  }

}

const GOOGLE_MAP_KEY = "AIzaSyCE3HSVtJ6yOEkHiBpyoR_iU00gqYgTkfk"
ReactDOM.render(<GmapDragDrop
        google_map_key={GOOGLE_MAP_KEY}
        map_locations={events_locations}
        map_options={event_options}
/>, document.getElementById('gmap-events-id'))


