"use strict";

var _gmap_activities_entry = _interopRequireDefault(require("./gmap_activities_entry"));

var _gmap_dynamic_entry = _interopRequireDefault(require("./gmap_dynamic_entry"));

var _gmap_events_entry = _interopRequireDefault(require("./gmap_events_entry"));

var _gmap_hike_entry = _interopRequireDefault(require("./gmap_hike_entry"));

var _gmap_malls_entry = _interopRequireDefault(require("./gmap_malls_entry"));

var _gmap_simple_entry = _interopRequireDefault(require("./gmap_simple_entry"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

module.exports = {
  activitiesMap: _gmap_activities_entry["default"],
  dynamicMap: _gmap_dynamic_entry["default"],
  eventsMap: _gmap_events_entry["default"],
  hikeMap: _gmap_hike_entry["default"],
  mallsMap: _gmap_malls_entry["default"],
  simpleMap: _gmap_simple_entry["default"]
};