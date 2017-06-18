'use strict'

// gmap_hike.js

var gmap_hikes = GLOBAL_WEBPACK.gmap_hike_entry.gmap_hikes
var SvgButtons = GLOBAL_WEBPACK.gmap_hike_entry.SvgButtons
if (window.GmapDragDrop === undefined) {
  window.GmapDragDrop = GLOBAL_WEBPACK.gmap_hike_entry.GmapDragDrop
}

var hiking_map = (function () {
  var BURKE_MOUNTAIN_HIKES = GLOBAL_WEBPACK.gmap_hike_entry.BURKE_MOUNTAIN_HIKE
  var ALOUETTE_HIKE = GLOBAL_WEBPACK.gmap_hike_entry.ALOUETTE_HIKE
  var SWAN_HIKE = GLOBAL_WEBPACK.gmap_hike_entry.SWAN_HIKE
  var BASTION_HIKE = GLOBAL_WEBPACK.gmap_hike_entry.BASTION_HIKE

  function clearHikes() {
    gmap_hikes.locationsClearAll()
  }

  var showNumberHikes = function () {
    var locations_div = document.getElementById('number-hikes')
    var number_locations = gmap_hikes.numberLocations()
    if (number_locations === 0) {
      number_locations = ''
    }
    locations_div.innerHTML = number_locations + ' activities'
  }

  function reSizeHikes(e_ignored) {
    var number_locations = gmap_hikes.numberLocations()
    if (number_locations > 0) {
      gmap_hikes.reboundMap()
    }
  }

  function hideHikesInfo() {
    var activity_locations = gmap_hikes.filterByUndefProperty('group_type')
    for (let location_index in activity_locations) {
      const a_location = activity_locations[location_index]
      gmap_hikes.locationHideInfo(a_location.location_id)
    }
  }

  function showHikesInfo() {
    var activity_locations = gmap_hikes.locationsGetAll()
    for (let location_index in activity_locations) {
      const a_location = activity_locations[location_index]
      gmap_hikes.locationShowInfo(a_location.location_id)
    }
  }

  setInterval(showNumberHikes, 1000)

  var NON_HOVER_OPACITY_HIKE = 0.75
  var NON_HOVER_HIKE = '#ccc'

  function hikingIcons() {
    const clear_all_options = {
      append_to_id: 'icon_all'
      , marker_icon_title: 'Delete all'
      , main_color: '#888'
      , minor_color: '#888'
      , minor_hover: '#f00'
      , normal_opacity: NON_HOVER_OPACITY_HIKE
    }
    const resize_options = {
      append_to_id: 'icon_resize'
      , marker_icon_title: 'ReSize'
      , main_color: '#888'
      , minor_color: '#888'
      , minor_hover: '#00f'
      , normal_opacity: NON_HOVER_OPACITY_HIKE
    }
    const hide_options = {
      append_to_id: 'icon_hide'
      , marker_icon_title: 'Hide Info'
      , main_color: '#888'
      , minor_color: '#888'
      , minor_hover: '#00f'
      , normal_opacity: NON_HOVER_OPACITY_HIKE
    }
    const show_options = {
      append_to_id: 'icon_show'
      , marker_icon_title: 'Show Info'
      , main_color: '#888'
      , minor_color: '#888'
      , minor_hover: '#0f0'
      , normal_opacity: NON_HOVER_OPACITY_HIKE
    }
    SvgButtons.resizeHover(resize_options)
    SvgButtons.clear_all(clear_all_options)
    SvgButtons.resizeShowInfo(show_options)
    SvgButtons.resizeHideInfo(hide_options)
  }

  function BurkHike() {
    const burke_hike_options = {
      append_to_id: 'icon_burke'
      , marker_icon_title: 'Burke Mountian Hike'
      , main_color: BURKE_MOUNTAIN_HIKES[0].pin_color
      , minor_color: NON_HOVER_HIKE
      , minor_hover: BURKE_MOUNTAIN_HIKES[0].hover_color
      , normal_opacity: NON_HOVER_OPACITY_HIKE
    }
    SvgButtons.treeHover(burke_hike_options)
    var burke_elem = document.getElementById('drag_burke')
    burke_elem.ondragstart = gmap_hikes.startDragFromOutside(BURKE_MOUNTAIN_HIKES)
  }

  function alloutteHike() {
    const alloutte_hike_options = {
      append_to_id: 'icon_alloutte'
      , marker_icon_title: 'Alouette Mountain Hike'
      , main_color: ALOUETTE_HIKE[0].pin_color
      , minor_color: NON_HOVER_HIKE
      , minor_hover: ALOUETTE_HIKE[0].hover_color
      , normal_opacity: NON_HOVER_OPACITY_HIKE
    }
    SvgButtons.treeHover(alloutte_hike_options)
    var alloutte_elem = document.getElementById('drag_alloutte')
    alloutte_elem.ondragstart = gmap_hikes.startDragFromOutside(ALOUETTE_HIKE)
  }

  function swanHike() {
    const swan_hike_options = {
      append_to_id: 'icon_swan'
      , marker_icon_title: 'Swan Falls Hike'
      , main_color: SWAN_HIKE[0].pin_color
      , minor_color: NON_HOVER_HIKE
      , minor_hover: SWAN_HIKE[0].hover_color
      , normal_opacity: NON_HOVER_OPACITY_HIKE
    }
    SvgButtons.treeHover(swan_hike_options)
    var swan_elem = document.getElementById('drag_swan')
    swan_elem.ondragstart = gmap_hikes.startDragFromOutside(SWAN_HIKE)
  }

  function bastionHike() {
    const bastion_hike_options = {
      append_to_id: 'icon_bastion'
      , marker_icon_title: 'Bastion Trail Hike'
      , main_color: BASTION_HIKE[0].pin_color
      , minor_color: NON_HOVER_HIKE
      , minor_hover: BASTION_HIKE[0].hover_color
      , normal_opacity: NON_HOVER_OPACITY_HIKE
    }
    SvgButtons.treeHover(bastion_hike_options)
    var bastion_elem = document.getElementById('drag_bastion')
    bastion_elem.ondragstart = gmap_hikes.startDragFromOutside(BASTION_HIKE)
  }

  hikingIcons()
  bastionHike()
  swanHike()
  alloutteHike()
  BurkHike()

  return {
    clearHikes: clearHikes
    , reSizeHikes: reSizeHikes
    , showHikesInfo: showHikesInfo
    , hideHikesInfo: hideHikesInfo

  }

})()