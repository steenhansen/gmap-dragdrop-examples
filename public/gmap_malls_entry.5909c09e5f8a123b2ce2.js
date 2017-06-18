var GLOBAL_WEBPACK = GLOBAL_WEBPACK || {}; GLOBAL_WEBPACK["gmap_malls_entry"] =
webpackJsonpGLOBAL_WEBPACK__name_([0],[
/* 0 */,
/* 1 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// malls_data.jsx

var CAN_MOVE_MALLS = true;

var RICHMOND_COLOR = "#faa";
var LANSDOWNE_COLOR = "#f55";
var ABERDEEN_COLOR = "#f00";
var PARK_ROYAL_COLOR = "#0f0";
var CAPILANO_COLOR = "#5f5";
var METROPOLIS_COLOR = "#00f";
var BRENTWOOD_COLOR = "#55f";
var LOUGHEED_COLOR = "#aaf";
var CENTRAL_CITY_COLOR = "#ff0";
var GUILDFORD_COLOR = "#ff5";
var PACIFIC_COLOR = "#0ff";
var OAKRIDGE_COLOR = "#5ff";
var ROYAL_CITY_COLOR = "#f0f";
var COQUITLAM_COLOR = "#888";

var GUILDFORD = {
  location_id: "GUILDFORD",
  lat: 49.190394623255415,
  lng: -122.80325320059376,
  pin_color: GUILDFORD_COLOR,
  title_text: "Guildford",
  can_move: CAN_MOVE_MALLS
};

var CENTRAL_CITY = {
  location_id: "CENTRAL_CITY",
  lat: 49.18722518632946,
  lng: -122.84885075384693,
  pin_color: CENTRAL_CITY_COLOR,
  title_text: "Central City",
  can_move: CAN_MOVE_MALLS
};

var COQUITLAM = {
  location_id: "COQUITLAM",
  lat: 49.28033907405998,
  lng: -122.79818918997364,
  pin_color: COQUITLAM_COLOR,
  title_text: "Coquitlam",
  can_move: CAN_MOVE_MALLS
};

var LOUGHEED = {
  location_id: "LOUGHEED",
  lat: 49.25123553530833,
  lng: -122.89551046187,
  pin_color: LOUGHEED_COLOR,
  title_text: "Lougheed",
  can_move: CAN_MOVE_MALLS
};

var BRENTWOOD = {
  location_id: "BRENTWOOD",
  lat: 49.26825032258869,
  lng: -123.00019171530323,
  pin_color: BRENTWOOD_COLOR,
  title_text: "Brentwood",
  can_move: CAN_MOVE_MALLS
};

var METROPOLIS = {
  location_id: "METROPOLIS",
  lat: 49.22626298069146,
  lng: -122.99864676291065,
  pin_color: METROPOLIS_COLOR,
  title_text: "Metropolis",
  can_move: CAN_MOVE_MALLS
};

var ROYAL_CITY = {
  location_id: "ROYAL_CITY",
  lat: 49.21303366500012,
  lng: -122.92149139788904,
  pin_color: ROYAL_CITY_COLOR,
  title_text: "Royal City",
  can_move: CAN_MOVE_MALLS
};

var RICHMOND = {
  location_id: "RICHMOND",
  lat: 49.165543056364825,
  lng: -123.13828898814478,
  pin_color: RICHMOND_COLOR,
  title_text: "Richmond Centre",
  can_move: CAN_MOVE_MALLS
};

var LANSDOWNE = {
  location_id: "LANSDOWNE",
  lat: 49.17523728713617,
  lng: -123.1327636375741,
  pin_color: LANSDOWNE_COLOR,
  title_text: "Lansdowne",
  can_move: CAN_MOVE_MALLS
};

var ABERDEEN = {
  location_id: "ABERDEEN",
  lat: 49.18394158933542,
  lng: -123.13495232013025,
  pin_color: ABERDEEN_COLOR,
  title_text: "Aberdeen",
  can_move: CAN_MOVE_MALLS
};

var PARK_ROYAL = {
  location_id: "PARK_ROYAL",
  lat: 49.326145309414855,
  lng: -123.13733412173548,
  pin_color: PARK_ROYAL_COLOR,
  title_text: "Park Royal",
  can_move: CAN_MOVE_MALLS
};

var CAPILANO = {
  location_id: "CAPILANO",
  lat: 49.321655891212075,
  lng: -123.09966517833033,
  pin_color: CAPILANO_COLOR,
  title_text: "Capilano",
  can_move: CAN_MOVE_MALLS
};

var PACIFIC = {
  location_id: "PACIFIC",
  lat: 49.28224054113661,
  lng: -123.11931504157343,
  pin_color: PACIFIC_COLOR,
  title_text: "Pacific Centre",
  can_move: CAN_MOVE_MALLS
};

var OAKRIDGE = {
  location_id: "OAKRIDGE",
  lat: 49.23249560178528,
  lng: -123.11870886233606,
  pin_color: OAKRIDGE_COLOR,
  title_text: "Oakridge Centre",
  can_move: CAN_MOVE_MALLS
};

module.exports = {
  GUILDFORD: GUILDFORD, CENTRAL_CITY: CENTRAL_CITY, COQUITLAM: COQUITLAM, LOUGHEED: LOUGHEED, BRENTWOOD: BRENTWOOD, METROPOLIS: METROPOLIS, ROYAL_CITY: ROYAL_CITY, RICHMOND: RICHMOND,
  LANSDOWNE: LANSDOWNE, ABERDEEN: ABERDEEN, PARK_ROYAL: PARK_ROYAL, CAPILANO: CAPILANO, PACIFIC: PACIFIC, OAKRIDGE: OAKRIDGE
};

/***/ }),
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// gmap_malls_entry.jsx

var _gmapDragdropReact = __webpack_require__(0);

var malls_data = __webpack_require__(6);var PACIFIC = malls_data.PACIFIC,
    OAKRIDGE = malls_data.OAKRIDGE,
    PARK_ROYAL = malls_data.PARK_ROYAL,
    CAPILANO = malls_data.CAPILANO,
    RICHMOND = malls_data.RICHMOND,
    LANSDOWNE = malls_data.LANSDOWNE,
    ABERDEEN = malls_data.ABERDEEN,
    LOUGHEED = malls_data.LOUGHEED,
    BRENTWOOD = malls_data.BRENTWOOD,
    METROPOLIS = malls_data.METROPOLIS,
    GUILDFORD = malls_data.GUILDFORD,
    CENTRAL_CITY = malls_data.CENTRAL_CITY,
    COQUITLAM = malls_data.COQUITLAM,
    ROYAL_CITY = malls_data.ROYAL_CITY;


var new_input_id;

var mall_options = {
  max_zoom: 13,
  street_view: false,
  zoom_control: false,
  map_type_control: false,
  map_styles: _gmapDragdropReact.MapStyles.NIGHT_STYLE,
  onDragDrop: function onDragDrop(e) {
    var _e$gmap_params = e.gmap_params,
        location_data = _e$gmap_params.location_data,
        gmap_event = _e$gmap_params.gmap_event;

    new_input_id = gmap_event._unixTimeId();
    if (location_data.showing_info_window !== undefined) {
      location_data.title_text = gmap_event.labelInput(location_data.location_id, 'New Location', 'gmap_malls', new_input_id);
    }
    return location_data;
  },
  onAfterAdd: function onAfterAdd() {
    //const {location_data, gmap_event} = e.gmap_params
    if (document.getElementById(new_input_id) !== null) {
      document.getElementById(new_input_id).focus();
    }
  },
  onDoubleClick: function onDoubleClick(e) {
    var gmap_event = e.gmap_params.gmap_event;
    var latLng = e.latLng;

    gmap_event.locationAdd(latLng);
  }
};

var mall_locations = [PACIFIC, OAKRIDGE];
var GOOGLE_MAP_KEY = "AIzaSyCE3HSVtJ6yOEkHiBpyoR_iU00gqYgTkfk";
var gmap_malls = ReactDOM.render(React.createElement(_gmapDragdropReact.GmapDragDrop, {
  google_map_key: GOOGLE_MAP_KEY,
  lat_center: 49.275314,
  lng_center: -122.8547288,
  map_locations: mall_locations,
  map_options: mall_options
}), document.getElementById('gmap-mall-id'));

module.exports = {
  gmap_malls: gmap_malls, GmapDragDrop: _gmapDragdropReact.GmapDragDrop, SvgButtons: _gmapDragdropReact.SvgButtons,
  GUILDFORD: GUILDFORD, CENTRAL_CITY: CENTRAL_CITY, COQUITLAM: COQUITLAM, LOUGHEED: LOUGHEED, BRENTWOOD: BRENTWOOD, METROPOLIS: METROPOLIS, ROYAL_CITY: ROYAL_CITY,
  RICHMOND: RICHMOND, LANSDOWNE: LANSDOWNE, ABERDEEN: ABERDEEN, PARK_ROYAL: PARK_ROYAL, CAPILANO: CAPILANO, PACIFIC: PACIFIC, OAKRIDGE: OAKRIDGE
};

/***/ })
],[11]);