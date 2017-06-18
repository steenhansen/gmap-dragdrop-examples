'use strict'

// gmap_activities.js

var gmap_activities = GLOBAL_WEBPACK.gmap_activities_entry.gmap_activities
var SvgButtons = GLOBAL_WEBPACK.gmap_activities_entry.SvgButtons
if (window.GmapDragDrop === undefined) {
  window.GmapDragDrop = GLOBAL_WEBPACK.gmap_activities_entry.GmapDragDrop
}

var outing_map = (function () {

  var NORTH_SHORE_OUTING = GLOBAL_WEBPACK.gmap_activities_entry.NORTH_SHORE_OUTING
  var STEVESTON_OUTING = GLOBAL_WEBPACK.gmap_activities_entry.STEVESTON_OUTING
  var SASAMAT_OUTING = GLOBAL_WEBPACK.gmap_activities_entry.SASAMAT_OUTING
  var STANLEY_PARK_OUTING = GLOBAL_WEBPACK.gmap_activities_entry.STANLEY_PARK_OUTING

  function clearOutings() {
    gmap_activities.locationsClearAll()
  }

  function dropOnActivityDelete(event) {
    event.preventDefault()
    var delete_data = event.dataTransfer.getData("text")
    var marker_data = JSON.parse(delete_data)
    var location_id = marker_data.location_id
    if (gmap_activities.locationExists(location_id)) {
      gmap_activities.deleteMember(marker_data)
    } else {
      throw 'Location id "' + location_id + '" does not exist on outing map'
    }
  }

  function setIdVal(id, new_value) {
    if (new_value) {
      try {
        document.getElementById(id).value = new_value
      } catch (e) {
        console.log(e)
      }
    } else {
      document.getElementById(id).value = ''
    }
  }

  function getIdVal(id) {
    return document.getElementById(id).value
  }

  function dropOnModify(event) {
    event.preventDefault()
    var in_data = event.dataTransfer.getData("text")
    var marker_data = JSON.parse(in_data)
    setIdVal('location-id', marker_data.location_id)
    setIdVal('location-lat', marker_data.lat)
    setIdVal('location-lng', marker_data.lng)
    setIdVal('location-color', marker_data.pin_color)

    setIdVal('location-svg', marker_data.marker_svg)
    setIdVal('location-outing', marker_data.group_type)
    setIdVal('location-title', marker_data.title_text)
    if (marker_data.content_text.indexOf('<input') > -1) {
      marker_data.content_text = ''
    }
    setIdVal('location-content', marker_data.content_text)
    setIdVal('location-extra', marker_data.extra_text)

    document.getElementById('dragging_modified_title').innerHTML = marker_data.title_text
    document.getElementById('dragging_modified_content').innerHTML = marker_data.content_text
    prepareModifyDrag()
  }

  function setSasamatOuting() {
    var sasamat_parameters = SASAMAT_OUTING
    var sasamat_id = document.getElementById('drag-sasamat')
    sasamat_id.ondragstart = gmap_activities.startDragFromOutside(sasamat_parameters)
  }

  function setStevestonOuting() {
    var steveston_parameters = STEVESTON_OUTING
    var steveston_id = document.getElementById('drag-steveston')
    steveston_id.ondragstart = gmap_activities.startDragFromOutside(steveston_parameters)
  }

  function setNorthShoreOuting() {
    var north_shore_parameters = NORTH_SHORE_OUTING
    var north_shore_id = document.getElementById('drag-north-shore')
    north_shore_id.ondragstart = gmap_activities.startDragFromOutside(north_shore_parameters)
  }

  function setStanleyOuting() {
    var stanley_parameters = STANLEY_PARK_OUTING
    var stanley_id = document.getElementById('drag-stanley')
    stanley_id.ondragstart = gmap_activities.startDragFromOutside(stanley_parameters)
  }

  var showNumberLocations = function () {
    var locations_div = document.getElementById('number-activities')
    var number_locations = gmap_activities.numberLocations()
    if (number_locations === 0) {
      number_locations = ''
    }
    locations_div.innerHTML = number_locations + ' activities'
  }

  function prepareModifyDrag(e_ignored) {
    var location_id = getIdVal('location-id')
    var location_outing = getIdVal('location-outing')
    if (location_outing === 'undefined' || location_outing === 'false' || location_outing === '') {
      location_outing = false
    } else {
      location_outing = true
    }
    var location_svg = getIdVal('location-svg')
    var location_lat = parseFloat(getIdVal('location-lat'))
    var location_lng = parseFloat(getIdVal('location-lng'))
    var location_color = getIdVal('location-color')
    var location_title = getIdVal('location-title')
    var location_content = getIdVal('location-content')
    var location_extra = getIdVal('location-extra')
    var modify_parameters = {
      "location_id": location_id
      , "group_type": location_outing
      , "marker_svg": location_svg
      , "lat": location_lat
      , "lng": location_lng
      , "pin_color": location_color
      , "title_text": location_title
      , "content_text": location_content
      , "extra_text": location_extra
    }
    document.getElementById('dragging_modified_title').innerHTML = location_title
    document.getElementById('dragging_modified_content').innerHTML = location_content
    var mod_drag = document.getElementById('mod_drag')
    mod_drag.ondragstart = gmap_activities.startDragFromOutside(modify_parameters)
    mod_drag.style.display = 'block'
  }

  function reSizeOutings(e_ignored) {
    var number_locations = gmap_activities.numberLocations()
    if (number_locations>0) {
      gmap_activities.reboundMap()
    }
  }

  function hideOutingInfo() {
    var activity_locations = gmap_activities.filterByUndefProperty('group_type')
    for (let location_index in activity_locations) {
      const a_location = activity_locations[location_index]
      gmap_activities.locationHideInfo(a_location.location_id)
    }
  }

  function showOutingInfo() {
    var activity_locations = gmap_activities.locationsGetAll()
    for (let location_index in activity_locations) {
      const a_location = activity_locations[location_index]
      gmap_activities.locationShowInfo(a_location.location_id)
    }
    gmap_activities.reboundMap()
  }
  
  var NON_HOVER_OUTING = '#ccc'
  var HOVER_COLOR_OUTING = '#0f0'
  var NON_HOVER_OPACITY_OUTING = 0.75
  
  function outingIcons() {
    const delete_options = {
      append_to_id: 'outing_delete'
      , marker_icon_title: 'Delete'
      , main_color: '#f00'
      , minor_color: '#0f0'
      , minor_hover: '#00f'
      , normal_opacity: NON_HOVER_OPACITY_OUTING
    }

    const clear_all_activities = {
      append_to_id: 'icon_all_activities'
      , marker_icon_title: 'Delete all'
      , main_color: '#888'
      , minor_color: '#888'
      , minor_hover: '#f00'
      , normal_opacity: NON_HOVER_OPACITY_OUTING
    }

    const resize_activities = {
      append_to_id: 'icon_resize_activities'
      , marker_icon_title: 'ReSize'
      , main_color: '#888'
      , minor_color: '#888'
      , minor_hover: '#00f'
      , normal_opacity: NON_HOVER_OPACITY_OUTING
    }

    const hide_activities = {
      append_to_id: 'icon_hide_activities'
      , marker_icon_title: 'Hide Info'
      , main_color: '#888'
      , minor_color: '#888'
      , minor_hover: '#00f'
      , normal_opacity: NON_HOVER_OPACITY_OUTING
    }

    const show_activities = {
      append_to_id: 'icon_show_activities'
      , marker_icon_title: 'Show Info'
      , main_color: '#888'
      , minor_color: '#888'
      , minor_hover: '#0f0'
      , normal_opacity: NON_HOVER_OPACITY_OUTING
    }

    const edit_options = {
      append_to_id: 'icon_edit'
      , marker_icon_title: 'Edit Marker'
      , main_color: '#f00'
      , minor_color: '#0f0'
      , minor_hover: '#00f'
      , normal_opacity: NON_HOVER_OPACITY_OUTING
    }



    const drag_edit_options = {
      append_to_id: 'icon_drag'
      , marker_icon_title: 'Drag Changes to Map'
      , main_color: '#f49'
      , minor_color: NON_HOVER_OUTING
      , minor_hover: HOVER_COLOR_OUTING
      , normal_opacity: NON_HOVER_OPACITY_OUTING
    }

    const steveston_options = {
      append_to_id: 'icon_steveston'
      , marker_icon_title: 'Steveston'
      , main_color: STEVESTON_OUTING[0].pin_color
      , minor_color: NON_HOVER_OUTING
      , minor_hover: HOVER_COLOR_OUTING
      , normal_opacity: NON_HOVER_OPACITY_OUTING
    }

    const sasamat_options = {
      append_to_id: 'icon_sasamat'
      , marker_icon_title: 'Sasamat Lake'
      , main_color: SASAMAT_OUTING[0].pin_color
      , minor_color: NON_HOVER_OUTING
      , minor_hover: HOVER_COLOR_OUTING
      , normal_opacity: NON_HOVER_OPACITY_OUTING
    }

    const north_shore_options = {
      append_to_id: 'icon_north_shore'
      , marker_icon_title: 'North Shore'
      , main_color: NORTH_SHORE_OUTING[0].pin_color
      , minor_color: NON_HOVER_OUTING
      , minor_hover: HOVER_COLOR_OUTING
      , normal_opacity: NON_HOVER_OPACITY_OUTING
    }

    const stanley_options = {
      append_to_id: 'icon_stanley'
      , marker_icon_title: 'Stanley Park'
      , main_color: STANLEY_PARK_OUTING[0].pin_color
      , minor_color: NON_HOVER_OUTING
      , minor_hover: HOVER_COLOR_OUTING
      , normal_opacity: NON_HOVER_OPACITY_OUTING
    }

    SvgButtons.do_delete(delete_options)
    SvgButtons.clear_all(clear_all_activities)
    SvgButtons.resizeHover(resize_activities)
    SvgButtons.resizeHideInfo(hide_activities)
    SvgButtons.resizeShowInfo(show_activities)
    SvgButtons.do_edit(edit_options)
    SvgButtons.upMarkerHover(drag_edit_options)
    SvgButtons.orcaHover(steveston_options)
    SvgButtons.swimHover(sasamat_options)
    SvgButtons.waterHover(north_shore_options)
    SvgButtons.parkHover(stanley_options)

  }

  setInterval(showNumberLocations, 1000)
  setSasamatOuting()
  setStevestonOuting()
  setNorthShoreOuting()
  setStanleyOuting()
  outingIcons()

  return {
    dropOnActivityDelete: dropOnActivityDelete
    , clearOutings: clearOutings
    , reSizeOutings: reSizeOutings
    , hideOutingInfo: hideOutingInfo
    , showOutingInfo: showOutingInfo
    , dropOnModify: dropOnModify
    , prepareModifyDrag: prepareModifyDrag
  }

})()
