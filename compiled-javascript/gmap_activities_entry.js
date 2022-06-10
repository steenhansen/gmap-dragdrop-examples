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

var GOOGLE_MAP_KEY = GLOBAL_WEBPACK.GOOG_MAP_API;

function activitiesMap(map_id, activity_locations) {
  var lat_start = activity_locations[0][0].group_lat;
  var lng_start = activity_locations[0][0].group_lng;
  var zoom_start = activity_locations[0][0].group_zoom;
  var activity_options = {
    change_rebounding: false,
    init_zoom: zoom_start,
    pin_scale: 0.05,
    lat_center: lat_start,
    lng_center: lng_start,
    pin_svg: PIN_SVG_NO_HOLE
  };

  function clearOutings() {
    gmap_activities.locationsClearAll();
  }

  function dropOnActivityDelete(event) {
    event.preventDefault();
    var delete_data = event.dataTransfer.getData("text");
    var marker_data = JSON.parse(delete_data);
    var location_id = marker_data.location_id;

    if (gmap_activities.locationExists(location_id)) {
      gmap_activities.deleteMember(marker_data);
    } else {
      throw 'Location id "' + location_id + '" does not exist on outing map';
    }
  }

  function setIdVal(id, new_value) {
    if (new_value) {
      try {
        document.getElementById(id).value = new_value;
      } catch (e) {
        console.log(e);
      }
    } else {
      document.getElementById(id).value = "";
    }
  }

  function getIdVal(id) {
    return document.getElementById(id).value;
  }

  function dropOnModify(event) {
    event.preventDefault();
    var in_data = event.dataTransfer.getData("text");
    var marker_data = JSON.parse(in_data);
    setIdVal("location-id", marker_data.location_id);
    setIdVal("location-lat", marker_data.lat);
    setIdVal("location-lng", marker_data.lng);
    setIdVal("location-color", marker_data.pin_color);
    setIdVal("location-svg", marker_data.marker_svg);
    setIdVal("location-outing", marker_data.group_type);
    setIdVal("location-title", marker_data.title_text);

    if (marker_data.content_text.indexOf("<input") > -1) {
      marker_data.content_text = "";
    }

    setIdVal("location-content", marker_data.content_text);
    setIdVal("location-extra", marker_data.extra_text);
    document.getElementById("dragging_modified_title").innerHTML = marker_data.title_text;
    document.getElementById("dragging_modified_content").innerHTML = marker_data.content_text;
    prepareModifyDrag();
  }

  function setSasamatOuting() {
    var sasamat_parameters = SASAMAT_OUTING;
    var sasamat_id = document.getElementById("drag-sasamat");
    sasamat_id.ondragstart = gmap_activities.startDragFromOutside(sasamat_parameters);
  }

  function setStevestonOuting() {
    var steveston_parameters = STEVESTON_OUTING;
    var steveston_id = document.getElementById("drag-steveston");
    steveston_id.ondragstart = gmap_activities.startDragFromOutside(steveston_parameters);
  }

  function setNorthShoreOuting() {
    var north_shore_parameters = NORTH_SHORE_OUTING;
    var north_shore_id = document.getElementById("drag-north-shore");
    north_shore_id.ondragstart = gmap_activities.startDragFromOutside(north_shore_parameters);
  }

  function setStanleyOuting() {
    var stanley_parameters = STANLEY_PARK_OUTING;
    var stanley_id = document.getElementById("drag-stanley");
    stanley_id.ondragstart = gmap_activities.startDragFromOutside(stanley_parameters);
  }

  var showNumberLocations = function showNumberLocations() {
    var locations_div = document.getElementById("number-activities");
    var number_locations = gmap_activities.numberLocations();

    if (number_locations === 0) {
      number_locations = "";
    }

    locations_div.innerHTML = number_locations + " activities";
  };

  function prepareModifyDrag(e_ignored) {
    var location_id = getIdVal("location-id");
    var location_outing = getIdVal("location-outing");

    if (location_outing === "undefined" || location_outing === "false" || location_outing === "") {
      location_outing = false;
    } else {
      location_outing = true;
    }

    var location_svg = getIdVal("location-svg");
    var location_lat = parseFloat(getIdVal("location-lat"));
    var location_lng = parseFloat(getIdVal("location-lng"));
    var location_color = getIdVal("location-color");
    var location_title = getIdVal("location-title");
    var location_content = getIdVal("location-content");
    var location_extra = getIdVal("location-extra");
    var modify_parameters = {
      location_id: location_id,
      group_type: location_outing,
      marker_svg: location_svg,
      lat: location_lat,
      lng: location_lng,
      pin_color: location_color,
      title_text: location_title,
      content_text: location_content,
      extra_text: location_extra
    };
    document.getElementById("dragging_modified_title").innerHTML = location_title;
    document.getElementById("dragging_modified_content").innerHTML = location_content;
    var mod_drag = document.getElementById("mod_drag");
    mod_drag.ondragstart = gmap_activities.startDragFromOutside(modify_parameters);
    mod_drag.style.display = "block";
  }

  function reSizeOutings(e_ignored) {
    var number_locations = gmap_activities.numberLocations();

    if (number_locations > 0) {
      gmap_activities.reboundMap();
    }
  }

  function hideOutingInfo() {
    var activity_locations = gmap_activities.filterByUndefProperty("group_type");

    for (var location_index in activity_locations) {
      var a_location = activity_locations[location_index];
      gmap_activities.locationHideInfo(a_location.location_id);
    }
  }

  function showOutingInfo() {
    var activity_locations = gmap_activities.locationsGetAll();

    for (var location_index in activity_locations) {
      var a_location = activity_locations[location_index];
      gmap_activities.locationShowInfo(a_location.location_id);
    }

    gmap_activities.reboundMap();
  }

  function drawShapeStar(from_location, to_locations) {
    var star_pattern = [];

    if (from_location.lat !== undefined) {
      star_pattern.push(from_location);

      var _iterator = _createForOfIteratorHelper(to_locations),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var a_to_location = _step.value;
          star_pattern.push(a_to_location);
          star_pattern.push(from_location);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }

    return star_pattern;
  }

  function getOutingDistanceStar(lat_lng_obj) {
    var a_location;
    var colored_locations = this.filterByPropertyValue("pin_color", lat_lng_obj.pin_color);

    if (colored_locations.length === 0) {
      return false;
    }

    for (var location_index in colored_locations) {
      a_location = colored_locations[location_index];

      if (a_location.group_type) {
        break;
      }
    }

    lat_lng_obj.extra_text = _gmapDragdropReact.KmsDistance.getKms(lat_lng_obj, a_location);
    console.log(" lat_lng_obj.extra_text ", lat_lng_obj.extra_text);
    return 0; // DO_NOT_PROCESS_NEXT_ITEM_IN_GROUP
  }

  function generateMemberStar(lat_lng_obj) {
    var outing_color = lat_lng_obj.pin_color;
    var new_lat_lng = Object.assign({}, lat_lng_obj);

    var location_id = this._unixTimeId();

    var input_id = this._unixTimeId();

    delete new_lat_lng.group_type;
    new_lat_lng.content_text = this.labelInput(location_id, "Activity", "gmap_activities", input_id);
    new_lat_lng.title_text = "";
    new_lat_lng.location_id = location_id;
    new_lat_lng.pin_color = outing_color;
    delete new_lat_lng.marker_svg;
    this.getOutingDistance(new_lat_lng);
    this.locationAdd(new_lat_lng);
    this.drawPolyline(outing_color);
    document.getElementById(input_id).focus();
  }

  var gmap_activities = _reactDom["default"].render( /*#__PURE__*/_react["default"].createElement(_gmapDragdropReact.GmapGroups, {
    google_map_key: GOOGLE_MAP_KEY,
    map_locations: activity_locations,
    map_options: activity_options
  }), document.getElementById(map_id));

  gmap_activities.drawShape = drawShapeStar;
  gmap_activities.getOutingDistance = getOutingDistanceStar;
  gmap_activities.generateMember = generateMemberStar;
  gmap_activities.SvgButtons = _gmapDragdropReact.SvgButtons;
  gmap_activities.GmapDragDrop = _gmapDragdropReact.GmapDragDrop;
  gmap_activities.NORTH_SHORE_OUTING = NORTH_SHORE_OUTING;
  gmap_activities.SASAMAT_OUTING = SASAMAT_OUTING;
  gmap_activities.STEVESTON_OUTING = STEVESTON_OUTING;
  gmap_activities.STANLEY_PARK_OUTING = STANLEY_PARK_OUTING;
  gmap_activities.clearOutings = clearOutings;
  gmap_activities.dropOnActivityDelete = dropOnActivityDelete;
  gmap_activities.setIdVal = setIdVal;
  gmap_activities.getIdVal = getIdVal;
  gmap_activities.dropOnModify = dropOnModify;
  gmap_activities.prepareModifyDrag = prepareModifyDrag;
  gmap_activities.reSizeOutings = reSizeOutings;
  gmap_activities.hideOutingInfo = hideOutingInfo;
  gmap_activities.showOutingInfo = showOutingInfo;
  setInterval(showNumberLocations, 1000);
  setSasamatOuting();
  setStevestonOuting();
  setNorthShoreOuting();
  setStanleyOuting(); /// NB these are not yet connected to any objects, just free floating, this is undefined

  var svg_buttons = _gmapDragdropReact.SvgButtons;
  svg_buttons.do_delete(delete_options);
  svg_buttons.clear_all(clear_all_activities);
  svg_buttons.resizeHover(resize_activities);
  svg_buttons.resizeHideInfo(hide_activities);
  svg_buttons.resizeShowInfo(show_activities);
  svg_buttons.do_edit(edit_options);
  svg_buttons.upMarkerHover(drag_edit_options);
  svg_buttons.orcaHover(steveston_options);
  svg_buttons.swimHover(sasamat_options);
  svg_buttons.waterHover(north_shore_options);
  svg_buttons.parkHover(stanley_options);
  return gmap_activities;
}

window.activitiesMap = activitiesMap;
var _default = activitiesMap;
exports["default"] = _default;