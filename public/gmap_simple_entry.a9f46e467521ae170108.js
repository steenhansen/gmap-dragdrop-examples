var GLOBAL_WEBPACK = GLOBAL_WEBPACK || {}; GLOBAL_WEBPACK["gmap_simple_entry"] =
webpackJsonpGLOBAL_WEBPACK__name_([3],{

/***/ 1:
/***/ (function(module, exports) {

module.exports = React;

/***/ }),

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _gmapDragdropReact = __webpack_require__(0);

var CYPRESS = { lat: 49.39659076296729, lng: -123.2044346158587, can_move: false, title_text: "  Cypress Mountain" };
var GROUSE = { lat: 49.38013738002717, lng: -123.08255503822198, can_move: false, title_text: "  Grouse Mountain" };
var SEYMOUR = { lat: 49.36750710612791, lng: -122.94865916419855, can_move: false, title_text: "  Mount Seymour" };

var GOOGLE_MAP_KEY = "AIzaSyCE3HSVtJ6yOEkHiBpyoR_iU00gqYgTkfk";

ReactDOM.render(React.createElement(_gmapDragdropReact.GmapDragDrop, {
        google_map_key: GOOGLE_MAP_KEY,
        map_locations: [CYPRESS, GROUSE, SEYMOUR],
        map_options: { pin_svg: _gmapDragdropReact.MarkerIcons.SKI_ICON_PATH, gestureHandling: 'none' }
}), document.getElementById('gmap-simple-id'));

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ })

},[12]);