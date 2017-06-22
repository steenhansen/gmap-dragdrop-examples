'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _GmapDragDrop2 = require('./GmapDragDrop.js');

var _GmapDragDrop3 = _interopRequireDefault(_GmapDragDrop2);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var GmapGroups = function (_GmapDragDrop) {
  _inherits(GmapGroups, _GmapDragDrop);

  _createClass(GmapGroups, [{
    key: 'groupAdd',
    value: function groupAdd(latLng, gmap_var_name) {
      var new_random_color = this.newRandomColor();
      var location_id = this._unixTimeId();
      var content_text = this.labelInput(location_id, 'Outing', gmap_var_name);
      var group_location = {
        lat: latLng.lat(),
        lng: latLng.lng(),

        group_lat: latLng.lat(),
        group_lng: latLng.lng(),

        group_type: true,
        location_id: location_id,
        pin_color: new_random_color,
        content_text: content_text,
        order_index: 0,
        group_zoom: 13
      };
      this.locationAdd(group_location);
      this.drawPolyline(new_random_color);
    }
  }, {
    key: 'newRandomColor',
    value: function newRandomColor() {
      var have_unique_color = void 0,
          random_color = void 0;
      do {
        random_color = '#' + Math.floor(Math.random() * 16777215).toString(16);
        have_unique_color = true;
        for (var pin_color in this._gmapGroup_vars.group_colors[pin_color]) {
          if (random_color === pin_color) {
            have_unique_color = false;
          }
        }
      } while (!have_unique_color);
      return random_color;
    }
  }]);

  function GmapGroups(props) {
    _classCallCheck(this, GmapGroups);

    var _this = _possibleConstructorReturn(this, (GmapGroups.__proto__ || Object.getPrototypeOf(GmapGroups)).call(this, props));

    _this._gmapGroup_vars = {
      group_colors: {},
      group_polylines: {},
      next_location_id: 0
    };

    _this._object_type = 'GmapGroups - ' + _this.state.map_options.sub_type;
    var all_activities = props.map_locations;
    var flattened_activities = [].concat.apply([], all_activities);
    _this._gmapDragDrop_vars.map_positions = flattened_activities;
    for (var location_index in flattened_activities) {
      var a_location = flattened_activities[location_index];
      var pin_color = a_location.pin_color;
      _this._gmapGroup_vars.group_colors[pin_color] = pin_color;
    }
    _this.state.map_options.onDragDrop = _this.onDragDropGroup;
    _this.state.map_options.onDragEndMarker = _this.onDragEndMarkerGroup;
    _this.state.map_options.onAdd = _this.onAddGroup;
    _this.state.map_options.onRightClickMarker = _this.onRightClickMarker;
    return _this;
  }

  _createClass(GmapGroups, [{
    key: '_onIdle_googleListener',
    value: function _onIdle_googleListener(e) {
      var first_time_idle = _GmapDragDrop3.default.prototype._onIdle_googleListener.call(this, e);
      if (first_time_idle) {
        for (var color_index in this._gmapGroup_vars.group_colors) {
          this.drawPolyline(color_index);
        }
      }
    }
  }, {
    key: '_onDoubleClick_googleListener',
    value: function _onDoubleClick_googleListener(e) {
      _GmapDragDrop3.default.prototype._onDoubleClick_googleListener.call(this, e);
    }
  }, {
    key: '_onRightClick_googleListener',
    value: function _onRightClick_googleListener(e) {
      _GmapDragDrop3.default.prototype._onRightClick_googleListener.call(this, e);
    }
  }, {
    key: '_onZoomChanged_googleListener',
    value: function _onZoomChanged_googleListener(e) {
      _GmapDragDrop3.default.prototype._onZoomChanged_googleListener.call(this, e);
    }
  }, {
    key: '_onDropOnMap_react',
    value: function _onDropOnMap_react(e) {
      _GmapDragDrop3.default.prototype._onDropOnMap_react.call(this, e);
    }
  }, {
    key: '_onDragOver_react',
    value: function _onDragOver_react(e) {
      _GmapDragDrop3.default.prototype._onDragOver_react.call(this, e);
    }
  }, {
    key: '_onDragEnd_react',
    value: function _onDragEnd_react(e) {
      _GmapDragDrop3.default.prototype._onDragEnd_react.call(this, e);
    }
  }, {
    key: '_onMouseMove_react',
    value: function _onMouseMove_react(e) {
      _GmapDragDrop3.default.prototype._onMouseMove_react.call(this, e);
    }
  }, {
    key: '_onMouseDown_react',
    value: function _onMouseDown_react(e) {
      _GmapDragDrop3.default.prototype._onMouseDown_react.call(this, e);
    }
  }, {
    key: '_onMouseUp_react',
    value: function _onMouseUp_react(e) {
      _GmapDragDrop3.default.prototype._onMouseUp_react.call(this, e);
    }
  }, {
    key: '_onStartIeDrag',
    value: function _onStartIeDrag(e) {
      _GmapDragDrop3.default.prototype._onStartIeDrag.call(this, e);
    }
  }, {
    key: '_onDragStart_react',
    value: function _onDragStart_react(e) {
      _GmapDragDrop3.default.prototype._onDragStart_react.call(this, e);
    }
  }, {
    key: '_onDragEnd_Overlay',
    value: function _onDragEnd_Overlay(e) {
      _GmapDragDrop3.default.prototype._onDragEnd_Overlay.call(this, e);
    }
  }, {
    key: '_onMouseMoveOverlay',
    value: function _onMouseMoveOverlay(e) {
      _GmapDragDrop3.default.prototype._onMouseMoveOverlay.call(this, e);
    }
  }, {
    key: '_onMouseDownOverlay',
    value: function _onMouseDownOverlay(e) {
      _GmapDragDrop3.default.prototype._onMouseDownOverlay.call(this, e);
    }
  }, {
    key: '_onMouseDownOverlay',
    value: function _onMouseDownOverlay(e) {
      _GmapDragDrop3.default.prototype._onMouseDownOverlay.call(this, e);
    }
  }, {
    key: '_onMouseMove_googleListener',
    value: function _onMouseMove_googleListener(e) {
      _GmapDragDrop3.default.prototype._onMouseMove_googleListener.call(this, e);
    }
  }, {
    key: '_onMouseMove_react',
    value: function _onMouseMove_react(e) {
      _GmapDragDrop3.default.prototype._onMouseMove_react.call(this, e);
    }
  }, {
    key: '_onCenterChanged_googleListener',
    value: function _onCenterChanged_googleListener(e) {
      _GmapDragDrop3.default.prototype._onCenterChanged_googleListener.call(this, e);
    }
  }, {
    key: '_onZoomChanged_googleListener',
    value: function _onZoomChanged_googleListener(e) {
      _GmapDragDrop3.default.prototype._onZoomChanged_googleListener.call(this, e);
    }
  }, {
    key: 'drawPolyline',
    value: function drawPolyline(pin_color) {
      var activity_locations = [];
      var outing_location = {};
      var colored_locations = this.filterByPropertyValue('pin_color', pin_color);
      for (var location_index in colored_locations) {
        var a_location = colored_locations[location_index];
        if (a_location.group_type) {
          outing_location = a_location;
        } else {
          activity_locations.push(a_location);
        }
      }
      this.clearPolyline(pin_color);
      var group_lat_lng = void 0;
      if (outing_location.from_lat === undefined) {
        group_lat_lng = { lat: outing_location.lat, lng: outing_location.lng };
      } else {
        group_lat_lng = { lat: outing_location.from_lat, lng: outing_location.from_lng };
      }
      var colored_path = this.drawMembers(group_lat_lng, activity_locations, pin_color);
      this._gmapGroup_vars.group_polylines[pin_color] = colored_path;
    }
  }, {
    key: 'clearPolyline',
    value: function clearPolyline(pin_color) {
      if (this._gmapGroup_vars.group_polylines[pin_color] !== undefined && this._gmapGroup_vars.group_polylines[pin_color] !== null) {
        this._gmapGroup_vars.group_polylines[pin_color].setMap(null);
      }
    }
  }, {
    key: 'locationsClearAll',
    value: function locationsClearAll() {
      for (var location_id in this._gmapDragDrop_vars.location_lat_lngs) {
        this.locationDelete(location_id);
      }
      for (var pin_color in this._gmapGroup_vars.group_polylines) {
        this.clearPolyline(pin_color);
      }
      this._gmapGroup_vars.group_polylines = {};
    }
  }, {
    key: 'draggedInGroup',
    value: function draggedInGroup(lat_lng_obj) {
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
            var outing_map_center = { lat: a_location.group_lat, lng: a_location.group_lng };
            google_map.panTo(outing_map_center);
          }
        }
      }
      this.drawPolyline(pin_color);
    }
  }, {
    key: 'onDragDropGroup',
    value: function onDragDropGroup(e) {
      var location_data = e.gmap_params.location_data;

      if (Array.isArray(location_data)) {
        this.draggedInGroup(location_data);
        this.reboundMap(location_data);
        return false;
      } else if ('showing_info_window' in location_data) {
        if (location_data.group_type !== undefined) {
          if (location_data.group_type) {
            this.generateMember(location_data);
            return false;
          }
        }
        return location_data; // drag activity around
      } else {
        this.dragInModified(location_data);
        return false;
      }
    }
  }, {
    key: 'dragInModified',
    value: function dragInModified(lat_lng_obj) {
      lat_lng_obj.lat = lat_lng_obj.from_lat;
      lat_lng_obj.lng = lat_lng_obj.from_lng;
      delete lat_lng_obj['from_lat'];
      delete lat_lng_obj['from_lng'];
      this.locationModifyDirect(lat_lng_obj);
      this.drawPolyline(lat_lng_obj.pin_color);
      return false;
    }
  }, {
    key: 'deleteMember',
    value: function deleteMember(lat_lng_obj) {
      var colored_locations = this.filterByPropertyValue('pin_color', lat_lng_obj.pin_color);
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
    key: 'onAddGroup',
    value: function onAddGroup(e) {
      this._gmapGroup_vars.next_location_id = 0;
      var location_data = e.gmap_params.location_data;

      this._gmapGroup_vars.next_location_id = this.getOutingDistance(location_data);
      if (typeof location_data.lat === 'function') {
        try {
          throw new Error('Cannot add single locations in GmapGroups, only arrays');
        } catch (e) {
          console.log(e);
        }
      }
      return location_data;
    }
  }, {
    key: 'onDragEndMarkerGroup',
    value: function onDragEndMarkerGroup(e) {
      var from_location = e.gmap_params.from_location;

      if (this._gmapGroup_vars.next_location_id) {
        this._insideToInsideDrop(this._gmapGroup_vars.next_location_id);
      }
      if (from_location !== undefined) {
        this.drawPolyline(from_location.pin_color);
      }
    }
  }, {
    key: 'onRightClickMarker',
    value: function onRightClickMarker(e) {
      var location_id = e.gmap_params.location_id;

      this.locationShowInfo(location_id);
    }
  }, {
    key: 'drawMembers',
    value: function drawMembers(from_location, to_locations, pin_color) {
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
}(_GmapDragDrop3.default);

module.exports = GmapGroups;