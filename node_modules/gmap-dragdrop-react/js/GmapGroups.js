"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _GmapDragDrop2 = _interopRequireDefault(require("./GmapDragDrop.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var GMAP_GROUP_TYPE = "GmapGroups";

var GmapGroups = /*#__PURE__*/function (_GmapDragDrop) {
  _inherits(GmapGroups, _GmapDragDrop);

  var _super = _createSuper(GmapGroups);

  function GmapGroups(props) {
    var _this;

    _classCallCheck(this, GmapGroups);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "_gmapGroup_vars", {
      group_colors: {},
      group_polylines: {},
      next_location_id: 0
    });

    _this._object_type = GMAP_GROUP_TYPE;
    var all_activities = props.map_locations;
    var flattened_activities = [].concat.apply([], all_activities);
    _this._gmapDragDrop_vars.map_positions = flattened_activities;

    for (var location_index in flattened_activities) {
      var a_location = flattened_activities[location_index];
      var pin_color = a_location.pin_color;
      _this._gmapGroup_vars.group_colors[pin_color] = pin_color;
    }

    _this.state.map_options.onDragDrop = _this._onDragDropGroup;
    _this.state.map_options.onDragEndMarker = _this._onDragEndMarkerGroup;
    _this.state.map_options.onAdd = _this._onAddGroup;
    _this.state.map_options.onRightClickMarker = _this._onRightClickMarkerGroup;
    return _this;
  }

  _createClass(GmapGroups, [{
    key: "_onIdle_googleListener",
    value: function _onIdle_googleListener(e) {
      var first_time_idle = _GmapDragDrop2["default"].prototype._onIdle_googleListener.call(this, e);

      if (first_time_idle) {
        for (var color_index in this._gmapGroup_vars.group_colors) {
          this.drawPolyline(color_index);
        }
      }
    }
  }, {
    key: "_onDoubleClick_googleListener",
    value: function _onDoubleClick_googleListener(e) {
      _GmapDragDrop2["default"].prototype._onDoubleClick_googleListener.call(this, e);
    }
  }, {
    key: "_onRightClick_googleListener",
    value: function _onRightClick_googleListener(e) {
      _GmapDragDrop2["default"].prototype._onRightClick_googleListener.call(this, e);
    }
  }, {
    key: "_onZoomChanged_googleListener",
    value: function _onZoomChanged_googleListener(e) {
      _GmapDragDrop2["default"].prototype._onZoomChanged_googleListener.call(this, e);
    }
  }, {
    key: "_onDropOnMap_react",
    value: function _onDropOnMap_react(e) {
      _GmapDragDrop2["default"].prototype._onDropOnMap_react.call(this, e);
    }
  }, {
    key: "_onDragOver_react",
    value: function _onDragOver_react(e) {
      _GmapDragDrop2["default"].prototype._onDragOver_react.call(this, e);
    }
  }, {
    key: "_onDragEnd_react",
    value: function _onDragEnd_react(e) {
      _GmapDragDrop2["default"].prototype._onDragEnd_react.call(this, e);
    }
  }, {
    key: "_onMouseMove_react",
    value: function _onMouseMove_react(e) {
      _GmapDragDrop2["default"].prototype._onMouseMove_react.call(this, e);
    }
  }, {
    key: "_onMouseDown_react",
    value: function _onMouseDown_react(e) {
      _GmapDragDrop2["default"].prototype._onMouseDown_react.call(this, e);
    }
  }, {
    key: "_onMouseUp_react",
    value: function _onMouseUp_react(e) {
      _GmapDragDrop2["default"].prototype._onMouseUp_react.call(this, e);
    }
  }, {
    key: "_onStartIeDrag",
    value: function _onStartIeDrag(e) {
      _GmapDragDrop2["default"].prototype._onStartIeDrag.call(this, e);
    }
  }, {
    key: "_onDragStart_react",
    value: function _onDragStart_react(e) {
      _GmapDragDrop2["default"].prototype._onDragStart_react.call(this, e);
    }
  }, {
    key: "_onDragEnd_Overlay",
    value: function _onDragEnd_Overlay(e) {
      _GmapDragDrop2["default"].prototype._onDragEnd_Overlay.call(this, e);
    }
  }, {
    key: "_onMouseMoveOverlay",
    value: function _onMouseMoveOverlay(e) {
      _GmapDragDrop2["default"].prototype._onMouseMoveOverlay.call(this, e);
    }
  }, {
    key: "_onMouseDownOverlay",
    value: function _onMouseDownOverlay(e) {
      _GmapDragDrop2["default"].prototype._onMouseDownOverlay.call(this, e);
    }
  }, {
    key: "_onMouseMove_googleListener",
    value: function _onMouseMove_googleListener(e) {
      _GmapDragDrop2["default"].prototype._onMouseMove_googleListener.call(this, e);
    }
  }, {
    key: "_onCenterChanged_googleListener",
    value: function _onCenterChanged_googleListener(e) {
      _GmapDragDrop2["default"].prototype._onCenterChanged_googleListener.call(this, e);
    }
  }, {
    key: "drawPolyline",
    value: function drawPolyline(pin_color) {
      var activity_locations = [];
      var outing_location = {};
      var colored_locations = this.filterByPropertyValue("pin_color", pin_color);

      for (var location_index in colored_locations) {
        var a_location = colored_locations[location_index];

        if (a_location.group_type) {
          outing_location = a_location;
        } else {
          activity_locations.push(a_location);
        }
      }

      this._clearPolyline(pin_color);

      var group_lat_lng;

      if (outing_location.from_lat === undefined) {
        group_lat_lng = {
          lat: outing_location.lat,
          lng: outing_location.lng
        };
      } else {
        group_lat_lng = {
          lat: outing_location.from_lat,
          lng: outing_location.from_lng
        };
      }

      var colored_path = this._drawMembers(group_lat_lng, activity_locations, pin_color);

      this._gmapGroup_vars.group_polylines[pin_color] = colored_path;
    }
  }, {
    key: "_clearPolyline",
    value: function _clearPolyline(pin_color) {
      if (this._gmapGroup_vars.group_polylines[pin_color] !== undefined && this._gmapGroup_vars.group_polylines[pin_color] !== null) {
        this._gmapGroup_vars.group_polylines[pin_color].setMap(null);
      }
    }
  }, {
    key: "locationsClearAll",
    value: function locationsClearAll() {
      for (var location_id in this._gmapDragDrop_vars.location_lat_lngs) {
        this.locationDelete(location_id);
      }

      for (var pin_color in this._gmapGroup_vars.group_polylines) {
        this._clearPolyline(pin_color);
      }

      this._gmapGroup_vars.group_polylines = {};
    }
  }, {
    key: "_draggedInGroup",
    value: function _draggedInGroup(lat_lng_obj) {
      var google_map = this.getMap();

      for (var string_key in lat_lng_obj) {
        var integer_key = Number.parseInt(string_key);
        var valid_location = Number.isInteger(integer_key);

        if (valid_location) {
          var a_location = lat_lng_obj[string_key];
          var location_id = a_location.location_id;

          if (!this.locationExists(location_id)) {
            this.locationAdd(a_location);
          }

          var pin_color = a_location.pin_color;

          if (a_location.group_zoom) {
            google_map.setZoom(a_location.group_zoom);
          }

          if (a_location.group_lat) {
            var outing_map_center = {
              lat: a_location.group_lat,
              lng: a_location.group_lng
            };
            google_map.panTo(outing_map_center);
          }
        }
      }

      this.drawPolyline(pin_color);
    }
  }, {
    key: "_onDragDropGroup",
    value: function _onDragDropGroup(e) {
      var location_data = e.gmap_params.location_data;

      if (Array.isArray(location_data)) {
        this._draggedInGroup(location_data);

        this.reboundMap(location_data);
        return false;
      } else if ("showing_info_window" in location_data) {
        if (location_data.group_type !== undefined) {
          if (location_data.group_type) {
            this.generateMember(location_data);
            return false;
          }
        }

        return location_data; // drag activity around
      } else {
        this._dragInModified(location_data);

        return false;
      }
    }
  }, {
    key: "_dragInModified",
    value: function _dragInModified(lat_lng_obj) {
      lat_lng_obj.lat = lat_lng_obj.from_lat;
      lat_lng_obj.lng = lat_lng_obj.from_lng;
      delete lat_lng_obj["from_lat"];
      delete lat_lng_obj["from_lng"];
      this.locationModifyDirect(lat_lng_obj);
      this.drawPolyline(lat_lng_obj.pin_color);
      return false;
    }
  }, {
    key: "deleteMember",
    value: function deleteMember(lat_lng_obj) {
      var colored_locations = this.filterByPropertyValue("pin_color", lat_lng_obj.pin_color);
      var locations_in_outing = colored_locations.length;

      if (lat_lng_obj.group_type !== undefined && lat_lng_obj.group_type) {
        if (lat_lng_obj.group_type) {
          for (var location_index in colored_locations) {
            var a_location = colored_locations[location_index];

            this._removeLocation(a_location.location_id);
          }
        }
      } else {
        this._removeLocation(lat_lng_obj.location_id);
      }

      if (locations_in_outing > 0) {
        this.drawPolyline(lat_lng_obj.pin_color);
      }

      return true;
    }
  }, {
    key: "_onAddGroup",
    value: function _onAddGroup(e) {
      this._gmapGroup_vars.next_location_id = 0;
      var location_data = e.gmap_params.location_data;
      this._gmapGroup_vars.next_location_id = this.getOutingDistance(location_data);

      if (typeof location_data.lat === "function") {
        try {
          throw new Error("Cannot add single locations in GmapGroups, only arrays");
        } catch (e) {
          console.log(e);
        }
      }

      return location_data;
    }
  }, {
    key: "_onDragEndMarkerGroup",
    value: function _onDragEndMarkerGroup(e) {
      var from_location = e.gmap_params.from_location;

      if (this._gmapGroup_vars.next_location_id) {
        this._insideToInsideDrop(this._gmapGroup_vars.next_location_id);
      }

      if (from_location !== undefined) {
        this.drawPolyline(from_location.pin_color);
      }
    }
  }, {
    key: "_onRightClickMarkerGroup",
    value: function _onRightClickMarkerGroup(e) {
      var location_id = e.gmap_params.location_id;
      this.locationShowInfo(location_id);
    }
  }, {
    key: "_drawMembers",
    value: function _drawMembers(from_location, to_locations, pin_color) {
      var google_map = this.getMap();
      var pattern_shape = this.drawShape(from_location, to_locations);

      if (pattern_shape.length > 1) {
        var shape_path = new google.maps.Polyline({
          path: pattern_shape,
          strokeColor: pin_color,
          strokeOpacity: 0.3,
          strokeWeight: 1
        });
        shape_path.setMap(google_map);
        return shape_path;
      } else {
        return null;
      }
    }
  }]);

  return GmapGroups;
}(_GmapDragDrop2["default"]);

module.exports = GmapGroups;