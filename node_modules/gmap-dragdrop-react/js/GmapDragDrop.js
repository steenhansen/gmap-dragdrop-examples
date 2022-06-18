"use strict";

var _reactDom = _interopRequireDefault(require("react-dom"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _KmsDistance = _interopRequireDefault(require("./KmsDistance.js"));

var _reactClass = _interopRequireDefault(require("react-class"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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

// _not_use_strict_ie_gmapDragDrop() was copied from https://github.com/MihaiValentin/setDragImage-IE
function _not_use_strict_ie_gmapDragDrop(drag_image) {
  var ie_drag_css_class_name = IE_DRAG_CSS_CLASS_NAME;
  var ie_drag_pixels = IE_DRAG_PIXELS;
  var no_indent_ie_drag_css = "\n.".concat(ie_drag_css_class_name, " {\nbackground: url(").concat(drag_image.src, ") no-repeat #fff 0 0 !important;\nwidth: ").concat(ie_drag_pixels, "px !important;\nheight: 20px !important;\ntext-indent: -9999px !important;\nborder: 0 !important;\noutline: 0 !important;}\n.").concat(ie_drag_css_class_name, " * {\ndisplay: none !important; }");
  var ie_drag_styles = document.createElement("style");
  ie_drag_styles.innerText = no_indent_ie_drag_css;
  var ie_drag_style_element = document.getElementById(IE_DRAG_STYLE_ID_NAME);
  ie_drag_style_element.appendChild(ie_drag_styles);

  var ie_event_target = GmapDragDrop._getIeDragTarget();

  ie_event_target.classList.add(ie_drag_css_class_name);
  setTimeout(function () {
    ie_drag_style_element.removeChild(ie_drag_styles);
    ie_event_target.classList.remove(ie_drag_css_class_name);
  }, 0);
}

if (typeof DataTransfer !== "undefined") {
  if (typeof DataTransfer.prototype.setDragImage !== "function") {
    DataTransfer.prototype.setDragImage = _not_use_strict_ie_gmapDragDrop;
  }
}

var GMAP_DRAG_DROP_TYPE = "GmapDragDrop";
var PIN_TEXT_START = 0.8;
var PIN_SVG_H_W = 512;
var FIT_BOUNDS_PADDING = 100;
var IE_DRAG_PIXELS = 5;
var IE_DRAG_TOP_TIP_COLOR = "rgb(200,0,0)";
var GMAP_REACT_CONTAINER = "react__div_";
var GMAP_CONTAINER = "google__div_";
var DRAG_DIV_PREFIX = "gmap_drag__div_";
var IE_SVG_PREFIX = "gmap_drag__ie_";
var IE_DRAG_CSS_CLASS_NAME = "set-drag-image-ie--dragging-";
var IE_DRAG_STYLE_ID_NAME = "ie_drag_style__id_";
var IE_DRAG_DIV_ID_NAME = "ie_drag_div__id_";
var USE_SVG_ID = "use_svg__id_";
var USE_SYMBOL_ID = "svg_path_symbol__id_";
var DRAG_CANVAS_ID = "drag_canvas__id_";
var INSIDE_TO_INSIDE_MOVE = "INSIDE_TO_INSIDE_MOVE";
var ALLOWABLE_MARKER_DRIFT = 15;
var RIGHT_CLICK_BUTTON = 2;
var DRAG_FONT_HEIGHT = 10;
var DRAG_FONT = "Verdana";
var DRAG_FONT_RGBA = "rgba(0, 0, 0, 0.99)";
var GOOGLE_MAPS_API = "https://maps.googleapis.com/maps/api/js?key=";
var VERTICAL_PAN_FOR_MAP_REDRAW = 100000;
var HIDE_IE_DRAG_IMAGE = "-8888px";
var H_W_100_REL_STYLE = {
  position: "relative",
  height: "100%",
  width: "100%"
};
var DRAG_OVERLAY_STYLE = {
  position: "absolute",
  width: "100%",
  height: "100%",
  left: 0,
  top: 0,
  display: "none",
  cursor: "url(ie_drag_drop.cur),auto" //http://www.cursor.cc/?

};
var PIN_SVG_DEFAULT = "m255.5,511.07425c-17.90024,-179.00239 -89.5012,-196.90263 -89.5012,-268.50359a89.5012,89.5012 0 1 1 179.00239,0c0,71.60096 -71.60096,89.5012 -89.5012,268.50359l0.00001,0zm-17.90024,-268.50359a17.90024,17.90024 0 1 1 35.80048,0a17.90024,17.90024 0 1 1 -35.80048,0";
var DEFAULT_PNG_COLOR = "red";
var PNG_PIN_COLORS = {
  blue: "#6991FD",
  red: "#FD7567",
  purple: "#8E67FD",
  yellow: "#FEFC6C",
  green: "#00E64D"
};
var PNG_COLOR_NAMES = ["black", "blue", "circle", "cyan", "green", "grey", "pink", "purple", "rainbow", "red", "see-thru", "square", "stripe", "transparent", "yellow"];

var GmapDragDrop = /*#__PURE__*/function (_Component) {
  _inherits(GmapDragDrop, _Component);

  var _super = _createSuper(GmapDragDrop);

  function GmapDragDrop(props) {
    var _this;

    _classCallCheck(this, GmapDragDrop);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "_gmapDragDrop_vars", {
      current_page_x: 0,
      current_page_y: 0,
      last_marker_x: 0,
      last_marker_y: 0,
      center_lat_lng: {
        lat: 0,
        lng: 0
      },
      drag_start_pos: {
        lat: 0,
        lng: 0
      },
      dragging_location_id: 0,
      am_dragging: false,
      mouse_is_up: true,
      container_id: "parent_id",
      map_number: 0,
      browser_zoom_level: 1,
      location_markers: {},
      // google map markers
      location_info_windows: {},
      // google map info windows
      location_lat_lngs: {},
      // locations
      location_datas: {} // original constructor data

    });

    _this._gmapDragDrop_vars.map_positions = _this.props.map_locations;
    _this._object_type = GMAP_DRAG_DROP_TYPE;
    _this._gmapDragDrop_vars.browser_zoom_level = window.devicePixelRatio;
    _this._gmapDragDrop_vars.on_ready_fired = false;
    GmapDragDrop._map_count++;
    _this._gmapDragDrop_vars.map_number = GmapDragDrop._map_count;
    var map_options = Object.assign({}, _this.props.map_defaults, _this.props.map_options);
    _this.state = {
      REACT_DIV_ID: GMAP_REACT_CONTAINER + GmapDragDrop._map_count,
      GOOGLE_DIV_ID: GMAP_CONTAINER + GmapDragDrop._map_count,
      DRAG_DIV_ID: DRAG_DIV_PREFIX + GmapDragDrop._map_count,
      IE_SVG_DRAG: IE_SVG_PREFIX + GmapDragDrop._map_count,
      map_options: map_options
    };
    return _this;
  }

  _createClass(GmapDragDrop, [{
    key: "_canvasPin",
    value: function _canvasPin(json_parameters) {
      var pin_svg_path;
      var pin_color = json_parameters.pin_color,
          title_text = json_parameters.title_text,
          content_text = json_parameters.content_text,
          marker_svg = json_parameters.marker_svg;
      var pin_scale = this.state.map_options.pin_scale;
      var canvas_element = document.getElementById(DRAG_CANVAS_ID);
      var context = canvas_element.getContext("2d");
      context.fillStyle = DRAG_FONT_RGBA;
      context.font = DRAG_FONT_HEIGHT + "px " + DRAG_FONT;
      var title_clean = title_text.replace(/<[^>]+>/g, "");

      if (title_clean === "") {
        title_clean = content_text.replace(/<[^>]+>/g, "");
      }

      var text = context.measureText(title_clean);
      var text_width = text.width;
      canvas_element.width = PIN_SVG_H_W * pin_scale * PIN_TEXT_START + text_width;
      canvas_element.height = PIN_SVG_H_W * pin_scale;
      context.clearRect(0, 0, canvas_element.width, canvas_element.height);

      if (title_clean) {
        var text_start_x = PIN_SVG_H_W * pin_scale * PIN_TEXT_START;
        context.fillText(title_clean, text_start_x, DRAG_FONT_HEIGHT);
      }

      context.fillStyle = pin_color;

      if (marker_svg) {
        pin_svg_path = new Path2D(marker_svg);
      } else if (this.state.map_options.pin_svg) {
        pin_svg_path = new Path2D(this.state.map_options.pin_svg);
      } else {
        if (pin_color) {
          context.fillStyle = PNG_PIN_COLORS[pin_color];
        } else {
          context.fillStyle = PNG_PIN_COLORS[DEFAULT_PNG_COLOR];
        }

        pin_svg_path = new Path2D(PIN_SVG_DEFAULT);
      }

      context.scale(pin_scale, pin_scale);
      context.fill(pin_svg_path);
      return canvas_element;
    }
  }, {
    key: "_onDragStart_react",
    value: function _onDragStart_react(drag_event) {
      var start_lat_lng = this._gmapDragDrop_vars.drag_start_pos;

      var location_id = this._locationIdForLatLng(start_lat_lng);

      if (location_id) {
        var json_parameters = this._makeDragParameters(location_id, drag_event);

        var canvas_element = this._canvasPin(json_parameters);

        var pin_scale = this.state.map_options.pin_scale;
        var browser_zoom_level = window.devicePixelRatio;
        var pin_size = PIN_SVG_H_W * pin_scale;
        var x_offset = (browser_zoom_level - 1) * pin_size / 2;
        var y_offset = (browser_zoom_level - 1) * pin_size;
        var drag_x = pin_size / 2 + x_offset;
        var drag_y = pin_size + y_offset;
        drag_event.dataTransfer.setDragImage(canvas_element, drag_x, drag_y);
      } else {
        drag_event.preventDefault();
      }
    }
  }, {
    key: "_startIePreload",
    value: function _startIePreload() {
      var canvas_element = document.getElementById(DRAG_CANVAS_ID);

      if (typeof canvas_element.msToBlob === "function") {
        var context = canvas_element.getContext("2d");
        context.fillStyle = IE_DRAG_TOP_TIP_COLOR;
        context.fillRect(0, 0, IE_DRAG_PIXELS, IE_DRAG_PIXELS);
        var blob = canvas_element.msToBlob();
        var newImg = document.createElement("img");
        var url = URL.createObjectURL(blob);

        newImg.onload = function () {
          var div_element = document.getElementById(IE_DRAG_DIV_ID_NAME);
          div_element.style.backgroundImage = "url(" + url + ")";
        };

        newImg.src = url;
        newImg.id = "_ie_pre_load_drag_image";
        newImg.style.top = "-9999px";
        newImg.style.left = "-9999px";
        newImg.style.position = "absolute";
        document.body.appendChild(newImg);
      }
    }
  }, {
    key: "newRandomColor",
    value: function newRandomColor() {
      var have_unique_color, random_color;

      do {
        random_color = "#" + Math.floor(Math.random() * 16777215).toString(16);
        have_unique_color = true;

        for (var a_location_id in this._gmapDragDrop_vars.location_datas) {
          var pin_color = this._gmapDragDrop_vars.location_datas[a_location_id].pin_color;

          if (random_color === pin_color) {
            have_unique_color = false;
          }
        }
      } while (!have_unique_color);

      return random_color;
    }
  }, {
    key: "labelInput",
    value: function labelInput(location_id, text_label, gmap_var_name, input_id) {
      var label_input = "".concat(text_label, ":<input \n                                        id=\"").concat(input_id, "\"\n\t\t\t\t\t\t\t\t\t\ttype=\"text\" \n\t\t\t\t\t\t\t\t\t\tdata-location_id=").concat(location_id, "\n\t\t\t\t\t\t\t\t\t\tonkeypress =\" if(event.keyCode === 13){\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tevent.preventDefault();\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tlet location_id = this.dataset.location_id;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tlet location_change = ").concat(gmap_var_name, ".locationGet(location_id)\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tlocation_change.content_text =  this.value\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tlocation_change.title_text = ''\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t").concat(gmap_var_name, ".locationModifyDirect(location_change)\n\t\t\t\t\t\t\t\t\t\t\t\t\t} \"\n\t\t\t\t\t\t\t\t\t/>");
      return label_input;
    }
  }, {
    key: "_latLngDrop",
    value: function _latLngDrop(drop_event) {
      var scrolled_y = document.documentElement.scrollTop || document.body.scrollTop;
      var scrolled_x = document.documentElement.scrollLeft || document.body.scrollLeft;
      var map_div = document.getElementById(this.state.GOOGLE_DIV_ID);
      var viewportOffset = map_div.getBoundingClientRect();
      var marker_pos_x = drop_event.pageX - viewportOffset.left - scrolled_x;
      var marker_pos_y = drop_event.pageY - viewportOffset.top - scrolled_y;

      if (DataTransfer.prototype.setDragImage === _not_use_strict_ie_gmapDragDrop) {
        marker_pos_y = marker_pos_y - IE_DRAG_PIXELS;
      }

      var lat_lng_func = this._convertXyToLatLng({
        x: marker_pos_x,
        y: marker_pos_y
      });

      var lat_lng_obj = this._latLngToObj(lat_lng_func);

      return lat_lng_obj;
    }
  }, {
    key: "_convertXyToLatLng",
    value: function _convertXyToLatLng(mouse_pos) {
      var google_map = this.state.map_options.google_map;
      var top_right = google_map.getProjection().fromLatLngToPoint(google_map.getBounds().getNorthEast());
      var bottom_left = google_map.getProjection().fromLatLngToPoint(google_map.getBounds().getSouthWest());
      var map_scale = Math.pow(2, google_map.getZoom());
      var world_point = new google.maps.Point(mouse_pos.x / map_scale + bottom_left.x, mouse_pos.y / map_scale + top_right.y);
      var lat_lng_func = google_map.getProjection().fromPointToLatLng(world_point);

      if (isNaN(lat_lng_func.lat())) {
        lat_lng_func.lat = 0;
        lat_lng_func.lng = 0;
      }

      return lat_lng_func;
    }
  }, {
    key: "_makeDragParameters",
    value: function _makeDragParameters(location_id, drag_event) {
      var location_data = Object.assign({}, this._gmapDragDrop_vars.location_datas[location_id], {
        from_id: this._gmapDragDrop_vars.container_id
      });

      if (this.state.map_options.onDragStartMarker !== undefined) {
        var event_parameters = this._eventParameters("location_data", location_data);

        var extended_event = Object.assign({}, drag_event, event_parameters);
        location_data = this.state.map_options.onDragStartMarker(extended_event);
      }

      var json_string = JSON.stringify(location_data);
      drag_event.dataTransfer.setData("text", json_string);
      this._gmapDragDrop_vars.drag_location = location_data;
      return location_data;
    }
  }, {
    key: "_onDragEnd_react",
    value: function _onDragEnd_react(drag_event) {
      var from_location = this._gmapDragDrop_vars.drag_location;

      this._hideIeImageDrag();

      if (this.state.map_options.onDragEndMarker !== undefined) {
        var event_parameters = this._eventParameters("from_location", from_location);

        var extended_event = Object.assign({}, drag_event, event_parameters);
        this.state.map_options.onDragEndMarker(extended_event);
      }
    }
  }, {
    key: "_checkLatLng",
    value: function _checkLatLng(marker_data, dropped_at_lat_lng) {
      if (!Array.isArray(marker_data)) {
        marker_data.from_lat = marker_data.lat;
        marker_data.from_lng = marker_data.lng;
      }

      marker_data.lat = dropped_at_lat_lng.lat;
      marker_data.lng = dropped_at_lat_lng.lng;
    }
  }, {
    key: "_onDropOnMap_react",
    value: function _onDropOnMap_react(drop_event) {
      drop_event.preventDefault();
      var text_data = drop_event.dataTransfer.getData("text");

      if (text_data) {
        var dropped_at_lat_lng = this._latLngDrop(drop_event);

        var trim_data = text_data.trim();

        try {
          try {
            var marker_data = JSON.parse(trim_data);
          } catch (e) {
            throw e.message + '. "' + trim_data + '"" is not a valid JSON location';
          }

          var location_id = marker_data.location_id;

          this._checkLatLng(marker_data, dropped_at_lat_lng);

          if (this.state.map_options.onDragDrop !== undefined) {
            var event_parameters = this._eventParameters("location_data", marker_data);

            var extended_event = Object.assign({}, drop_event, event_parameters);
            marker_data = this.state.map_options.onDragDrop(extended_event);
          }

          if (marker_data) {
            if (marker_data.from_id === this._gmapDragDrop_vars.container_id) {
              this._insideToInsideDrop(location_id, marker_data);
            } else {
              this._outsideToInsideDrop(location_id, marker_data);
            }
          }
        } catch (e) {
          console.log(e);
        }
      }
    }
  }, {
    key: "getMap",
    value: function getMap() {
      var google_map = this.state.map_options.google_map;
      return google_map;
    }
  }, {
    key: "filterByProperty",
    value: function filterByProperty(property_name) {
      var matching_locations = [];

      for (var location_index in this._gmapDragDrop_vars.location_datas) {
        var a_location = this._gmapDragDrop_vars.location_datas[location_index];

        if (a_location[property_name] !== undefined) {
          matching_locations.push(a_location);
        }
      }

      return matching_locations;
    }
  }, {
    key: "filterByUndefProperty",
    value: function filterByUndefProperty(property_name) {
      var matching_locations = [];

      for (var location_index in this._gmapDragDrop_vars.location_datas) {
        var a_location = this._gmapDragDrop_vars.location_datas[location_index];

        if (a_location[property_name] === undefined) {
          matching_locations.push(a_location);
        }
      }

      return matching_locations;
    }
  }, {
    key: "filterByPropertyValue",
    value: function filterByPropertyValue(property_name, property_value) {
      var matching_locations = [];

      for (var location_index in this._gmapDragDrop_vars.location_datas) {
        var a_location = this._gmapDragDrop_vars.location_datas[location_index];

        if (a_location[property_name] !== undefined) {
          if (a_location[property_name] === property_value) {
            matching_locations.push(a_location);
          }
        }
      }

      return matching_locations;
    }
  }, {
    key: "_onStartIeDrag",
    value: function _onStartIeDrag(drag_event) {
      var start_lat_lng = this._gmapDragDrop_vars.drag_start_pos;

      var location_id = this._locationIdForLatLng(start_lat_lng);

      if (location_id) {
        this._makeDragParameters(location_id, drag_event);

        GmapDragDrop._ie_drag_target = drag_event.target;
        var ie_drag_image = document.getElementById("_ie_pre_load_drag_image");
        drag_event.dataTransfer.setDragImage(ie_drag_image);
      } else {
        drag_event.preventDefault();
      }
    }
  }, {
    key: "_canvasSvg",
    value: function _canvasSvg() {
      var canvas_to_draw_on = document.getElementById(DRAG_CANVAS_ID);

      if (canvas_to_draw_on === null) {
        var canvas_style = "position:fixed; left:-9999px; top:-9999px";
        var canvas_elem = " <canvas\n\t\t\t\t\t\t\t\tid=\"".concat(DRAG_CANVAS_ID, "\" style=\"").concat(canvas_style, "\"></canvas>");
        window.document.body.insertAdjacentHTML("beforeend", canvas_elem);
      }
    }
  }, {
    key: "_ieCssStyle",
    value: function _ieCssStyle() {
      var ie_drag_style_id = IE_DRAG_STYLE_ID_NAME;
      var ie_drag_image_id = IE_DRAG_DIV_ID_NAME;
      var canvas_to_draw_on = document.getElementById(ie_drag_style_id);

      if (canvas_to_draw_on === null) {
        var canvas_elem = " <div id=".concat(ie_drag_style_id, "></div>\n\t\t\t\t                  <div id=").concat(ie_drag_image_id, "></div> ");
        window.document.body.insertAdjacentHTML("beforeend", canvas_elem);
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this._ieCssStyle();

      this._addSvgToBody();

      this._canvasSvg();

      this._gmapDragDrop_vars.container_id = _reactDom["default"].findDOMNode(this).parentNode.getAttribute("id");

      this._lazyReactGoogleMap();
    }
  }, {
    key: "_lazyReactGoogleMap",
    value: function _lazyReactGoogleMap() {
      var init_gmap_func = this._initGmap();

      if (this._isGoogleMapsReady()) {
        init_gmap_func();
      } else {
        this._pushInitMap(init_gmap_func);

        if (this._isFirstInitialization()) {
          this._startIePreload();

          var load_script_element = document.createElement("script");
          load_script_element.src = GOOGLE_MAPS_API + this.props.google_map_key;
          load_script_element.addEventListener("load", this._initAllMaps, false);
          document.body.appendChild(load_script_element);
          GmapDragDrop._google_script_element = load_script_element;
        }
      }
    }
  }, {
    key: "_initGmap",
    value: function _initGmap() {
      var map_element = document.getElementById(this.state.GOOGLE_DIV_ID);
      this._gmapDragDrop_vars.center_lat_lng = this.centerMap();
      var _this$state$map_optio = this.state.map_options,
          scroll_wheel = _this$state$map_optio.scroll_wheel,
          gestureHandling = _this$state$map_optio.gestureHandling,
          init_zoom = _this$state$map_optio.init_zoom,
          map_type = _this$state$map_optio.map_type,
          street_view = _this$state$map_optio.street_view,
          zoom_control = _this$state$map_optio.zoom_control,
          map_type_control = _this$state$map_optio.map_type_control,
          map_styles = _this$state$map_optio.map_styles;
      var self = this;

      var init_gmap_func = function init_gmap_func() {
        var google_map = new google.maps.Map(map_element, {
          center: self._gmapDragDrop_vars.center_lat_lng,
          disableDoubleClickZoom: true,
          scrollwheel: scroll_wheel,
          gestureHandling: gestureHandling,
          zoom: init_zoom,
          mapTypeId: map_type,
          streetViewControl: street_view,
          zoomControl: zoom_control,
          mapTypeControl: map_type_control,
          styles: map_styles
        });
        self.state.map_options.google_map = google_map;
        self._gmapDragDrop_vars.previous_zoom = google_map.getZoom();

        var _iterator = _createForOfIteratorHelper(self._gmapDragDrop_vars.map_positions),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var partial_map_location = _step.value;

            self._placeMarker(partial_map_location);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        self._googleEvents();
      };

      return init_gmap_func;
    }
  }, {
    key: "_ieDragDiv",
    value: function _ieDragDiv() {
      return /*#__PURE__*/_react["default"].createElement("div", {
        id: this.state.DRAG_DIV_ID,
        draggable: "true",
        onDragStart: this._onStartIeDrag,
        onDragEnd: this._onDragEnd_Overlay,
        onMouseMove: this._onMouseMoveOverlay,
        onContextMenu: this._onMouseDownOverlay,
        onMouseDown: this._onMouseDownOverlay,
        style: DRAG_OVERLAY_STYLE
      });
    }
  }, {
    key: "_normalDragDiv",
    value: function _normalDragDiv() {
      return /*#__PURE__*/_react["default"].createElement("div", {
        id: this.state.DRAG_DIV_ID,
        draggable: "true",
        onDragStart: this._onDragStart_react,
        onDragEnd: this._onDragEnd_Overlay,
        onMouseMove: this._onMouseMoveOverlay,
        onContextMenu: this._onMouseDownOverlay,
        onMouseDown: this._onMouseDownOverlay,
        style: DRAG_OVERLAY_STYLE
      });
    }
  }, {
    key: "render",
    value: function render() {
      if (DataTransfer.prototype.setDragImage === _not_use_strict_ie_gmapDragDrop) {
        var start_drag_function = this._ieDragDiv();
      } else {
        var start_drag_function = this._normalDragDiv();
      }

      var canvas_ie_svg = this._canvasIeSvg();

      return /*#__PURE__*/_react["default"].createElement("div", {
        id: this.state.REACT_DIV_ID,
        onDrop: this._onDropOnMap_react,
        onDragOver: this._onDragOver_react,
        onDragEnd: this._onDragEnd_react,
        onMouseMove: this._onMouseMove_react,
        onMouseDown: this._onMouseDown_react,
        onMouseUp: this._onMouseUp_react,
        style: H_W_100_REL_STYLE
      }, /*#__PURE__*/_react["default"].createElement("div", {
        id: this.state.GOOGLE_DIV_ID,
        style: H_W_100_REL_STYLE
      }), start_drag_function, canvas_ie_svg);
    }
  }, {
    key: "_canvasIeSvg",
    value: function _canvasIeSvg() {
      var ie_drag_image_id = this.state.IE_SVG_DRAG;
      var view_box = "0 0 " + PIN_SVG_H_W + " " + PIN_SVG_H_W;
      var symbol_id = "#" + USE_SYMBOL_ID;
      var ie_drag_pin_width = PIN_SVG_H_W * this.state.map_options.pin_scale + "px";
      var svg_style = {
        position: "fixed",
        zIndex: 0,
        left: HIDE_IE_DRAG_IMAGE,
        top: HIDE_IE_DRAG_IMAGE,
        width: ie_drag_pin_width,
        height: ie_drag_pin_width
      };

      var ie_drag_svg = /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("svg", {
        viewBox: view_box,
        preserveAspectRatio: "xMinYMin",
        id: ie_drag_image_id,
        style: svg_style
      }, /*#__PURE__*/_react["default"].createElement("use", {
        xlinkHref: symbol_id,
        x: 0,
        y: 0
      })));

      return ie_drag_svg;
    }
  }, {
    key: "_stopDragging",
    value: function _stopDragging() {
      this._gmapDragDrop_vars.am_dragging = false;
      var start_drag_div = document.getElementById(this.state.DRAG_DIV_ID);
      start_drag_div.style.display = "none";
    }
  }, {
    key: "_onMouseMoveOverlay",
    value: function _onMouseMoveOverlay(event) {
      /// drag 2
      if (this._gmapDragDrop_vars.mouse_is_up) {
        var mouse_out_x = Math.abs(this._gmapDragDrop_vars.last_marker_x - event.pageX);
        var mouse_out_y = Math.abs(this._gmapDragDrop_vars.last_marker_y - event.pageY);

        if (mouse_out_x > ALLOWABLE_MARKER_DRIFT || mouse_out_y > ALLOWABLE_MARKER_DRIFT) {
          this._stopDragging();
        }
      }
    }
  }, {
    key: "_addSvgToBody",
    value: function _addSvgToBody() {
      var svg_id = USE_SVG_ID;
      var svg_symbol_id = USE_SYMBOL_ID;
      var svg_pin = document.getElementById(svg_id);

      if (this.state.map_options.pin_svg) {
        var pin_svg = this.state.map_options.pin_svg;

        if (svg_pin === null) {
          var svg_path_symbol = "<svg style=\"height:0;\" id=\"".concat(svg_id, "\">\n\t\t\t\t\t\t\t\t<symbol id=\"").concat(svg_symbol_id, "\">\n\t\t\t\t\t\t\t\t\t<path fill=\"#000\" d=\"").concat(pin_svg, "\" style=\"fill:inherit\" />\n\t\t\t\t\t\t\t\t</symbol>\n\t\t\t\t\t\t\t</svg>");
          window.document.body.insertAdjacentHTML("beforeend", svg_path_symbol);
        }
      }
    }
  }, {
    key: "_onDragOver_react",
    value: function _onDragOver_react(drag_event) {
      if (this._gmapDragDrop_vars.am_dragging) {
        drag_event.preventDefault();
        var start_lat_lng = this._gmapDragDrop_vars.drag_start_pos;

        var location_id = this._locationIdForLatLng(start_lat_lng);

        this._gmapDragDrop_vars.dragging_location_id = location_id;

        if (this.state.map_options.onDragMarker !== undefined) {
          var event_parameters = this._eventParameters("start_lat_lng", start_lat_lng, "location_id", location_id, "page_x", drag_event.pageX, "page_y", drag_event.pageY);

          var extended_event = Object.assign({}, drag_event, event_parameters);
          this.state.map_options.onDragMarker(extended_event);
        }
      } else {
        this._onDropOnMap_react(drag_event);
      }
    }
  }, {
    key: "_hideIeImageDrag",
    value: function _hideIeImageDrag() {
      var ie_drag_image = document.getElementById(this.state.IE_SVG_DRAG);
      ie_drag_image.style.left = HIDE_IE_DRAG_IMAGE;
      ie_drag_image.style.top = HIDE_IE_DRAG_IMAGE;
    }
  }, {
    key: "_onMouseUp_react",
    value: function _onMouseUp_react() {
      this._gmapDragDrop_vars.mouse_is_up = true;

      this._hideIeImageDrag();
    }
  }, {
    key: "_onMouseLeftDownOverlay",
    value: function _onMouseLeftDownOverlay(event) {
      /// drag 3
      var mouse_out_x = Math.abs(this._gmapDragDrop_vars.last_marker_x - event.pageX);
      var mouse_out_y = Math.abs(this._gmapDragDrop_vars.last_marker_y - event.pageY);

      if (mouse_out_x < ALLOWABLE_MARKER_DRIFT && mouse_out_y < ALLOWABLE_MARKER_DRIFT) {
        this._gmapDragDrop_vars.am_dragging = true;
      } else {
        this._gmapDragDrop_vars.am_dragging = false;
      }
    }
  }, {
    key: "_mouseOverMarker_googleListener",
    value: function _mouseOverMarker_googleListener(map_marker, lat_lng_obj) {
      /// drag 1
      var self = this;
      map_marker.addListener("mouseover", function (e_ignored) {
        if (self._gmapDragDrop_vars.mouse_is_up) {
          var start_drag_div = document.getElementById(self.state.DRAG_DIV_ID);
          start_drag_div.style.display = "inline";
          self._gmapDragDrop_vars.last_marker_x = self._gmapDragDrop_vars.current_page_x;
          self._gmapDragDrop_vars.last_marker_y = self._gmapDragDrop_vars.current_page_y;
          self._gmapDragDrop_vars.drag_start_pos = lat_lng_obj;
        }
      });
    }
  }, {
    key: "startDragFromOutside",
    value: function startDragFromOutside(json_parameters) {
      var json_string = JSON.stringify(json_parameters);

      var outside_drag_start = function outside_drag_start(start_drag_event) {
        start_drag_event.dataTransfer.setData("text", json_string);
      };

      return outside_drag_start;
    }
  }, {
    key: "_onMouseDown_react",
    value: function _onMouseDown_react() {
      this._gmapDragDrop_vars.mouse_is_up = false;
    }
  }, {
    key: "_onMouseMove_react",
    value: function _onMouseMove_react(event) {
      if (this._gmapDragDrop_vars.mouse_is_up) {
        this._gmapDragDrop_vars.am_dragging = false;
      } else {}

      this._gmapDragDrop_vars.current_page_x = event.pageX;
      this._gmapDragDrop_vars.current_page_y = event.pageY;

      if (this._gmapDragDrop_vars.browser_zoom_level !== window.devicePixelRatio) {
        this._browserResizeReDraw();
      }
    }
  }, {
    key: "_onDragEnd_Overlay",
    value: function _onDragEnd_Overlay(e_ignored) {
      this._stopDragging();

      this._gmapDragDrop_vars.mouse_is_up = true;
    }
  }, {
    key: "_onMouseRightDownOverlay",
    value: function _onMouseRightDownOverlay(event) {
      event.preventDefault();

      if (this.state.map_options.onRightClickMarker !== undefined) {
        var start_lat_lng = this._gmapDragDrop_vars.drag_start_pos;

        var location_id = this._locationIdForLatLng(start_lat_lng);

        if (location_id) {
          var event_parameters = this._eventParameters("location_id", location_id);

          var extended_event = Object.assign({}, event, event_parameters);
          this.state.map_options.onRightClickMarker(extended_event);
        }
      }
    }
  }, {
    key: "_onMouseDownOverlay",
    value: function _onMouseDownOverlay(event) {
      if (event.button === RIGHT_CLICK_BUTTON) {
        this._onMouseRightDownOverlay(event);
      } else {
        this._onMouseLeftDownOverlay(event);
      }
    }
  }, {
    key: "_browserResizeReDraw",
    value: function _browserResizeReDraw() {
      this._gmapDragDrop_vars.browser_zoom_level = window.devicePixelRatio;
      var google_map = this.state.map_options.google_map;
      google_map.panBy(VERTICAL_PAN_FOR_MAP_REDRAW, VERTICAL_PAN_FOR_MAP_REDRAW);
      google_map.panBy(-VERTICAL_PAN_FOR_MAP_REDRAW, -VERTICAL_PAN_FOR_MAP_REDRAW);
    }
  }, {
    key: "numberLocations",
    value: function numberLocations() {
      var location_lat_lngs = this._gmapDragDrop_vars.location_lat_lngs;
      var number_locations = Object.keys(location_lat_lngs).length;
      return number_locations;
    }
  }, {
    key: "centerMap",
    value: function centerMap() {
      var lat_center = this.state.map_options.lat_center;
      var lng_center = this.state.map_options.lng_center;

      if (lat_center === undefined || lng_center === undefined) {
        var lat_center_accum = 0;
        var lng_center_accum = 0;

        var _iterator2 = _createForOfIteratorHelper(this._gmapDragDrop_vars.map_positions),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var marker_info = _step2.value;
            var lat = marker_info.lat,
                lng = marker_info.lng;
            lat_center_accum += lat;
            lng_center_accum += lng;
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }

        var number_markers = this._gmapDragDrop_vars.map_positions.length;
        lat_center = lat_center_accum / number_markers;
        lng_center = lng_center_accum / number_markers;
      }

      var lat_lng_center = {
        lat: lat_center,
        lng: lng_center
      };
      return lat_lng_center;
    }
  }, {
    key: "_pushInitMap",
    value: function _pushInitMap(init_gmap_func) {
      GmapDragDrop._waiting_for_init.push(init_gmap_func);
    }
  }, {
    key: "_isFirstInitialization",
    value: function _isFirstInitialization() {
      if (GmapDragDrop._waiting_for_init.length === 1) {
        return true;
      } else {
        return false;
      }
    }
  }, {
    key: "_isGoogleMapsReady",
    value: function _isGoogleMapsReady() {
      if (typeof google === "undefined") {
        return false;
      } else {
        return true;
      }
    }
  }, {
    key: "_initAllMaps",
    value: function _initAllMaps() {
      var init_gmap_func = GmapDragDrop._waiting_for_init.pop();

      while (init_gmap_func) {
        init_gmap_func();
        init_gmap_func = GmapDragDrop._waiting_for_init.pop();
      }
    }
  }, {
    key: "_googleEvents",
    value: function _googleEvents() {
      var google_map = this.state.map_options.google_map;
      google_map.addListener("dblclick", this._onDoubleClick_googleListener);
      google_map.addListener("rightclick", this._onRightClick_googleListener);
      google_map.addListener("mousemove", this._onMouseMove_googleListener);
      google_map.addListener("zoom_changed", this._onZoomChanged_googleListener);
      google_map.addListener("center_changed", this._onCenterChanged_googleListener);
      google_map.addListener("idle", this._onIdle_googleListener);
    }
  }, {
    key: "reCenter",
    value: function reCenter(map_center) {
      this._gmapDragDrop_vars.center_lat_lng = map_center;
      var google_map = this.state.map_options.google_map;
      google_map.panTo(this._gmapDragDrop_vars.center_lat_lng);
    }
  }, {
    key: "_onRightClick_googleListener",
    value: function _onRightClick_googleListener(event) {
      if (this.state.map_options.onRightClick !== undefined) {
        var event_parameters = this._eventParameters();

        var extended_event = Object.assign({}, event, event_parameters);
        this.state.map_options.onRightClick(extended_event);
      }
    }
  }, {
    key: "_eventParameters",
    value: function _eventParameters() {
      var event_parameters = {
        gmap_params: {
          gmap_event: this
        }
      };

      for (var _len = arguments.length, parameter_name_values = new Array(_len), _key = 0; _key < _len; _key++) {
        parameter_name_values[_key] = arguments[_key];
      }

      while (parameter_name_values.length > 0) {
        var parameter_name = parameter_name_values.shift();
        var parameter_value = parameter_name_values.shift();
        event_parameters.gmap_params[parameter_name] = parameter_value;
      }

      return event_parameters;
    }
  }, {
    key: "_equalLatLngObj",
    value: function _equalLatLngObj(lat_lan_obj_a, lat_lan_obj_b) {
      if (lat_lan_obj_a.lat !== lat_lan_obj_b.lat) {
        return false;
      } else if (lat_lan_obj_a.lng !== lat_lan_obj_b.lng) {
        return false;
      }

      return true;
    }
  }, {
    key: "_locationIdForLatLng",
    value: function _locationIdForLatLng(lat_lng_obj) {
      var lat_lng_locations = this._gmapDragDrop_vars.location_lat_lngs;

      for (var location_id in lat_lng_locations) {
        var a_lat_lng_location = lat_lng_locations[location_id];

        if (this._equalLatLngObj(lat_lng_obj, a_lat_lng_location)) {
          return location_id;
        }
      }

      return false;
    }
  }, {
    key: "_onDoubleClick_googleListener",
    value: function _onDoubleClick_googleListener(event) {
      if (this.state.map_options.onDoubleClick !== undefined) {
        var event_parameters = this._eventParameters();

        var extended_event = Object.assign({}, event, event_parameters);
        this.state.map_options.onDoubleClick(extended_event);
      }
    }
  }, {
    key: "_latLngToObj",
    value: function _latLngToObj(str_array_obj_funcs) {
      var lat_value, lng_value;

      if (typeof str_array_obj_funcs === "string") {
        var string_arr = str_array_obj_funcs.split(",");
        var lat_str = string_arr.shift();
        var lng_str = string_arr.shift();
        lat_value = lat_str.trim();
        lng_value = lng_str.trim();
      } else if (str_array_obj_funcs instanceof Array) {
        lat_value = str_array_obj_funcs.shift();
        lng_value = str_array_obj_funcs.shift();
      } else if ("lat" in str_array_obj_funcs) {
        lat_value = str_array_obj_funcs.lat;
        lng_value = str_array_obj_funcs.lng;

        if (lat_value instanceof Function) {
          lat_value = lat_value();
          lng_value = lng_value();
        }
      }

      var lat_number = Number(lat_value);
      var lng_number = Number(lng_value);
      var lat_lng = {
        lat: lat_number,
        lng: lng_number
      };

      if (!GmapDragDrop.validLatLng(lat_lng)) {
        throw new Error("Invalid lat/lng =" + lat_number + "/" + lng_number);
      }

      return lat_lng;
    }
  }, {
    key: "_removeLocation",
    value: function _removeLocation(location_id) {
      var info_window = this._gmapDragDrop_vars.location_info_windows[location_id];

      if (info_window !== null) {
        info_window.close();
      }

      var map_marker = this._gmapDragDrop_vars.location_markers[location_id];

      if (map_marker !== undefined) {
        map_marker.setMap(null);
      }

      delete this._gmapDragDrop_vars.location_info_windows[location_id];
      delete this._gmapDragDrop_vars.location_markers[location_id];
      delete this._gmapDragDrop_vars.location_lat_lngs[location_id];
      delete this._gmapDragDrop_vars.location_datas[location_id];
    }
  }, {
    key: "locationDelete",
    value: function locationDelete(location_id) {
      var moving_marker = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
      var delete_location_data = this._gmapDragDrop_vars.location_datas[location_id];

      if (delete_location_data.can_delete || moving_marker === INSIDE_TO_INSIDE_MOVE) {
        var delete_confirm = true;

        if (this.state.map_options.onDelete !== undefined) {
          var event_parameters = this._eventParameters("location_data", delete_location_data);

          delete_confirm = this.state.map_options.onDelete(event_parameters);
        }

        if (delete_confirm !== false) {
          this._removeLocation(location_id);
        }
      } else {
        alert(" Cannot Delete '".concat(location_id, "' "));
      }
    }
  }, {
    key: "locationExists",
    value: function locationExists(location_id) {
      if (location_id in this._gmapDragDrop_vars.location_lat_lngs) {
        return true;
      } else {
        return false;
      }
    }
  }, {
    key: "locationsShowInfoAll",
    value: function locationsShowInfoAll() {
      for (var location_id in this._gmapDragDrop_vars.location_lat_lngs) {
        this.locationShowInfo(location_id);
      }
    }
  }, {
    key: "locationsHideInfoAll",
    value: function locationsHideInfoAll() {
      for (var location_id in this._gmapDragDrop_vars.location_lat_lngs) {
        this.locationHideInfo(location_id);
      }
    }
  }, {
    key: "locationGet",
    value: function locationGet(location_id) {
      var a_location = this._gmapDragDrop_vars.location_datas[location_id];
      return a_location;
    }
  }, {
    key: "locationsGetAll",
    value: function locationsGetAll() {
      var location_datas_copy = [];
      var location_datas = this._gmapDragDrop_vars.location_datas;

      for (var location_id in location_datas) {
        var a_location = location_datas[location_id];
        var location_copy = Object.assign({}, a_location);
        location_datas_copy.push(location_copy);
      }

      return location_datas_copy;
    }
  }, {
    key: "locationsPutAll",
    value: function locationsPutAll(map_locations) {
      this.locationsClearAll();

      for (var location_id in map_locations) {
        var a_location = map_locations[location_id];
        this.locationAdd(a_location);
      }
    }
  }, {
    key: "locationsClearAll",
    value: function locationsClearAll() {
      for (var location_id in this._gmapDragDrop_vars.location_lat_lngs) {
        this.locationDelete(location_id);
      }
    }
  }, {
    key: "locationModifyDirect",
    value: function locationModifyDirect(marker_data) {
      var location_id = marker_data.location_id;

      if (marker_data.can_change !== undefined) {
        if (!marker_data.can_change) {
          throw " Cannot Change '".concat(location_id, "' ");
        }
      }

      if (this.locationExists(location_id)) {
        this._removeLocation(location_id);
      }

      this._gmapDragDrop_vars.location_datas[location_id] = marker_data;
      this.locationAdd(marker_data);
    }
  }, {
    key: "locationModifyJSON",
    value: function locationModifyJSON(text_data) {
      var trim_data = text_data.trim();

      try {
        var marker_data = JSON.parse(trim_data);
        this.locationModifyDirect(marker_data);
      } catch (e) {
        alert(e);
      }
    }
  }, {
    key: "_markerInfoWindow",
    value: function _markerInfoWindow(map_location, map_marker) {
      var title_text = map_location.title_text,
          content_text = map_location.content_text;

      if (title_text !== "" || content_text !== "") {
        var info_window = this._popUpWindow(map_location, map_marker);

        return info_window;
      } else {
        return null;
      }
    }
  }, {
    key: "_popUpWindow",
    value: function _popUpWindow(map_location, map_marker) {
      var title_text = map_location.title_text,
          content_text = map_location.content_text,
          info_style = map_location.info_style,
          title_style = map_location.title_style,
          content_style = map_location.content_style,
          showing_info_window = map_location.showing_info_window,
          extra_text = map_location.extra_text;
      var disable_autopanning = false;

      if (map_location.disable_auto_pan !== undefined) {
        disable_autopanning = map_location.disable_auto_pan;
      }

      var content_string = "<div style=\"".concat(info_style, "\" ondragstart=\"event.preventDefault()\">\n                                        <div style=\"").concat(title_style, "\" > ").concat(title_text, "</div>\n                                         <span style=\"").concat(content_style, "\">").concat(content_text, "</span>\n                                          <span style=\"").concat(content_style, "\">").concat(extra_text, "</span>\n                                      </div>");
      var info_window = new google.maps.InfoWindow({
        content: content_string,
        disableAutoPan: disable_autopanning
      });

      if (showing_info_window) {
        var google_map = this.state.map_options.google_map;
        info_window.open(google_map, map_marker);
      }

      return info_window;
    }
  }, {
    key: "_unixTimeId",
    value: function _unixTimeId() {
      return "_unix_time_" + Date.now() + "_" + Math.random();
    }
  }, {
    key: "locationShowInfo",
    value: function locationShowInfo(location_id) {
      var info_window = this._gmapDragDrop_vars.location_info_windows[location_id];

      if (info_window !== null) {
        var google_map = this.state.map_options.google_map;
        var map_marker = this._gmapDragDrop_vars.location_markers[location_id];
        info_window.open(google_map, map_marker);
      }
    }
  }, {
    key: "locationHideInfo",
    value: function locationHideInfo(location_id) {
      var info_window = this._gmapDragDrop_vars.location_info_windows[location_id];

      if (info_window !== null) {
        info_window.close();
      }
    }
  }, {
    key: "_outsideToInsideDrop",
    value: function _outsideToInsideDrop(location_id, id_lat_lng_title_content_obj) {
      this._hideIeImageDrag();

      var changed_location = this._addChangeEvent(id_lat_lng_title_content_obj);

      if (changed_location) {
        if (this.locationExists(location_id)) {
          var old_location_data = this._gmapDragDrop_vars.location_datas[location_id];

          if (old_location_data.can_change) {
            this.locationDelete(location_id);
          } else {
            throw " Cannot Change '".concat(location_id, "' ");
          }
        }

        changed_location.lat = changed_location.from_lat;
        changed_location.lng = changed_location.from_lng;
        this._gmapDragDrop_vars.location_datas[location_id] = changed_location;
        this.locationAdd(changed_location);
      }
    }
  }, {
    key: "_addChangeEvent",
    value: function _addChangeEvent(lat_lng_obj) {
      var changed_lat_lng_obj = Object.assign({}, lat_lng_obj);

      if (this.state.map_options.onAdd !== undefined) {
        var event_parameters = this._eventParameters("location_data", changed_lat_lng_obj);

        changed_lat_lng_obj = this.state.map_options.onAdd(event_parameters);
      }

      return changed_lat_lng_obj;
    }
  }, {
    key: "_insideToInsideDrop",
    value: function _insideToInsideDrop(location_id, old_location_data) {
      if (old_location_data.can_move === undefined || old_location_data.can_move) {
        this.locationDelete(location_id, INSIDE_TO_INSIDE_MOVE);
        this.locationAdd(old_location_data);
      } else {
        this._stopDragging();
      }
    }
  }, {
    key: "_onCenterChanged_googleListener",
    value: function _onCenterChanged_googleListener() {
      if (this._gmapDragDrop_vars.on_ready_fired) {
        var google_map = this.state.map_options.google_map;
        var map_center = google_map.getCenter();
        var moved_center = {
          lat: map_center.lat(),
          lng: map_center.lng()
        };

        if (this.state.map_options.onCenterChanged === undefined) {
          this._gmapDragDrop_vars.center_lat_lng = moved_center;
        } else {
          var event_parameters = this._eventParameters("moved_center", moved_center);

          var move_allowed = this.state.map_options.onCenterChanged(event_parameters);

          if (move_allowed) {
            this._gmapDragDrop_vars.center_lat_lng = moved_center;
          } else {
            var last_lat = this._gmapDragDrop_vars.center_lat_lng.lat;
            var last_lng = this._gmapDragDrop_vars.center_lat_lng.lng;

            if (moved_center.lat !== last_lat || moved_center.lng !== last_lng) {
              google_map.panTo(this._gmapDragDrop_vars.center_lat_lng);
            }
          }
        }
      }
    }
  }, {
    key: "_onZoomChanged_googleListener",
    value: function _onZoomChanged_googleListener() {
      if (this._gmapDragDrop_vars.on_ready_fired) {
        var google_map = this.state.map_options.google_map;
        var map_zoom = google_map.getZoom();

        if (this.state.map_options.onZoomChanged === undefined) {
          if (map_zoom > this.state.map_options.max_zoom) {
            google_map.setZoom(this.state.map_options.max_zoom);
          } else if (map_zoom < this.state.map_options.min_zoom) {
            google_map.setZoom(this.state.map_options.min_zoom);
          }
        } else {
          var event_parameters = this._eventParameters("map_zoom", map_zoom);

          var zoom_allowed = this.state.map_options.onZoomChanged(event_parameters);

          if (zoom_allowed) {
            this._gmapDragDrop_vars.previous_zoom = map_zoom;
          } else {
            if (map_zoom !== this._gmapDragDrop_vars.previous_zoom) {
              google_map.setZoom(this._gmapDragDrop_vars.previous_zoom);
            }
          }
        }
      }
    }
  }, {
    key: "_onMouseMove_googleListener",
    value: function _onMouseMove_googleListener(event) {
      if (this.state.map_options.onMouseMove !== undefined) {
        event.pageX = this._gmapDragDrop_vars.current_page_x;
        event.pageY = this._gmapDragDrop_vars.current_page_y;
        this._gmapDragDrop_vars.mouse_lat = event.latLng.lat;
        this._gmapDragDrop_vars.mouse_lng = event.latLng.lng;

        var event_parameters = this._eventParameters();

        var extended_event = Object.assign({}, event, event_parameters);
        this.state.map_options.onMouseMove(extended_event);
      }
    }
  }, {
    key: "_onIdle_googleListener",
    value: function _onIdle_googleListener() {
      if (!this._gmapDragDrop_vars.on_ready_fired) {
        if (this.state.map_options.onReady !== undefined) {
          var event_parameters = this._eventParameters();

          var extended_event = Object.assign({}, event_parameters);
          this.state.map_options.onReady(extended_event);
        }

        this._gmapDragDrop_vars.on_ready_fired = true;
        return true;
      }

      return false;
    }
  }, {
    key: "reboundMap",
    value: function reboundMap() {
      var location_array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var map_bounds = new google.maps.LatLngBounds();

      if (location_array) {
        for (var location_id in location_array) {
          var lat_lng_obj = location_array[location_id];

          if (_typeof(lat_lng_obj) === "object") {
            map_bounds.extend(lat_lng_obj);
          }
        }
      } else {
        var location_lat_lngs = this._gmapDragDrop_vars.location_lat_lngs;

        for (var _location_id in location_lat_lngs) {
          var _lat_lng_obj = location_lat_lngs[_location_id];
          map_bounds.extend(_lat_lng_obj);
        }

        var google_map = this.state.map_options.google_map;
        google_map.fitBounds(map_bounds, FIT_BOUNDS_PADDING);
      }
    }
  }, {
    key: "locationAdd",
    value: function locationAdd(changed_lat_lng_obj) {
      if (changed_lat_lng_obj[0] === undefined) {
        if (changed_lat_lng_obj) {
          var changed_location = this._addChangeEvent(changed_lat_lng_obj);

          if (changed_location) {
            this._placeMarker(changed_location);

            if (this.state.map_options.change_rebounding) {
              this.reboundMap();
            }

            if (this.state.map_options.onAfterAdd !== undefined) {
              var event_parameters = this._eventParameters("location_data", changed_location);

              this.state.map_options.onAfterAdd(event_parameters);
            }
          }
        }
      }

      return changed_lat_lng_obj;
    }
  }, {
    key: "_placeMarker",
    value: function _placeMarker(partial_map_location) {
      var map_location = Object.assign({}, this.props.marker_defaults, partial_map_location);

      if (map_location.location_id === undefined) {
        map_location.location_id = this._unixTimeId();
      }

      var location_id = map_location.location_id;
      var google_map = this.state.map_options.google_map;

      try {
        var lat_lng_obj = this._latLngToObj(map_location);

        var marker_icon = this._getMakerIcon(map_location);

        var map_marker = new google.maps.Marker({
          position: lat_lng_obj,
          icon: marker_icon,
          map: google_map,
          draggable: false,
          raiseOnDrag: false
        });
        map_marker.location_id = location_id;

        this._mouseOverMarker_googleListener(map_marker, lat_lng_obj);

        var info_window = this._markerInfoWindow(map_location, map_marker);

        this._gmapDragDrop_vars.location_datas[location_id] = map_location;
        this._gmapDragDrop_vars.location_markers[location_id] = map_marker;
        this._gmapDragDrop_vars.location_lat_lngs[location_id] = lat_lng_obj;
        this._gmapDragDrop_vars.location_info_windows[location_id] = info_window;

        if (this.state.map_options.change_rebounding) {
          this.reboundMap();
        }
      } catch (e) {
        throw e;
      }
    }
  }, {
    key: "_getMakerIcon",
    value: function _getMakerIcon(map_location) {
      var pin_path, png_color;

      if (map_location.marker_svg) {
        pin_path = map_location.marker_svg;
      } else if (this.state.map_options.pin_svg) {
        pin_path = this.state.map_options.pin_svg;
      } else {
        png_color = map_location.pin_color;

        if (!PNG_COLOR_NAMES.includes(png_color)) {
          png_color = "red";
        }

        var marker_png = this.state.map_options.png_marker_location + "".concat(png_color, "-dot.png");
        return marker_png;
      }

      var y_anchor = PIN_SVG_H_W - PIN_SVG_H_W / 2;
      var marker_icon = {
        path: pin_path,
        fillColor: map_location.pin_color,
        fillOpacity: 0.9,
        origin: new google.maps.Point(0, 0),
        size: new google.maps.Size(0, 0),
        anchor: new google.maps.Point(y_anchor, PIN_SVG_H_W),
        strokeWeight: 0,
        scale: this.state.map_options.pin_scale
      };
      return marker_icon;
    }
  }], [{
    key: "browserFactory",
    value: // auto	"use strict"
    function browserFactory(container_id, gmap_properties) {
      var gmap_component = /*#__PURE__*/_react["default"].createElement(GmapDragDrop, gmap_properties);

      var gmap_element = document.getElementById(container_id);

      var factory_gmap = _reactDom["default"].render(gmap_component, gmap_element);

      return factory_gmap;
    }
  }, {
    key: "browserDestroy",
    value: function browserDestroy(factory_gmap) {
      factory_gmap.locationsClearAll();
      var load_script_element = GmapDragDrop._google_script_element;
      load_script_element.removeEventListener("load", this._initAllMaps, false);
      var container_id = factory_gmap._gmapDragDrop_vars.container_id;
      var gmap_element = document.getElementById(container_id);

      _reactDom["default"].unmountComponentAtNode(gmap_element);
    }
  }, {
    key: "validLatLng",
    value: function validLatLng(lat_lng_obj) {
      if (lat_lng_obj.lat !== lat_lng_obj.lat) {
        return false;
      }

      if (lat_lng_obj.lng !== lat_lng_obj.lng) {
        return false;
      }

      if (lat_lng_obj.lat < -90 || lat_lng_obj.lat > 90) {
        return false;
      }

      if (lat_lng_obj.lng < -180 || lat_lng_obj.lng > 180) {
        return false;
      }

      return true;
    }
  }, {
    key: "_getIeDragTarget",
    value: function _getIeDragTarget() {
      return GmapDragDrop._ie_drag_target;
    }
  }]);

  return GmapDragDrop;
}(_reactClass["default"]);

_defineProperty(GmapDragDrop, "_map_count", 0);

_defineProperty(GmapDragDrop, "_waiting_for_init", []);

_defineProperty(GmapDragDrop, "_ie_drag_target", "");

_defineProperty(GmapDragDrop, "_google_script_element", "");

GmapDragDrop.displayName = "GmapDragDropComponent";
GmapDragDrop.propTypes = {
  google_map_key: _propTypes["default"].string.isRequired,
  map_locations: _propTypes["default"].array,
  // [ {lat:49.39, lng:-123.08} ]
  lat_center: _propTypes["default"].number,
  // 49.27
  lng_center: _propTypes["default"].number,
  // -122.85
  map_type: _propTypes["default"].string,
  // roadmap/satellite/hybrid/terrain
  street_view: _propTypes["default"].bool,
  // street view button
  zoom_control: _propTypes["default"].bool,
  // +/- buttons
  map_type_control: _propTypes["default"].bool,
  // map/satellite button
  pin_svg: _propTypes["default"].string,
  // marker icon
  scroll_wheel: _propTypes["default"].bool,
  // scrolling zooms
  gestureHandling: _propTypes["default"].string,
  // 'none' === no dragging map
  change_rebounding: _propTypes["default"].bool,
  // zoom to all markers
  png_marker_location: _propTypes["default"].string,
  // url of png markers, if svgs are not used
  pin_scale: _propTypes["default"].number,
  // scale 512x512 svg icons down
  map_styles: _propTypes["default"].array,
  // MapStyles.NIGHT_STYLE
  init_zoom: _propTypes["default"].number,
  // start map zoom
  max_zoom: _propTypes["default"].number,
  // highest zoom allowed
  min_zoom: _propTypes["default"].number,
  // minimum zoom
  onReady: _propTypes["default"].func,
  onCenterChanged: _propTypes["default"].func,
  onZoomChanged: _propTypes["default"].func,
  onMouseMove: _propTypes["default"].func,
  onDoubleClick: _propTypes["default"].func,
  onAdd: _propTypes["default"].func,
  onAfterAdd: _propTypes["default"].func,
  onRightClick: _propTypes["default"].func,
  onRightClickMarker: _propTypes["default"].func,
  onDelete: _propTypes["default"].func,
  onDragStartMarker: _propTypes["default"].func,
  onDragMarker: _propTypes["default"].func,
  onDragEndMarker: _propTypes["default"].func,
  onDragDrop: _propTypes["default"].func
};
GmapDragDrop.defaultProps = {
  map_defaults: {
    map_type: "roadmap",
    street_view: true,
    zoom_control: true,
    map_type_control: true,
    scroll_wheel: true,
    gestureHandling: "auto",
    change_rebounding: true,
    png_marker_location: "//maps.google.com/mapfiles/ms/icons/",
    pin_scale: 0.1,
    map_styles: [],
    init_zoom: 14,
    max_zoom: 20,
    min_zoom: 0,
    onReady: function onReady(e) {
      var gmap_event = e.gmap_params.gmap_event;
      var container_id = gmap_event._gmapDragDrop_vars.container_id; // console.log(`onReady : in div with id of '${container_id}' is ready`);
    },
    onCenterChanged: function onCenterChanged(e) {
      var _e$gmap_params = e.gmap_params,
          moved_center = _e$gmap_params.moved_center,
          gmap_event = _e$gmap_params.gmap_event; // console.log(
      //   `onCenterChanged : at ${moved_center.lat}, ${moved_center.lng}`
      // );

      return true;
    },
    onZoomChanged: function onZoomChanged(e) {
      var _e$gmap_params2 = e.gmap_params,
          map_zoom = _e$gmap_params2.map_zoom,
          gmap_event = _e$gmap_params2.gmap_event; //console.log(`onZoomChanged : with has a new zoom of ${map_zoom}`);

      return true;
    },
    onMouseMove: function onMouseMove(e) {
      var gmap_event = e.gmap_params.gmap_event;
      var latLng = e.latLng,
          pageX = e.pageX,
          pageY = e.pageY;
      var lat = latLng.lat();
      var lng = latLng.lng(); //console.log(`onMouseMove : at ${lat},${lng}  ${pageX},${pageY}`);
    },
    onDoubleClick: function onDoubleClick(e) {
      var gmap_event = e.gmap_params.gmap_event;
      var latLng = e.latLng,
          pixel = e.pixel;
      var lat = latLng.lat();
      var lng = latLng.lng(); //console.log(`onDoubleClick : at ${lat},${lng}  ${pixel.x},${pixel.y}`);

      gmap_event.locationAdd(latLng);
    },
    onAdd: function onAdd(e) {
      var _e$gmap_params3 = e.gmap_params,
          location_data = _e$gmap_params3.location_data,
          gmap_event = _e$gmap_params3.gmap_event; // console.log("onAdd : with this data");
      //   console.dir(location_data);

      return location_data;
    },
    onAfterAdd: function onAfterAdd(e) {
      var _e$gmap_params4 = e.gmap_params,
          location_data = _e$gmap_params4.location_data,
          gmap_event = _e$gmap_params4.gmap_event; // console.log("onAfterAdd");
      //console.dir(location_data);
    },
    onRightClick: function onRightClick(e) {
      var gmap_event = e.gmap_params.gmap_event;
      var latLng = e.latLng,
          pixel = e.pixel;
      var lat = latLng.lat();
      var lng = latLng.lng(); //  console.log(`onRightClick : at ${lat},${lng}  ${pixel.x},${pixel.y}`);
    },
    onRightClickMarker: function onRightClickMarker(e) {
      var _e$gmap_params5 = e.gmap_params,
          location_id = _e$gmap_params5.location_id,
          gmap_event = _e$gmap_params5.gmap_event;
      var marker_data = gmap_event.locationGet(location_id); //console.log("onRightClickMarker : with this data");
      //console.dir(marker_data);

      gmap_event.locationDelete(location_id);
    },
    onDelete: function onDelete(e) {
      var _e$gmap_params6 = e.gmap_params,
          location_data = _e$gmap_params6.location_data,
          gmap_event = _e$gmap_params6.gmap_event;
      console.log("onDelete : with this data"); //    console.dir(location_data);

      return true;
    },
    onDragStartMarker: function onDragStartMarker(e) {
      var _e$gmap_params7 = e.gmap_params,
          location_data = _e$gmap_params7.location_data,
          gmap_event = _e$gmap_params7.gmap_event;
      var new_location = {};
      new_location.title_text = "onDragStartMarker : " + location_data.title_text; //    console.log("onDragStartMarker : ", new_location.title_text);

      return location_data;
    },
    onDragMarker: function onDragMarker(e) {
      var _e$gmap_params8 = e.gmap_params,
          start_lat_lng = _e$gmap_params8.start_lat_lng,
          location_id = _e$gmap_params8.location_id,
          page_x = _e$gmap_params8.page_x,
          page_y = _e$gmap_params8.page_y,
          gmap_event = _e$gmap_params8.gmap_event; //   console.log("onDragMarker :", start_lat_lng, location_id, page_x, page_y);
    },
    onDragEndMarker: function onDragEndMarker(e) {
      var _e$gmap_params9 = e.gmap_params,
          from_location = _e$gmap_params9.from_location,
          gmap_event = _e$gmap_params9.gmap_event; //  console.log("onDragEndMarker : with this data");
      // console.dir(from_location);
    },
    onDragDrop: function onDragDrop(e) {
      var _e$gmap_params10 = e.gmap_params,
          location_data = _e$gmap_params10.location_data,
          gmap_event = _e$gmap_params10.gmap_event;
      var new_location = {};

      if (location_data.from_lat === undefined) {
        new_location.title_text = "onDragDrop 0km";
      } else {
        var from_location = {
          lat: location_data.from_lat,
          lng: location_data.from_lng
        };
        var to_location = {
          lat: location_data.lat,
          lng: location_data.lng
        };

        var km_distance = _KmsDistance["default"].getKms(from_location, to_location);

        new_location.title_text = "onDragDrop ".concat(km_distance);
      } //    console.log("onDragDrop : ", new_location);


      location_data.title_text += " - moved";
      return location_data;
    }
  },
  marker_defaults: {
    pin_color: "#d00",
    // default marker color
    showing_info_window: true,
    // marker has pop-up window information to show
    can_move: true,
    // marker can be dragged on map
    can_delete: true,
    // marker can be deleted
    can_change: true,
    // marker can be changed
    title_text: "",
    // first line in info window
    content_text: "",
    // second line in info window
    extra_text: "",
    // appended second line text, distance kms
    title_style: "color:black; font-size: 12px;",
    // first line style
    content_style: "color:blue;",
    // second line style
    info_style: "font-family: Arial, sans-serif;" // info window style

  }
};
module.exports = GmapDragDrop;