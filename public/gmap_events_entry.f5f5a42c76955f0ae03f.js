var GLOBAL_WEBPACK = GLOBAL_WEBPACK || {}; GLOBAL_WEBPACK["gmap_events_entry"] =
webpackJsonpGLOBAL_WEBPACK__name_([4],{

/***/ 1:
/***/ (function(module, exports) {

module.exports = React;

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// gmap_events_entry.jsx

var _gmapDragdropReact = __webpack_require__(0);

var VANCOUVER = { lat: 49.27324752004365, lng: -123.1184429292939, title_text: "Vancouver" };
var RICHMOND = { lat: 49.16650744083447, lng: -123.11981622030953, title_text: "Richmond" };
var BURNABY = { lat: 49.24904940098245, lng: -122.99072686484078, title_text: "Burnaby" };
var NEW_WESTMINSTER = { lat: 49.21138429632658, lng: -122.91770640661935, title_text: "New Westminster" };
var COQUITLAM = { lat: 49.285790021849046, lng: -122.79685679724435, title_text: "Coquitlam" };
var SURREY = { lat: 49.17952591962596, lng: -122.85865489294747, title_text: "Surrey" };
var NORTH_VANCOUVER = { lat: 49.323845935661964, lng: -123.0742615824006, title_text: "North Vancouver" };
var WEST_VANCOUVER = { lat: 49.33816525290107, lng: -123.16283885290841, title_text: "West Vancouver" };
var PORT_MOODY = { lat: 49.28489423464641, lng: -122.87376109411935, title_text: "Port Moody" };
var PORT_COQUITLAM = { lat: 49.25532412674462, lng: -122.77831736853341, title_text: "Port Coquitlam" };

var events_locations = [VANCOUVER, RICHMOND, BURNABY, NEW_WESTMINSTER, COQUITLAM, SURREY, NORTH_VANCOUVER, WEST_VANCOUVER, PORT_MOODY, PORT_COQUITLAM];

var event_options = {

  onReady: function onReady(e) {
    var gmap_event = e.gmap_params.gmap_event;

    var container_id = gmap_event._gmapDragDrop_vars.container_id;
    console.log("onReady : in div with id of '" + container_id + "' is ready");
  },

  onCenterChanged: function onCenterChanged(e) {
    var _e$gmap_params = e.gmap_params,
        moved_center = _e$gmap_params.moved_center,
        gmap_event = _e$gmap_params.gmap_event;

    console.log("onCenterChanged : at " + moved_center.lat + ", " + moved_center.lng, gmap_event._object_type);
    return true;
  },

  onZoomChanged: function onZoomChanged(e) {
    var _e$gmap_params2 = e.gmap_params,
        map_zoom = _e$gmap_params2.map_zoom,
        gmap_event = _e$gmap_params2.gmap_event;

    console.log("onZoomChanged : with has a new zoom of " + map_zoom, gmap_event._object_type);
    return true;
  },

  onMouseMove: function onMouseMove(e) {
    var gmap_event = e.gmap_params.gmap_event;

    var rand_33 = Math.floor(Math.random() * 33);
    if (rand_33 === 0) {
      var latLng = e.latLng,
          pageX = e.pageX,
          pageY = e.pageY;

      var lat = latLng.lat();
      var lng = latLng.lng();
      console.log("onMouseMove (of 1/33) : at " + lat + "," + lng + "  " + pageX + "," + pageY, gmap_event._object_type);
    }
  },

  onDoubleClick: function onDoubleClick(e) {
    var gmap_event = e.gmap_params.gmap_event;
    var latLng = e.latLng,
        pixel = e.pixel;

    var lat = latLng.lat();
    var lng = latLng.lng();
    console.log("onDoubleClick : at " + lat + "," + lng + "  " + pixel.x + "," + pixel.y);
    gmap_event.locationAdd(latLng);
  },

  onAdd: function onAdd(e) {
    var _e$gmap_params3 = e.gmap_params,
        location_data = _e$gmap_params3.location_data,
        gmap_event = _e$gmap_params3.gmap_event;

    console.log('onAdd : with this data', gmap_event._object_type);
    console.dir(location_data);
    return location_data;
  },

  onAfterAdd: function onAfterAdd(e) {
    var _e$gmap_params4 = e.gmap_params,
        location_data = _e$gmap_params4.location_data,
        gmap_event = _e$gmap_params4.gmap_event;

    console.log('onAfterAdd : with this data', gmap_event._object_type);
    console.dir(location_data);
  },

  onRightClick: function onRightClick(e) {
    var gmap_event = e.gmap_params.gmap_event;
    var latLng = e.latLng,
        pixel = e.pixel;

    var lat = latLng.lat();
    var lng = latLng.lng();
    console.log("onRightClick : at " + lat + "," + lng + "  " + pixel.x + "," + pixel.y, gmap_event._object_type);
  },

  onRightClickMarker: function onRightClickMarker(e) {
    var _e$gmap_params5 = e.gmap_params,
        location_id = _e$gmap_params5.location_id,
        gmap_event = _e$gmap_params5.gmap_event;

    var marker_data = gmap_event.locationGet(location_id);
    console.log('onRightClickMarker : with this data');
    console.dir(marker_data);
    gmap_event.locationDelete(location_id);
  },

  onDelete: function onDelete(e) {
    var _e$gmap_params6 = e.gmap_params,
        location_data = _e$gmap_params6.location_data,
        gmap_event = _e$gmap_params6.gmap_event;

    console.log('onDelete : with this data', gmap_event._object_type);
    console.dir(location_data);
    return true;
  },

  onDragStartMarker: function onDragStartMarker(e) {
    var _e$gmap_params7 = e.gmap_params,
        location_data = _e$gmap_params7.location_data,
        gmap_event = _e$gmap_params7.gmap_event;

    location_data.title_text = 'onDragStartMarker : ' + location_data.title_text;
    console.log('onDragStartMarker : with this data', gmap_event._object_type);
    return location_data;
  },

  onDragMarker: function onDragMarker(e) {
    var _e$gmap_params8 = e.gmap_params,
        start_lat_lng = _e$gmap_params8.start_lat_lng,
        location_id = _e$gmap_params8.location_id,
        page_x = _e$gmap_params8.page_x,
        page_y = _e$gmap_params8.page_y,
        gmap_event = _e$gmap_params8.gmap_event;

    console.log('onDragMarker :', start_lat_lng, location_id, page_x, page_y, gmap_event._object_type);
  },

  onDragEndMarker: function onDragEndMarker(e) {
    var _e$gmap_params9 = e.gmap_params,
        from_location = _e$gmap_params9.from_location,
        gmap_event = _e$gmap_params9.gmap_event;

    console.log('onDragEndMarker : with this data', gmap_event._object_type);
    console.dir(from_location);
  },

  onDragDrop: function onDragDrop(e) {
    var _e$gmap_params10 = e.gmap_params,
        location_data = _e$gmap_params10.location_data,
        gmap_event = _e$gmap_params10.gmap_event;

    console.log('onDragDrop : with this data', gmap_event._object_type);
    console.dir(location_data);
    if (location_data.from_lat === undefined) {
      location_data.title_text = 'onDragDrop 0km';
    } else {
      var from_location = { lat: location_data.from_lat, lng: location_data.from_lng };
      var to_location = { lat: location_data.lat, lng: location_data.lng };
      var km_distance = _gmapDragdropReact.KmsDistance.getKms(from_location, to_location);
      location_data.title_text = "onDragDrop " + km_distance;
    }
    return location_data;
  }

};

var GOOGLE_MAP_KEY = "AIzaSyCE3HSVtJ6yOEkHiBpyoR_iU00gqYgTkfk";
ReactDOM.render(React.createElement(_gmapDragdropReact.GmapDragDrop, {
  google_map_key: GOOGLE_MAP_KEY,
  map_locations: events_locations,
  map_options: event_options
}), document.getElementById('gmap-events-id'));

/***/ })

},[9]);