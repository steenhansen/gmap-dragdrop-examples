'use strict'

import GmapDragDrop from './GmapDragDrop.js'

class GmapGroups extends GmapDragDrop {

  _gmapGroup_vars = {
    group_colors: {}
    , group_polylines: {}
    , next_location_id: 0
  }

  groupAdd(latLng, gmap_var_name) {
    const new_random_color = this.newRandomColor()
    const location_id = this._unixTimeId()
    let content_text = this.labelInput(location_id, 'Outing', gmap_var_name)
    let group_location = {
      lat: latLng.lat()
      , lng: latLng.lng()

      , group_lat: latLng.lat()
      , group_lng: latLng.lng()

      , group_type: true
      , location_id: location_id
      , pin_color: new_random_color
      , content_text: content_text
      , order_index: 0
      , group_zoom: 13
    }
    this.locationAdd(group_location)
    this.drawPolyline(new_random_color)
  }

  newRandomColor() {
    let have_unique_color, random_color
    do {
      random_color = '#' + Math.floor(Math.random() * 16777215).toString(16)
      have_unique_color = true
      for (let pin_color in   this._gmapGroup_vars.group_colors[pin_color]) {
        if (random_color === pin_color) {
          have_unique_color = false
        }
      }
    } while (!have_unique_color)
    return random_color
  }

  constructor(props) {
    super(props)
    this._object_type = 'GmapGroups - ' + this.state.map_options.sub_type
    let all_activities = props.map_locations
    let flattened_activities = [].concat.apply([], all_activities)
    this._gmapDragDrop_vars.map_positions = flattened_activities
    for (let location_index in  flattened_activities) {
      const a_location = flattened_activities[location_index]
      const pin_color = a_location.pin_color
      this._gmapGroup_vars.group_colors[pin_color] = pin_color
    }
    this.state.map_options.onDragDrop = this.onDragDropGroup
    this.state.map_options.onDragEndMarker = this.onDragEndMarkerGroup
    this.state.map_options.onAdd = this.onAddGroup
    this.state.map_options.onRightClickMarker = this.onRightClickMarker
  }

  _onIdle_googleListener(e) {
    const first_time_idle = GmapDragDrop.prototype._onIdle_googleListener.call(this, e)
    if (first_time_idle) {
      for (const color_index in this._gmapGroup_vars.group_colors) {
        this.drawPolyline(color_index)
      }
    }
  }

  _onDoubleClick_googleListener(e) {
    GmapDragDrop.prototype._onDoubleClick_googleListener.call(this, e)
  }

  _onRightClick_googleListener(e) {
    GmapDragDrop.prototype._onRightClick_googleListener.call(this, e)
  }

  _onZoomChanged_googleListener(e) {
    GmapDragDrop.prototype._onZoomChanged_googleListener.call(this, e)
  }

  _onDropOnMap_react(e) {
    GmapDragDrop.prototype._onDropOnMap_react.call(this, e)
  }

  _onDragOver_react(e) {
    GmapDragDrop.prototype._onDragOver_react.call(this, e)
  }

  _onDragEnd_react(e) {
    GmapDragDrop.prototype._onDragEnd_react.call(this, e)
  }

  _onMouseMove_react(e) {
    GmapDragDrop.prototype._onMouseMove_react.call(this, e)
  }

  _onMouseDown_react(e) {
    GmapDragDrop.prototype._onMouseDown_react.call(this, e)
  }

  _onMouseUp_react(e) {
    GmapDragDrop.prototype._onMouseUp_react.call(this, e)
  }

  _onStartIeDrag(e) {
    GmapDragDrop.prototype._onStartIeDrag.call(this, e)
  }

  _onDragStart_react(e) {
    GmapDragDrop.prototype._onDragStart_react.call(this, e)
  }

  _onDragEnd_Overlay(e) {
    GmapDragDrop.prototype._onDragEnd_Overlay.call(this, e)
  }

  _onMouseMoveOverlay(e) {
    GmapDragDrop.prototype._onMouseMoveOverlay.call(this, e)
  }

  _onMouseDownOverlay(e) {
    GmapDragDrop.prototype._onMouseDownOverlay.call(this, e)
  }

  _onMouseDownOverlay(e) {
    GmapDragDrop.prototype._onMouseDownOverlay.call(this, e)
  }

  _onMouseMove_googleListener(e) {
    GmapDragDrop.prototype._onMouseMove_googleListener.call(this, e)
  }

  _onMouseMove_react(e) {
    GmapDragDrop.prototype._onMouseMove_react.call(this, e)
  }

  _onCenterChanged_googleListener(e) {
    GmapDragDrop.prototype._onCenterChanged_googleListener.call(this, e)
  }

  _onZoomChanged_googleListener(e) {
    GmapDragDrop.prototype._onZoomChanged_googleListener.call(this, e)
  }

  drawPolyline(pin_color) {
    let activity_locations = []
    let outing_location = {}
    var colored_locations = this.filterByPropertyValue('pin_color', pin_color)
    for (let location_index in colored_locations) {
      const a_location = colored_locations[location_index]
      if (a_location.group_type) {
        outing_location = a_location
      } else {
        activity_locations.push(a_location)
      }
    }
    this.clearPolyline(pin_color)
    let group_lat_lng
    if (outing_location.from_lat === undefined) {
      group_lat_lng = {lat: outing_location.lat, lng: outing_location.lng}
    } else {
      group_lat_lng = {lat: outing_location.from_lat, lng: outing_location.from_lng}
    }
    let colored_path = this.drawMembers(group_lat_lng, activity_locations, pin_color)
    this._gmapGroup_vars.group_polylines[pin_color] = colored_path
  }

  clearPolyline(pin_color) {
    if ((this._gmapGroup_vars.group_polylines[pin_color] !== undefined) && (this._gmapGroup_vars.group_polylines[pin_color] !== null)) {
      this._gmapGroup_vars.group_polylines[pin_color].setMap(null)
    }
  }

  locationsClearAll() {
    for (let location_id in this._gmapDragDrop_vars.location_lat_lngs) {
      this.locationDelete(location_id)
    }
    for (let pin_color in this._gmapGroup_vars.group_polylines) {
      this.clearPolyline(pin_color)
    }
    this._gmapGroup_vars.group_polylines = {}
  }

  draggedInGroup(lat_lng_obj) {
    let google_map = this.getMap()
    for (let string_key in lat_lng_obj) {
      var integer_key = Number.parseInt(string_key)
      const valid_location = Number.isInteger(integer_key)
      if (valid_location) {
        const a_location = lat_lng_obj[string_key]
        const location_id = a_location.location_id
        if (!this.locationExists(location_id)) {
          this.locationAdd(a_location)
        }
        var pin_color = a_location.pin_color
        if (a_location.group_zoom) {
          google_map.setZoom(a_location.group_zoom)
        }
        if (a_location.group_lat) {
          const outing_map_center = {lat: a_location.group_lat, lng: a_location.group_lng}
          google_map.panTo(outing_map_center)
        }
      }
    }
    this.drawPolyline(pin_color)
  }

  onDragDropGroup(e) {
    const {location_data} = e.gmap_params
    if (Array.isArray(location_data)) {
      this.draggedInGroup(location_data)
      this.reboundMap(location_data)
      return false
    } else if ('showing_info_window' in location_data) {
      if (location_data.group_type !== undefined) {
        if (location_data.group_type) {
          this.generateMember(location_data)
          return false
        }
      }
      return location_data   // drag activity around
    } else {
      this.dragInModified(location_data)
      return false
    }
  }

  dragInModified(lat_lng_obj) {
    lat_lng_obj.lat = lat_lng_obj.from_lat
    lat_lng_obj.lng = lat_lng_obj.from_lng
    delete lat_lng_obj['from_lat']
    delete lat_lng_obj['from_lng']
    this.locationModifyDirect(lat_lng_obj)
    this.drawPolyline(lat_lng_obj.pin_color)
    return false
  }

  deleteMember(lat_lng_obj) {
    var colored_locations = this.filterByPropertyValue('pin_color', lat_lng_obj.pin_color)
    let locations_in_outing = colored_locations.length
    if ((lat_lng_obj.group_type !== undefined) && lat_lng_obj.group_type) {
      if (lat_lng_obj.group_type) {
        for (let location_index in colored_locations) {
          const a_location = colored_locations[location_index]
          this.removeLocation(a_location.location_id)
        }
      }
    } else {
      this.removeLocation(lat_lng_obj.location_id)
    }
    if (locations_in_outing > 0) {
      this.drawPolyline(lat_lng_obj.pin_color)
    }
    return true
  }

  onAddGroup(e) {
    this._gmapGroup_vars.next_location_id = 0
    const {location_data} = e.gmap_params
    this._gmapGroup_vars.next_location_id = this.getOutingDistance(location_data)
    if (typeof location_data.lat === 'function') {
      try {
        throw new Error('Cannot add single locations in GmapGroups, only arrays')
      } catch (e) {
        console.log(e)
      }
    }
    return location_data
  }

  onDragEndMarkerGroup(e) {
    const {from_location} = e.gmap_params
    if (this._gmapGroup_vars.next_location_id) {
      this._insideToInsideDrop(this._gmapGroup_vars.next_location_id)
    }
    if (from_location !== undefined) {
      this.drawPolyline(from_location.pin_color)
    }
  }

  onRightClickMarker(e) {
    const {location_id} = e.gmap_params
    this.locationShowInfo(location_id)
  }

  drawMembers(from_location, to_locations, pin_color) {
    let google_map = this.getMap()
    let pattern_shape = this.drawShape(from_location, to_locations)
    if (pattern_shape.length > 1) {
      var shape_path = new google.maps.Polyline({
        path: pattern_shape
        , strokeColor: pin_color
        , strokeOpacity: 0.3
        , strokeWeight: 1
      })
      shape_path.setMap(google_map)
      return shape_path
    } else {
      return null
    }
  }

}
module.exports = GmapGroups


