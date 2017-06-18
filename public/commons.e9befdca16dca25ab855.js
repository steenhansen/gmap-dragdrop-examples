/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonpGLOBAL_WEBPACK__name_"];
/******/ 	window["webpackJsonpGLOBAL_WEBPACK__name_"] = function webpackJsonpCallback(chunkIds, moreModules, executeModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [], result;
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules, executeModules);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/ 		if(executeModules) {
/******/ 			for(i=0; i < executeModules.length; i++) {
/******/ 				result = __webpack_require__(__webpack_require__.s = executeModules[i]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// objects to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		6: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData === 0) {
/******/ 			return new Promise(function(resolve) { resolve(); });
/******/ 		}
/******/
/******/ 		// a Promise means "currently loading".
/******/ 		if(installedChunkData) {
/******/ 			return installedChunkData[2];
/******/ 		}
/******/
/******/ 		// setup Promise in chunk cache
/******/ 		var promise = new Promise(function(resolve, reject) {
/******/ 			installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 		});
/******/ 		installedChunkData[2] = promise;
/******/
/******/ 		// start chunk loading
/******/ 		var head = document.getElementsByTagName('head')[0];
/******/ 		var script = document.createElement('script');
/******/ 		script.type = 'text/javascript';
/******/ 		script.charset = 'utf-8';
/******/ 		script.async = true;
/******/ 		script.timeout = 120000;
/******/
/******/ 		if (__webpack_require__.nc) {
/******/ 			script.setAttribute("nonce", __webpack_require__.nc);
/******/ 		}
/******/ 		script.src = __webpack_require__.p + "" + {"0":"5909c09e5f8a123b2ce2","1":"4e54fe69c1e02a8f64a2","2":"9047f48b18f8a4851587","3":"a9f46e467521ae170108","4":"f5f5a42c76955f0ae03f","5":"b7e95e809c6c214c2c75"}[chunkId] + ".js";
/******/ 		var timeout = setTimeout(onScriptComplete, 120000);
/******/ 		script.onerror = script.onload = onScriptComplete;
/******/ 		function onScriptComplete() {
/******/ 			// avoid mem leaks in IE.
/******/ 			script.onerror = script.onload = null;
/******/ 			clearTimeout(timeout);
/******/ 			var chunk = installedChunks[chunkId];
/******/ 			if(chunk !== 0) {
/******/ 				if(chunk) {
/******/ 					chunk[1](new Error('Loading chunk ' + chunkId + ' failed.'));
/******/ 				}
/******/ 				installedChunks[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		head.appendChild(script);
/******/
/******/ 		return promise;
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports.GmapDragDrop = __webpack_require__(3)
module.exports.GmapGroups = __webpack_require__(13)
module.exports.KmsDistance = __webpack_require__(14)
module.exports.MapStyles = __webpack_require__(15)
module.exports.MarkerIcons = __webpack_require__(16)
module.exports.SvgButtons = __webpack_require__(17)









/***/ }),
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _reactDom = __webpack_require__(2);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactClass = __webpack_require__(19);

var _reactClass2 = _interopRequireDefault(_reactClass);

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
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof2(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

// _not_use_strict_ie_gmapDragDrop() was copied from https://github.com/MihaiValentin/setDragImage-IE

function _not_use_strict_ie_gmapDragDrop(drag_image) {
  var ie_drag_css_class_name = IE_DRAG_CSS_CLASS_NAME;
  var ie_drag_pixels = IE_DRAG_PIXELS;
  var no_indent_ie_drag_css = '\n.' + ie_drag_css_class_name + ' {\nbackground: url(' + drag_image.src + ') no-repeat #fff 0 0 !important;\nwidth: ' + ie_drag_pixels + 'px !important;\nheight: 20px !important;\ntext-indent: -9999px !important;\nborder: 0 !important;\noutline: 0 !important;}\n.' + ie_drag_css_class_name + ' * {\ndisplay: none !important; }';
  var ie_drag_styles = document.createElement('style');
  ie_drag_styles.innerText = no_indent_ie_drag_css;
  var ie_drag_style_element = document.getElementById(IE_DRAG_STYLE_ID_NAME);
  ie_drag_style_element.appendChild(ie_drag_styles);
  var ie_event_target = GmapDragDrop.getIeDragTarget();
  ie_event_target.classList.add(ie_drag_css_class_name);
  setTimeout(function () {
    ie_drag_style_element.removeChild(ie_drag_styles);
    ie_event_target.classList.remove(ie_drag_css_class_name);
  }, 0);
}

if (typeof DataTransfer.prototype.setDragImage !== 'function') {
  DataTransfer.prototype.setDragImage = _not_use_strict_ie_gmapDragDrop;
}

var PIN_TEXT_START = 0.8;
var PIN_SVG_H_W = 512;
var FIT_BOUNDS_PADDING = 100;
var IE_DRAG_PIXELS = 5;

var IE_DRAG_TOP_TIP_COLOR = "rgb(200,0,0)";

var GMAP_REACT_CONTAINER = 'react__div_';
var GMAP_CONTAINER = 'google__div_';
var DRAG_DIV_PREFIX = 'gmap_drag__div_';
var IE_SVG_PREFIX = 'gmap_drag__ie_';

var IE_DRAG_CSS_CLASS_NAME = 'set-drag-image-ie--dragging-';
var IE_DRAG_STYLE_ID_NAME = 'ie_drag_style__id_';
var IE_DRAG_DIV_ID_NAME = 'ie_drag_div__id_';

var USE_SVG_ID = 'use_svg__id_';
var USE_SYMBOL_ID = 'svg_path_symbol__id_';
var DRAG_CANVAS_ID = 'drag_canvas__id_';

var INSIDE_TO_INSIDE_MOVE = 'INSIDE_TO_INSIDE_MOVE';

var ALLOWABLE_MARKER_DRIFT = 15;
var RIGHT_CLICK_BUTTON = 2;

var DRAG_FONT_HEIGHT = 10;
var DRAG_FONT = 'Verdana';
var DRAG_FONT_RGBA = 'rgba(0, 0, 0, 0.99)';

var GOOGLE_MAPS_API = 'https://maps.googleapis.com/maps/api/js?key=';

var VERTICAL_PAN_FOR_MAP_REDRAW = 100000;
var HIDE_IE_DRAG_IMAGE = '-8888px';

var H_W_100_REL_STYLE = {
  position: 'relative',
  height: '100%',
  width: '100%'
};
var DRAG_OVERLAY_STYLE = {
  position: 'absolute',
  width: '100%',
  height: '100%',
  left: 0,
  top: 0,
  display: 'none',
  cursor: 'url(ie_drag_drop.cur),auto' //http://www.cursor.cc/?
};
var PIN_SVG_DEFAULT = "m256.5,512c-25.5,-255 -127.5,-280.5 -127.5,-382.5a127.5,127.5 0 1 1 255,0c0,102 -102,127.5 -127.5,382.5zm-25.5,-382.5a25.5,25.5 0 1 1 51,0a25.5,25.5 0 1 1 -51,0";

var GmapDragDrop = function (_Component) {
  _inherits(GmapDragDrop, _Component);

  _createClass(GmapDragDrop, [{
    key: '_startIePreload',
    value: function _startIePreload() {
      var canvas_element = document.getElementById(DRAG_CANVAS_ID);
      if (typeof canvas_element.msToBlob === 'function') {
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
        newImg.id = '_ie_pre_load_drag_image';
        newImg.style.top = '-9999px';
        newImg.style.left = '-9999px';
        newImg.style.position = 'absolute';
        document.body.appendChild(newImg);
      }
    }
  }, {
    key: 'labelInput',
    value: function labelInput(location_id, text_label, gmap_var_name) {
      var input_id = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';

      var label_input = text_label + ':<input \n                                        id="' + input_id + '"\n\t\t\t\t\t\t\t\t\t\ttype="text" \n\t\t\t\t\t\t\t\t\t\tdata-location_id=' + location_id + '\n\t\t\t\t\t\t\t\t\t\tonkeypress =" if(event.keyCode === 13){\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tevent.preventDefault();\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tlet location_id = this.dataset.location_id\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tlet location_change = ' + gmap_var_name + '.locationGet(location_id)\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tlocation_change.content_text =  this.value\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tlocation_change.title_text = \'\'\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t' + gmap_var_name + '.locationModifyDirect(location_change)\n\t\t\t\t\t\t\t\t\t\t\t\t\t} "\n\t\t\t\t\t\t\t\t\t/>';
      return label_input;
    }
  }, {
    key: '_latLngDrop',
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
      var lat_lng_func = this._convertXyToLatLng({ x: marker_pos_x, y: marker_pos_y });
      var lat_lng_obj = this._latLngToObj(lat_lng_func);
      return lat_lng_obj;
    }
  }, {
    key: '_convertXyToLatLng',
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
    key: '_onDragStart_react',
    value: function _onDragStart_react(drag_event) {
      var start_lat_lng = this._gmapDragDrop_vars.drag_start_pos;
      var location_id = this._locationIdForLatLng(start_lat_lng);
      if (location_id) {
        var json_parameters = this._makeDragParameters(location_id, drag_event);
        var canvas_element = this._canvasPin(json_parameters.pin_color, json_parameters.title_text, json_parameters.content_text);
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
    key: '_makeDragParameters',
    value: function _makeDragParameters(location_id, drag_event) {
      var location_data = Object.assign({}, this._gmapDragDrop_vars.location_datas[location_id], { "from_id": this._gmapDragDrop_vars.container_id });
      if (this.state.map_options.onDragStartMarker !== undefined) {
        var event_parameters = this._eventParameters('location_data', location_data);
        var extended_event = Object.assign({}, drag_event, event_parameters);
        location_data = this.state.map_options.onDragStartMarker(extended_event);
      }
      var json_string = JSON.stringify(location_data);
      drag_event.dataTransfer.setData("text", json_string);
      this._gmapDragDrop_vars.drag_location = location_data;
      return location_data;
    }
  }, {
    key: '_onDragEnd_react',
    value: function _onDragEnd_react(drag_event) {
      var from_location = this._gmapDragDrop_vars.drag_location;
      this._hideIeImageDrag();
      if (this.state.map_options.onDragEndMarker !== undefined) {
        var event_parameters = this._eventParameters('from_location', from_location);
        var extended_event = Object.assign({}, drag_event, event_parameters);
        this.state.map_options.onDragEndMarker(extended_event);
      }
    }
  }, {
    key: '_checkLatLng',
    value: function _checkLatLng(marker_data, dropped_at_lat_lng) {
      if (!Array.isArray(marker_data)) {
        marker_data.from_lat = marker_data.lat;
        marker_data.from_lng = marker_data.lng;
        if (marker_data.from_lat === undefined) {
          throw 'Lat is undefined';
        }
        if (marker_data.from_lng === undefined) {
          throw 'Lng is undefined';
        }
      }
      marker_data.lat = dropped_at_lat_lng.lat;
      marker_data.lng = dropped_at_lat_lng.lng;
    }
  }, {
    key: '_onDropOnMap_react',
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
            var event_parameters = this._eventParameters('location_data', marker_data);
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
    key: 'getMap',
    value: function getMap() {
      var google_map = this.state.map_options.google_map;
      return google_map;
    }
  }, {
    key: 'filterByProperty',
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
    key: 'filterByUndefProperty',
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
    key: 'filterByPropertyValue',
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
    key: '_onStartIeDrag',
    value: function _onStartIeDrag(drag_event) {
      var start_lat_lng = this._gmapDragDrop_vars.drag_start_pos;
      var location_id = this._locationIdForLatLng(start_lat_lng);
      if (location_id) {
        this._makeDragParameters(location_id, drag_event);
        GmapDragDrop.ie_drag_target = drag_event.target;
        var ie_drag_image = document.getElementById('_ie_pre_load_drag_image');
        drag_event.dataTransfer.setDragImage(ie_drag_image);
      } else {
        drag_event.preventDefault();
      }
    }
  }, {
    key: '_canvasSvg',
    value: function _canvasSvg() {
      var canvas_to_draw_on = document.getElementById(DRAG_CANVAS_ID);
      if (canvas_to_draw_on === null) {
        var canvas_style = "position:fixed; left:-9999px; top:-9999px";
        var canvas_elem = ' <canvas\n\t\t\t\t\t\t\t\tid="' + DRAG_CANVAS_ID + '" style="' + canvas_style + '"></canvas>';
        window.document.body.insertAdjacentHTML('beforeend', canvas_elem);
      }
    }
  }, {
    key: '_ieCssStyle',
    value: function _ieCssStyle() {
      var ie_drag_style_id = IE_DRAG_STYLE_ID_NAME;
      var ie_drag_image_id = IE_DRAG_DIV_ID_NAME;
      var canvas_to_draw_on = document.getElementById(ie_drag_style_id);
      if (canvas_to_draw_on === null) {
        var canvas_elem = ' <div id=' + ie_drag_style_id + '></div>\n\t\t\t\t                  <div id=' + ie_drag_image_id + '></div> ';
        window.document.body.insertAdjacentHTML('beforeend', canvas_elem);
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._ieCssStyle();
      this._addSvgToBody();
      this._canvasSvg();
      this._gmapDragDrop_vars.container_id = _reactDom2.default.findDOMNode(this).parentNode.getAttribute("id");
      this._lazyReactGoogleMap();
    }
  }, {
    key: '_lazyReactGoogleMap',
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
          GmapDragDrop.google_script_element = load_script_element;
        }
      }
    }
  }, {
    key: '_initGmap',
    value: function _initGmap() {
      var map_element = document.getElementById(this.state.GOOGLE_DIV_ID);
      this._gmapDragDrop_vars.center_lat_lng = this.centerMap();
      var _state$map_options = this.state.map_options,
          scroll_wheel = _state$map_options.scroll_wheel,
          gestureHandling = _state$map_options.gestureHandling,
          init_zoom = _state$map_options.init_zoom,
          map_type = _state$map_options.map_type,
          street_view = _state$map_options.street_view,
          zoom_control = _state$map_options.zoom_control,
          map_type_control = _state$map_options.map_type_control,
          map_styles = _state$map_options.map_styles;

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
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = self._gmapDragDrop_vars.map_positions[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var partial_map_location = _step.value;

            self._placeMarker(partial_map_location);
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        self._googleEvents();
      };
      return init_gmap_func;
    }
  }, {
    key: '_canvasPin',
    value: function _canvasPin(drag_marker_color, title_text, content_text) {
      var pin_scale = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : this.state.map_options.pin_scale;
      var canvas_id = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : DRAG_CANVAS_ID;

      var canvas_element = document.getElementById(canvas_id);
      var context = canvas_element.getContext("2d");
      context.fillStyle = DRAG_FONT_RGBA;
      context.font = DRAG_FONT_HEIGHT + "px " + DRAG_FONT;
      var title_clean = title_text.replace(/<[^>]+>/g, '');
      if (title_clean === '') {
        title_clean = content_text.replace(/<[^>]+>/g, '');
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
      context.fillStyle = drag_marker_color;
      var pin_svg_path = new Path2D(this.state.map_options.pin_svg);
      context.scale(pin_scale, pin_scale);
      context.fill(pin_svg_path);
      return canvas_element;
    }
  }, {
    key: '_ieDragDiv',
    value: function _ieDragDiv() {
      return _react2.default.createElement('div', { id: this.state.DRAG_DIV_ID,
        draggable: 'true',
        onDragStart: this._onStartIeDrag,
        onDragEnd: this._onDragEnd_Overlay,
        onMouseMove: this._onMouseMoveOverlay,
        onContextMenu: this._onMouseDownOverlay,
        onMouseDown: this._onMouseDownOverlay,
        style: DRAG_OVERLAY_STYLE });
    }
  }, {
    key: '_normalDragDiv',
    value: function _normalDragDiv() {
      return _react2.default.createElement('div', { id: this.state.DRAG_DIV_ID,
        draggable: 'true',
        onDragStart: this._onDragStart_react,
        onDragEnd: this._onDragEnd_Overlay,
        onMouseMove: this._onMouseMoveOverlay,
        onContextMenu: this._onMouseDownOverlay,
        onMouseDown: this._onMouseDownOverlay,
        style: DRAG_OVERLAY_STYLE });
    }
  }, {
    key: 'render',
    value: function render() {
      if (DataTransfer.prototype.setDragImage === _not_use_strict_ie_gmapDragDrop) {
        var start_drag_function = this._ieDragDiv();
      } else {
        var start_drag_function = this._normalDragDiv();
      }
      var canvas_ie_svg = this._canvasIeSvg();
      return _react2.default.createElement('div', { id: this.state.REACT_DIV_ID,
        onDrop: this._onDropOnMap_react,
        onDragOver: this._onDragOver_react,
        onDragEnd: this._onDragEnd_react,
        onMouseMove: this._onMouseMove_react,
        onMouseDown: this._onMouseDown_react,
        onMouseUp: this._onMouseUp_react,
        style: H_W_100_REL_STYLE }, _react2.default.createElement('div', { id: this.state.GOOGLE_DIV_ID,
        style: H_W_100_REL_STYLE }), start_drag_function, canvas_ie_svg);
    }
  }], [{
    key: 'browserFactory',

    // auto	"use strict"

    value: function browserFactory(container_id, gmap_properties) {
      var gmap_factory = _react2.default.createFactory(GmapDragDrop);
      var gmap_component = gmap_factory(gmap_properties);
      var gmap_element = document.getElementById(container_id);
      var factory_gmap = _reactDom2.default.render(gmap_component, gmap_element);
      return factory_gmap;
    }
  }, {
    key: 'browserDestroy',
    value: function browserDestroy(factory_gmap) {
      factory_gmap.locationsClearAll();
      var load_script_element = GmapDragDrop.google_script_element;
      load_script_element.removeEventListener("load", this._initAllMaps, false);
      var container_id = factory_gmap._gmapDragDrop_vars.container_id;
      var gmap_element = document.getElementById(container_id);
      _reactDom2.default.unmountComponentAtNode(gmap_element);
    }
  }, {
    key: 'getIeDragTarget',
    value: function getIeDragTarget() {
      return GmapDragDrop.ie_drag_target;
    }
  }]);

  function GmapDragDrop(props) {
    _classCallCheck(this, GmapDragDrop);

    var _this = _possibleConstructorReturn(this, (GmapDragDrop.__proto__ || Object.getPrototypeOf(GmapDragDrop)).call(this, props));

    _this._gmapDragDrop_vars = {
      current_page_x: 0,
      current_page_y: 0,
      last_marker_x: 0,
      last_marker_y: 0,
      center_lat_lng: { lat: 0, lng: 0 },
      drag_start_pos: { lat: 0, lng: 0 },
      dragging_location_id: 0,
      am_dragging: false,
      mouse_is_up: true,
      container_id: 'parent_id',
      map_number: 0,
      browser_zoom_level: 1,
      location_markers: {} // google map markers
      , location_info_windows: {} // google map info windows
      , location_lat_lngs: {} // locations
      , location_datas: {} // original constructor data
    };

    _this._gmapDragDrop_vars.map_positions = _this.props.map_locations;
    _this._object_type = 'GmapDragDrop';
    _this._gmapDragDrop_vars.browser_zoom_level = window.devicePixelRatio;
    _this._gmapDragDrop_vars.on_ready_fired = false;
    GmapDragDrop.map_count++;
    _this._gmapDragDrop_vars.map_number = GmapDragDrop.map_count;
    var map_options = Object.assign({}, _this.props.map_defaults, _this.props.map_options);
    _this.state = {
      REACT_DIV_ID: GMAP_REACT_CONTAINER + GmapDragDrop.map_count,
      GOOGLE_DIV_ID: GMAP_CONTAINER + GmapDragDrop.map_count,
      DRAG_DIV_ID: DRAG_DIV_PREFIX + GmapDragDrop.map_count,
      IE_SVG_DRAG: IE_SVG_PREFIX + GmapDragDrop.map_count,
      map_options: map_options
    };
    return _this;
  }

  _createClass(GmapDragDrop, [{
    key: '_canvasIeSvg',
    value: function _canvasIeSvg() {
      var ie_drag_image_id = this.state.IE_SVG_DRAG;
      var view_box = "0 0 " + PIN_SVG_H_W + " " + PIN_SVG_H_W;
      var symbol_id = '#' + USE_SYMBOL_ID;
      var ie_drag_pin_width = PIN_SVG_H_W * this.state.map_options.pin_scale + 'px';
      var svg_style = {
        position: 'fixed',
        zIndex: 0,
        left: HIDE_IE_DRAG_IMAGE,
        top: HIDE_IE_DRAG_IMAGE,
        width: ie_drag_pin_width,
        height: ie_drag_pin_width
      };
      var ie_drag_svg = _react2.default.createElement('div', null, _react2.default.createElement('svg', { viewBox: view_box,
        preserveAspectRatio: "xMinYMin",
        id: ie_drag_image_id,
        style: svg_style }, _react2.default.createElement('use', { xlinkHref: symbol_id, x: 0, y: 0 })));
      return ie_drag_svg;
    }
  }, {
    key: '_stopDragging',
    value: function _stopDragging() {
      this._gmapDragDrop_vars.am_dragging = false;
      var start_drag_div = document.getElementById(this.state.DRAG_DIV_ID);
      start_drag_div.style.display = 'none';
    }
  }, {
    key: '_onMouseMoveOverlay',
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
    key: 'svgPin',
    value: function svgPin(parent_id) {
      var pin_color = void 0;
      var svg_parent = document.getElementById(parent_id);
      try {
        pin_color = svg_parent.style.color;
      } catch (e) {
        pin_color = 'black';
      }
      var symbol_id = '#' + USE_SYMBOL_ID;
      var svg_pin = '\n\t\t\t<svg viewBox="0 0 ' + PIN_SVG_H_W + ' ' + PIN_SVG_H_W + '" preserveAspectRatio="xMinYMin"> \n\t\t\t\t<use xlink:href="' + symbol_id + '" x="0" y="0" style="fill:' + pin_color + '" />\n\t\t\t</svg>';
      svg_parent.innerHTML = svg_pin;
    }
  }, {
    key: '_addSvgToBody',
    value: function _addSvgToBody() {
      var svg_id = USE_SVG_ID;
      var svg_symbol_id = USE_SYMBOL_ID;
      var svg_pin = document.getElementById(svg_id);
      var pin_svg = this.state.map_options.pin_svg;
      if (svg_pin === null) {
        var svg_path_symbol = '<svg style="height:0;" id="' + svg_id + '">\n\t\t\t\t\t\t\t\t<symbol id="' + svg_symbol_id + '">\n\t\t\t\t\t\t\t\t\t<path fill="#000" d="' + pin_svg + '" style="fill:inherit" />\n\t\t\t\t\t\t\t\t</symbol>\n\t\t\t\t\t\t\t</svg>';
        window.document.body.insertAdjacentHTML('beforeend', svg_path_symbol);
      }
    }
  }, {
    key: '_onDragOver_react',
    value: function _onDragOver_react(drag_event) {
      if (this._gmapDragDrop_vars.am_dragging) {
        drag_event.preventDefault();
        var start_lat_lng = this._gmapDragDrop_vars.drag_start_pos;
        var location_id = this._locationIdForLatLng(start_lat_lng);
        this._gmapDragDrop_vars.dragging_location_id = location_id;
        if (this.state.map_options.onDragMarker !== undefined) {
          var event_parameters = this._eventParameters('start_lat_lng', start_lat_lng, 'location_id', location_id, 'page_x', drag_event.pageX, 'page_y', drag_event.pageY);
          var extended_event = Object.assign({}, drag_event, event_parameters);
          this.state.map_options.onDragMarker(extended_event);
        }
      } else {
        this._onDropOnMap_react(drag_event);
      }
    }
  }, {
    key: '_hideIeImageDrag',
    value: function _hideIeImageDrag() {
      var ie_drag_image = document.getElementById(this.state.IE_SVG_DRAG);
      ie_drag_image.style.left = HIDE_IE_DRAG_IMAGE;
      ie_drag_image.style.top = HIDE_IE_DRAG_IMAGE;
    }
  }, {
    key: '_onMouseUp_react',
    value: function _onMouseUp_react() {
      this._gmapDragDrop_vars.mouse_is_up = true;
      this._hideIeImageDrag();
    }
  }, {
    key: '_onMouseLeftDownOverlay',
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
    key: '_mouseOverMarker_googleListener',
    value: function _mouseOverMarker_googleListener(map_marker, lat_lng_obj) {
      /// drag 1
      var self = this;
      map_marker.addListener('mouseover', function (e_ignored) {
        if (self._gmapDragDrop_vars.mouse_is_up) {
          var start_drag_div = document.getElementById(self.state.DRAG_DIV_ID);
          start_drag_div.style.display = 'inline';
          self._gmapDragDrop_vars.last_marker_x = self._gmapDragDrop_vars.current_page_x;
          self._gmapDragDrop_vars.last_marker_y = self._gmapDragDrop_vars.current_page_y;
          self._gmapDragDrop_vars.drag_start_pos = lat_lng_obj;
        }
      });
    }
  }, {
    key: 'startDragFromOutside',
    value: function startDragFromOutside(json_parameters) {
      var json_string = JSON.stringify(json_parameters);
      var outside_drag_start = function outside_drag_start(start_drag_event) {
        start_drag_event.dataTransfer.setData("text", json_string);
      };
      return outside_drag_start;
    }
  }, {
    key: '_onMouseDown_react',
    value: function _onMouseDown_react() {
      this._gmapDragDrop_vars.mouse_is_up = false;
    }
  }, {
    key: '_onMouseMove_react',
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
    key: '_onDragEnd_Overlay',
    value: function _onDragEnd_Overlay(e_ignored) {
      this._stopDragging();
      this._gmapDragDrop_vars.mouse_is_up = true;
    }
  }, {
    key: '_onMouseRightDownOverlay',
    value: function _onMouseRightDownOverlay(event) {
      event.preventDefault();
      if (this.state.map_options.onRightClickMarker !== undefined) {
        var start_lat_lng = this._gmapDragDrop_vars.drag_start_pos;
        var location_id = this._locationIdForLatLng(start_lat_lng);
        if (location_id) {
          var event_parameters = this._eventParameters('location_id', location_id);
          var extended_event = Object.assign({}, event, event_parameters);
          this.state.map_options.onRightClickMarker(extended_event);
        }
      }
    }
  }, {
    key: '_onMouseDownOverlay',
    value: function _onMouseDownOverlay(event) {
      if (event.button === RIGHT_CLICK_BUTTON) {
        this._onMouseRightDownOverlay(event);
      } else {
        this._onMouseLeftDownOverlay(event);
      }
    }
  }, {
    key: '_browserResizeReDraw',
    value: function _browserResizeReDraw() {
      this._gmapDragDrop_vars.browser_zoom_level = window.devicePixelRatio;
      var google_map = this.state.map_options.google_map;
      google_map.panBy(VERTICAL_PAN_FOR_MAP_REDRAW, VERTICAL_PAN_FOR_MAP_REDRAW);
      google_map.panBy(-VERTICAL_PAN_FOR_MAP_REDRAW, -VERTICAL_PAN_FOR_MAP_REDRAW);
    }
  }, {
    key: 'validLatLng',
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
    key: 'numberLocations',
    value: function numberLocations() {
      var location_lat_lngs = this._gmapDragDrop_vars.location_lat_lngs;
      var number_locations = Object.keys(location_lat_lngs).length;
      return number_locations;
    }
  }, {
    key: 'centerMap',
    value: function centerMap() {
      var lat_center = this.state.map_options.lat_center;
      var lng_center = this.state.map_options.lng_center;
      if (lat_center === undefined || lng_center === undefined) {
        var lat_center_accum = 0;
        var lng_center_accum = 0;
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = this._gmapDragDrop_vars.map_positions[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var marker_info = _step2.value;
            var lat = marker_info.lat,
                lng = marker_info.lng;

            lat_center_accum += lat;
            lng_center_accum += lng;
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }

        var number_markers = this._gmapDragDrop_vars.map_positions.length;
        lat_center = lat_center_accum / number_markers;
        lng_center = lng_center_accum / number_markers;
      }
      var lat_lng_center = { lat: lat_center, lng: lng_center };
      return lat_lng_center;
    }
  }, {
    key: '_pushInitMap',
    value: function _pushInitMap(init_gmap_func) {
      GmapDragDrop.waiting_for_init.push(init_gmap_func);
    }
  }, {
    key: '_isFirstInitialization',
    value: function _isFirstInitialization() {
      if (GmapDragDrop.waiting_for_init.length === 1) {
        return true;
      } else {
        return false;
      }
    }
  }, {
    key: '_isGoogleMapsReady',
    value: function _isGoogleMapsReady() {
      if (typeof google === 'undefined') {
        return false;
      } else {
        return true;
      }
    }
  }, {
    key: '_initAllMaps',
    value: function _initAllMaps() {
      var init_gmap_func = GmapDragDrop.waiting_for_init.pop();
      while (init_gmap_func) {
        init_gmap_func();
        init_gmap_func = GmapDragDrop.waiting_for_init.pop();
      }
    }
  }, {
    key: '_googleEvents',
    value: function _googleEvents() {
      var google_map = this.state.map_options.google_map;
      google_map.addListener('dblclick', this._onDoubleClick_googleListener);
      google_map.addListener('rightclick', this._onRightClick_googleListener);
      google_map.addListener('mousemove', this._onMouseMove_googleListener);
      google_map.addListener('zoom_changed', this._onZoomChanged_googleListener);
      google_map.addListener('center_changed', this._onCenterChanged_googleListener);
      google_map.addListener('idle', this._onIdle_googleListener);
    }
  }, {
    key: 'getCenterMapZoom',
    value: function getCenterMapZoom() {
      var google_map = this.state.map_options.google_map;
      var map_zoom = google_map.getZoom();
      var map_center = google_map.getCenter();
      var center_lat = map_center.lat();
      var center_lng = map_center.lng();
      var center_map_zoom = { lat: center_lat, lng: center_lng, zoom: map_zoom };
      return center_map_zoom;
    }
  }, {
    key: 'reCenter',
    value: function reCenter(map_center) {
      this._gmapDragDrop_vars.center_lat_lng = map_center;
      var google_map = this.state.map_options.google_map;
      google_map.panTo(this._gmapDragDrop_vars.center_lat_lng);
    }
  }, {
    key: '_onRightClick_googleListener',
    value: function _onRightClick_googleListener(event) {
      if (this.state.map_options.onRightClick !== undefined) {
        var event_parameters = this._eventParameters();
        var extended_event = Object.assign({}, event, event_parameters);
        this.state.map_options.onRightClick(extended_event);
      }
    }
  }, {
    key: '_eventParameters',
    value: function _eventParameters() {
      var event_parameters = {
        gmap_params: {
          gmap_event: this
        }
      };

      for (var _len = arguments.length, parameter_name_values = Array(_len), _key = 0; _key < _len; _key++) {
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
    key: '_equalLatLngObj',
    value: function _equalLatLngObj(lat_lan_obj_a, lat_lan_obj_b) {
      if (lat_lan_obj_a.lat !== lat_lan_obj_b.lat) {
        return false;
      } else if (lat_lan_obj_a.lng !== lat_lan_obj_b.lng) {
        return false;
      }
      return true;
    }
  }, {
    key: '_locationIdForLatLng',
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
    key: '_onDoubleClick_googleListener',
    value: function _onDoubleClick_googleListener(event) {
      if (this.state.map_options.onDoubleClick !== undefined) {
        var event_parameters = this._eventParameters();
        var extended_event = Object.assign({}, event, event_parameters);
        this.state.map_options.onDoubleClick(extended_event);
      }
    }
  }, {
    key: '_latLngToObj',
    value: function _latLngToObj(str_array_obj_funcs) {
      var lat_value = void 0,
          lng_value = void 0;
      if (typeof str_array_obj_funcs === 'string') {
        var string_arr = str_array_obj_funcs.split(',');
        var lat_str = string_arr.shift();
        var lng_str = string_arr.shift();
        lat_value = lat_str.trim();
        lng_value = lng_str.trim();
      } else if (str_array_obj_funcs instanceof Array) {
        lat_value = str_array_obj_funcs.shift();
        lng_value = str_array_obj_funcs.shift();
      } else if ('lat' in str_array_obj_funcs) {
        lat_value = str_array_obj_funcs.lat;
        lng_value = str_array_obj_funcs.lng;
        if (lat_value instanceof Function) {
          lat_value = lat_value();
          lng_value = lng_value();
        }
      }
      var lat_number = Number(lat_value);
      var lng_number = Number(lng_value);
      var lat_lng = { lat: lat_number, lng: lng_number };
      if (!this.validLatLng(lat_lng)) {
        throw new Error('Invalid lat/lng =' + lat_number + '/' + lng_number);
      }
      return lat_lng;
    }
  }, {
    key: 'removeLocation',
    value: function removeLocation(location_id) {
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
    key: 'locationDelete',
    value: function locationDelete(location_id) {
      var moving_marker = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

      var delete_location_data = this._gmapDragDrop_vars.location_datas[location_id];
      if (delete_location_data.can_delete || moving_marker === INSIDE_TO_INSIDE_MOVE) {
        var delete_confirm = true;
        if (this.state.map_options.onDelete !== undefined) {
          var event_parameters = this._eventParameters('location_data', delete_location_data);
          delete_confirm = this.state.map_options.onDelete(event_parameters);
        }
        if (delete_confirm !== false) {
          this.removeLocation(location_id);
        }
      } else {
        alert(' Cannot Delete \'' + location_id + '\' ');
      }
    }
  }, {
    key: 'locationExists',
    value: function locationExists(location_id) {
      if (location_id in this._gmapDragDrop_vars.location_lat_lngs) {
        return true;
      } else {
        return false;
      }
    }
  }, {
    key: 'locationsShowInfoAll',
    value: function locationsShowInfoAll() {
      for (var location_id in this._gmapDragDrop_vars.location_lat_lngs) {
        this.locationShowInfo(location_id);
      }
    }
  }, {
    key: 'locationsHideInfoAll',
    value: function locationsHideInfoAll() {
      for (var location_id in this._gmapDragDrop_vars.location_lat_lngs) {
        this.locationHideInfo(location_id);
      }
    }
  }, {
    key: 'locationGet',
    value: function locationGet(location_id) {
      var a_location = this._gmapDragDrop_vars.location_datas[location_id];
      return a_location;
    }
  }, {
    key: 'locationsGetAll',
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
    key: 'locationsPutAll',
    value: function locationsPutAll(map_locations) {
      this.locationsClearAll();
      for (var location_id in map_locations) {
        var a_location = map_locations[location_id];
        this.locationAdd(a_location);
      }
    }
  }, {
    key: 'locationsClearAll',
    value: function locationsClearAll() {
      for (var location_id in this._gmapDragDrop_vars.location_lat_lngs) {
        this.locationDelete(location_id);
      }
    }
  }, {
    key: 'locationModifyDirect',
    value: function locationModifyDirect(marker_data) {
      var location_id = marker_data.location_id;
      if (marker_data.can_change !== undefined) {
        if (!marker_data.can_change) {
          throw ' Cannot Change \'' + location_id + '\' ';
        }
      }
      if (this.locationExists(location_id)) {
        this.removeLocation(location_id);
      }
      this._gmapDragDrop_vars.location_datas[location_id] = marker_data;
      this.locationAdd(marker_data);
    }
  }, {
    key: 'locationModifyJSON',
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
    key: '_markerInfoWindow',
    value: function _markerInfoWindow(map_location, map_marker) {
      var title_text = map_location.title_text,
          content_text = map_location.content_text;

      if (title_text !== '' || content_text !== '') {
        var info_window = this._popUpWindow(map_location, map_marker);
        return info_window;
      } else {
        return null;
      }
    }
  }, {
    key: '_popUpWindow',
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
      var content_string = '<div style="' + info_style + '" ondragstart="event.preventDefault()">\n                                        <div style="' + title_style + '" > ' + title_text + '</div>\n                                         <span style="' + content_style + '">' + content_text + '</span>\n                                          <span style="' + content_style + '">' + extra_text + '</span>\n                                      </div>';
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
    key: '_unixTimeId',
    value: function _unixTimeId() {
      return '_unix_time_' + Date.now() + '_' + Math.random();
    }
  }, {
    key: '_placeMarker',
    value: function _placeMarker(partial_map_location) {
      var map_location = Object.assign({}, this.props.marker_defaults, partial_map_location);
      if (map_location.location_id === undefined) {
        map_location.location_id = this._unixTimeId();
      }
      var location_id = map_location.location_id;
      var google_map = this.state.map_options.google_map;
      try {
        var lat_lng_obj = this._latLngToObj(map_location);
        var y_anchor = PIN_SVG_H_W - PIN_SVG_H_W / 2;

        var pin_path = this.state.map_options.pin_svg;
        if (map_location.marker_svg) {
          pin_path = map_location.marker_svg;
        }
        var marker_icon = { // must have a pin path for drag image....
          path: pin_path,
          fillColor: map_location.pin_color,
          fillOpacity: .9,
          origin: new google.maps.Point(0, 0),
          size: new google.maps.Size(0, 0),
          anchor: new google.maps.Point(y_anchor, PIN_SVG_H_W),
          strokeWeight: 0,
          scale: this.state.map_options.pin_scale
        };

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
    key: 'locationShowInfo',
    value: function locationShowInfo(location_id) {
      var info_window = this._gmapDragDrop_vars.location_info_windows[location_id];

      if (info_window !== null) {
        var google_map = this.state.map_options.google_map;
        var map_marker = this._gmapDragDrop_vars.location_markers[location_id];
        info_window.open(google_map, map_marker);
      }
    }
  }, {
    key: 'locationHideInfo',
    value: function locationHideInfo(location_id) {
      var info_window = this._gmapDragDrop_vars.location_info_windows[location_id];
      if (info_window !== null) {
        info_window.close();
      }
    }
  }, {
    key: '_outsideToInsideDrop',
    value: function _outsideToInsideDrop(location_id, id_lat_lng_title_content_obj) {
      this._hideIeImageDrag();
      var changed_location = this.addChangeEvent(id_lat_lng_title_content_obj);
      if (changed_location) {
        if (this.locationExists(location_id)) {
          var old_location_data = this._gmapDragDrop_vars.location_datas[location_id];
          if (old_location_data.can_change) {
            this.locationDelete(location_id);
          } else {
            throw ' Cannot Change \'' + location_id + '\' ';
          }
        }
        changed_location.lat = changed_location.from_lat;
        changed_location.lng = changed_location.from_lng;
        this._gmapDragDrop_vars.location_datas[location_id] = changed_location;
        this.locationAdd(changed_location);
      }
    }
  }, {
    key: 'addChangeEvent',
    value: function addChangeEvent(lat_lng_obj) {
      var changed_lat_lng_obj = Object.assign({}, lat_lng_obj);
      if (this.state.map_options.onAdd !== undefined) {
        var event_parameters = this._eventParameters('location_data', changed_lat_lng_obj);
        changed_lat_lng_obj = this.state.map_options.onAdd(event_parameters);
      }
      return changed_lat_lng_obj;
    }
  }, {
    key: '_insideToInsideDrop',
    value: function _insideToInsideDrop(location_id, old_location_data) {
      if (old_location_data.can_move === undefined || old_location_data.can_move) {
        this.locationDelete(location_id, INSIDE_TO_INSIDE_MOVE);
        this.locationAdd(old_location_data);
      } else {
        this._stopDragging();
      }
    }
  }, {
    key: '_onCenterChanged_googleListener',
    value: function _onCenterChanged_googleListener() {
      if (this._gmapDragDrop_vars.on_ready_fired) {
        var google_map = this.state.map_options.google_map;
        var map_center = google_map.getCenter();
        var moved_center = { lat: map_center.lat(), lng: map_center.lng() };
        if (this.state.map_options.onCenterChanged === undefined) {
          this._gmapDragDrop_vars.center_lat_lng = moved_center;
        } else {
          var event_parameters = this._eventParameters('moved_center', moved_center);
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
    key: '_onZoomChanged_googleListener',
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
          var event_parameters = this._eventParameters('map_zoom', map_zoom);
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
    key: '_onMouseMove_googleListener',
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
    key: '_onIdle_googleListener',
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
    key: 'reboundMap',
    value: function reboundMap() {
      var location_array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      var map_bounds = new google.maps.LatLngBounds();
      if (location_array) {
        for (var location_id in location_array) {
          var lat_lng_obj = location_array[location_id];
          if ((typeof lat_lng_obj === 'undefined' ? 'undefined' : _typeof(lat_lng_obj)) === 'object') {
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
    key: 'locationAdd',
    value: function locationAdd(changed_lat_lng_obj) {
      if (changed_lat_lng_obj[0] === undefined) {
        if (changed_lat_lng_obj) {
          var changed_location = this.addChangeEvent(changed_lat_lng_obj);
          if (changed_location) {
            this._placeMarker(changed_location);
            if (this.state.map_options.change_rebounding) {
              this.reboundMap();
            }
            if (this.state.map_options.onAfterAdd !== undefined) {
              var event_parameters = this._eventParameters('location_data', changed_location);
              this.state.map_options.onAfterAdd(event_parameters);
            }
          }
        }
      }
      return changed_lat_lng_obj;
    }
  }]);

  return GmapDragDrop;
}(_reactClass2.default);

GmapDragDrop.map_count = 0;
GmapDragDrop.waiting_for_init = [];
GmapDragDrop.ie_drag_target = '';
GmapDragDrop.google_script_element = '';

GmapDragDrop.displayName = 'GmapDragDropComponent';

GmapDragDrop.propTypes = {
  google_map_key: _react.PropTypes.string.isRequired,
  map_locations: _react.PropTypes.array // [ {lat:49.39, lng:-123.08} ]
  , lat_center: _react.PropTypes.number // 49.27
  , lng_center: _react.PropTypes.number // -122.85
  , map_type: _react.PropTypes.string // roadmap/satellite/hybrid/terrain
  , street_view: _react.PropTypes.bool // street view button
  , zoom_control: _react.PropTypes.bool // +/- buttons
  , map_type_control: _react.PropTypes.bool // map/satellite button
  , pin_svg: _react.PropTypes.string // marker icon
  , scroll_wheel: _react.PropTypes.bool // scrolling zooms
  , gestureHandling: _react.PropTypes.string // 'none' === no dragging map
  , change_rebounding: _react.PropTypes.bool // zoom to all markers
  , pin_scale: _react.PropTypes.number // scale 512x512 svg icons down
  , map_styles: _react.PropTypes.array // MapStyles.NIGHT_STYLE
  , init_zoom: _react.PropTypes.number // start map zoom
  , max_zoom: _react.PropTypes.number // highest zoom allowed
  , min_zoom: _react.PropTypes.number // minimum zoom

  , onReady: _react.PropTypes.func,
  onCenterChanged: _react.PropTypes.func,
  onZoomChanged: _react.PropTypes.func,
  onMouseMove: _react.PropTypes.func,
  onDoubleClick: _react.PropTypes.func,
  onAdd: _react.PropTypes.func,
  onAfterAdd: _react.PropTypes.func,
  onRightClick: _react.PropTypes.func,
  onRightClickMarker: _react.PropTypes.func,
  onDelete: _react.PropTypes.func,
  onDragStartMarker: _react.PropTypes.func,
  onDragMarker: _react.PropTypes.func,
  onDragEndMarker: _react.PropTypes.func,
  onDragDrop: _react.PropTypes.func

};

GmapDragDrop.defaultProps = {
  map_defaults: {
    map_type: 'roadmap',
    street_view: true,
    zoom_control: true,
    map_type_control: true,
    pin_svg: PIN_SVG_DEFAULT,
    scroll_wheel: true,
    gestureHandling: 'auto',
    change_rebounding: true,
    pin_scale: 0.1,
    map_styles: [],
    init_zoom: 14,
    max_zoom: 20,
    min_zoom: 0

    //    onReady: (e)=> {
    //      const {gmap_event} = e.gmap_params
    //      const container_id = gmap_event._gmapDragDrop_vars.container_id
    //      console.log(`onReady : in div with id of '${container_id}' is ready`)
    //    }

    //    , onCenterChanged: (e)=> {
    //      const {moved_center, gmap_event} = e.gmap_params
    //      console.log(`onCenterChanged : at ${moved_center.lat}, ${moved_center.lng}`)
    //      return true
    //    }

    //    , onZoomChanged: (e)=> {
    //      const {map_zoom, gmap_event} = e.gmap_params
    //      console.log(`onZoomChanged : with has a new zoom of ${map_zoom}`)
    //      return true
    //    }

    //    , onMouseMove: (e) => {
    //      const {gmap_event} = e.gmap_params
    //      const {latLng, pageX, pageY} = e
    //      const lat=latLng.lat()
    //      const lng=latLng.lng()
    //      console.log(`onMouseMove : at ${lat},${lng}  ${pageX},${pageY}`)
    //    }

    //    , onDoubleClick: (e)=> {
    //      const {gmap_event} = e.gmap_params
    //      const {latLng, pixel} = e
    //      const lat = latLng.lat()
    //      const lng = latLng.lng()
    //      console.log(`onDoubleClick : at ${lat},${lng}  ${pixel.x},${pixel.y}`)
    //      gmap_event.locationAdd(latLng)
    //    }

    //    , onAdd: (e)=> {
    //      const {location_data, gmap_event} = e.gmap_params
    //      console.log('onAdd : with this data')
    //      console.dir(location_data)
    //      return location_data
    //    }

    //    , onAfterAdd: (e)=> {
    //      const {location_data, gmap_event} = e.gmap_params
    //      console.log('onAfterAdd : with this data')
    //      console.dir(location_data)
    //    }

    //    , onRightClick: (e)=> {
    //      const {gmap_event} = e.gmap_params
    //      const {latLng, pixel} = e
    //      const lat = latLng.lat()
    //      const lng = latLng.lng()
    //      console.log(`onRightClick : at ${lat},${lng}  ${pixel.x},${pixel.y}`)
    //    }

    //    , onRightClickMarker: (e)=> {
    //      const {location_id, gmap_event} = e.gmap_params
    //      const marker_data= gmap_event.locationGet(location_id)
    //      console.log('onRightClickMarker : with this data')
    //      console.dir(marker_data)
    //      gmap_event.locationDelete(location_id)
    //    }

    //    , onDelete: (e)=> {
    //      const {location_data, gmap_event} = e.gmap_params
    //      console.log('onDelete : with this data')
    //      console.dir(location_data)
    //      return true
    //    }

    //    ,  onDragStartMarker: (e)=> {
    //      const {location_data, gmap_event} = e.gmap_params
    //      location_data.title_text ='onDragStartMarker : ' + location_data.title_text
    //      console.log('onDragStartMarker : with this data')
    //      return location_data
    //    }

    //    , onDragMarker: (e) => {
    //      const {start_lat_lng, location_id, page_x, page_y, gmap_event} = e.gmap_params
    //      console.log('onDragMarker :', start_lat_lng, location_id, page_x, page_y)
    //    }

    //    , onDragEndMarker: (e)=> {
    //      const {from_location, gmap_event} = e.gmap_params
    //      console.log('onDragEndMarker : with this data')
    //      console.dir(from_location)
    //    }

    //    , onDragDrop: (e)=> {
    //      const {location_data, gmap_event} = e.gmap_params
    //      console.log('onDragDrop : with this data')
    //      console.dir(location_data)
    //      if (location_data.from_lat=== undefined){
    //        location_data.title_text = 'onDragDrop 0km'
    //      }else {
    //        const from_location = {lat: location_data.from_lat, lng: location_data.from_lng}
    //        const to_location = {lat: location_data.lat, lng: location_data.lng}
    //        const km_distance = GmapKms.getKms(from_location, to_location)
    //        location_data.title_text = `onDragDrop ${km_distance}`
    //      }
    //      return location_data
    //    }

  },
  marker_defaults: {
    pin_color: '#d00' // default marker color
    , showing_info_window: true // marker has pop-up window information to show
    , can_move: true // marker can be dragged on map
    , can_delete: true // marker can be deleted
    , can_change: true // marker can be changed
    , title_text: '' // first line in info window
    , content_text: '' // second line in info window
    , extra_text: '' // appended second line text, distance kms
    , title_style: "color:black; font-size: 12px;" // first line style
    , content_style: "color:blue;" // second line style
    , info_style: "font-family: Arial, sans-serif;" // info window style
  }

};

module.exports = GmapDragDrop;

/***/ }),
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

var _GmapDragDrop2 = __webpack_require__(3);

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
            this.removeLocation(a_location.location_id);
          }
        }
      } else {
        this.removeLocation(lat_lng_obj.location_id);
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

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var KmsDistance = function () {
  function KmsDistance() {
    _classCallCheck(this, KmsDistance);
  }

  _createClass(KmsDistance, null, [{
    key: 'degreesToRadians',
    value: function degreesToRadians(x) {
      return x * Math.PI / 180;
    }
  }, {
    key: 'getDistance',
    value: function getDistance(p1, p2) {
      var earth_radius = 6378137;
      var dLat = KmsDistance.degreesToRadians(p2.lat - p1.lat);
      var dLong = KmsDistance.degreesToRadians(p2.lng - p1.lng);
      var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(KmsDistance.degreesToRadians(p1.lat)) * Math.cos(KmsDistance.degreesToRadians(p2.lat)) * Math.sin(dLong / 2) * Math.sin(dLong / 2);
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      var meter_distance = earth_radius * c;
      return meter_distance;
    }
  }, {
    key: 'getKms',
    value: function getKms(p1, p2) {
      var meter_distance = KmsDistance.getDistance(p1, p2);
      var dist_10th = Math.round(meter_distance / 100);
      return dist_10th / 10 + ' km';
    }
  }]);

  return KmsDistance;
}();

module.exports = KmsDistance;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//  https://snazzymaps.com/

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var MapStyles = function MapStyles() {
  _classCallCheck(this, MapStyles);
};

MapStyles.NO_BUSINESS_STYLE = [{ featureType: "poi", elementType: "labels.text", stylers: [{ visibility: "off" }] }];
MapStyles.NO_BUSINESS_STYLE = [{
  featureType: "poi",
  elementType: "labels.text",
  stylers: [{ visibility: "off" }]
}, { featureType: "poi.business", stylers: [{ visibility: "off" }] }, {
  featureType: "road",
  elementType: "labels.icon",
  stylers: [{ visibility: "off" }]
}, { featureType: "transit", stylers: [{ visibility: "off" }] }];
MapStyles.RETRO_STYLE = [{ elementType: "geometry", stylers: [{ color: "#ebe3cd" }] }, {
  elementType: "labels.text.fill",
  stylers: [{ color: "#523735" }]
}, { elementType: "labels.text.stroke", stylers: [{ color: "#f5f1e6" }] }, {
  featureType: "administrative",
  elementType: "geometry.stroke",
  stylers: [{ color: "#c9b2a6" }]
}, {
  featureType: "administrative.land_parcel",
  elementType: "geometry.stroke",
  stylers: [{ color: "#dcd2be" }]
}, {
  featureType: "administrative.land_parcel",
  elementType: "labels.text.fill",
  stylers: [{ color: "#ae9e90" }]
}, { featureType: "landscape.natural", elementType: "geometry", stylers: [{ color: "#dfd2ae" }] }, {
  featureType: "poi",
  elementType: "geometry",
  stylers: [{ color: "#dfd2ae" }]
}, { featureType: "poi", elementType: "labels.text.fill", stylers: [{ color: "#93817c" }] }, {
  featureType: "poi.park",
  elementType: "geometry.fill",
  stylers: [{ color: "#a5b076" }]
}, { featureType: "poi.park", elementType: "labels.text.fill", stylers: [{ color: "#447530" }] }, {
  featureType: "road",
  elementType: "geometry",
  stylers: [{ color: "#f5f1e6" }]
}, { featureType: "road.arterial", elementType: "geometry", stylers: [{ color: "#fdfcf8" }] }, {
  featureType: "road.highway",
  elementType: "geometry",
  stylers: [{ color: "#f8c967" }]
}, {
  featureType: "road.highway",
  elementType: "geometry.stroke",
  stylers: [{ color: "#e9bc62" }]
}, {
  featureType: "road.highway.controlled_access",
  elementType: "geometry",
  stylers: [{ color: "#e98d58" }]
}, {
  featureType: "road.highway.controlled_access",
  elementType: "geometry.stroke",
  stylers: [{ color: "#db8555" }]
}, {
  featureType: "road.local",
  elementType: "labels.text.fill",
  stylers: [{ color: "#806b63" }]
}, { featureType: "transit.line", elementType: "geometry", stylers: [{ color: "#dfd2ae" }] }, {
  featureType: "transit.line",
  elementType: "labels.text.fill",
  stylers: [{ color: "#8f7d77" }]
}, {
  featureType: "transit.line",
  elementType: "labels.text.stroke",
  stylers: [{ color: "#ebe3cd" }]
}, { featureType: "transit.station", elementType: "geometry", stylers: [{ color: "#dfd2ae" }] }, {
  featureType: "water",
  elementType: "geometry.fill",
  stylers: [{ color: "#b9d3c2" }]
}, { featureType: "water", elementType: "labels.text.fill", stylers: [{ color: "#92998d" }] }];
MapStyles.NIGHT_STYLE = [{ elementType: "geometry", stylers: [{ color: "#242f3e" }] }, {
  elementType: "labels.text.stroke",
  stylers: [{ color: "#242f3e" }]
}, { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] }, {
  featureType: "administrative.locality",
  elementType: "labels.text.fill",
  stylers: [{ color: "#d59563" }]
}, { featureType: "poi", elementType: "labels.text.fill", stylers: [{ color: "#d59563" }] }, {
  featureType: "poi.park",
  elementType: "geometry",
  stylers: [{ color: "#263c3f" }]
}, { featureType: "poi.park", elementType: "labels.text.fill", stylers: [{ color: "#6b9a76" }] }, {
  featureType: "road",
  elementType: "geometry",
  stylers: [{ color: "#38414e" }]
}, { featureType: "road", elementType: "geometry.stroke", stylers: [{ color: "#212a37" }] }, {
  featureType: "road",
  elementType: "labels.text.fill",
  stylers: [{ color: "#9ca5b3" }]
}, { featureType: "road.highway", elementType: "geometry", stylers: [{ color: "#746855" }] }, {
  featureType: "road.highway",
  elementType: "geometry.stroke",
  stylers: [{ color: "#1f2835" }]
}, {
  featureType: "road.highway",
  elementType: "labels.text.fill",
  stylers: [{ color: "#f3d19c" }]
}, { featureType: "transit", elementType: "geometry", stylers: [{ color: "#2f3948" }] }, {
  featureType: "transit.station",
  elementType: "labels.text.fill",
  stylers: [{ color: "#d59563" }]
}, { featureType: "water", elementType: "geometry", stylers: [{ color: "#17263c" }] }, {
  featureType: "water",
  elementType: "labels.text.fill",
  stylers: [{ color: "#515c6d" }]
}, { featureType: "water", elementType: "labels.text.stroke", stylers: [{ color: "#17263c" }] }];
MapStyles.BLUE_WATER = [{
  "featureType": "administrative",
  "elementType": "labels.text.fill",
  "stylers": [{
    "color": "#444444"
  }]
}, {
  "featureType": "landscape",
  "elementType": "all",
  "stylers": [{
    "color": "#f2f2f2"
  }]
}, {
  "featureType": "poi",
  "elementType": "all",
  "stylers": [{
    "visibility": "off"
  }]
}, {
  "featureType": "road",
  "elementType": "all",
  "stylers": [{
    "saturation": -100
  }, {
    "lightness": 45
  }]
}, {
  "featureType": "road.highway",
  "elementType": "all",
  "stylers": [{
    "visibility": "simplified"
  }]
}, {
  "featureType": "road.arterial",
  "elementType": "labels.icon",
  "stylers": [{
    "visibility": "off"
  }]
}, {
  "featureType": "transit",
  "elementType": "all",
  "stylers": [{
    "visibility": "off"
  }]
}, {
  "featureType": "water",
  "elementType": "all",
  "stylers": [{
    "color": "#46bcec"
  }, {
    "visibility": "on"
  }]
}];

module.exports = MapStyles;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// https://www.shareicon.net/
// https://svg-edit.github.io/svgedit/releases/svg-edit-2.8.1/svg-editor.html

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var MarkerIcons = function MarkerIcons() {
  _classCallCheck(this, MarkerIcons);
};

MarkerIcons.SKI_ICON_PATH = "m330.98799,85.17422c19.10273,0 47.26773,11.66465 47.26773,39.81121c0,28.14654 -18.0507,79.97311 -18.0507,79.97311c0,0 47.15701,30.87814 58.89549,40.34646c24.58439,19.78564 16.22349,37.54103 -16.6849,23.6431c-53.4323,-22.55414 -78.51501,-33.68358 -82.53859,-47.76607c-4.02358,-14.0825 -0.46143,-42.65355 -0.46143,-42.65355l-30.87814,12.82744l-130.6369,-96.01202c0,0 -11.99689,8.52702 -18.27218,8.52702c-6.31222,0 -13.84257,-4.61418 -13.84257,-4.61418l14.52546,-19.5088l-15.57751,-19.01045l21.6313,9.20993c-0.40605,0 13.38115,-18.06917 13.38115,-18.06917c0,0 7.14277,4.20813 8.82233,12.58751c1.67956,8.37937 -1.43963,16.46342 -1.43963,16.46342l56.23773,41.21392c0,0 33.18525,-36.96886 107.62132,-36.96886l-0.00003,-0.00002l0.00002,0.00002l0.00003,-0.00003zm-5.94307,244.34892c35.32621,-43.42874 1.79032,-72.73806 -12.31065,-83.81211c-14.0825,-11.05559 -119.93198,-85.10407 -119.93198,-85.10407c-29.2355,39.99578 -1.55037,77.68446 16.13119,89.97667c17.8846,12.42141 38.09473,24.15989 49.99934,33.07451c12.2922,9.22838 15.17144,19.19502 6.12763,31.26574c-9.06227,12.08919 -38.42031,47.94768 -38.42031,47.94768l-184.12805,-105.54401c-2.65961,-1.57288 -5.67157,-2.4529 -8.75977,-2.5594c-19.41984,-0.70357 -26.60153,25.21505 -9.58883,34.60641l365.06163,209.36877c0.53855,0.30399 1.09189,0.58065 1.65816,0.82908c0,0 14.46622,6.60918 33.09239,7.85851c18.62599,1.24934 44.82886,-3.85081 61.75076,-26.85605c14.63325,-19.83363 -15.15927,-41.7538 -29.73991,-21.8814c-8.23466,11.19513 -18.26258,12.65376 -29.5596,11.8961c-11.09933,-0.74454 -19.80134,-4.51636 -20.11489,-4.65035l-130.85837,-75.06619c0,0 15.00331,-18.82552 49.59126,-61.34987l0.00002,-0.00002l-0.00002,-0.00002l0,0.00003zm48.7185,-281.86027c0,56.58858 84.88297,56.58858 84.88297,0c0,-56.58858 -84.88297,-56.58858 -84.88297,0";
MarkerIcons.TOTEM_PATH = "m245.8775,69.43478c-4.66067,-4.66545 -4.65709,-12.22545 0.00716,-16.88731s12.22426,-4.65948 16.88851,0.00597l2.2354,2.2354c4.66425,4.66186 4.66783,12.22187 0.00716,16.88731c-2.33213,2.33332 -5.39028,3.50117 -8.44724,3.50117c-3.05457,0 -6.10914,-1.16427 -8.44007,-3.49401l-2.25093,-2.24854zm261.80112,320.73476c-2.26764,2.6426 -5.57776,4.16391 -9.06102,4.16391l-46.22935,0c-5.3855,0 -10.10468,-3.60506 -11.51972,-8.8007l-21.36767,-78.37041l-37.10982,0c-5.97182,0 -11.02535,-4.4111 -11.83139,-10.32799l-10.47367,-76.84074l-34.75261,0l0,92.34287l17.11539,0c6.59396,0 11.94125,5.3461 11.94125,11.94125l0,46.97448c0,1.31354 -0.21255,2.57812 -0.60423,3.7591l42.50846,60.70692c1.81626,2.59483 2.52796,5.80345 1.97747,8.9225l-7.13609,40.4677c-1.14397,6.49484 -7.32834,10.83668 -13.83274,9.68674l-40.4677,-7.1349c-3.11905,-0.5493 -5.89181,-2.3166 -7.70808,-4.91024l-32.85157,-46.91597l0,33.72925c0,3.16682 -1.25861,6.20467 -3.49759,8.44366l-29.05664,29.05545c-2.33213,2.33213 -5.38789,3.49759 -8.44366,3.49759s-6.11153,-1.16547 -8.44366,-3.49759l-29.05664,-29.05545c-2.23898,-2.23898 -3.49759,-5.27684 -3.49759,-8.44366l0,-33.72686l-32.84799,46.91119c-1.81626,2.59364 -4.58902,4.36094 -7.70808,4.91024l-40.46889,7.13609c-3.11786,0.5481 -6.32767,-0.1624 -8.9225,-1.97866s-4.36094,-4.58902 -4.91024,-7.70808l-7.13609,-40.46889c-0.55049,-3.11905 0.16121,-6.32767 1.97747,-8.9225l42.50846,-60.70692c-0.39167,-1.18218 -0.60423,-2.44557 -0.60423,-3.75791l0,-46.97448c0,-6.59515 5.34729,-11.94125 11.94125,-11.94125l17.11539,0l0,-92.34167l-34.75023,0l-10.47606,76.84074c-0.80723,5.91689 -5.85957,10.32799 -11.83139,10.32799l-37.10743,0l-21.36767,78.37041c-1.41623,5.19564 -6.13541,8.8007 -11.51972,8.8007l-46.23054,0c-3.48326,0 -6.79218,-1.52012 -9.06102,-4.16391c-2.26884,-2.6426 -3.26951,-6.14497 -2.7429,-9.58763l35.64821,-232.45311c0.8944,-5.82852 5.90734,-10.13095 11.80392,-10.13095l137.81514,0l0,-32.92202l-39.24491,0c-6.59396,0 -11.94125,-5.3461 -11.94125,-11.94125l0,-46.72252c0,-3.10114 1.20607,-6.07929 3.36266,-8.30753l33.38057,-34.4708c2.24973,-2.32257 5.3449,-3.63372 8.57859,-3.63372l98.50694,0c3.16682,0 6.20467,1.25861 8.44366,3.49759l23.76308,23.76547l23.76667,-23.76547c4.66664,-4.66306 12.22545,-4.66306 16.88851,0c4.66306,4.66306 4.66306,12.22426 0,16.88731l-28.71273,28.71154l0,88.9014l140.77537,0c5.89659,0 10.90952,4.30363 11.80392,10.13095l35.64701,232.45311c0.52541,3.44266 -0.47526,6.94384 -2.7441,9.58763zm-310.33274,-308.97621c6.59396,0 11.94125,5.3461 11.94125,11.94125l0,44.86327l89.02678,0l0,-88.9014l-25.21275,-25.21395l-88.50137,0l-26.49763,27.36337l0,29.94746l39.24372,0zm16.93508,301.99894l-34.08152,0l-43.53301,62.17091l4.20332,23.83712l23.83831,-4.20451l49.57409,-70.79966l0,-11.00386l-0.00119,0zm58.11328,0l-34.23078,0l0,81.42498l17.11539,17.1142l17.11539,-17.1142l0,-81.42498zm57.96521,0l-34.08271,0l0,11.00505l49.57767,70.80205l23.83712,4.20213l4.20332,-23.83593l-43.5354,-62.1733zm-150.30688,-46.97329l0,23.09199l150.45495,0l0,-23.09199l-150.45495,0zm304.65348,34.23198l-31.98344,-208.57062l-394.88394,0l-31.98463,208.57062l23.19707,0l21.36767,-78.37041c1.41623,-5.19564 6.13541,-8.8007 11.51972,-8.8007l35.80583,0l10.47606,-76.84074c0.80723,-5.91689 5.85957,-10.32799 11.83139,-10.32799l57.11499,0c6.59396,0 11.94125,5.3461 11.94125,11.94125l0,104.28411l92.34167,0l0,-104.28411c0,-6.59515 5.34729,-11.94125 11.94125,-11.94125l57.11738,0c5.97182,0 11.02535,4.4111 11.83139,10.32799l10.47367,76.84074l35.80703,0c5.3855,0 10.10468,3.60506 11.51972,8.8007l21.36767,78.37041l23.19826,0z";
MarkerIcons.THEATRE_PATH = "m44.99634,1.42444c-13.30551,0 -28.22551,14.11279 -28.22551,28.22551l0,197.57877c0,62.54786 28.22551,141.1283 141.12749,141.1283c10.12391,0 19.36775,-0.48096 28.22544,-1.75043l0,-82.91248l-112.9019,0c0,0 14.11272,-56.45129 84.67646,-56.45129c14.11272,0 19.65991,2.08873 28.22544,5.29228l0,-61.7433c0,-25.87435 10.31054,-47.49232 28.22551,-56.45109c28.22551,-14.11279 39.62066,-8.41406 56.45095,0c28.22551,14.11279 28.22551,14.11279 28.22551,14.11279l0,-98.78938c0,-14.11279 -14.91999,-28.22558 -28.22551,-28.22558c-28.22544,0 -56.45095,28.22558 -112.9019,28.22558c-56.45102,0 -84.67646,-28.22558 -112.90197,-28.22558l0,-0.01409l-0.00001,0.00001zm49.39463,98.78938c19.48574,0 35.28183,15.795 35.28183,35.28191c0,19.48689 -15.79609,35.28191 -35.28183,35.28191c-19.48574,0 -35.28191,-15.795 -35.28191,-35.28191c0,-19.48689 15.79615,-35.28191 35.28191,-35.28191zm148.18381,42.33829c-13.30551,0 -28.22551,14.11279 -28.22551,28.22544l0,197.57945c0,62.54746 28.22551,141.12721 141.12741,141.12721c112.90197,0 141.12749,-78.57975 141.12749,-141.12721l0,-197.57945c0,-14.11272 -14.91999,-28.22544 -28.22551,-28.22544c-28.22551,0 -56.45095,28.22544 -112.90197,28.22544c-56.45095,0 -84.67646,-28.22544 -112.9019,-28.22544l-0.00001,0zm49.39455,98.78952c19.48574,0 35.28191,15.7952 35.28191,35.28231c0,19.48643 -15.79615,35.28163 -35.28191,35.28163c-19.48574,0 -35.28183,-15.7952 -35.28183,-35.28163c0,-19.4871 15.79609,-35.28231 35.28183,-35.28231zm127.01469,0c19.48574,0 35.28191,15.7952 35.28191,35.28231c0,19.48643 -15.79615,35.28163 -35.28191,35.28163c-19.48574,0 -35.28183,-15.7952 -35.28183,-35.28163c0,-19.4871 15.79609,-35.28231 35.28183,-35.28231zm-148.18381,155.24041l169.35292,0c0,0 -14.11272,56.45142 -84.67646,56.45142c-70.56367,0 -84.67646,-56.45142 -84.67646,-56.45142z";
MarkerIcons.GONDOLA_PATH = "m219.55794,139.05722l81.01556,0l0,23.7772l-81.01556,0l0,-23.7772zm-40.23993,46.03199l-80.8141,140.0419l80.8347,139.81755l161.55952,0l80.72481,-139.81755l-80.72481,-140.0419l-161.58012,0zm38.96476,152.81419l-42.38505,0l0,-12.7494l42.34155,0l0.0435,12.7494l0,0zm-48.04432,-33.28259l38.62822,-74.70611l102.51028,0l38.60533,74.70611l-179.74383,0zm104.58901,-283.70785l0,-4.65196l-63.1426,0l0,4.65196l-211.68486,0l0,18.2736l211.66197,0l0,4.78703l29.3678,0l41.84934,41.82645l-28.69702,28.63063l11.83137,12.01223l40.66346,-40.66346l-41.73716,-41.82645l9.88542,0l0,-4.80993l211.68486,0l0,-18.2301l-211.68257,0z";
MarkerIcons.FLOWER_PATH = "m424.5562,368.73208c-1.49443,-2.49019 -37.31213,-61.00033 -99.49326,-61.00033c-22.03696,0 -40.7432,7.35924 -55.80354,16.95778l0,-45.54168c37.90645,-7.40001 69.60467,-32.3192 86.30841,-65.9619c1.63713,-2.36788 2.80696,-4.95216 3.47498,-7.6368c5.95263,-14.39545 9.25668,-30.15361 9.25668,-46.67388l0,-135.3533c0,-12.9904 -10.53157,-23.52198 -23.52198,-23.52198l-10.85931,0l-176.36308,0l-10.85931,0c-0.13643,0 -0.26972,0.01882 -0.40615,0.02039c-0.42183,0.00627 -0.84209,0.03293 -1.26235,0.06429c-0.36694,0.02666 -0.73389,0.05018 -1.09612,0.09252c-0.37949,0.04548 -0.75427,0.10977 -1.13219,0.17249c-0.39046,0.06429 -0.78093,0.12702 -1.16512,0.2117c-0.34969,0.07684 -0.69468,0.17406 -1.04124,0.26658c-0.39203,0.10506 -0.78407,0.20543 -1.16826,0.33088c-0.34813,0.11291 -0.68998,0.24933 -1.03497,0.37949c-0.36381,0.138 -0.72918,0.26815 -1.08515,0.4234c-0.3591,0.15681 -0.71036,0.33715 -1.06476,0.51278c-0.3246,0.16152 -0.65077,0.31676 -0.96597,0.49083c-0.35753,0.19915 -0.70252,0.42026 -1.05065,0.6398c-0.29951,0.18818 -0.60059,0.37008 -0.8907,0.5708c-0.32617,0.22581 -0.64137,0.47201 -0.95813,0.71664c-0.29795,0.23052 -0.59903,0.45946 -0.88599,0.70252c-0.2807,0.23992 -0.55198,0.49396 -0.82327,0.74957c-0.30422,0.2854 -0.60687,0.5708 -0.8954,0.87031c-0.09566,0.09879 -0.20072,0.18504 -0.29481,0.28697c-0.15054,0.16152 -0.27756,0.33872 -0.4234,0.50337c-0.27913,0.31676 -0.55198,0.63666 -0.81386,0.96754c-0.22895,0.29167 -0.44849,0.58805 -0.66175,0.88599c-0.22895,0.32147 -0.45162,0.64607 -0.66646,0.97695c-0.20856,0.32617 -0.40771,0.65391 -0.59903,0.98635c-0.18974,0.32774 -0.36851,0.66018 -0.54257,0.99733c-0.1772,0.34656 -0.34656,0.69468 -0.50494,1.04908c-0.15525,0.34499 -0.30108,0.69468 -0.44065,1.04751c-0.14113,0.35753 -0.27285,0.71664 -0.39517,1.07887c-0.12388,0.36224 -0.23522,0.72918 -0.34185,1.10083c-0.1035,0.36851 -0.20072,0.73859 -0.2854,1.11181c-0.08625,0.37008 -0.16309,0.74173 -0.23052,1.11651c-0.07213,0.3936 -0.13015,0.7872 -0.18034,1.18237c-0.04548,0.36067 -0.08782,0.72134 -0.11761,1.08828c-0.0345,0.42496 -0.05332,0.84993 -0.06429,1.27489c-0.00627,0.21797 -0.03293,0.42967 -0.03293,0.65077l0,135.35486c0,59.53412 42.67671,109.26899 99.04007,120.27257l0,45.54168c-15.06034,-9.6001 -33.76658,-16.95778 -55.80197,-16.95778c-62.18113,0 -98.0004,58.50857 -99.49326,60.99876c-5.05879,8.43028 -4.34059,19.11709 1.80178,26.79467c4.7828,5.97772 48.15106,58.40664 97.68991,58.40664c22.03696,0 40.7432,-7.35924 55.80354,-16.95778l0,24.79844c0,12.9904 10.53157,23.52198 23.52198,23.52198c12.9904,0 23.52198,-10.53157 23.52198,-23.52198l0,-27.62107c16.04669,10.8797 35.39744,19.78041 55.80197,19.78041c0,0 0,0 0,0c62.18113,0 97.99883,-58.507 99.49326,-60.99719c4.47074,-7.44863 4.47074,-16.75392 0.00314,-24.20255zm-258.14429,38.15735c-15.20931,0 -34.46597,-13.81367 -48.56347,-27.36547c10.22736,-10.9926 27.28079,-24.74669 48.56504,-24.74669c22.14359,0 39.69726,14.87687 49.75839,26.05294c-10.07838,11.19646 -27.62578,26.05921 -49.75996,26.05921zm154.84361,-359.84548l0,106.74744l-114.74177,-106.74744l114.74177,0zm-75.51809,187.35098c-41.64174,0 -75.51809,-33.87792 -75.51809,-75.51809l0,-81.3437l135.99623,126.52158c-13.78545,18.40673 -35.76438,30.34021 -60.47814,30.34021zm79.32395,172.4945c-15.20931,0 -34.46754,-13.81367 -48.56504,-27.36547c10.22892,-10.9926 27.28236,-24.74669 48.56661,-24.74669c22.14516,0 39.69882,14.88 49.76153,26.05608c-10.06584,11.17608 -27.62578,26.05608 -49.76309,26.05608z";
MarkerIcons.LEAF_PATH = "m71.89044,45.28387c15.7331,32.73957 15.55846,71.59162 -0.54427,115.48119c-48.95251,133.52873 2.72985,211.21759 3.25547,211.98228c29.39083,45.74281 66.91696,68.88042 111.61701,68.88042c33.69756,0 71.01174,-12.99477 110.89809,-38.61298l4.75944,-3.04353c-63.04261,-58.99531 -132.92002,-122.89587 -143.11034,-208.21136c-1.42088,-11.87909 8.47441,-17.96446 17.73386,-17.18959c-6.43635,3.7811 -11.02962,11.35177 -8.19803,20.34502c25.85051,82.216 80.99859,143.44267 142.7424,199.20115c1.18011,1.0699 2.37887,2.12962 3.55898,3.19104c1.19028,1.06142 2.37039,2.1398 3.55898,3.19952c16.55375,14.73781 33.48561,29.14159 50.42765,43.47415c15.72462,13.29828 31.4289,26.55077 46.78389,39.98808c15.83483,13.8612 35.11844,-12.50475 19.35821,-26.29305c-29.00425,-25.37914 -59.34459,-50.00376 -88.52518,-75.61349c-1.19028,-1.04277 -2.35174,-2.11267 -3.54202,-3.16391c-1.19028,-1.05125 -2.36022,-2.11267 -3.5505,-3.17239c32.36993,-22.16097 58.93088,-45.53087 65.54187,-77.0988c5.69878,-27.22391 -3.8184,-58.78336 -29.07716,-96.46549c-58.1187,-86.71432 -247.34997,-165.54768 -337.20277,-199.16215c12.39454,10.3107 24.79926,24.15325 33.51444,42.28387z";
MarkerIcons.BRIDGE_SVG = "\n   <svg width=\"64\" height=\"32\" viewBox='0 0 512 512' style=\"display: block; margin:auto\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:svg=\"http://www.w3.org/2000/svg\" >\n        <g stroke=\"null\">\n            <path stroke=\"null\" fill=\"#148aa5\" d=\"m739.33204,327.7715l-233.24083,-0.32269l0.02706,-16.65515l233.23459,0.32269c0.00833,0 0.01457,0 0.02498,0c9.1874,0 16.64058,-7.44069 16.65515,-16.63225c0.01249,-9.19781 -7.43444,-16.66556 -16.63225,-16.67805l-6.58919,-0.00833l-226.35393,-175.82844l0.0687,-41.68576c0.01457,-9.19781 -7.43028,-16.66764 -16.62809,-16.68222c-0.01041,0 -0.01874,0 -0.02915,0c-9.18532,0 -16.6385,7.43861 -16.65515,16.62809l-0.06454,39.89534l-225.13394,130.34114l-224.55517,-130.00595l0.06662,-40.84468c0.01457,-9.19781 -7.43028,-16.66764 -16.62809,-16.68222c-0.01041,0 -0.01874,0 -0.02915,0c-9.18532,0 -16.6385,7.43861 -16.65515,16.62809l-0.0687,42.36654l-206.29488,174.5564l-27.10626,-0.03747c-0.00833,0 -0.01666,0 -0.0229,0c-9.1874,0 -16.64266,7.44069 -16.65515,16.63225c-0.01249,9.19781 7.43444,16.66556 16.63225,16.67805l233.10759,0.32269l-0.02706,16.65515l-233.10135,-0.32061c-0.00833,0 -0.01666,0 -0.0229,0c-9.1874,0 -16.64266,7.44069 -16.65515,16.63225c-0.01249,9.19781 7.43444,16.66556 16.63225,16.67805l233.0951,0.32269l-0.07911,48.90785l-16.65932,-0.0229c-0.00625,0 -0.01457,0 -0.0229,0c-9.1874,0 -16.64266,7.44069 -16.65515,16.63225c-0.01249,9.19781 7.43444,16.66556 16.63225,16.67805l33.28532,0.0458c0.00625,0 0.01249,0 0.02082,0c0.01041,0 0.01874,0 0.02915,0c0.00625,0 0.01249,0 0.01874,0l33.26867,0.0458c0.00625,0 0.01457,0 0.0229,0c9.1874,0 16.64266,-7.44069 16.65515,-16.63225c0.01249,-9.19781 -7.43444,-16.66556 -16.63225,-16.67805l-16.65099,-0.0229l0.07911,-48.90785l449.68911,0.6204l-0.07911,48.90785l-16.65932,-0.0229c-0.00625,0 -0.01457,0 -0.0229,0c-9.1874,0 -16.64266,7.44069 -16.65515,16.63225c-0.01249,9.19781 7.43444,16.66556 16.63225,16.67805l66.62061,0.0916c0.00625,0 0.01457,0 0.0229,0c9.1874,0 16.64266,-7.44069 16.65515,-16.63225c0.01249,-9.19781 -7.43444,-16.66556 -16.63225,-16.67805l-16.65099,-0.0229l0.07911,-48.90785l233.24916,0.32269c0.00833,0 0.01457,0 0.02498,0c9.1874,0 16.64266,-7.44069 16.65515,-16.63225c0.00625,-9.19989 -7.43861,-16.66764 -16.63642,-16.67805zm-232.99309,-152.90471l56.65875,102.69567l-56.82738,-0.07911l0.16863,-102.61656zm-33.47686,102.57075l-84.51449,-0.11659l84.70394,-116.46948l-0.18945,116.58607zm128.2072,0.17696l-57.9058,-104.95452l135.25233,105.0607l-77.34653,-0.10618zm-171.30032,-113.8796l-82.56792,113.52984l-18.39978,-0.02498l-47.54421,-27.52472l148.51191,-85.98014zm-167.61121,113.41118l-28.21591,-0.03956l14.0736,-8.14853l14.14231,8.18809zm-94.54297,-0.12908l-17.50248,-0.02498l-82.92184,-112.71999l147.5813,85.44301l-47.15698,27.30196zm-58.89678,-0.08119l-85.54503,-0.11867l0.18945,-115.91153l85.35557,116.0302zm-159.53554,-96.70606l-52.58864,96.41251l-61.25349,-0.08536l113.84213,-96.32715zm-14.67527,96.46456l55.52203,-101.79004l-0.16655,101.86499l-55.35548,-0.07495zm88.58459,50.08829l0.02706,-16.65515l449.68911,0.6204l-0.02706,16.65515l-449.68911,-0.6204z\"/>\n        </g>\n   </svg>\n";
MarkerIcons.BRIDGE_PATH = "m739.33204,327.7715l-233.24083,-0.32269l0.02706,-16.65515l233.23459,0.32269c0.00833,0 0.01457,0 0.02498,0c9.1874,0 16.64058,-7.44069 16.65515,-16.63225c0.01249,-9.19781 -7.43444,-16.66556 -16.63225,-16.67805l-6.58919,-0.00833l-226.35393,-175.82844l0.0687,-41.68576c0.01457,-9.19781 -7.43028,-16.66764 -16.62809,-16.68222c-0.01041,0 -0.01874,0 -0.02915,0c-9.18532,0 -16.6385,7.43861 -16.65515,16.62809l-0.06454,39.89534l-225.13394,130.34114l-224.55517,-130.00595l0.06662,-40.84468c0.01457,-9.19781 -7.43028,-16.66764 -16.62809,-16.68222c-0.01041,0 -0.01874,0 -0.02915,0c-9.18532,0 -16.6385,7.43861 -16.65515,16.62809l-0.0687,42.36654l-206.29488,174.5564l-27.10626,-0.03747c-0.00833,0 -0.01666,0 -0.0229,0c-9.1874,0 -16.64266,7.44069 -16.65515,16.63225c-0.01249,9.19781 7.43444,16.66556 16.63225,16.67805l233.10759,0.32269l-0.02706,16.65515l-233.10135,-0.32061c-0.00833,0 -0.01666,0 -0.0229,0c-9.1874,0 -16.64266,7.44069 -16.65515,16.63225c-0.01249,9.19781 7.43444,16.66556 16.63225,16.67805l233.0951,0.32269l-0.07911,48.90785l-16.65932,-0.0229c-0.00625,0 -0.01457,0 -0.0229,0c-9.1874,0 -16.64266,7.44069 -16.65515,16.63225c-0.01249,9.19781 7.43444,16.66556 16.63225,16.67805l33.28532,0.0458c0.00625,0 0.01249,0 0.02082,0c0.01041,0 0.01874,0 0.02915,0c0.00625,0 0.01249,0 0.01874,0l33.26867,0.0458c0.00625,0 0.01457,0 0.0229,0c9.1874,0 16.64266,-7.44069 16.65515,-16.63225c0.01249,-9.19781 -7.43444,-16.66556 -16.63225,-16.67805l-16.65099,-0.0229l0.07911,-48.90785l449.68911,0.6204l-0.07911,48.90785l-16.65932,-0.0229c-0.00625,0 -0.01457,0 -0.0229,0c-9.1874,0 -16.64266,7.44069 -16.65515,16.63225c-0.01249,9.19781 7.43444,16.66556 16.63225,16.67805l66.62061,0.0916c0.00625,0 0.01457,0 0.0229,0c9.1874,0 16.64266,-7.44069 16.65515,-16.63225c0.01249,-9.19781 -7.43444,-16.66556 -16.63225,-16.67805l-16.65099,-0.0229l0.07911,-48.90785l233.24916,0.32269c0.00833,0 0.01457,0 0.02498,0c9.1874,0 16.64266,-7.44069 16.65515,-16.63225c0.00625,-9.19989 -7.43861,-16.66764 -16.63642,-16.67805zm-232.99309,-152.90471l56.65875,102.69567l-56.82738,-0.07911l0.16863,-102.61656zm-33.47686,102.57075l-84.51449,-0.11659l84.70394,-116.46948l-0.18945,116.58607zm128.2072,0.17696l-57.9058,-104.95452l135.25233,105.0607l-77.34653,-0.10618zm-171.30032,-113.8796l-82.56792,113.52984l-18.39978,-0.02498l-47.54421,-27.52472l148.51191,-85.98014zm-167.61121,113.41118l-28.21591,-0.03956l14.0736,-8.14853l14.14231,8.18809zm-94.54297,-0.12908l-17.50248,-0.02498l-82.92184,-112.71999l147.5813,85.44301l-47.15698,27.30196zm-58.89678,-0.08119l-85.54503,-0.11867l0.18945,-115.91153l85.35557,116.0302zm-159.53554,-96.70606l-52.58864,96.41251l-61.25349,-0.08536l113.84213,-96.32715zm-14.67527,96.46456l55.52203,-101.79004l-0.16655,101.86499l-55.35548,-0.07495zm88.58459,50.08829l0.02706,-16.65515l449.68911,0.6204l-0.02706,16.65515l-449.68911,-0.6204z";
MarkerIcons.FISH_HOOK = "m286.20576,265.6732c-9.06551,-15.77485 -28.87781,-33.61855 -71.10405,-45.03312l9.31178,51.57591c-34.33764,9.47596 -71.83261,29.48638 -111.62455,65.03723l-73.6536,-61.40471c0,0 21.71538,86.90969 0,166.26071c31.42499,-28.88096 57.98373,-51.44962 75.7114,-65.88971c92.2298,72.06546 183.98364,131.51815 330.20946,-18.45306c0.00158,0 -60.93742,-85.67359 -158.85044,-92.09325zm144.99367,-61.94461c50.06592,-41.46927 17.17276,-105.6777 17.17276,-105.6777l-62.69211,-95.05089l-10.09243,123.87344c0,0 9.10655,-8.08673 21.74617,-24.76537c18.69302,23.75266 26.27932,55.60468 0,72.80112c-48.54566,31.84571 -67.75885,-24.78274 -67.75885,-24.78274c0,0 -27.30624,-68.23798 -44.98497,-123.87028c-17.70635,18.19969 -42.5033,14.66663 -42.5033,14.66663c0,0 24.79695,79.88777 51.58302,138.54322c36.42621,53.58477 87.47801,65.71763 137.52972,24.26257z";
MarkerIcons.PLAIN_FISH = "m458.5793,239.97737c1.56992,-3.37074 12.29747,-17.5903 22.00981,-32.32973c0.00903,-0.01032 0.01677,-0.02064 0.02193,-0.02967c2.19169,-3.32559 4.32792,-6.6757 6.3016,-9.9355c0.05547,-0.09159 0.11094,-0.18447 0.16641,-0.27606c0.31992,-0.53148 23.03793,-36.95305 -9.32018,-22.20331c0,0.00258 -0.00258,0.00645 -0.00516,0.00903c-6.07972,3.11791 -13.81192,7.76703 -23.53458,14.28277c-21.20872,14.21698 -64.35115,35.02839 -64.35115,35.02839s-7.50774,4.05573 -12.45872,0.9662c-25.02065,-15.60888 -61.47576,-43.33592 -109.53563,-58.77452c-0.80108,-0.258 -1.81631,-0.86816 -0.43602,-2.14654l20.58179,-14.39371c0,0 1.61249,-1.39319 -0.45795,-2.06656c-10.18576,-3.31914 -52.60966,-17.54515 -89.3189,-4.46595c-7.47807,2.66383 -13.61584,4.85165 -18.66228,6.6499c-2.16976,0.77399 -4.37436,1.68344 -8.77064,2.22652c-100.10838,3.42363 -167.80963,76.9092 -167.80963,105.97783c0,19.50852 10.51858,32.59934 48.95125,50.79722c0.77141,-0.12255 6.63829,4.08927 19.52658,0.21672c3.45459,-1.03844 27.98891,-10.27864 28.96414,-10.69531c0.97781,-0.44634 1.61249,-0.66692 2.01754,-0.60114c0.52116,0.08256 0.90428,1.24097 0.9017,1.47575c-0.08127,6.94918 -13.1063,12.5774 -20.50181,18.75258c-1.26935,0.59211 -1.60991,3.53973 0.61275,4.49432c0.00258,0 26.11714,14.00155 67.4755,18.35527c3.34365,0.35217 46.87823,28.24691 90.77788,20.76368c23.21853,-3.95898 34.26729,-5.31347 39.30986,-6.70408c4.40145,-1.21259 2.30005,-2.60836 2.30005,-2.60836l-22.00594,-17.53354c-1.48994,-1.65248 -0.28509,-2.92183 0.96233,-3.27528c48.8674,-13.9048 87.50518,-35.82431 110.51602,-54.60269c3.09856,-2.52967 11.15196,3.48426 16.90145,6.38932c19.09314,9.64525 98.34625,42.31554 104.87747,35.3999c0.56244,-0.58308 0.60243,-1.45124 0.02967,-2.64448c-11.15196,-23.42493 -51.45899,-43.40558 -36.03716,-76.49898zm-374.52278,-2.25619c-7.0498,0 -12.76445,-5.82043 -12.76445,-12.99923s5.71466,-12.99794 12.76445,-12.99794s12.76574,5.81914 12.76574,12.99794s-5.71595,12.99923 -12.76574,12.99923zm57.12462,73.95899c-0.7856,0.70562 -1.50155,1.77116 -1.08617,0.23865c0,0 19.89938,-29.94067 22.47936,-68.64166c1.9324,-29.00413 -17.39164,-64.5253 -17.39164,-64.5253s0.03741,-1.03715 0.71594,-0.21801c6.87952,8.32044 74.61689,61.83954 -4.71749,133.14631z";
MarkerIcons.BINOCULAR_PATH = "m492.68928,152.94378c-0.27408,-0.0877 -142.91455,-34.25959 -226.11328,-54.97979c-16.97083,12.19093 -29.66606,29.84147 -38.04185,59.38694c-5.05397,17.81499 -7.08214,33.34965 -7.20274,45.86948c-10.94114,-2.66403 -21.76169,-5.31709 -32.20949,-7.89341c-0.26311,-15.14 2.65306,-31.14608 7.31237,-47.60164c6.59977,-23.17593 17.31068,-40.9361 36.98939,-59.11286c-13.69287,-3.40951 -28.39435,-7.31237 -28.44916,-7.33429c-6.00776,-1.7212 -24.18453,8.34289 -38.23918,26.9253c-14.78918,-3.67263 -25.12735,-6.24895 -25.1712,-6.25991c-3.81515,-1.08534 -18.74685,8.58408 -23.31845,24.73268c-4.60449,16.15956 2.88329,32.69187 6.67651,33.78818c0.04385,0.01096 9.83387,3.13544 23.89949,7.6303c0.43852,6.7094 1.54579,13.05701 3.01484,18.7907c-16.57616,12.17997 -28.99731,29.73184 -37.24154,58.8059c-11.05077,38.89697 -7.68511,67.05012 -1.43616,76.22621c82.82598,26.46485 222.21043,71.01875 222.4845,71.07357c15.04133,4.29752 36.89072,-26.2127 48.79662,-68.10258c3.89189,-13.73672 6.24895,-27.013 7.10407,-38.77637c33.9307,10.84247 57.90693,18.50566 58.02752,18.52758c15.04133,4.28656 36.90169,-26.23462 48.77469,-68.10258c11.93878,-41.84603 9.39535,-79.3178 -5.65694,-83.59339zm-128.72834,166.12337c-9.03357,31.74904 -25.35758,54.88112 -36.50702,51.72375c-11.13848,-3.15736 -12.87064,-31.44208 -3.859,-63.18016c9.00068,-31.74904 25.35758,-54.88112 36.49605,-51.72375c11.14944,3.16833 12.87064,31.46401 3.86996,63.18016zm117.76528,-89.38189c-9.0226,31.73808 -25.36854,54.88112 -36.49605,51.71279c-11.13848,-3.15736 -12.87064,-31.44208 -3.859,-63.1692c9.00068,-31.74904 25.34661,-54.89208 36.48509,-51.72375c11.14944,3.1464 12.89257,31.42015 3.86996,63.18016zm-362.25266,-52.73236c-13.67095,-3.40951 -28.39435,-7.31237 -28.4382,-7.32333c-6.01872,-1.71024 -24.18453,8.34289 -38.25014,26.93626c-14.76725,-3.67263 -25.12735,-6.25991 -25.14928,-6.27087c-3.82611,-1.08534 -18.74685,8.58408 -23.34037,24.74364c-4.58256,16.15956 2.90521,32.70283 6.69843,33.79914c0.02193,0 9.82291,3.12447 23.88853,7.61933c1.60061,24.65594 12.10323,44.54295 18.33025,46.32993c0.05482,0.01096 10.93018,3.04773 26.48677,8.03593c-7.73993,-22.58392 -4.79086,-48.06209 2.80655,-74.73523c6.56688,-23.17593 17.29972,-40.9361 36.96747,-59.13479z";
MarkerIcons.CONE_PATH = "m363.94927,82.35498c-1.19384,0 -2.38227,0.03781 -3.5617,0.09543c-12.10042,-45.7313 -53.74783,-79.45042 -103.28752,-79.45042c-49.64413,0 -91.37437,33.86317 -103.36855,79.74753c-33.70471,3.60132 -59.9565,32.12193 -59.9565,66.77739c0,37.10075 30.07278,67.17353 67.16993,67.17353c15.8926,0 30.48873,-5.52982 41.98773,-14.75639c15.8854,9.36342 34.39436,14.75639 54.16738,14.75639c22.40918,0 43.19598,-6.91092 60.37425,-18.69983c12.06621,11.57283 28.43418,18.69983 46.47497,18.69983c37.09895,0 67.17173,-30.07278 67.17173,-67.17353c0,-37.09535 -30.07458,-67.16993 -67.17173,-67.16993zm-106.84922,-14.32423c-23.05922,0 -41.81847,18.75925 -41.81847,41.81847c0,7.46012 -6.04481,13.50493 -13.50493,13.50493c-7.46012,0 -13.50493,-6.04481 -13.50493,-13.50493c0,-37.95066 30.87588,-68.82834 68.82834,-68.82834c7.46012,0 13.50493,6.04481 13.50493,13.50493c0,7.46012 -6.04481,13.50493 -13.50493,13.50493zm0,175.67756c-12.66943,0 -25.21461,-1.84027 -37.27721,-5.33895l28.29914,105.05397c1.93931,7.20263 -2.32645,14.61234 -9.52728,16.55345c-1.17583,0.31692 -2.36066,0.46817 -3.52209,0.46817c-5.95658,0 -11.40897,-3.97045 -13.03136,-9.99545l-30.17722,-112.02972c-8.36586,2.91346 -17.13326,4.67091 -26.03571,5.13908l64.71924,244.42487c3.24839,12.26788 14.34944,20.8138 27.04228,20.8138c12.69284,0 23.79389,-8.54412 27.04228,-20.8138l64.97133,-245.37742c-12.09502,-1.84928 -23.64804,-6.016 -34.08825,-12.29669c-18.10741,8.80702 -37.98127,13.39869 -58.41513,13.39869z";
MarkerIcons.TREES_PATH = "m387.15613,447.1595l-49.26753,0c-6.03664,0 -10.94834,4.9117 -10.94834,10.94834l0,41.05627c0,6.03664 4.9117,10.94834 10.94834,10.94834l49.26753,0c6.03664,0 10.94834,-4.9117 10.94834,-10.94834l0,-41.05627c0,-6.03664 -4.9117,-10.94834 -10.94834,-10.94834zm-387.15613,-447.1595m487.67831,406.98183l-115.54604,-281.67204c-2.5277,-6.16528 -7.06989,-6.8304 -8.90374,-6.8304c-1.84206,0 -6.40067,0.67195 -8.95027,6.88787l-25.49184,62.19889c-2.11029,5.14435 -2.11029,12.61112 0,17.75684l84.85921,206.85246c2.45927,5.99832 9.09123,10.35029 15.76971,10.35029l47.68549,0c4.16311,0 7.73363,-1.76542 9.79876,-4.84464c2.03776,-3.0368 2.32242,-6.93714 0.7787,-10.69927l0.00002,0zm-487.67831,-406.98183m348.62755,391.63225c2.08429,-3.10796 2.38537,-7.07263 0.82523,-10.87854l-152.49532,-371.89731c-2.53865,-6.18855 -7.08905,-6.8564 -8.927,-6.8564s-6.38836,0.66785 -8.927,6.85777l-152.49395,371.89457c-1.56151,3.80592 -1.26043,7.77058 0.82523,10.87854c2.08429,3.10796 5.63976,4.89117 9.75223,4.89117l301.68698,0c4.11384,0.00137 7.66931,-1.78184 9.7536,-4.8898zm-348.62755,-391.63225m221.56249,432.10553l-67.05858,0c-6.03664,0 -10.94834,4.9117 -10.94834,10.94834l0,56.11024c0,6.03664 4.9117,10.94834 10.94834,10.94834l67.05858,0c6.03664,0 10.94834,-4.9117 10.94834,-10.94834l0,-56.11024c0,-6.03664 -4.9117,-10.94834 -10.94834,-10.94834z";
MarkerIcons.PARK_PATH = "m324.49688,401.82503c-4.37702,-4.3184 -10.28743,-6.73728 -16.42925,-6.73728l-20.69416,0l0,-13.38508l17.37438,0c5.57926,0 10.10437,-4.52408 10.10437,-10.1054l0,-13.21847c0,-5.58029 -4.52511,-10.1054 -10.10437,-10.1054l-17.37438,0l0,-17.29622l17.37438,0c5.57926,0 10.10437,-4.52511 10.10437,-10.1054l0,-13.2195c0,-5.58029 -4.52511,-10.10437 -10.10437,-10.10437l-17.37438,0l0,-13.06935c0,-9.34024 -7.56002,-16.90952 -16.90541,-16.90952s-16.90952,7.56928 -16.90952,16.90952l0,13.06935l-152.18572,0l0,-13.06935c0,-9.34024 -7.56002,-16.90952 -16.90541,-16.90952c-9.34642,0 -16.90952,7.56928 -16.90952,16.90952l0,13.06935l-17.37541,0c-5.57823,0 -10.10334,4.52408 -10.10334,10.10437l0,13.2195c0,5.58029 4.52511,10.1054 10.10334,10.1054l17.37541,0l0,17.29622l-17.37541,0c-5.57823,0 -10.10334,4.52511 -10.10334,10.1054l0,13.21847c0,5.58132 4.52511,10.1054 10.10334,10.1054l17.37541,0l0,13.38508l-20.70753,0c-6.14181,0 -12.05634,2.41888 -16.43233,6.73728l-26.35261,25.9906c-2.90841,2.87448 -3.80007,7.23195 -2.2461,11.03099c1.54985,3.79081 5.25016,6.26625 9.34642,6.26625l22.57106,0l0,42.27278c0,9.33716 7.56311,16.90952 16.90952,16.90952c9.34539,0 16.90952,-7.57237 16.90952,-16.90952l0,-42.27278l219.81662,0l0,42.27278c0,9.33716 7.56311,16.90952 16.90952,16.90952c9.34642,0 16.90952,-7.57237 16.90952,-16.90952l0,-42.27278l22.55563,0c4.09831,0 7.79554,-2.47544 9.35053,-6.26625c1.54985,-3.79801 0.65923,-8.15652 -2.24713,-11.03099l-26.35364,-25.9906zm-223.12406,-70.84887l152.18572,0l0,17.29622l-152.18572,0l0,-17.29622zm0,50.72754l152.18572,0l0,13.38508l-152.18572,0l0,-13.38508zm-2.13092,-379.21886c0,-0.03291 -0.02777,-0.06685 -0.06273,-0.06685l-89.05319,0c-5.58337,0 -10.10951,4.52614 -10.10951,10.10746l0,87.65041c0,0.04834 -0.01645,0.08227 -0.01645,0.16455c0.41446,0 0.82892,0.11621 1.27217,0.11621c54.09567,0 97.96972,-43.85863 97.96972,-97.97178zm-95.78841,125.91024l0,82.59771c0,7.00261 5.68107,12.68266 12.68163,12.68266c7.00158,0 12.68266,-5.68005 12.68266,-12.68266l0,-82.59771c0,-7.00056 -5.68107,-12.6806 -12.68266,-12.6806c-7.00056,0 -12.68163,5.68005 -12.68163,12.6806zm61.77396,-25.84148c-6.05954,3.49976 -8.13903,11.2521 -4.64235,17.32295l41.31839,71.55026c2.34586,4.06952 6.60666,6.34133 10.995,6.34133c2.14737,0 4.32663,-0.54507 6.32487,-1.70103c6.06365,-3.50079 8.14315,-11.25519 4.64235,-17.32295l-41.31839,-71.55026c-3.49771,-6.05131 -11.22639,-8.16474 -17.31987,-4.6403zm40.58923,-18.62804l71.55129,41.31634c1.99722,1.15596 4.17853,1.70103 6.32487,1.70103c4.38936,0 8.64914,-2.27181 10.995,-6.34133c3.50182,-6.06777 1.4213,-13.82011 -4.63824,-17.32295l-71.55232,-41.31531c-6.07496,-3.52547 -13.83862,-1.41924 -17.31987,4.64235c-3.50182,6.06674 -1.4213,13.82011 4.63927,17.31987zm21.20324,-53.71618l82.61416,-0.01645c7.00056,0 12.68266,-5.68005 12.68266,-12.6806c0,-7.00981 -5.6821,-12.68266 -12.68266,-12.68266l-82.61416,0.01748c-7.00056,0 -12.68266,5.68005 -12.68266,12.68163c0,7.00981 5.6821,12.6806 12.68266,12.6806zm324.90722,-28.26139c-21.303,0 -39.69655,26.56241 -48.62851,65.1606c29.65492,10.95694 51.51841,45.6152 53.99591,89.24345c17.08847,9.60147 29.14584,26.49454 33.35625,46.22609c9.69505,-21.28346 15.7042,-50.50335 15.7042,-82.77666c-0.00103,-65.08655 -24.37596,-117.85348 -54.42785,-117.85348zm-16.91055,409.45587c0,5.58029 4.52614,10.10437 10.10437,10.10437l13.60619,0c5.58337,0 10.10849,-4.52408 10.10849,-10.10437l0,-140.45333c-9.41121,8.47944 -20.98727,14.17697 -33.82008,16.06826l0,124.38507l0.00103,0zm5.41779,-244.09487c0.01645,-0.8824 0.18306,-1.71749 0.18306,-2.60914c0,-46.74853 -25.54838,-84.64532 -57.07196,-84.64532c-31.51844,0 -57.06579,37.89679 -57.06579,84.64532c0,10.99088 1.52003,21.41715 4.0942,31.05153c-13.95483,8.8106 -23.11818,23.39175 -23.11818,39.95469c0,26.93162 24.12605,48.77146 53.90027,48.77146c1.302,0 2.50835,-0.32396 3.79595,-0.41446l0,127.34079c0,5.58029 4.52511,10.10437 10.10437,10.10437l29.89043,0c5.57926,0 10.10437,-4.52408 10.10437,-10.10437l0,-141.72345c3.40309,0.84949 6.91725,1.41204 10.5682,1.41204c27.42938,0 49.66928,-23.81958 49.66928,-53.19682c0.00103,-23.8854 -14.80843,-43.86583 -35.0542,-50.58665z";
MarkerIcons.SWIM_PATH = "m131.69976,185.00068c23.91062,0 43.28664,-21.03779 43.28664,-47.00159c0,-25.97096 -19.37602,-47.01794 -43.28664,-47.01794c-23.90244,0 -43.28766,21.04698 -43.28766,47.01794c0,25.96381 19.38522,47.00159 43.28766,47.00159zm-129.64427,-185.00068m41.80372,216.01212l42.67037,20.87733c0,0.14206 -0.04088,0.27798 -0.04088,0.42004l0,93.39407c23.16967,-5.74566 48.28113,0 67.3945,17.563c6.59801,-6.16672 13.92878,-10.81374 21.6377,-14.28239l0.51917,-50.23621l4.68074,5.52287c2.95459,3.47683 6.89643,5.77325 11.19903,6.51522l66.30914,11.44942c10.62058,1.83244 20.51044,-6.04204 22.18242,-17.48226c1.67812,-11.48315 -5.53104,-22.27133 -16.09439,-24.09355l-59.66923,-10.30581c-36.77141,-43.30912 -6.72371,-8.02573 -43.55031,-51.29908c-3.29083,-3.86928 -7.93989,-7.2296 -21.86254,-7.2296l-15.47506,0c-5.84275,0 -11.29714,1.59125 -16.21703,4.18201l-40.62332,-19.87782l-27.48045,-75.02779c-3.94899,-10.78614 -15.19606,-16.09541 -25.16869,-11.7693c-9.93891,4.28932 -14.79339,16.53385 -10.83724,27.33839l30.37883,82.93906c1.85901,5.07523 5.45541,9.15811 10.04724,11.40241zm-41.80372,-216.01212m358.12474,185.00068c23.91164,0 43.28766,-21.03779 43.28766,-47.00159c0,-25.97096 -19.37602,-47.01794 -43.28766,-47.01794c-23.89324,0 -43.27846,21.04698 -43.27846,47.01794c0.00102,25.96381 19.38624,47.00159 43.27846,47.00159zm-358.12474,-185.00068m260.23899,204.60869c1.85799,5.07523 5.45439,9.15913 10.04622,11.40241l42.66117,20.87733c0,0.14206 -0.0419,0.27798 -0.0419,0.42004l0,91.35724c16.10257,1.49109 31.8178,7.79374 44.233,19.50888c12.58895,-11.86742 28.54332,-18.17926 44.86051,-19.56305l0.4599,-44.87482l4.69812,5.53309c2.95459,3.47683 6.89541,5.77325 11.19903,6.51522c2.45177,0.42106 66.8927,11.71616 69.36899,11.71616c9.3625,0 17.59877,-7.39107 19.11235,-17.749c1.67914,-11.48315 -5.52798,-22.27133 -16.09235,-24.09355l-59.66208,-10.30581c-100.05953,-117.8811 57.25936,67.45888 -43.54827,-51.29908c-3.3082,-3.89687 -7.98281,-7.2296 -21.87071,-7.2296l-15.48426,0c-5.84275,0 -11.29101,1.59125 -16.2109,4.18201l-40.62127,-19.87782l-27.48249,-75.02779c-3.94797,-10.78717 -15.18686,-16.09541 -25.16767,-11.77033c-9.93993,4.28932 -14.79339,16.53385 -10.83622,27.33839l30.37883,82.94008zm-260.23899,-204.60869m473.49786,371.7878c-7.58628,8.25875 -19.87884,8.23218 -27.47227,-0.01737c-20.07711,-21.82472 -55.07843,-21.82472 -75.15451,0.01737c-7.33997,7.97259 -20.12514,7.95419 -27.48147,-0.01737c-19.90235,-21.63872 -55.21742,-21.64485 -75.13816,-0.0092l-0.29433,0.32295c-7.62,7.97974 -19.69795,7.83666 -27.21882,-0.31375c-20.15887,-21.91466 -53.62923,-23.40677 -75.7953,0.70518c-6.92096,7.49838 -19.28608,7.52598 -26.22339,-0.02555c-20.37042,-22.12928 -53.51273,-22.12928 -73.91994,0.01737c-8.317,9.05284 -22.89782,9.06204 -31.23219,-0.0092c-6.58165,-7.15091 -17.25436,-7.14171 -23.83499,-0.00818c-6.5837,7.14886 -6.5837,18.74034 -0.0092,25.89022c10.53984,11.4484 24.55141,17.75718 39.46131,17.75718c14.91603,0 28.92964,-6.3098 39.45313,-17.749c7.24084,-7.86426 19.01423,-7.86426 26.2704,0c19.56713,21.2892 53.61391,22.02095 74.5127,-0.697c7.63533,-8.2935 19.94527,-8.19436 27.52235,0.03679c20.2161,21.9586 53.86021,23.07565 75.10546,0l0.28616,-0.31375c7.28274,-7.61489 20.07813,-7.48101 27.21779,0.26776c20.09346,21.82472 55.07843,21.82472 75.15349,0.0184c7.35735,-7.98894 20.13536,-7.99814 27.49067,-0.0092c20.74243,22.53194 54.41106,22.60246 75.16167,-0.01635c6.57552,-7.1601 6.55815,-18.7526 -0.03168,-25.88307c-6.59903,-7.14886 -17.26253,-7.13149 -23.82886,0.03577z";
MarkerIcons.ORCA_PATH = "m462.69404,269.48885c-4.16165,-1.39225 -8.41392,-4.78536 -10.94698,-8.41748c-24.88993,-35.70275 -52.74383,-68.42553 -89.53053,-92.61889c-26.77084,-17.60615 -56.57941,-25.7633 -88.07697,-28.83745c-29.61576,-2.88845 -59.00407,-0.47889 -88.2982,3.9111c-17.73321,2.65745 -26.24486,-1.66413 -34.22698,-17.77319c-8.82707,-17.80962 -11.67287,-37.09855 -13.48449,-56.58651c-0.81563,-8.75776 -3.34958,-10.46543 -10.98785,-6.09765c-13.66574,7.81597 -19.33247,20.97439 -19.6621,35.55082c-0.4709,20.66609 0.39093,41.4379 2.0444,62.05245c1.12748,14.03979 -0.9027,25.54918 -10.23353,37.19273c-17.04819,21.26848 -33.75964,42.86569 -48.29609,65.92446c-1.59127,-1.10883 -3.1861,-2.21854 -4.77737,-3.32736c-2.51618,-3.29449 -5.33622,-6.82976 -7.80087,-10.60314c-3.30959,-5.06435 -6.32954,-5.9706 -10.83859,-1.14525c-13.65596,14.62619 -18.68299,42.95187 -11.85412,62.90717c0.50022,4.06747 1.93245,8.00789 4.29226,11.36102c-9.08028,20.7496 -16.26899,42.16645 -18.72653,65.09817c-1.12748,10.51962 0.52954,21.36265 1.21455,32.04132c0.39182,6.06033 1.689,12.06381 2.06661,18.12147c0.73211,11.80259 14.66261,24.81707 26.27774,22.9788c7.5361,-1.19323 15.99001,-2.90445 21.84421,-7.29355c23.59186,-17.69323 50.46399,-29.52869 75.63556,-44.35212c11.83191,-6.96747 22.69271,-15.17793 32.58862,-25.09161c4.62632,-3.52816 8.63871,-7.84885 11.78926,-12.74261c42.61514,4.03104 88.84817,-12.11889 113.3756,-40.94835c5.25981,-6.18383 9.38148,-13.67373 12.58268,-21.17696c2.99329,-7.02167 0.34029,-9.88525 -7.32642,-9.93234c-13.17352,-0.07996 -26.3497,-0.02221 -39.52322,-0.02221l0,0.94001c-5.87198,0 -11.74484,0.02132 -17.6177,0.03199c5.41974,-1.80095 10.66089,-3.97951 15.6124,-6.81821c6.5721,-2.66456 12.68041,-6.82976 18.78517,-12.25305c13.14775,-11.68265 28.26083,-22.05745 44.138,-29.57933c18.08505,-8.56585 35.68054,-10.32416 52.63099,-7.15583c3.09547,0.97555 6.22115,2.10659 9.39214,3.40377c2.23986,0.91691 4.55702,1.26164 6.85553,1.14881c10.21132,3.81336 20.15521,9.27664 29.79346,15.96424c1.76897,1.22966 3.48729,2.53484 5.16919,3.88977c-0.12794,1.20745 -0.25411,2.41489 -0.38116,3.62145c-0.09773,0.04709 -0.19991,0.09773 -0.29764,0.14482c-1.69256,10.83148 -10.1278,16.5924 -16.84917,23.62029c-8.66714,9.06251 -16.26544,18.63679 -13.18773,32.30608c0.99688,4.43264 3.16122,8.65292 5.15852,12.78969c0.62371,1.28652 2.54461,2.84492 3.70497,2.72142s2.81293,-2.08082 3.04572,-3.4402c1.72188,-10.04873 10.421,-9.56984 17.18235,-13.0749c6.26824,-3.25184 12.5427,-2.33848 18.2272,-4.48417c3.30959,-1.25098 5.10344,-6.51079 7.65516,-10.35348c0.17059,0.13416 0.34118,0.27276 0.51088,0.39893c3.58147,9.27575 12.12955,10.96564 21.1201,9.38503c13.57156,-2.38913 24.13916,4.01683 34.63035,10.41478c3.76183,2.29406 6.00614,7.08298 10.34815,12.47695c1.1568,-4.84311 2.51973,-7.90926 2.52773,-10.97986c0.08974,-32.93158 -16.12861,-54.86286 -47.27522,-65.29186z";
MarkerIcons.WATER_PATH = "m -39.42355,256.63632 c 27.42465,0 53.85386,-8.36964 76.04454,-23.57645 2.76368,-1.89398 5.47236,-3.87702 8.09982,-5.98056 2.62485,2.10354 5.33614,4.08659 8.09982,5.98056 22.18806,15.20681 48.61989,23.57645 76.04192,23.57645 27.42203,0 53.85386,-8.36964 76.04454,-23.57645 2.76368,-1.89398 5.47236,-3.87702 8.09982,-5.98056 2.62485,2.10354 5.33614,4.08659 8.09982,5.98056 22.18806,15.20681 48.61989,23.57645 76.04192,23.57645 27.42203,0 53.85386,-8.36964 76.04192,-23.57645 2.76368,-1.89398 5.47236,-3.87702 8.09982,-5.98056 2.62485,2.10354 5.33614,4.08659 8.09982,5.98056 22.19068,15.20681 48.61989,23.57645 76.04454,23.57645 27.42465,0 53.85386,-8.36964 76.04192,-23.57645 2.76368,-1.89398 5.47236,-3.87702 8.09982,-5.98056 2.62485,2.10354 5.33614,4.08659 8.09982,5.98056 22.19068,15.20681 48.61989,23.57645 76.04454,23.57645 13.02206,0 23.57645,-10.55439 23.57645,-23.57645 0,-13.02206 -10.55439,-23.57645 -23.57645,-23.57645 -25.45471,0 -49.61534,-11.08879 -66.28913,-30.4241 -4.47691,-5.19206 -10.99711,-8.18103 -17.85523,-8.18103 -6.85812,0 -13.37571,2.98635 -17.85523,8.18103 -16.66855,19.33269 -40.82918,30.42148 -66.28651,30.42148 -25.45733,0 -49.61534,-11.08879 -66.28913,-30.4241 -4.47691,-5.19206 -10.99711,-8.18103 -17.85523,-8.18103 -6.85813,0 -13.37571,2.98635 -17.85523,8.18103 -16.66855,19.33269 -40.82918,30.42148 -66.28651,30.42148 -25.45733,0 -49.61534,-11.08879 -66.28651,-30.42148 -4.47953,-5.19468 -10.99711,-8.18103 -17.85523,-8.18103 -6.85813,0 -13.37571,2.98635 -17.85523,8.18103 -16.67117,19.33531 -40.8318,30.4241 -66.28913,30.4241 -25.45733,0 -49.61796,-11.08617 -66.28651,-30.41886 -4.47953,-5.19468 -10.99711,-8.18103 -17.85523,-8.18103 -6.85813,0 -13.37571,2.98635 -17.85523,8.18103 -16.67379,19.33531 -40.83442,30.42148 -66.28913,30.42148 -13.02206,0 -23.57645,10.55439 -23.57645,23.57645 0,13.02206 10.55439,23.57645 23.57645,23.57645 z m 725.14179,78.3367 c -25.45471,0 -49.61534,-11.08879 -66.28913,-30.4241 -4.47691,-5.19206 -10.99711,-8.18103 -17.85523,-8.18103 -6.85812,0 -13.37571,2.98635 -17.85523,8.18103 -16.66855,19.33269 -40.82918,30.42148 -66.28651,30.42148 -25.45733,0 -49.61534,-11.08879 -66.28913,-30.4241 -4.47691,-5.19206 -10.99711,-8.18103 -17.85523,-8.18103 -6.85813,0 -13.37571,2.98635 -17.85523,8.18103 -16.66855,19.33269 -40.82918,30.42148 -66.28651,30.42148 -25.45733,0 -49.61534,-11.08879 -66.28651,-30.42148 -4.47953,-5.19468 -10.99711,-8.18103 -17.85523,-8.18103 -6.85813,0 -13.37571,2.98635 -17.85523,8.18103 -16.67117,19.33531 -40.8318,30.4241 -66.28913,30.4241 -25.45733,0 -49.61534,-11.08879 -66.28651,-30.42148 -4.47953,-5.19468 -10.99711,-8.18103 -17.85523,-8.18103 -6.85813,0 -13.37571,2.98635 -17.85523,8.18103 -16.67117,19.33531 -40.8318,30.4241 -66.28651,30.4241 -13.02206,0 -23.57645,10.55439 -23.57645,23.57645 0,13.02206 10.55439,23.57645 23.57645,23.57645 27.42465,0 53.85386,-8.36964 76.04454,-23.57645 2.76368,-1.89398 5.47236,-3.87702 8.09982,-5.98056 2.62485,2.10354 5.33614,4.08659 8.09982,5.98056 22.18806,15.20681 48.61989,23.57645 76.04192,23.57645 27.42203,0 53.85386,-8.36964 76.04454,-23.57645 2.76368,-1.89398 5.47236,-3.87702 8.09982,-5.98056 2.62485,2.10354 5.33614,4.08659 8.09982,5.98056 22.18806,15.20681 48.61989,23.57645 76.04192,23.57645 27.42203,0 53.85386,-8.36964 76.04192,-23.57645 2.76368,-1.89398 5.47236,-3.87702 8.09982,-5.98056 2.62485,2.10354 5.33614,4.08659 8.09982,5.98056 22.19068,15.20681 48.61989,23.57645 76.04454,23.57645 27.42465,0 53.85386,-8.36964 76.04192,-23.57645 2.76368,-1.89398 5.47236,-3.87702 8.09982,-5.98056 2.62485,2.10354 5.33614,4.08659 8.09982,5.98056 22.19068,15.20681 48.61989,23.57645 76.04454,23.57645 13.02206,0 23.57645,-10.55439 23.57645,-23.57645 0,-13.01944 -10.55701,-23.57645 -23.57907,-23.57645 z M 587.05157,460.46 c -25.45471,0 -49.61534,-11.08879 -66.28913,-30.4241 -4.47691,-5.19206 -10.99711,-8.18103 -17.85523,-8.18103 -6.85812,0 -13.37571,2.98635 -17.85523,8.18103 -16.66855,19.33269 -40.82918,30.42148 -66.28651,30.42148 -25.45733,0 -49.61534,-11.08879 -66.28913,-30.4241 -4.47691,-5.19206 -10.99711,-8.18103 -17.85523,-8.18103 -6.85813,0 -13.37571,2.98635 -17.85523,8.18103 -16.66855,19.33269 -40.82918,30.42148 -66.28651,30.42148 -25.45733,0 -49.61534,-11.08879 -66.28651,-30.42148 -4.47953,-5.19468 -10.99711,-8.18103 -17.85523,-8.18103 -6.85813,0 -13.37571,2.98635 -17.85523,8.18103 -16.67117,19.33531 -40.8318,30.4241 -66.28913,30.4241 -25.45733,0 -49.61534,-11.08879 -66.28651,-30.42148 -4.47953,-5.19468 -10.99711,-8.18103 -17.85523,-8.18103 -6.85813,0 -13.37571,2.98635 -17.85523,8.18103 -16.67117,19.33793 -40.8318,30.4241 -66.28651,30.4241 -13.02206,0 -23.57645,10.55439 -23.57645,23.57645 0,13.02206 10.55439,23.57645 23.57645,23.57645 27.42465,0 53.85386,-8.36964 76.04454,-23.57645 2.76368,-1.89398 5.47498,-3.87702 8.09982,-5.98056 2.62485,2.10354 5.33614,4.08659 8.09982,5.98056 22.18806,15.20681 48.61989,23.57645 76.04192,23.57645 27.42203,0 53.85386,-8.36964 76.04454,-23.57645 2.76368,-1.89398 5.47498,-3.87702 8.09982,-5.98056 2.62485,2.10354 5.33614,4.08659 8.09982,5.98056 22.18806,15.20681 48.61989,23.57645 76.04192,23.57645 27.42203,0 53.85386,-8.36964 76.04192,-23.57645 2.76368,-1.89398 5.47236,-3.87702 8.09982,-5.98056 2.62485,2.10354 5.33614,4.08659 8.09982,5.98056 22.18806,15.20681 48.61989,23.57645 76.04454,23.57645 27.42465,0 53.85386,-8.36964 76.04192,-23.57645 2.76368,-1.89398 5.47236,-3.87702 8.09982,-5.98056 2.62485,2.10354 5.33614,4.08659 8.09982,5.98056 22.18806,15.20681 48.61989,23.57645 76.04454,23.57645 13.02206,0 23.57645,-10.55439 23.57645,-23.57645 0,-13.02206 -10.55701,-23.57645 -23.57907,-23.57645 z";
MarkerIcons.MOUNTAIN_PATH = "m 212.5,224.789 -69.68,75.289 37.207,26.803 47.466,-34.195 47.475,34.196 37.207,-26.801 -69.675,-75.28 V 0.603 H 104.54 V 101.86 H 212.5 Z m 120.207,97.476 -57.739,41.588 -47.473,-34.194 -47.468,34.195 L 122.29,322.262 0,454.397 h 455 z";
MarkerIcons.MAN_FISH = "M 87.025,330.166 H 11.606 C 5.199,330.166 0,335.365 0,341.774 v 48.217 c 0,6.411 5.199,11.608 11.606,11.608 h 75.419 c 6.412,0 11.61,-5.197 11.61,-11.608 v -48.217 c 0,-6.409 -5.198,-11.608 -11.61,-11.608 z m 392.822,34.72 c -6.379,-6.378 -16.741,-6.362 -23.087,0.016 -5.328,5.325 -14.588,5.349 -19.962,-0.024 C 425.267,353.35 408.19,349.476 392.771,353 319.761,215.601 320.782,125.128 322.09,105.915 l 10.938,-8.291 c 3.57,-2.727 4.286,-7.846 1.561,-11.441 -2.726,-3.578 -7.845,-4.305 -11.45,-1.569 L 195.405,181.51 c -4.942,-4.806 -12.455,-6.297 -18.878,-2.894 l -41.474,21.958 -31.316,-24.437 c -3.73,-6.999 -9.142,-11.881 -17.221,-15.3 -2.239,-0.947 -9.721,-3.24 -16.997,-1.553 -10.933,2.535 -20.887,9.279 -25.097,20.545 0,0 -28.857,76.792 -38.047,101.554 -7.222,19.46 7.112,37.677 20.586,37.677 0.048,0 0.08,0 0.112,0 l 78.785,-0.374 26.485,66.777 c 3.826,9.607 13.027,15.467 22.768,15.467 3.013,0 6.059,-0.558 9.024,-1.73 12.583,-4.99 18.722,-19.23 13.744,-31.803 l -32.653,-82.316 c -3.702,-9.335 -12.726,-15.458 -22.771,-15.458 -0.032,0 -0.08,0 -0.124,0 l -41.89,0.198 20.427,-54.5 22.419,17.509 c 2.934,2.279 6.472,3.452 10.045,3.452 2.613,0 5.242,-0.622 7.651,-1.897 l 50.818,-26.908 c 3.457,-1.833 5.787,-4.839 7.192,-8.196 l 114.531,-86.869 c -0.924,29.937 4.034,116.016 71.337,243.091 -5.214,2.208 -10.093,5.277 -14.224,9.407 -5.243,5.247 -14.651,5.247 -19.898,0 -17.696,-17.699 -48.488,-17.691 -66.154,-0.023 -5.342,5.332 -14.639,5.316 -19.966,0 -6.375,-6.378 -16.709,-6.378 -23.088,0 -6.375,6.377 -6.375,16.71 0,23.087 18.226,18.241 47.9,18.258 66.143,0 5.327,-5.325 14.619,-5.333 19.977,0.024 8.817,8.827 20.555,13.689 33.038,13.689 12.486,0 24.22,-4.862 33.069,-13.721 5.327,-5.325 14.591,-5.349 19.982,0.024 18.21,18.217 47.864,18.225 66.122,-0.024 6.38,-6.378 6.365,-16.703 -0.015,-23.08 z M 106.162,156.405 c 20.23,0 36.64,-16.407 36.64,-36.649 0,-20.234 -16.409,-36.641 -36.64,-36.641 -20.25,0 -36.643,16.406 -36.643,36.641 10e-4,20.242 16.393,36.649 36.643,36.649 z";
MarkerIcons.HIKE_MAN = "m 386.604,202.858 c 0,-11.185 -9.066,-20.251 -20.253,-20.251 h -68.479 l -38.62,-54.832 0.127,-0.933 c 1.378,-10.474 -1.474,-21.067 -7.911,-29.444 -6.441,-8.378 -15.932,-13.852 -26.408,-15.23 -11.596,-1.511 -22.592,2.224 -30.852,9.225 V 45.779 c 0,-7.847 -6.362,-14.217 -14.225,-14.217 H 140.59 c -7.867,0 -14.225,6.37 -14.225,14.217 v 168.953 c 0,20.68 15.821,37.476 35.979,39.446 l -3.043,7.073 -23.859,90.136 -53.73,72.188 c -8.006,10.768 -5.794,25.987 4.984,34.001 4.348,3.245 9.443,4.811 14.491,4.811 7.422,0 14.729,-3.385 19.511,-9.795 l 56.529,-75.945 c 1.851,-2.484 3.213,-5.299 4.003,-8.289 l 16.266,-61.414 44.521,40.877 -6.076,88.603 c -0.917,13.393 9.177,24.99 22.58,25.908 0.552,0.04 1.124,0.056 1.691,0.056 12.66,0 23.339,-9.819 24.208,-22.642 l 6.882,-100.264 c 0.508,-7.364 -2.371,-14.572 -7.815,-19.564 l -45.994,-42.219 13.992,-90.613 19.331,27.435 c 3.801,5.387 9.972,8.592 16.552,8.592 h 70.882 l 1.339,232.294 c 0,4.478 3.626,8.101 8.101,8.101 4.479,0 8.101,-3.624 8.101,-8.101 l -1.339,-234.036 c 7.136,-3.126 12.152,-10.221 12.152,-18.513 z M 246.413,78.492 c 21.688,0 39.255,-17.573 39.255,-39.251 0,-21.67 -17.567,-39.24 -39.255,-39.24 -21.652,0 -39.242,17.57 -39.242,39.24 0,21.678 17.59,39.251 39.242,39.251 z";
MarkerIcons.CAR_PARK = "m509.70001,286.19093l0,62.36568c0,15.16179 -11.45684,21.27698 -23.60281,21.27698l-52.46025,0c-1.46441,26.61776 -23.60281,47.11947 -50.22143,47.11947c-26.6169,0 -48.75616,-20.50171 -50.99498,-47.11947l-182.62025,0c-1.46441,26.61776 -23.60281,47.11947 -50.22057,47.11947s-47.98089,-20.50171 -50.22057,-47.11947l-27.39304,0c-18.95116,0 -21.96612,-9.04487 -21.96612,-21.19084l0,-60.04071c0,-10.68156 0.77527,-18.26203 6.11606,-28.94359l53.23553,-105.00664c6.11606,-12.92124 21.96612,-23.60281 36.52405,-23.60281l202.34668,0c14.38565,0 28.08217,9.04487 36.52319,23.60281l47.98089,78.30274l96.56563,21.19084c24.98107,3.96338 29.63272,19.1243 30.40799,32.04555zm-381.95198,78.30274c0,-15.16093 -12.14597,-27.30603 -27.3069,-27.30603s-27.3069,12.14597 -27.3069,27.30603c0,15.16179 12.14597,27.3069 27.3069,27.3069s27.3069,-11.97282 27.3069,-27.3069zm54.69993,-203.81109l-74.59865,0c-12.14597,0.77527 -17.48675,5.34078 -24.37808,18.26203l-23.60281,53.23553l122.40725,0l0,-71.49755l0.17228,0zm160.48185,71.41227l-31.95854,-53.23553c-6.11606,-9.90629 -15.16093,-18.26203 -28.94359,-18.26203l-67.70732,0c0,0 0,70.72228 0,71.49755l128.60945,0zm67.79346,132.39882c0,-15.16093 -11.45684,-27.30603 -26.6169,-27.30603c-15.16179,0 -27.3069,12.14597 -27.3069,27.30603c0,15.16179 12.14597,27.3069 27.3069,27.3069c14.38479,0.17228 26.6169,-11.97282 26.6169,-27.3069z";
MarkerIcons.THEATRE_SVG = "\n   <svg width=\"32\" height=\"32\" viewBox='0 0 512 512' xmlns=\"http://www.w3.org/2000/svg\" xmlns:svg=\"http://www.w3.org/2000/svg\" >\n        <g stroke=\"null\">\n            <path stroke=\"null\" fill=\"#f00\" d=\"m192.34495,18.96l0,189.94536c0,85.50098 71.42609,155.05985 159.22083,155.05985c87.79614,0 159.22223,-69.55887 159.22223,-155.05985l0,-189.94536l-318.44307,0l0.00001,0zm122.649,107.66326c0,20.08572 -16.78059,36.42763 -37.40549,36.42763s-37.40549,-16.34192 -37.40549,-36.42763c0,-20.08708 16.78059,-36.42763 37.40549,-36.42763s37.40549,16.34056 37.40549,36.42763zm73.14646,0c0,-20.08708 16.78059,-36.42763 37.40549,-36.42763s37.40549,16.34192 37.40549,36.42763c0,20.08572 -16.78059,36.42763 -37.40549,36.42763s-37.40549,-16.34192 -37.40549,-36.42763zm-81.54304,100.45716c5.26863,12.10039 24.03073,21.61425 44.96981,21.61425s39.70257,-9.51386 44.97121,-21.61425l46.28522,0c-2.0988,17.76709 -12.35818,34.41906 -28.86647,46.47593c-16.92722,12.36421 -39.08397,19.17459 -62.38996,19.17459c-23.3032,0 -45.46135,-6.80902 -62.38856,-19.17459c-16.50969,-12.05823 -26.76907,-28.70884 -28.86787,-46.47593l46.28662,0z\"/>\n            <path stroke=\"null\" fill=\"#f44\" d=\"m247.37864,380.13986l-1.64915,-0.95601l-41.53884,0c-5.26724,-12.10039 -24.03073,-21.61425 -44.96841,-21.61425c-20.93909,0 -39.70257,9.51386 -44.97121,21.61425l-46.28383,0c2.0988,-17.76709 12.35818,-34.41906 28.86647,-46.47593c16.93001,-12.36557 39.08676,-19.17459 62.38996,-19.17459c1.80555,0 3.73957,0.05576 6.08274,0.17543l12.46012,0.63779l-5.95985,-10.67521c-16.14663,-28.92643 -24.68145,-61.69729 -24.68145,-94.76733l0,-89.08023l-147.12518,0l0,189.94536c0,85.50098 71.42609,155.05985 159.22223,155.05985c48.53623,0 93.88307,-21.35179 124.41824,-58.5804l6.02269,-7.34618l-9.0487,-3.27192c-11.46727,-4.14633 -22.64828,-9.35747 -33.23582,-15.49062l-0.00001,-0.00001zm-162.13513,-189.08182c20.62629,0 37.40549,16.34192 37.40549,36.42763c0,20.08708 -16.78059,36.42763 -37.40549,36.42763c-20.62489,0 -37.40409,-16.34192 -37.40409,-36.42763c0,-20.08572 16.7792,-36.42763 37.40409,-36.42763z\"/>\n        </g>\n   </svg>\n";
MarkerIcons.PIN_SVG_NO_HOLE = "m256,0c-70.703,0 -128,57.313 -128,128c0,51.5 30.563,95.563 74.375,115.875l53.625,268.125l53.625,-268.125c43.813,-20.312 74.375,-64.375 74.375,-115.875c0,-70.687 -57.312,-128 -128,-128z";
MarkerIcons.PIN_SVG_HAS_HOLE = "m256,0c-70.703,0 -128,57.313 -128,128c0,51.5 30.563,95.563 74.375,115.875l53.625,268.125l53.625,-268.125c43.813,-20.312 74.375,-64.375 74.375,-115.875c0,-70.687 -57.312,-128 -128,-128zm0,192c-35.344,0 -64,-28.656 -64,-64s28.656,-64 64,-64s64,28.656 64,64s-28.656,64 -64,64z";

module.exports = MarkerIcons;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

var DEFAULT_OPACTITY = 1;
var DEFAULT_BACKGROUND_COLOR = '#ffffff';
var DEFAULT_RELATIVE_POSITION = 'beforeend';

var SvgButton = function () {
    function SvgButton() {
        _classCallCheck(this, SvgButton);
    }

    _createClass(SvgButton, null, [{
        key: 'standardMapImage',
        value: function standardMapImage(image_name) {
            var img_width = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 60;

            var image_element = '<a href="images/' + image_name + '" target="_blank"><img  width="' + img_width + 'px" src="images/' + image_name + '"/></a>';
            return image_element;
        }
    }, {
        key: 'insertDefault',
        value: function insertDefault(clear_all_options) {
            var append_to_id = clear_all_options.append_to_id,
                marker_icon_title = clear_all_options.marker_icon_title,
                normal_opacity = clear_all_options.normal_opacity,
                hover_opacity = clear_all_options.hover_opacity,
                main_color = clear_all_options.main_color,
                minor_color = clear_all_options.minor_color,
                minor_hover = clear_all_options.minor_hover,
                background_color = clear_all_options.background_color,
                relative_position = clear_all_options.relative_position;

            if (marker_icon_title === undefined) {
                marker_icon_title = '';
            }
            if (normal_opacity === undefined) {
                normal_opacity = DEFAULT_OPACTITY;
            }
            if (hover_opacity === undefined) {
                hover_opacity = DEFAULT_OPACTITY;
            }
            if (minor_hover === undefined) {
                minor_hover = minor_color;
            }
            if (background_color === undefined) {
                background_color = DEFAULT_BACKGROUND_COLOR;
            }
            if (relative_position === undefined) {
                relative_position = DEFAULT_RELATIVE_POSITION;
            }
            var clear_all_defaults = {
                append_to_id: append_to_id,
                marker_icon_title: marker_icon_title,
                main_color: main_color,
                minor_color: minor_color,
                minor_hover: minor_hover,
                normal_opacity: normal_opacity,
                hover_opacity: hover_opacity,
                background_color: background_color,
                relative_position: relative_position
            };
            return clear_all_defaults;
        }
    }, {
        key: 'clear_all',
        value: function clear_all(clear_all_options) {
            var clear_all_defaults = SvgButtons.initSvg(clear_all_options);
            var append_to_id = clear_all_defaults.append_to_id,
                marker_icon_title = clear_all_defaults.marker_icon_title,
                main_color = clear_all_defaults.main_color,
                background_color = clear_all_defaults.background_color,
                relative_position = clear_all_defaults.relative_position,
                svg_css = clear_all_defaults.svg_css,
                main_svg = clear_all_defaults.main_svg,
                minor_svg = clear_all_defaults.minor_svg;

            var target_elem = document.getElementById(append_to_id);
            var the_template = ' ' + svg_css + ' \n         <svg width="32" height="32" viewBox=\'0 0 300 300\' xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" >\n            <g display="inline" class="' + main_svg + '">\n                <title>' + marker_icon_title + '</title>\n                    <rect stroke="null" height="512" width="512" y="0" x="0" stroke-width="5" fill="' + background_color + '"></rect>\n                    <g class="' + minor_svg + '" transform="rotate(-45 244,245)" stroke="null">\n                        <path d="m245,163c-22,0 -41,18 -41,41c0,16 9,30 23,37l17,86l17,-86c14,-6 23,-20 23,-37c0,-22 -18,-41 -41,-41l0,0l2,0zm0,0" stroke="null"></path>\n                    </g>\n                    <g class="' + minor_svg + '" transform="rotate(33 27,273)"  stroke="null">\n                        <path d="m27,192c-22,0 -40,18 -40,40c0,16 9,30 23,37l17,85l17,-85c14,-6 23,-20 23,-37c0,-22 -18,-40 -40,-40l0,0zm0,0" stroke="null"></path>\n                    </g>\n                    <g stroke="null">\n                        <path fill="' + main_color + '" d="m290.96816,8.04289c-6.78995,-6.79189 -17.80179,-6.79189 -24.59563,0.00194l-94.6721,94.6721l-17.06223,-17.06223c-5.6845,-5.6845 -14.90276,-5.6845 -20.58823,0l-10.26257,10.26257c-24.84312,5.92034 -49.68526,11.84069 -74.52838,17.76394l-39.69735,9.46381c-3.32413,0.79197 -6.03001,3.19796 -7.20535,6.40659c-1.1763,3.20863 -0.6658,6.79287 1.35877,9.54534c43.93282,59.71491 96.48606,112.26814 156.19999,156.19902c1.7761,1.30636 3.89772,1.98186 6.04069,1.98186c1.18019,0 2.36717,-0.20479 3.50562,-0.62212c3.20863,-1.1763 5.61365,-3.88219 6.40659,-7.20632l11.8533,-49.72505c5.12546,-21.50055 10.24996,-43.00013 15.37251,-64.50068l10.26257,-10.26257c5.6845,-5.6845 5.6845,-14.90276 0,-20.58823l-17.06126,-17.06126l94.67307,-94.67307c6.79384,-6.79384 6.79189,-17.80567 0,-24.59563l-0.00001,-0.00001zm-131.31902,261.54618c-8.28557,-6.37553 -16.41003,-12.94032 -24.39375,-19.66136l13.42462,-37.83196l-26.5309,26.52896c-9.55213,-8.44668 -18.86551,-17.14861 -27.94499,-26.0893l13.33145,-21.06186l-21.12689,13.26545c-8.31177,-8.4428 -16.41391,-17.09232 -24.29864,-25.94469l26.63378,-26.63281l-38.06392,13.50615c-7.28493,-8.59226 -14.37576,-17.35922 -21.25985,-26.30476l90.74915,-21.63157l61.10958,61.10958l-21.62963,90.74818l-0.00001,-0.00001z" stroke="null"></path>\n                    </g>\n                </g>\n            </svg>\n      ';
            target_elem.insertAdjacentHTML(relative_position, the_template);
        }
    }, {
        key: 'initSvg',
        value: function initSvg(clear_all_options) {
            SvgButtons.unique_class_count++;
            var unique_class = SvgButtons.unique_class_count;
            var clear_all_defaults = SvgButtons.insertDefault(clear_all_options);
            var normal_opacity = clear_all_defaults.normal_opacity,
                hover_opacity = clear_all_defaults.hover_opacity,
                minor_color = clear_all_defaults.minor_color,
                minor_hover = clear_all_defaults.minor_hover;

            var main_svg = 'clear-main-' + unique_class;
            var minor_svg = 'clear-minor-' + unique_class;
            var svg_css = '\n        <style>\n            .' + main_svg + ' {\n                fill :' + minor_color + ';\n                fill-opacity:' + normal_opacity + ';\n                opacity:' + normal_opacity + ';\n            }\n            .' + main_svg + ':hover {\n                fill:' + minor_hover + ';\n                fill-opacity:' + hover_opacity + ';\n                opacity:' + hover_opacity + ';\n                cursor:pointer;\n            }\n            .' + minor_svg + '{\n                fill: inherit\n            }\n        </style> ';
            clear_all_defaults.svg_css = svg_css;
            clear_all_defaults.main_svg = main_svg;
            clear_all_defaults.minor_svg = minor_svg;
            return clear_all_defaults;
        }
    }, {
        key: 'upMarkerHover',
        value: function upMarkerHover(clear_all_options) {

            var clear_all_defaults = SvgButtons.initSvg(clear_all_options);
            var append_to_id = clear_all_defaults.append_to_id,
                marker_icon_title = clear_all_defaults.marker_icon_title,
                main_color = clear_all_defaults.main_color,
                relative_position = clear_all_defaults.relative_position,
                svg_css = clear_all_defaults.svg_css,
                main_svg = clear_all_defaults.main_svg,
                minor_svg = clear_all_defaults.minor_svg;

            var target_elem = document.getElementById(append_to_id);
            var the_template = ' ' + svg_css + ' \n                    <svg width="32" height="32" style="margin-left:-12px" viewBox=\'0 0 512 512\' xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">\n                        <g display="inline" class="' + main_svg + '" style="float:right">\n                            <title>' + marker_icon_title + '</title>\n                           \n                            <g class="' + minor_svg + '"  transform="rotate(-90 436,112.58331298828121) ">\n                                <rect transform="rotate(45 496.4166870117188,136) " height="100.80909" width="36.95837" y="85.09545" x="477.93749" stroke-width="5" stroke="null" ></rect>\n                                <path d="m515.75596,114.31625l-6.74279,-22.15675l-172.20624,0.34951l-9.85121,39.49548l183.14319,0.47142l5.65705,-18.15966z" ></path>\n                                <rect transform="rotate(135 495.7499694824219,89.66665649414061) " height="100.80909" width="36.95837" y="39.26214" x="477.2708" stroke-width="5" stroke="null" ></rect>\n                            </g>\n                            <g display="inline" stroke="null" >\n                                <path fill="' + main_color + '" d="m244.5,1.99999c-69.87445,0 -126.5,56.64136 -126.5,126.5c0,50.89648 30.20484,94.44312 73.50342,114.51709l52.99658,264.98291l52.99658,-264.98291c43.29957,-20.07397 73.50342,-63.62061 73.50342,-114.51709c0,-69.85864 -56.64037,-126.5 -126.5,-126.5zm0,0" stroke="null"></path>\n                            </g>\n                        </g>\n                    </svg>\n        ';
            target_elem.insertAdjacentHTML(relative_position, the_template);
        }
    }, {
        key: 'resizeHover',
        value: function resizeHover(clear_all_options) {
            var clear_all_defaults = SvgButtons.initSvg(clear_all_options);
            var append_to_id = clear_all_defaults.append_to_id,
                marker_icon_title = clear_all_defaults.marker_icon_title,
                main_color = clear_all_defaults.main_color,
                background_color = clear_all_defaults.background_color,
                relative_position = clear_all_defaults.relative_position,
                svg_css = clear_all_defaults.svg_css,
                main_svg = clear_all_defaults.main_svg,
                minor_svg = clear_all_defaults.minor_svg;

            var target_elem = document.getElementById(append_to_id);
            var the_template = ' ' + svg_css + ' \n                    <svg width="32" height="32"\n                     viewBox=\'0 0 512 512\'\n                     xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">\n                    <g display="inline" class="' + main_svg + '">\n                        <title>' + marker_icon_title + '</title>\n                        <rect stroke="null" height="512" width="512" y="0" x="0" stroke-width="5" fill="' + background_color + '"></rect>\n                        <g>\n                            <path fill="' + main_color + '" d="m397.555,0.001l-327.531,0c-6.903,0 -12.5,5.597 -12.5,12.5l0,238.977l-45.024,0c-6.903,0 -12.5,5.597 -12.5,12.5l0,133.576c0,6.902 5.597,12.5 12.5,12.5l133.576,0c6.903,0 12.5,-5.598 12.5,-12.5l0,-45.022l238.979,0c6.902,0 12.5,-5.599 12.5,-12.5l0,-327.531c0,-6.904 -5.598,-12.5 -12.5,-12.5zm-305.031,317.529l0,-31.054l31.053,0l0,31.054l-31.053,0l0,0zm-22.5,35l53.553,0l0,22.522l-88.577,0l0,-88.576l22.523,0l0,53.554c0.001,6.903 5.597,12.5 12.501,12.5zm76.052,-101.052l-53.553,0l0,-216.477l282.53,0l0,282.529l-216.477,0l0,-53.554c0,-6.903 -5.596,-12.498 -12.5,-12.498z" ></path>\n                        </g>\n                        <g class="' + minor_svg + '" stroke="null" transform="rotate(-0.039856404066085815 242.00148010263317,174.1156921386567) ">\n                            <path stroke="null" d="m242.00147,46.5548c-34.64617,0 -62.99304,28.34687 -62.99304,62.99304c0,25.19722 14.17343,47.24478 36.221,58.26856l26.77204,133.8602l26.77204,-133.8602c22.04756,-9.44896 36.221,-31.49652 36.221,-58.26856c0,-34.64617 -28.34687,-62.99304 -62.99304,-62.99304l0,0zm0,0"></path>\n                        </g>\n                    </g>\n                </svg>\n \n       ';
            target_elem.insertAdjacentHTML(relative_position, the_template);
        }
    }, {
        key: 'resizeHideInfo',
        value: function resizeHideInfo(clear_all_options) {
            var clear_all_defaults = SvgButtons.initSvg(clear_all_options);
            var append_to_id = clear_all_defaults.append_to_id,
                marker_icon_title = clear_all_defaults.marker_icon_title,
                main_color = clear_all_defaults.main_color,
                background_color = clear_all_defaults.background_color,
                relative_position = clear_all_defaults.relative_position,
                svg_css = clear_all_defaults.svg_css,
                main_svg = clear_all_defaults.main_svg,
                minor_svg = clear_all_defaults.minor_svg;

            var target_elem = document.getElementById(append_to_id);
            var the_template = ' ' + svg_css + ' \n             <svg width="32" height="32" viewBox=\'0 0 512 512\' xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" >\n                    <g display="inline" class="' + main_svg + '">\n                       <rect stroke="null" height="512" width="512" y="0" x="0" stroke-width="5" fill="' + background_color + '"></rect>\n                        <g class="' + minor_svg + '" >\n                             <title>' + marker_icon_title + '</title>\n                            <path  d="M 175.0204,456.47655 H 92.06649 L 287.6426,259.90358 210.67085,259.93163 53.66462,417.07152 V 336.12075 H -0.64761 V 510.78771 H 172.0204"\n                                  stroke="null"></path>\n                        </g>\n                        <g>\n                            <rect opacity="1"  height="170.66667" width="478.81481" y="54.51852" x="18.96296" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="null" stroke-width="36"\n                                  stroke="' + main_color + '" fill="#ffffff"></rect>\n                        </g>\n                    </g>\n                </svg>\n       ';
            target_elem.insertAdjacentHTML(relative_position, the_template);
        }
    }, {
        key: 'resizeShowInfo',
        value: function resizeShowInfo(clear_all_options) {
            var clear_all_defaults = SvgButtons.initSvg(clear_all_options);
            var append_to_id = clear_all_defaults.append_to_id,
                marker_icon_title = clear_all_defaults.marker_icon_title,
                main_color = clear_all_defaults.main_color,
                background_color = clear_all_defaults.background_color,
                relative_position = clear_all_defaults.relative_position,
                svg_css = clear_all_defaults.svg_css,
                main_svg = clear_all_defaults.main_svg,
                minor_svg = clear_all_defaults.minor_svg;

            var target_elem = document.getElementById(append_to_id);
            var the_template = ' ' + svg_css + ' \n             <svg width="32" height="32" viewBox=\'0 0 512 512\' xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" >\n                    <g display="inline" class="' + main_svg + '">\n                       <rect stroke="null" height="512" width="512" y="0" x="0" stroke-width="5" fill="' + background_color + '"></rect>\n                        <g class="' + minor_svg + '" transform="rotate(-180 143.49749755859375,385.34564208984375) ">\n                             <title>' + marker_icon_title + '</title>\n                            <path  d="m175.0204,456.47655l-82.95391,0l195.57611,-196.57297l-76.97175,0.02805l-157.00623,157.13989l0,-80.95077l-54.31223,0l0,174.66696l172.66801,0"\n                                  stroke="null"></path>\n                        </g>\n                        <g>\n                            <rect opacity="1"  height="170.66667" width="478.81481" y="54.51852" x="18.96296" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="null" stroke-width="36"\n                                  stroke="' + main_color + '" fill="#ffffff"></rect>\n                        </g>\n                    </g>\n                </svg>\n       ';
            target_elem.insertAdjacentHTML(relative_position, the_template);
        }
    }, {
        key: 'do_delete',
        value: function do_delete(clear_all_options) {
            var clear_all_defaults = SvgButtons.initSvg(clear_all_options);
            var append_to_id = clear_all_defaults.append_to_id,
                marker_icon_title = clear_all_defaults.marker_icon_title,
                main_color = clear_all_defaults.main_color,
                background_color = clear_all_defaults.background_color,
                relative_position = clear_all_defaults.relative_position,
                svg_css = clear_all_defaults.svg_css,
                main_svg = clear_all_defaults.main_svg,
                minor_svg = clear_all_defaults.minor_svg;

            var target_elem = document.getElementById(append_to_id);

            var the_template = ' ' + svg_css + ' \n        <svg width="32" height="32" viewBox=\'0 0 512 512\' xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" >\n            <g display="inline" class="' + main_svg + '" style="cursor: inherit">\n                <title>' + marker_icon_title + '</title>\n                <rect stroke="null" height="512" width="512" y="0" x="0" stroke-width="5" fill="' + background_color + '"></rect>\n                <g class="' + minor_svg + '" stroke="null" display="inline">\n                    <rect stroke="null" transform="rotate(-90 393.08407592773443,392.5536193847656) " height="183.41317" width="44.95837" y="300.84702" x="370.60487" stroke-width="5" ></rect>\n                </g>\n                <g display="inline">\n                    <rect stroke="null" fill="#ffffff" stroke-width="5" x="185.00379" y="374.64714" width="213.52858" height="27.5" transform="rotate(-78.98575592041016 291.76806640624994,388.39712524414057)"></rect>\n                </g>\n                <g display="inline" stroke="null">\n                    <path fill="' + main_color + '"  d="m255.5,1.99999c-69.87445,0 -126.5,56.64136 -126.5,126.5c0,50.89648 30.20484,94.44312 73.50342,114.51709l52.99658,264.98291l52.99658,-264.98291c43.29957,-20.07397 73.50342,-63.62061 73.50342,-114.51709c0,-69.85864 -56.64037,-126.5 -126.5,-126.5zm0,0" stroke="null"></path>\n                </g>\n            </g>\n        </svg> ';
            target_elem.insertAdjacentHTML(relative_position, the_template);
        }
    }, {
        key: 'do_edit',
        value: function do_edit(clear_all_options) {
            var clear_all_defaults = SvgButtons.initSvg(clear_all_options);
            var append_to_id = clear_all_defaults.append_to_id,
                marker_icon_title = clear_all_defaults.marker_icon_title,
                main_color = clear_all_defaults.main_color,
                relative_position = clear_all_defaults.relative_position,
                svg_css = clear_all_defaults.svg_css,
                main_svg = clear_all_defaults.main_svg,
                minor_svg = clear_all_defaults.minor_svg;

            var target_elem = document.getElementById(append_to_id);
            var the_template = ' ' + svg_css + ' \n         <svg width="32" height="32" viewBox=\'0 0 512 512\' xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" >\n            <g display="inline" class="' + main_svg + '">\n                <title>' + marker_icon_title + '</title>\n                <g class="' + minor_svg + '" stroke="null" display="inline">\n                    <path d="m421.83777,313.61972l-83.83821,83.83821l44.59479,44.59479l83.83821,-83.83821l-44.59479,-44.59479z" stroke="null"/>\n                    <path  d="m323.34562,409.14034l-55.94706,102.20756l102.22026,-55.94621l-46.2732,-46.26135z" stroke="null"/>\n                    <path d="m464.43963,268.66817l-30.15888,30.12758l45.22801,45.22801l30.13825,-30.15888l-45.20737,-45.1967l-0.00001,-0.00001z" id="svg_26" stroke="null"/>\n                </g>\n                <g display="inline" stroke="null">\n                    <path fill="' + main_color + '" d="m255.5,1.99999c-69.87445,0 -126.5,56.64136 -126.5,126.5c0,50.89648 30.20484,94.44312 73.50342,114.51709l52.99658,264.98291l52.99658,-264.98291c43.29957,-20.07397 73.50342,-63.62061 73.50342,-114.51709c0,-69.85864 -56.64037,-126.5 -126.5,-126.5zm0,0" stroke="null"/>\n                </g>\n            </g>\n         </svg>';
            target_elem.insertAdjacentHTML(relative_position, the_template);
        }
    }, {
        key: 'orcaHover',
        value: function orcaHover(clear_all_options) {
            var clear_all_defaults = SvgButtons.initSvg(clear_all_options);
            var append_to_id = clear_all_defaults.append_to_id,
                marker_icon_title = clear_all_defaults.marker_icon_title,
                main_color = clear_all_defaults.main_color,
                relative_position = clear_all_defaults.relative_position,
                svg_css = clear_all_defaults.svg_css,
                main_svg = clear_all_defaults.main_svg,
                minor_svg = clear_all_defaults.minor_svg;

            var target_elem = document.getElementById(append_to_id);
            var the_template = ' ' + svg_css + ' \n        <svg width="32" height="32" viewBox=\'0 0 512 512\' xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">\n              <g display="inline" class="' + main_svg + '">\n                  <title>' + marker_icon_title + '</title>\n                  <path fill="' + main_color + '" d="m462.69404,269.48885c-4.16165,-1.39225 -8.41392,-4.78536 -10.94698,-8.41748c-24.88993,-35.70275 -52.74383,-68.42553 -89.53053,-92.61889c-26.77084,-17.60615 -56.57941,-25.7633 -88.07697,-28.83745c-29.61576,-2.88845 -59.00407,-0.47889 -88.2982,3.9111c-17.73321,2.65745 -26.24486,-1.66413 -34.22698,-17.77319c-8.82707,-17.80962 -11.67287,-37.09855 -13.48449,-56.58651c-0.81563,-8.75776 -3.34958,-10.46543 -10.98785,-6.09765c-13.66574,7.81597 -19.33247,20.97439 -19.6621,35.55082c-0.4709,20.66609 0.39093,41.4379 2.0444,62.05245c1.12748,14.03979 -0.9027,25.54918 -10.23353,37.19273c-17.04819,21.26848 -33.75964,42.86569 -48.29609,65.92446c-1.59127,-1.10883 -3.1861,-2.21854 -4.77737,-3.32736c-2.51618,-3.29449 -5.33622,-6.82976 -7.80087,-10.60314c-3.30959,-5.06435 -6.32954,-5.9706 -10.83859,-1.14525c-13.65596,14.62619 -18.68299,42.95187 -11.85412,62.90717c0.50022,4.06747 1.93245,8.00789 4.29226,11.36102c-9.08028,20.7496 -16.26899,42.16645 -18.72653,65.09817c-1.12748,10.51962 0.52954,21.36265 1.21455,32.04132c0.39182,6.06033 1.689,12.06381 2.06661,18.12147c0.73211,11.80259 14.66261,24.81707 26.27774,22.9788c7.5361,-1.19323 15.99001,-2.90445 21.84421,-7.29355c23.59186,-17.69323 50.46399,-29.52869 75.63556,-44.35212c11.83191,-6.96747 22.69271,-15.17793 32.58862,-25.09161c4.62632,-3.52816 8.63871,-7.84885 11.78926,-12.74261c42.61514,4.03104 88.84817,-12.11889 113.3756,-40.94835c5.25981,-6.18383 9.38148,-13.67373 12.58268,-21.17696c2.99329,-7.02167 0.34029,-9.88525 -7.32642,-9.93234c-13.17352,-0.07996 -26.3497,-0.02221 -39.52322,-0.02221l0,0.94001c-5.87198,0 -11.74484,0.02132 -17.6177,0.03199c5.41974,-1.80095 10.66089,-3.97951 15.6124,-6.81821c6.5721,-2.66456 12.68041,-6.82976 18.78517,-12.25305c13.14775,-11.68265 28.26083,-22.05745 44.138,-29.57933c18.08505,-8.56585 35.68054,-10.32416 52.63099,-7.15583c3.09547,0.97555 6.22115,2.10659 9.39214,3.40377c2.23986,0.91691 4.55702,1.26164 6.85553,1.14881c10.21132,3.81336 20.15521,9.27664 29.79346,15.96424c1.76897,1.22966 3.48729,2.53484 5.16919,3.88977c-0.12794,1.20745 -0.25411,2.41489 -0.38116,3.62145c-0.09773,0.04709 -0.19991,0.09773 -0.29764,0.14482c-1.69256,10.83148 -10.1278,16.5924 -16.84917,23.62029c-8.66714,9.06251 -16.26544,18.63679 -13.18773,32.30608c0.99688,4.43264 3.16122,8.65292 5.15852,12.78969c0.62371,1.28652 2.54461,2.84492 3.70497,2.72142s2.81293,-2.08082 3.04572,-3.4402c1.72188,-10.04873 10.421,-9.56984 17.18235,-13.0749c6.26824,-3.25184 12.5427,-2.33848 18.2272,-4.48417c3.30959,-1.25098 5.10344,-6.51079 7.65516,-10.35348c0.17059,0.13416 0.34118,0.27276 0.51088,0.39893c3.58147,9.27575 12.12955,10.96564 21.1201,9.38503c13.57156,-2.38913 24.13916,4.01683 34.63035,10.41478c3.76183,2.29406 6.00614,7.08298 10.34815,12.47695c1.1568,-4.84311 2.51973,-7.90926 2.52773,-10.97986c0.08974,-32.93158 -16.12861,-54.86286 -47.27522,-65.29186z" stroke="null"></path>\n                  <g class="' + minor_svg + '" stroke="null" transform="rotate(-0.039856404066085815 242.00148010263317,174.1156921386567) ">\n                        <rect transform="rotate(45 462.41668701171875,95.5) " height="100.80909" width="36.95837" y="45.09545" x="443.93749" stroke-width="5" stroke="null"></rect>\n                        <rect stroke="null" transform="rotate(90 380.0000305175781,72.6666412353516) " height="224.91314" width="36.95837" y="-39.78993" x="361.52084" stroke-width="5"></rect>\n                        <rect transform="rotate(135 461.75,49.66668319702148) " height="100.80909" width="36.95837" y="-0.73786" x="443.2708" stroke-width="5" stroke="null"></rect>\n                  </g>\n              </g>\n        </svg>\n       ';
            target_elem.insertAdjacentHTML(relative_position, the_template);
        }
    }, {
        key: 'swimHover',
        value: function swimHover(clear_all_options) {
            var clear_all_defaults = SvgButtons.initSvg(clear_all_options);
            var append_to_id = clear_all_defaults.append_to_id,
                marker_icon_title = clear_all_defaults.marker_icon_title,
                main_color = clear_all_defaults.main_color,
                relative_position = clear_all_defaults.relative_position,
                svg_css = clear_all_defaults.svg_css,
                main_svg = clear_all_defaults.main_svg,
                minor_svg = clear_all_defaults.minor_svg;

            var target_elem = document.getElementById(append_to_id);
            var the_template = ' ' + svg_css + ' \n        <svg width="32" height="32" viewBox=\'0 0 512 512\' xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">\n              <g display="inline" class="' + main_svg + '">\n                  <title>' + marker_icon_title + '</title>\n                  <path fill="' + main_color + '" d="m131.69976,223.00068c23.91062,0 43.28664,-21.03779 43.28664,-47.00159c0,-25.97096 -19.37602,-47.01794 -43.28664,-47.01794c-23.90244,0 -43.28766,21.04698 -43.28766,47.01794c0,25.96381 19.38522,47.00159 43.28766,47.00159zm-129.64427,-185.00068m41.80372,216.01212l42.67037,20.87733c0,0.14206 -0.04088,0.27798 -0.04088,0.42004l0,93.39407c23.16967,-5.74566 48.28113,0 67.3945,17.563c6.59801,-6.16672 13.92878,-10.81374 21.6377,-14.28239l0.51917,-50.23621l4.68074,5.52287c2.95459,3.47683 6.89643,5.77325 11.19903,6.51522l66.30914,11.44942c10.62058,1.83244 20.51044,-6.04204 22.18242,-17.48226c1.67812,-11.48315 -5.53104,-22.27133 -16.09439,-24.09355l-59.66923,-10.30581c-36.77141,-43.30912 -6.72371,-8.02573 -43.55031,-51.29908c-3.29083,-3.86928 -7.93989,-7.2296 -21.86254,-7.2296l-15.47506,0c-5.84275,0 -11.29714,1.59125 -16.21703,4.18201l-40.62332,-19.87782l-27.48045,-75.02779c-3.94899,-10.78614 -15.19606,-16.09541 -25.16869,-11.7693c-9.93891,4.28932 -14.79339,16.53385 -10.83724,27.33839l30.37883,82.93906c1.85901,5.07523 5.45541,9.15811 10.04724,11.40241l0,-0.00001zm-41.80372,-216.01212m358.12474,185.00068c23.91164,0 43.28766,-21.03779 43.28766,-47.00159c0,-25.97096 -19.37602,-47.01794 -43.28766,-47.01794c-23.89324,0 -43.27846,21.04698 -43.27846,47.01794c0.00102,25.96381 19.38624,47.00159 43.27846,47.00159zm-358.12474,-185.00068m260.23899,204.60869c1.85799,5.07523 5.45439,9.15913 10.04622,11.40241l42.66117,20.87733c0,0.14206 -0.0419,0.27798 -0.0419,0.42004l0,91.35724c16.10257,1.49109 31.8178,7.79374 44.233,19.50888c12.58895,-11.86742 28.54332,-18.17926 44.86051,-19.56305l0.4599,-44.87482l4.69812,5.53309c2.95459,3.47683 6.89541,5.77325 11.19903,6.51522c2.45177,0.42106 66.8927,11.71616 69.36899,11.71616c9.3625,0 17.59877,-7.39107 19.11235,-17.749c1.67914,-11.48315 -5.52798,-22.27133 -16.09235,-24.09355l-59.66208,-10.30581c-100.05953,-117.8811 57.25936,67.45888 -43.54827,-51.29908c-3.3082,-3.89687 -7.98281,-7.2296 -21.87071,-7.2296l-15.48426,0c-5.84275,0 -11.29101,1.59125 -16.2109,4.18201l-40.62127,-19.87782l-27.48249,-75.02779c-3.94797,-10.78717 -15.18686,-16.09541 -25.16767,-11.77033c-9.93993,4.28932 -14.79339,16.53385 -10.83622,27.33839l30.37883,82.94008zm-260.23899,-204.60869m473.49786,371.7878c-7.58628,8.25875 -19.87884,8.23218 -27.47227,-0.01737c-20.07711,-21.82472 -55.07843,-21.82472 -75.15451,0.01737c-7.33997,7.97259 -20.12514,7.95419 -27.48147,-0.01737c-19.90235,-21.63872 -55.21742,-21.64485 -75.13816,-0.0092l-0.29433,0.32295c-7.62,7.97974 -19.69795,7.83666 -27.21882,-0.31375c-20.15887,-21.91466 -53.62923,-23.40677 -75.7953,0.70518c-6.92096,7.49838 -19.28608,7.52598 -26.22339,-0.02555c-20.37042,-22.12928 -53.51273,-22.12928 -73.91994,0.01737c-8.317,9.05284 -22.89782,9.06204 -31.23219,-0.0092c-6.58165,-7.15091 -17.25436,-7.14171 -23.83499,-0.00818c-6.5837,7.14886 -6.5837,18.74034 -0.0092,25.89022c10.53984,11.4484 24.55141,17.75718 39.46131,17.75718c14.91603,0 28.92964,-6.3098 39.45313,-17.749c7.24084,-7.86426 19.01423,-7.86426 26.2704,0c19.56713,21.2892 53.61391,22.02095 74.5127,-0.697c7.63533,-8.2935 19.94527,-8.19436 27.52235,0.03679c20.2161,21.9586 53.86021,23.07565 75.10546,0l0.28616,-0.31375c7.28274,-7.61489 20.07813,-7.48101 27.21779,0.26776c20.09346,21.82472 55.07843,21.82472 75.15349,0.0184c7.35735,-7.98894 20.13536,-7.99814 27.49067,-0.0092c20.74243,22.53194 54.41106,22.60246 75.16167,-0.01635c6.57552,-7.1601 6.55815,-18.7526 -0.03168,-25.88307c-6.59903,-7.14886 -17.26253,-7.13149 -23.82886,0.03577l-0.00002,0z" stroke="null"></path>\n                  <g class="' + minor_svg + '" stroke="null" transform="rotate(-0.039856404066085815 242.00148010263317,174.1156921386567) ">\n                        <rect transform="rotate(45 462.41668701171875,95.5) " height="100.80909" width="36.95837" y="45.09545" x="443.93749" stroke-width="5" stroke="null"></rect>\n                        <rect stroke="null" transform="rotate(90 380.0000305175781,72.6666412353516) " height="224.91314" width="36.95837" y="-39.78993" x="361.52084" stroke-width="5"></rect>\n                        <rect transform="rotate(135 461.75,49.66668319702148) " height="100.80909" width="36.95837" y="-0.73786" x="443.2708" stroke-width="5" stroke="null"></rect>\n                  </g>\n              </g>\n        </svg>\n       ';
            target_elem.insertAdjacentHTML(relative_position, the_template);
        }
    }, {
        key: 'treeHover',
        value: function treeHover(clear_all_options) {

            var clear_all_defaults = SvgButtons.initSvg(clear_all_options);
            var append_to_id = clear_all_defaults.append_to_id,
                marker_icon_title = clear_all_defaults.marker_icon_title,
                main_color = clear_all_defaults.main_color,
                relative_position = clear_all_defaults.relative_position,
                svg_css = clear_all_defaults.svg_css,
                main_svg = clear_all_defaults.main_svg,
                minor_svg = clear_all_defaults.minor_svg;

            var target_elem = document.getElementById(append_to_id);
            var the_template = ' ' + svg_css + ' \n        <svg width="32" height="32" viewBox=\'0 0 512 512\' xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">\n              <g display="inline" class="' + main_svg + '">\n                  <title>' + marker_icon_title + '</title>\n                  <path fill="' + main_color + '" d="m387.15613,447.1595l-49.26753,0c-6.03664,0 -10.94834,4.9117 -10.94834,10.94834l0,41.05627c0,6.03664 4.9117,10.94834 10.94834,10.94834l49.26753,0c6.03664,0 10.94834,-4.9117 10.94834,-10.94834l0,-41.05627c0,-6.03664 -4.9117,-10.94834 -10.94834,-10.94834zm-387.15613,-447.1595m487.67831,406.98183l-115.54604,-281.67204c-2.5277,-6.16528 -7.06989,-6.8304 -8.90374,-6.8304c-1.84206,0 -6.40067,0.67195 -8.95027,6.88787l-25.49184,62.19889c-2.11029,5.14435 -2.11029,12.61112 0,17.75684l84.85921,206.85246c2.45927,5.99832 9.09123,10.35029 15.76971,10.35029l47.68549,0c4.16311,0 7.73363,-1.76542 9.79876,-4.84464c2.03776,-3.0368 2.32242,-6.93714 0.7787,-10.69927l0.00002,0zm-487.67831,-406.98183m348.62755,391.63225c2.08429,-3.10796 2.38537,-7.07263 0.82523,-10.87854l-152.49532,-371.89731c-2.53865,-6.18855 -7.08905,-6.8564 -8.927,-6.8564s-6.38836,0.66785 -8.927,6.85777l-152.49395,371.89457c-1.56151,3.80592 -1.26043,7.77058 0.82523,10.87854c2.08429,3.10796 5.63976,4.89117 9.75223,4.89117l301.68698,0c4.11384,0.00137 7.66931,-1.78184 9.7536,-4.8898zm-348.62755,-391.63225m221.56249,432.10553l-67.05858,0c-6.03664,0 -10.94834,4.9117 -10.94834,10.94834l0,56.11024c0,6.03664 4.9117,10.94834 10.94834,10.94834l67.05858,0c6.03664,0 10.94834,-4.9117 10.94834,-10.94834l0,-56.11024c0,-6.03664 -4.9117,-10.94834 -10.94834,-10.94834z" stroke="null"></path>\n                  <g class="' + minor_svg + '" stroke="null" transform="rotate(-0.039856404066085815 242.00148010263317,174.1156921386567) ">\n                        <rect transform="rotate(45 462.41668701171875,95.5) " height="100.80909" width="36.95837" y="45.09545" x="443.93749" stroke-width="5" stroke="null"></rect>\n                        <rect stroke="null" transform="rotate(90 380.0000305175781,72.6666412353516) " height="224.91314" width="36.95837" y="-39.78993" x="361.52084" stroke-width="5"></rect>\n                        <rect transform="rotate(135 461.75,49.66668319702148) " height="100.80909" width="36.95837" y="-0.73786" x="443.2708" stroke-width="5" stroke="null"></rect>\n                  </g>\n              </g>\n        </svg>\n       ';
            target_elem.insertAdjacentHTML(relative_position, the_template);
        }
    }, {
        key: 'parkHover',
        value: function parkHover(clear_all_options) {
            var clear_all_defaults = SvgButtons.initSvg(clear_all_options);
            var append_to_id = clear_all_defaults.append_to_id,
                marker_icon_title = clear_all_defaults.marker_icon_title,
                main_color = clear_all_defaults.main_color,
                relative_position = clear_all_defaults.relative_position,
                svg_css = clear_all_defaults.svg_css,
                main_svg = clear_all_defaults.main_svg,
                minor_svg = clear_all_defaults.minor_svg;

            var target_elem = document.getElementById(append_to_id);
            var the_template = ' ' + svg_css + ' \n        <svg width="32" height="32" viewBox=\'0 0 512 512\' xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">\n              <g display="inline" class="' + main_svg + '">\n                  <title>' + marker_icon_title + '</title>\n                  <path fill="' + main_color + '" d="m287.96851,354.81117c-3.8843,-3.83228 -9.12938,-5.97887 -14.57982,-5.97887l-18.36463,0l0,-11.87833l15.41856,0c4.95121,0 8.96693,-4.01481 8.96693,-8.96784l0,-11.73048c0,-4.95212 -4.01572,-8.96784 -8.96693,-8.96784l-15.41856,0l0,-15.3492l15.41856,0c4.95121,0 8.96693,-4.01572 8.96693,-8.96784l0,-11.73139c0,-4.95212 -4.01572,-8.96693 -8.96693,-8.96693l-15.41856,0l0,-11.59814c0,-8.28882 -6.70899,-15.00603 -15.00238,-15.00603s-15.00603,6.71721 -15.00603,15.00603l0,11.59814l-135.05429,0l0,-11.59814c0,-8.28882 -6.70899,-15.00603 -15.00238,-15.00603c-8.2943,0 -15.00603,6.71721 -15.00603,15.00603l0,11.59814l-15.41947,0c-4.95029,0 -8.96601,4.01481 -8.96601,8.96693l0,11.73139c0,4.95212 4.01572,8.96784 8.96601,8.96784l15.41947,0l0,15.3492l-15.41947,0c-4.95029,0 -8.96601,4.01572 -8.96601,8.96784l0,11.73048c0,4.95303 4.01572,8.96784 8.96601,8.96784l15.41947,0l0,11.87833l-18.3765,0c-5.45043,0 -10.69917,2.14659 -14.58255,5.97887l-23.38612,23.06486c-2.58101,2.5509 -3.3723,6.41785 -1.99326,9.78924c1.37538,3.36408 4.65915,5.56086 8.2943,5.56086l20.03025,0l0,37.51416c0,8.28608 6.71174,15.00603 15.00603,15.00603c8.29339,0 15.00603,-6.71995 15.00603,-15.00603l0,-37.51416l195.07203,0l0,37.51416c0,8.28608 6.71174,15.00603 15.00603,15.00603c8.2943,0 15.00603,-6.71995 15.00603,-15.00603l0,-37.51416l20.01656,0c3.63697,0 6.918,-2.19678 8.29795,-5.56086c1.37538,-3.37047 0.58502,-7.23835 -1.99417,-9.78924l-23.38703,-23.06486l-0.00001,0l-0.00001,0zm-198.00715,-62.87347l135.05429,0l0,15.3492l-135.05429,0l0,-15.3492zm0,45.01718l135.05429,0l0,11.87833l-135.05429,0l0,-11.87833zm-1.89104,-336.53047c0,-0.02921 -0.02464,-0.05932 -0.05567,-0.05932l-79.02854,0c-4.95485,0 -8.97149,4.01664 -8.97149,8.96967l0,77.78367c0,0.0429 -0.0146,0.07301 -0.0146,0.14603c0.3678,0 0.73561,0.10313 1.12896,0.10313c48.00616,0 86.94134,-38.9215 86.94134,-86.94317l-0.00001,0l0.00001,-0.00001zm-85.00558,111.73662l0,73.29975c0,6.21433 5.04156,11.25498 11.25407,11.25498c6.21342,0 11.25498,-5.04065 11.25498,-11.25498l0,-73.29975c0,-6.21251 -5.04156,-11.25315 -11.25498,-11.25315c-6.21251,0 -11.25407,5.04065 -11.25407,11.25315zm54.82011,-22.93252c-5.37742,3.10579 -7.22283,9.98546 -4.11976,15.37292l36.66721,63.4959c2.08179,3.61142 5.86295,5.62749 9.7573,5.62749c1.90564,0 3.83958,-0.48371 5.61288,-1.50955c5.38107,-3.10671 7.22648,-9.9882 4.11976,-15.37292l-36.66721,-63.4959c-3.10398,-5.37012 -9.96264,-7.24564 -15.37019,-4.11794l0.00001,0zm36.02013,-16.5311l63.49681,36.66539c1.77239,1.02583 3.70816,1.50955 5.61288,1.50955c3.89525,0 7.67551,-2.01607 9.7573,-5.62749c3.10762,-5.38473 1.26131,-12.26439 -4.11612,-15.37292l-63.49773,-36.66448c-5.39111,-3.12861 -12.28082,-1.25948 -15.37019,4.11976c-3.10762,5.38381 -1.26131,12.26439 4.11703,15.37019l0.00002,0zm18.81641,-47.66939l73.31435,-0.0146c6.21251,0 11.25498,-5.04065 11.25498,-11.25315c0,-6.22072 -5.04247,-11.25498 -11.25498,-11.25498l-73.31435,0.01551c-6.21251,0 -11.25498,5.04065 -11.25498,11.25407c0,6.22072 5.04247,11.25315 11.25498,11.25315zm288.33265,-25.08003c-18.90494,0 -35.22794,23.5723 -43.15443,57.82552c26.31669,9.72353 45.71902,40.48033 47.91763,79.19738c15.16483,8.52064 25.86491,23.51207 29.60136,41.02245c8.60369,-18.8876 13.93639,-44.81823 13.93639,-73.45855c-0.00091,-57.75981 -21.63198,-104.5868 -48.30095,-104.5868zm-15.00694,363.36373c0,4.95212 4.01664,8.96693 8.96693,8.96693l12.07455,0c4.95485,0 8.97058,-4.01481 8.97058,-8.96693l0,-124.6426c-8.3518,7.52492 -18.62475,12.58108 -30.01298,14.25947l0,110.38313l0.00091,0l0.00001,0zm4.80791,-216.61729c0.0146,-0.78307 0.16245,-1.52415 0.16245,-2.31543c0,-41.48608 -22.67242,-75.11686 -50.64741,-75.11686c-27.97043,0 -50.64194,33.63078 -50.64194,75.11686c0,9.75364 1.34892,19.00624 3.63332,27.55608c-12.38395,7.8188 -20.51578,20.75856 -20.51578,35.45702c0,23.89995 21.4102,43.28129 47.83276,43.28129c1.15543,0 2.22599,-0.28749 3.36864,-0.3678l0,113.00613c0,4.95212 4.01572,8.96693 8.96693,8.96693l26.52569,0c4.95121,0 8.96693,-4.01481 8.96693,-8.96693l0,-125.76975c3.02001,0.75386 6.13858,1.25309 9.37855,1.25309c24.34167,0 44.07805,-21.13823 44.07805,-47.20849c0.00091,-21.19664 -13.14146,-38.92789 -31.10817,-44.89215l0,0.00001l-0.00002,0z" stroke="null"></path>\n                  <g class="' + minor_svg + '" stroke="null" transform="rotate(-0.039856404066085815 242.00148010263317,174.1156921386567) ">\n                      <rect stroke-width="5" x="443.93749" y="413.09545" width="36.95837" height="100.80909" transform="rotate(45 462.4166870117186,463.50000000000006)" stroke="null"></rect>\n                      <rect stroke-width="5" x="379.02084" y="345.71007" width="36.95837" height="189.91314" transform="rotate(90 397.5000305175781,440.6666564941407)" stroke="null"></rect>\n                      <rect stroke-width="5" x="443.2708" y="367.26214" width="36.95837" height="100.80909" transform="rotate(135 461.75000000000006,417.6666870117187)"  stroke="null"></rect>\n                  </g>\n              </g>\n        </svg>\n       ';
            target_elem.insertAdjacentHTML(relative_position, the_template);
        }
    }, {
        key: 'waterHover',
        value: function waterHover(clear_all_options) {
            var clear_all_defaults = SvgButtons.initSvg(clear_all_options);
            var append_to_id = clear_all_defaults.append_to_id,
                marker_icon_title = clear_all_defaults.marker_icon_title,
                main_color = clear_all_defaults.main_color,
                relative_position = clear_all_defaults.relative_position,
                svg_css = clear_all_defaults.svg_css,
                main_svg = clear_all_defaults.main_svg,
                minor_svg = clear_all_defaults.minor_svg;

            var target_elem = document.getElementById(append_to_id);
            var the_template = ' ' + svg_css + ' \n        <svg width="32" height="32" viewBox=\'0 0 512 512\' xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">\n              <g display="inline" class="' + main_svg + '">\n                  <title>' + marker_icon_title + '</title>\n                  <path stroke="null" fill="' + main_color + '" d="m -39.42355,256.63632 c 27.42465,0 53.85386,-8.36964 76.04454,-23.57645 2.76368,-1.89398 5.47236,-3.87702 8.09982,-5.98056 2.62485,2.10354 5.33614,4.08659 8.09982,5.98056 22.18806,15.20681 48.61989,23.57645 76.04192,23.57645 27.42203,0 53.85386,-8.36964 76.04454,-23.57645 2.76368,-1.89398 5.47236,-3.87702 8.09982,-5.98056 2.62485,2.10354 5.33614,4.08659 8.09982,5.98056 22.18806,15.20681 48.61989,23.57645 76.04192,23.57645 27.42203,0 53.85386,-8.36964 76.04192,-23.57645 2.76368,-1.89398 5.47236,-3.87702 8.09982,-5.98056 2.62485,2.10354 5.33614,4.08659 8.09982,5.98056 22.19068,15.20681 48.61989,23.57645 76.04454,23.57645 27.42465,0 53.85386,-8.36964 76.04192,-23.57645 2.76368,-1.89398 5.47236,-3.87702 8.09982,-5.98056 2.62485,2.10354 5.33614,4.08659 8.09982,5.98056 22.19068,15.20681 48.61989,23.57645 76.04454,23.57645 13.02206,0 23.57645,-10.55439 23.57645,-23.57645 0,-13.02206 -10.55439,-23.57645 -23.57645,-23.57645 -25.45471,0 -49.61534,-11.08879 -66.28913,-30.4241 -4.47691,-5.19206 -10.99711,-8.18103 -17.85523,-8.18103 -6.85812,0 -13.37571,2.98635 -17.85523,8.18103 -16.66855,19.33269 -40.82918,30.42148 -66.28651,30.42148 -25.45733,0 -49.61534,-11.08879 -66.28913,-30.4241 -4.47691,-5.19206 -10.99711,-8.18103 -17.85523,-8.18103 -6.85813,0 -13.37571,2.98635 -17.85523,8.18103 -16.66855,19.33269 -40.82918,30.42148 -66.28651,30.42148 -25.45733,0 -49.61534,-11.08879 -66.28651,-30.42148 -4.47953,-5.19468 -10.99711,-8.18103 -17.85523,-8.18103 -6.85813,0 -13.37571,2.98635 -17.85523,8.18103 -16.67117,19.33531 -40.8318,30.4241 -66.28913,30.4241 -25.45733,0 -49.61796,-11.08617 -66.28651,-30.41886 -4.47953,-5.19468 -10.99711,-8.18103 -17.85523,-8.18103 -6.85813,0 -13.37571,2.98635 -17.85523,8.18103 -16.67379,19.33531 -40.83442,30.42148 -66.28913,30.42148 -13.02206,0 -23.57645,10.55439 -23.57645,23.57645 0,13.02206 10.55439,23.57645 23.57645,23.57645 z m 725.14179,78.3367 c -25.45471,0 -49.61534,-11.08879 -66.28913,-30.4241 -4.47691,-5.19206 -10.99711,-8.18103 -17.85523,-8.18103 -6.85812,0 -13.37571,2.98635 -17.85523,8.18103 -16.66855,19.33269 -40.82918,30.42148 -66.28651,30.42148 -25.45733,0 -49.61534,-11.08879 -66.28913,-30.4241 -4.47691,-5.19206 -10.99711,-8.18103 -17.85523,-8.18103 -6.85813,0 -13.37571,2.98635 -17.85523,8.18103 -16.66855,19.33269 -40.82918,30.42148 -66.28651,30.42148 -25.45733,0 -49.61534,-11.08879 -66.28651,-30.42148 -4.47953,-5.19468 -10.99711,-8.18103 -17.85523,-8.18103 -6.85813,0 -13.37571,2.98635 -17.85523,8.18103 -16.67117,19.33531 -40.8318,30.4241 -66.28913,30.4241 -25.45733,0 -49.61534,-11.08879 -66.28651,-30.42148 -4.47953,-5.19468 -10.99711,-8.18103 -17.85523,-8.18103 -6.85813,0 -13.37571,2.98635 -17.85523,8.18103 -16.67117,19.33531 -40.8318,30.4241 -66.28651,30.4241 -13.02206,0 -23.57645,10.55439 -23.57645,23.57645 0,13.02206 10.55439,23.57645 23.57645,23.57645 27.42465,0 53.85386,-8.36964 76.04454,-23.57645 2.76368,-1.89398 5.47236,-3.87702 8.09982,-5.98056 2.62485,2.10354 5.33614,4.08659 8.09982,5.98056 22.18806,15.20681 48.61989,23.57645 76.04192,23.57645 27.42203,0 53.85386,-8.36964 76.04454,-23.57645 2.76368,-1.89398 5.47236,-3.87702 8.09982,-5.98056 2.62485,2.10354 5.33614,4.08659 8.09982,5.98056 22.18806,15.20681 48.61989,23.57645 76.04192,23.57645 27.42203,0 53.85386,-8.36964 76.04192,-23.57645 2.76368,-1.89398 5.47236,-3.87702 8.09982,-5.98056 2.62485,2.10354 5.33614,4.08659 8.09982,5.98056 22.19068,15.20681 48.61989,23.57645 76.04454,23.57645 27.42465,0 53.85386,-8.36964 76.04192,-23.57645 2.76368,-1.89398 5.47236,-3.87702 8.09982,-5.98056 2.62485,2.10354 5.33614,4.08659 8.09982,5.98056 22.19068,15.20681 48.61989,23.57645 76.04454,23.57645 13.02206,0 23.57645,-10.55439 23.57645,-23.57645 0,-13.01944 -10.55701,-23.57645 -23.57907,-23.57645 z M 587.05157,460.46 c -25.45471,0 -49.61534,-11.08879 -66.28913,-30.4241 -4.47691,-5.19206 -10.99711,-8.18103 -17.85523,-8.18103 -6.85812,0 -13.37571,2.98635 -17.85523,8.18103 -16.66855,19.33269 -40.82918,30.42148 -66.28651,30.42148 -25.45733,0 -49.61534,-11.08879 -66.28913,-30.4241 -4.47691,-5.19206 -10.99711,-8.18103 -17.85523,-8.18103 -6.85813,0 -13.37571,2.98635 -17.85523,8.18103 -16.66855,19.33269 -40.82918,30.42148 -66.28651,30.42148 -25.45733,0 -49.61534,-11.08879 -66.28651,-30.42148 -4.47953,-5.19468 -10.99711,-8.18103 -17.85523,-8.18103 -6.85813,0 -13.37571,2.98635 -17.85523,8.18103 -16.67117,19.33531 -40.8318,30.4241 -66.28913,30.4241 -25.45733,0 -49.61534,-11.08879 -66.28651,-30.42148 -4.47953,-5.19468 -10.99711,-8.18103 -17.85523,-8.18103 -6.85813,0 -13.37571,2.98635 -17.85523,8.18103 -16.67117,19.33793 -40.8318,30.4241 -66.28651,30.4241 -13.02206,0 -23.57645,10.55439 -23.57645,23.57645 0,13.02206 10.55439,23.57645 23.57645,23.57645 27.42465,0 53.85386,-8.36964 76.04454,-23.57645 2.76368,-1.89398 5.47498,-3.87702 8.09982,-5.98056 2.62485,2.10354 5.33614,4.08659 8.09982,5.98056 22.18806,15.20681 48.61989,23.57645 76.04192,23.57645 27.42203,0 53.85386,-8.36964 76.04454,-23.57645 2.76368,-1.89398 5.47498,-3.87702 8.09982,-5.98056 2.62485,2.10354 5.33614,4.08659 8.09982,5.98056 22.18806,15.20681 48.61989,23.57645 76.04192,23.57645 27.42203,0 53.85386,-8.36964 76.04192,-23.57645 2.76368,-1.89398 5.47236,-3.87702 8.09982,-5.98056 2.62485,2.10354 5.33614,4.08659 8.09982,5.98056 22.18806,15.20681 48.61989,23.57645 76.04454,23.57645 27.42465,0 53.85386,-8.36964 76.04192,-23.57645 2.76368,-1.89398 5.47236,-3.87702 8.09982,-5.98056 2.62485,2.10354 5.33614,4.08659 8.09982,5.98056 22.18806,15.20681 48.61989,23.57645 76.04454,23.57645 13.02206,0 23.57645,-10.55439 23.57645,-23.57645 0,-13.02206 -10.55701,-23.57645 -23.57907,-23.57645 z"/>\n                   <g class="' + minor_svg + '" stroke="null" transform="rotate(-0.039856404066085815 242.00148010263317,174.1156921386567) ">\n                        <rect transform="rotate(45 462.41668701171875,95.5) " height="100.80909" width="36.95837" y="45.09545" x="443.93749" stroke-width="5" stroke="null"></rect>\n                        <rect stroke="null" transform="rotate(90 380.0000305175781,72.6666412353516) " height="224.91314" width="36.95837" y="-39.78993" x="361.52084" stroke-width="5"></rect>\n                        <rect transform="rotate(135 461.75,49.66668319702148) " height="100.80909" width="36.95837" y="-0.73786" x="443.2708" stroke-width="5" stroke="null"></rect>\n                  </g>\n              </g>\n        </svg>\n       ';
            target_elem.insertAdjacentHTML(relative_position, the_template);
        }
    }, {
        key: 'Hover',
        value: function Hover(clear_all_options) {
            var clear_all_defaults = SvgButtons.initSvg(clear_all_options);
            var append_to_id = clear_all_defaults.append_to_id,
                marker_icon_title = clear_all_defaults.marker_icon_title,
                main_color = clear_all_defaults.main_color,
                relative_position = clear_all_defaults.relative_position,
                svg_css = clear_all_defaults.svg_css,
                main_svg = clear_all_defaults.main_svg,
                minor_svg = clear_all_defaults.minor_svg;

            var target_elem = document.getElementById(append_to_id);
            var the_template = ' ' + svg_css + ' \n        <svg width="32" height="32" viewBox=\'0 0 512 512\' xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">\n              <g display="inline" class="' + main_svg + '">\n                  <title>' + marker_icon_title + '</title>\n                  <path stroke="null" fill="' + main_color + '" d="M260,150.168V110h109.271l-27.5-55l27.5-55H230v150.168L2.821,466.145L0,470.167V490h475l15-0.1v-19.833L260,150.168z M260,30h60.729l-12.5,25l12.5,25H260V30z M245,180.695l94.541,131.495l-36.1,24.595L245,296.771l-58.441,40.014l-36.1-24.595 L245,180.695z M44.188,460l88.753-123.444l53.66,36.56L245,333.129l58.399,39.986l53.66-36.56L445.813,460H44.188z"/>\n                   <g class="' + minor_svg + '" stroke="null" transform="rotate(-0.039856404066085815 242.00148010263317,174.1156921386567) ">\n                        <rect transform="rotate(45 462.41668701171875,95.5) " height="100.80909" width="36.95837" y="45.09545" x="443.93749" stroke-width="5" stroke="null"></rect>\n                        <rect stroke="null" transform="rotate(90 380.0000305175781,72.6666412353516) " height="224.91314" width="36.95837" y="-39.78993" x="361.52084" stroke-width="5"></rect>\n                        <rect transform="rotate(135 461.75,49.66668319702148) " height="100.80909" width="36.95837" y="-0.73786" x="443.2708" stroke-width="5" stroke="null"></rect>\n                  </g>\n              </g>\n        </svg>\n       ';
            target_elem.insertAdjacentHTML(relative_position, the_template);
        }
    }]);

    return SvgButton;
}();

SvgButton.unique_class_count = 0;

module.exports = SvgButton;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var skipMethods = {
  'constructor': 1,
  'render': 1,
  'shouldComponentUpdate': 1,
  'componentWillMount': 1,
  'componentDidMount': 1,
  'componentWillReceiveProps': 1,
  'componentWillUpdate': 1,
  'componentDidUpdate': 1,
  'componentWillUnmount': 1
}

function autoBind(object, filter){
  var proto = object.constructor.prototype

  var filterFn = typeof filter == 'function' ?
    filter:
    filter && typeof filter == 'object' ?
      function(key) {
        return !filter[key] && skipMethods[key] !== 1 && typeof proto[key] === 'function'
      }:
      function(key) {
        return skipMethods[key] !== 1 && typeof proto[key] === 'function'
      }

  var names = Object.getOwnPropertyNames(proto).filter(filterFn)

  names.push('setState')
  names.forEach(function(key){
    object[key] = object[key].bind(object)
  })

  return object
}

exports.default = autoBind
module.exports = exports['default']

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = __webpack_require__(1);
var autoBind = __webpack_require__(18);

var ReactClass = function (_React$Component) {
  _inherits(ReactClass, _React$Component);

  function ReactClass(props) {
    _classCallCheck(this, ReactClass);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ReactClass).call(this, props));

    autoBind(_this);
    return _this;
  }

  return ReactClass;
}(React.Component);

exports.default = ReactClass;
exports.autoBind = autoBind;
exports.Component = ReactClass;

/***/ })
/******/ ]);