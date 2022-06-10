"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactDom = _interopRequireDefault(require("react-dom"));

var _react = _interopRequireDefault(require("react"));

var _gmapDragdropReact = require("gmap-dragdrop-react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function hikeMap(div_id, hike_data, the_options) {
  function drawShapeLine(from_location, to_locations) {
    var line_pattern = [];

    if (from_location.lat !== undefined) {
      line_pattern.push(from_location);

      var _iterator = _createForOfIteratorHelper(to_locations),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var a_to_location = _step.value;
          var order_index = a_to_location.order_index;
          line_pattern[order_index] = a_to_location;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }

    return line_pattern;
  }

  function getOutingDistanceLine(lat_lng_obj) {
    var next_location_id = 0;
    var order_index = lat_lng_obj.order_index;

    if (order_index > 0) {
      var previous_index = order_index - 1;
      var next_index = order_index + 1;
      var colored_locations = this.filterByPropertyValue("pin_color", lat_lng_obj.pin_color);

      for (var location_index in colored_locations) {
        var a_location = colored_locations[location_index];

        if (previous_index === a_location.order_index) {
          lat_lng_obj.extra_text = _gmapDragdropReact.KmsDistance.getKms(lat_lng_obj, a_location);
        } else if (next_index === a_location.order_index) {
          next_location_id = a_location.location_id;
        }
      }
    }

    return next_location_id;
  }

  function generateMemberLine() {}

  var hike_locations = Object.values(hike_data);
  var lat_start = hike_locations[0][0].group_lat;
  var lng_start = hike_locations[0][0].group_lng;
  var zoom_start = hike_locations[0][0].group_zoom;
  var PIN_SVG_NO_HOLE = "m256,0c-70.703,0 -128,57.313 -128,128c0,51.5 30.563,95.563 74.375,115.875l53.625,268.125l53.625,-268.125c43.813,-20.312 74.375,-64.375 74.375,-115.875c0,-70.687 -57.312,-128 -128,-128z";
  var BLUE_WATER = [{
    featureType: "administrative",
    elementType: "labels.text.fill",
    stylers: [{
      color: "#444444"
    }]
  }, {
    featureType: "landscape",
    elementType: "all",
    stylers: [{
      color: "#f2f2f2"
    }]
  }, {
    featureType: "poi",
    elementType: "all",
    stylers: [{
      visibility: "off"
    }]
  }, {
    featureType: "road",
    elementType: "all",
    stylers: [{
      saturation: -100
    }, {
      lightness: 45
    }]
  }, {
    featureType: "road.highway",
    elementType: "all",
    stylers: [{
      visibility: "simplified"
    }]
  }, {
    featureType: "road.arterial",
    elementType: "labels.icon",
    stylers: [{
      visibility: "off"
    }]
  }, {
    featureType: "transit",
    elementType: "all",
    stylers: [{
      visibility: "off"
    }]
  }, {
    featureType: "water",
    elementType: "all",
    stylers: [{
      color: "#46bcec"
    }, {
      visibility: "on"
    }]
  }];
  var hike_options = {
    change_rebounding: false,
    init_zoom: zoom_start,
    pin_scale: 0.05,
    pin_svg: PIN_SVG_NO_HOLE,
    map_styles: BLUE_WATER,
    lat_center: lat_start,
    lng_center: lng_start
  };

  var gmap_hike = _reactDom["default"].render( /*#__PURE__*/_react["default"].createElement(_gmapDragdropReact.GmapGroups, {
    google_map_key: GLOBAL_WEBPACK.GOOG_MAP_API,
    map_locations: hike_locations,
    map_options: hike_options
  }), document.getElementById("gmap-hikes"));

  gmap_hike.drawShape = drawShapeLine;
  gmap_hike.getOutingDistance = getOutingDistanceLine;
  gmap_hike.generateMember = generateMemberLine;

  function clearHikes() {
    gmap_hike.locationsClearAll();
  }

  var showNumberHikes = function showNumberHikes() {
    var locations_div = document.getElementById("number-hikes");
    var number_locations = gmap_hike.numberLocations();

    if (number_locations === 0) {
      number_locations = "";
    }

    locations_div.innerHTML = number_locations + " activities";
  };

  function reSizeHikes(e_ignored) {
    var number_locations = gmap_hike.numberLocations();

    if (number_locations > 0) {
      gmap_hike.reboundMap();
    }
  }

  function hideHikesInfo() {
    var activity_locations = gmap_hike.filterByUndefProperty("group_type");

    for (var location_index in activity_locations) {
      var a_location = activity_locations[location_index];
      gmap_hike.locationHideInfo(a_location.location_id);
    }
  }

  function showHikesInfo() {
    var activity_locations = gmap_hike.locationsGetAll();

    for (var location_index in activity_locations) {
      var a_location = activity_locations[location_index];
      gmap_hike.locationShowInfo(a_location.location_id);
    }
  } //////////////////////


  _gmapDragdropReact.SvgButtons.treeHover(the_options.BURKE);

  var burke_elem = document.getElementById("drag_burke");

  _gmapDragdropReact.SvgButtons.treeHover(the_options.ALOUETTE);

  var alloutte_elem = document.getElementById("drag_alloutte");
  alloutte_elem.ondragstart = gmap_hike.startDragFromOutside(ALOUETTE_HIKE);

  _gmapDragdropReact.SvgButtons.treeHover(the_options.SWAN);

  var swan_elem = document.getElementById("drag_swan");
  swan_elem.ondragstart = gmap_hike.startDragFromOutside(SWAN_HIKE);

  _gmapDragdropReact.SvgButtons.treeHover(the_options.BASTION);

  var bastion_elem = document.getElementById("drag_bastion");
  bastion_elem.ondragstart = gmap_hike.startDragFromOutside(BASTION_HIKE);
  setInterval(showNumberHikes, 1000);
  gmap_hike.clearHikes = clearHikes;
  gmap_hike.showNumberHikes = showNumberHikes;
  gmap_hike.reSizeHikes = reSizeHikes;
  gmap_hike.hideHikesInfo = hideHikesInfo;
  gmap_hike.showHikesInfo = showHikesInfo;
  clearHikes();
  reSizeHikes();
  hideHikesInfo();
  hideHikesInfo();
  gmap_hike.showHikesInfo();
  var clear_all_options = {
    append_to_id: "icon_all",
    marker_icon_title: "Delete all",
    main_color: "#888",
    minor_color: "#888",
    minor_hover: "#f00",
    normal_opacity: NON_HOVER_OPACITY_HIKE
  };
  var resize_options = {
    append_to_id: "icon_resize",
    marker_icon_title: "ReSize",
    main_color: "#888",
    minor_color: "#888",
    minor_hover: "#00f",
    normal_opacity: NON_HOVER_OPACITY_HIKE
  };
  var hide_options = {
    append_to_id: "icon_hide",
    marker_icon_title: "Hide Info",
    main_color: "#888",
    minor_color: "#888",
    minor_hover: "#00f",
    normal_opacity: NON_HOVER_OPACITY_HIKE
  };
  var show_options = {
    append_to_id: "icon_show",
    marker_icon_title: "Show Info",
    main_color: "#888",
    minor_color: "#888",
    minor_hover: "#0f0",
    normal_opacity: NON_HOVER_OPACITY_HIKE
  };
  var svg_buttons = _gmapDragdropReact.SvgButtons;
  svg_buttons.resizeHover(resize_options);
  svg_buttons.clear_all(clear_all_options);
  svg_buttons.resizeShowInfo(show_options);
  svg_buttons.resizeHideInfo(hide_options);
  return gmap_hike;
}

window.hikeMap = hikeMap;
var _default = hikeMap;
exports["default"] = _default;