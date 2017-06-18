'use strict'

// gmap_malls.js  

var gmap_malls = GLOBAL_WEBPACK.gmap_malls_entry.gmap_malls
var SvgButtons = GLOBAL_WEBPACK.gmap_malls_entry.SvgButtons
if (window.GmapDragDrop === undefined) {
  window.GmapDragDrop = GLOBAL_WEBPACK.gmap_malls_entry.GmapDragDrop
}

var mall_map = (function () {

  var GUILDFORD = GLOBAL_WEBPACK.gmap_malls_entry.GUILDFORD
  var CENTRAL_CITY = GLOBAL_WEBPACK.gmap_malls_entry.CENTRAL_CITY
  var COQUITLAM = GLOBAL_WEBPACK.gmap_malls_entry.COQUITLAM
  var LOUGHEED = GLOBAL_WEBPACK.gmap_malls_entry.LOUGHEED

  var BRENTWOOD = GLOBAL_WEBPACK.gmap_malls_entry.BRENTWOOD
  var METROPOLIS = GLOBAL_WEBPACK.gmap_malls_entry.METROPOLIS
  var ROYAL_CITY = GLOBAL_WEBPACK.gmap_malls_entry.ROYAL_CITY
  var RICHMOND = GLOBAL_WEBPACK.gmap_malls_entry.RICHMOND

  var LANSDOWNE = GLOBAL_WEBPACK.gmap_malls_entry.LANSDOWNE
  var ABERDEEN = GLOBAL_WEBPACK.gmap_malls_entry.ABERDEEN
  var PARK_ROYAL = GLOBAL_WEBPACK.gmap_malls_entry.PARK_ROYAL
  var CAPILANO = GLOBAL_WEBPACK.gmap_malls_entry.CAPILANO

  var PACIFIC = GLOBAL_WEBPACK.gmap_malls_entry.PACIFIC
  var OAKRIDGE = GLOBAL_WEBPACK.gmap_malls_entry.OAKRIDGE

  function dropOnMallDelete(event) {
    event.preventDefault()
    var delete_data = event.dataTransfer.getData("text")
    var marker_data = JSON.parse(delete_data)
    var location_id = marker_data.location_id
    if (gmap_malls.locationExists(location_id)) {
      gmap_malls.locationDelete(location_id)
    } else {
      throw 'Location id "' + location_id + '" does not exist on the mall map'
    }
  }

  function mallDragStart(mall_id, mall_data) {
    var mall_element = document.getElementById(mall_id)
    mall_element.ondragstart = gmap_malls.startDragFromOutside(mall_data)
  }

  var NON_HOVER_COLOR = '#ccc'
  var HOVER_COLOR = '#0f0'
  var NON_HOVER_OPACITY = 0.9

  function mallIcons() {
    var delete_malls_options = {
      append_to_id: 'delete_mall_container'
      , marker_icon_title: 'Delete'
      , main_color: '#f00'
      , minor_color: '#0f0'
      , minor_hover: '#00f'
      , hover_opacity: 0.7
    }

    var pacific_options = {
      append_to_id: 'pacific_id'
      , marker_icon_title: PACIFIC.title_text
      , main_color: PACIFIC.pin_color
      , minor_color: NON_HOVER_COLOR
      , minor_hover: HOVER_COLOR
      , normal_opacity: NON_HOVER_OPACITY
    }

    var oakridge_options = {
      append_to_id: 'oakridge_id'
      , marker_icon_title: OAKRIDGE.title_text
      , main_color: OAKRIDGE.pin_color
      , minor_color: NON_HOVER_COLOR
      , minor_hover: HOVER_COLOR
      , normal_opacity: NON_HOVER_OPACITY
    }

    var park_royal_options = {
      append_to_id: 'park_royal_id'
      , marker_icon_title: PARK_ROYAL.title_text
      , main_color: PARK_ROYAL.pin_color
      , minor_color: NON_HOVER_COLOR
      , minor_hover: HOVER_COLOR
      , normal_opacity: NON_HOVER_OPACITY
    }

    var capilano_options = {
      append_to_id: 'capilano_id'
      , marker_icon_title: CAPILANO.title_text
      , main_color: CAPILANO.pin_color
      , minor_color: NON_HOVER_COLOR
      , minor_hover: HOVER_COLOR
      , normal_opacity: NON_HOVER_OPACITY
    }

    var royal_city_options = {
      append_to_id: 'royal_city_id'
      , marker_icon_title: ROYAL_CITY.title_text
      , main_color: ROYAL_CITY.pin_color
      , minor_color: NON_HOVER_COLOR
      , minor_hover: HOVER_COLOR
      , normal_opacity: NON_HOVER_OPACITY
    }

    var richmond_options = {
      append_to_id: 'richmond_id'
      , marker_icon_title: RICHMOND.title_text
      , main_color: RICHMOND.pin_color
      , minor_color: NON_HOVER_COLOR
      , minor_hover: HOVER_COLOR
      , normal_opacity: NON_HOVER_OPACITY
    }

    var lansdowne_options = {
      append_to_id: 'lansdowne_id'
      , marker_icon_title: LANSDOWNE.title_text
      , main_color: LANSDOWNE.pin_color
      , minor_color: NON_HOVER_COLOR
      , minor_hover: HOVER_COLOR
      , normal_opacity: NON_HOVER_OPACITY
    }

    var aberdeen_options = {
      append_to_id: 'aberdeen_id'
      , marker_icon_title: ABERDEEN.title_text
      , main_color: ABERDEEN.pin_color
      , minor_color: NON_HOVER_COLOR
      , minor_hover: HOVER_COLOR
      , normal_opacity: NON_HOVER_OPACITY
    }

    var lougheed_options = {
      append_to_id: 'lougheed_id'
      , marker_icon_title: LOUGHEED.title_text
      , main_color: LOUGHEED.pin_color
      , minor_color: NON_HOVER_COLOR
      , minor_hover: HOVER_COLOR
      , normal_opacity: NON_HOVER_OPACITY
    }

    var brentwood_options = {
      append_to_id: 'brentwood_id'
      , marker_icon_title: BRENTWOOD.title_text
      , main_color: BRENTWOOD.pin_color
      , minor_color: NON_HOVER_COLOR
      , minor_hover: HOVER_COLOR
      , normal_opacity: NON_HOVER_OPACITY
    }

    var metropolis_options = {
      append_to_id: 'metropolis_id'
      , marker_icon_title: METROPOLIS.title_text
      , main_color: METROPOLIS.pin_color
      , minor_color: NON_HOVER_COLOR
      , minor_hover: HOVER_COLOR
      , normal_opacity: NON_HOVER_OPACITY
    }

    var guildford_options = {
      append_to_id: 'guildford_id'
      , marker_icon_title: GUILDFORD.title_text
      , main_color: GUILDFORD.pin_color
      , minor_color: NON_HOVER_COLOR
      , minor_hover: HOVER_COLOR
      , normal_opacity: NON_HOVER_OPACITY
    }

    var central_city_options = {
      append_to_id: 'central_city_id'
      , marker_icon_title: CENTRAL_CITY.title_text
      , main_color: CENTRAL_CITY.pin_color
      , minor_color: NON_HOVER_COLOR
      , minor_hover: HOVER_COLOR
      , normal_opacity: NON_HOVER_OPACITY
    }

    var coquitlam_options = {
      append_to_id: 'coquitlam_id'
      , marker_icon_title: COQUITLAM.title_text
      , main_color: COQUITLAM.pin_color
      , minor_color: NON_HOVER_COLOR
      , minor_hover: HOVER_COLOR
      , normal_opacity: NON_HOVER_OPACITY
    }

    SvgButtons.do_delete(delete_malls_options)
    SvgButtons.upMarkerHover(coquitlam_options)
    SvgButtons.upMarkerHover(central_city_options)
    SvgButtons.upMarkerHover(pacific_options)
    SvgButtons.upMarkerHover(oakridge_options)
    SvgButtons.upMarkerHover(park_royal_options)
    SvgButtons.upMarkerHover(capilano_options)
    SvgButtons.upMarkerHover(royal_city_options)
    SvgButtons.upMarkerHover(richmond_options)
    SvgButtons.upMarkerHover(lansdowne_options)
    SvgButtons.upMarkerHover(aberdeen_options)
    SvgButtons.upMarkerHover(lougheed_options)
    SvgButtons.upMarkerHover(brentwood_options)
    SvgButtons.upMarkerHover(metropolis_options)
    SvgButtons.upMarkerHover(guildford_options)
  }

  function mallDrags() {
    mallDragStart('coquitlam_id', COQUITLAM)
    mallDragStart('central_city_id', CENTRAL_CITY)
    mallDragStart('pacific_id', PACIFIC)
    mallDragStart('oakridge_id', OAKRIDGE)
    mallDragStart('park_royal_id', PARK_ROYAL)
    mallDragStart('capilano_id', CAPILANO)
    mallDragStart('royal_city_id', ROYAL_CITY)
    mallDragStart('richmond_id', RICHMOND)
    mallDragStart('lansdowne_id', LANSDOWNE)
    mallDragStart('aberdeen_id', ABERDEEN)
    mallDragStart('lougheed_id', LOUGHEED)
    mallDragStart('brentwood_id', BRENTWOOD)
    mallDragStart('metropolis_id', METROPOLIS)
    mallDragStart('guildford_id', GUILDFORD)
  }

  mallIcons()
  mallDrags()

  return {
    dropOnMallDelete: dropOnMallDelete
  }

})()