"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactDom = _interopRequireDefault(require("react-dom"));

var _react = _interopRequireDefault(require("react"));

var _gmapDragdropReact = require("gmap-dragdrop-react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function eventsMap(div_id, events_locations) {
  var event_options = {
    png_marker_location: "/icons/",
    onReady: function onReady(e) {
      var gmap_event = e.gmap_params.gmap_event;
      var container_id = gmap_event._gmapDragDrop_vars.container_id; //console.log(`onReady : in div with id of '${container_id}' is ready`);
    },
    onCenterChanged: function onCenterChanged(e) {
      var _e$gmap_params = e.gmap_params,
          moved_center = _e$gmap_params.moved_center,
          gmap_event = _e$gmap_params.gmap_event; //console.log(`onCenterChanged : at ${moved_center.lat}, ${moved_center.lng}`, gmap_event._object_type);

      return true;
    },
    onZoomChanged: function onZoomChanged(e) {
      var _e$gmap_params2 = e.gmap_params,
          map_zoom = _e$gmap_params2.map_zoom,
          gmap_event = _e$gmap_params2.gmap_event; //console.log(`onZoomChanged : with has a new zoom of ${map_zoom}`, gmap_event._object_type);

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
        var lng = latLng.lng(); //console.log(`onMouseMove (of 1/33) : at ${lat},${lng}  ${pageX},${pageY}`, gmap_event._object_type);
      }
    },
    onDoubleClick: function onDoubleClick(e) {
      var gmap_event = e.gmap_params.gmap_event;
      var latLng = e.latLng,
          pixel = e.pixel;
      var lat = latLng.lat();
      var lng = latLng.lng();
      console.log("onDoubleClick : at ".concat(lat, ",").concat(lng, "  ").concat(pixel.x, ",").concat(pixel.y));
      gmap_event.locationAdd(latLng);
    },
    onAdd: function onAdd(e) {
      var _e$gmap_params3 = e.gmap_params,
          location_data = _e$gmap_params3.location_data,
          gmap_event = _e$gmap_params3.gmap_event;
      console.log("onAdd : with this data", gmap_event._object_type);
      console.dir(location_data);
      return location_data;
    },
    onAfterAdd: function onAfterAdd(e) {
      var _e$gmap_params4 = e.gmap_params,
          location_data = _e$gmap_params4.location_data,
          gmap_event = _e$gmap_params4.gmap_event;
      console.log("onAfterAdd : with this data", gmap_event._object_type);
      console.dir(location_data);
    },
    onRightClick: function onRightClick(e) {
      var gmap_event = e.gmap_params.gmap_event;
      var latLng = e.latLng,
          pixel = e.pixel;
      var lat = latLng.lat();
      var lng = latLng.lng();
      console.log("onRightClick : at ".concat(lat, ",").concat(lng, "  ").concat(pixel.x, ",").concat(pixel.y), gmap_event._object_type);
    },
    onRightClickMarker: function onRightClickMarker(e) {
      var _e$gmap_params5 = e.gmap_params,
          location_id = _e$gmap_params5.location_id,
          gmap_event = _e$gmap_params5.gmap_event;
      var marker_data = gmap_event.locationGet(location_id);
      console.log("onRightClickMarker : with this data");
      console.dir(marker_data);
      gmap_event.locationDelete(location_id);
    },
    onDelete: function onDelete(e) {
      var _e$gmap_params6 = e.gmap_params,
          location_data = _e$gmap_params6.location_data,
          gmap_event = _e$gmap_params6.gmap_event;
      console.log("onDelete : with this data", gmap_event._object_type);
      console.dir(location_data);
      return true;
    },
    onDragStartMarker: function onDragStartMarker(e) {
      var _e$gmap_params7 = e.gmap_params,
          location_data = _e$gmap_params7.location_data,
          gmap_event = _e$gmap_params7.gmap_event;
      location_data.title_text = "onDragStartMarker : " + location_data.title_text;
      console.log("onDragStartMarker : with this data", gmap_event._object_type);
      return location_data;
    },
    onDragMarker: function onDragMarker(e) {
      var _e$gmap_params8 = e.gmap_params,
          start_lat_lng = _e$gmap_params8.start_lat_lng,
          location_id = _e$gmap_params8.location_id,
          page_x = _e$gmap_params8.page_x,
          page_y = _e$gmap_params8.page_y,
          gmap_event = _e$gmap_params8.gmap_event;
      console.log("onDragMarker :", start_lat_lng, location_id, page_x, page_y, gmap_event._object_type);
    },
    onDragEndMarker: function onDragEndMarker(e) {
      var _e$gmap_params9 = e.gmap_params,
          from_location = _e$gmap_params9.from_location,
          gmap_event = _e$gmap_params9.gmap_event;
      console.log("onDragEndMarker : with this data", gmap_event._object_type);
      console.dir(from_location);
    },
    onDragDrop: function onDragDrop(e) {
      var _e$gmap_params10 = e.gmap_params,
          location_data = _e$gmap_params10.location_data,
          gmap_event = _e$gmap_params10.gmap_event;
      console.log("onDragDrop : with this data", gmap_event._object_type);
      console.dir(location_data);

      if (location_data.from_lat === undefined) {
        location_data.title_text = "onDragDrop 0km";
      } else {
        var from_location = {
          lat: location_data.from_lat,
          lng: location_data.from_lng
        };
        var to_location = {
          lat: location_data.lat,
          lng: location_data.lng
        };

        var km_distance = _gmapDragdropReact.KmsDistance.getKms(from_location, to_location);

        location_data.title_text = "onDragDrop ".concat(km_distance);
      }

      return location_data;
    }
  };

  var gmap_events = _reactDom["default"].render( /*#__PURE__*/_react["default"].createElement(_gmapDragdropReact.GmapDragDrop, {
    google_map_key: GLOBAL_WEBPACK.GOOG_MAP_API,
    map_locations: events_locations,
    map_options: event_options
  }), document.getElementById(div_id));

  _reactDom["default"].render( /*#__PURE__*/_react["default"].createElement("img", {
    src: "https://steens-bucket.s3.us-east-2.amazonaws.com/map-icons/black-dot.png"
  }), document.getElementById("black-dot-id"));

  _reactDom["default"].render( /*#__PURE__*/_react["default"].createElement("img", {
    src: "https://steens-bucket.s3.us-east-2.amazonaws.com/map-icons/blue-dot.png"
  }), document.getElementById("blue-dot-id"));

  _reactDom["default"].render( /*#__PURE__*/_react["default"].createElement("img", {
    src: "https://steens-bucket.s3.us-east-2.amazonaws.com/map-icons/circle-dot.png"
  }), document.getElementById("circle-dot-id"));

  _reactDom["default"].render( /*#__PURE__*/_react["default"].createElement("img", {
    src: "https://steens-bucket.s3.us-east-2.amazonaws.com/map-icons/cyan-dot.png"
  }), document.getElementById("cyan-dot-id"));

  _reactDom["default"].render( /*#__PURE__*/_react["default"].createElement("img", {
    src: "https://steens-bucket.s3.us-east-2.amazonaws.com/map-icons/green-dot.png"
  }), document.getElementById("green-dot-id"));

  _reactDom["default"].render( /*#__PURE__*/_react["default"].createElement("img", {
    src: "https://steens-bucket.s3.us-east-2.amazonaws.com/map-icons/grey-dot.png"
  }), document.getElementById("grey-dot-id"));

  _reactDom["default"].render( /*#__PURE__*/_react["default"].createElement("img", {
    src: "https://steens-bucket.s3.us-east-2.amazonaws.com/map-icons/pink-dot.png"
  }), document.getElementById("pink-dot-id"));

  _reactDom["default"].render( /*#__PURE__*/_react["default"].createElement("img", {
    src: "https://steens-bucket.s3.us-east-2.amazonaws.com/map-icons/purple-dot.png"
  }), document.getElementById("purple-dot-id"));

  _reactDom["default"].render( /*#__PURE__*/_react["default"].createElement("img", {
    src: "https://steens-bucket.s3.us-east-2.amazonaws.com/map-icons/rainbow-dot.png"
  }), document.getElementById("rainbow-dot-id"));

  _reactDom["default"].render( /*#__PURE__*/_react["default"].createElement("img", {
    src: "https://steens-bucket.s3.us-east-2.amazonaws.com/map-icons/red-dot.png"
  }), document.getElementById("red-dot-id"));

  _reactDom["default"].render( /*#__PURE__*/_react["default"].createElement("img", {
    src: "https://steens-bucket.s3.us-east-2.amazonaws.com/map-icons/square-dot.png"
  }), document.getElementById("square-dot-id"));

  _reactDom["default"].render( /*#__PURE__*/_react["default"].createElement("img", {
    src: "https://steens-bucket.s3.us-east-2.amazonaws.com/map-icons/stripe-dot.png"
  }), document.getElementById("stripe-dot-id"));

  _reactDom["default"].render( /*#__PURE__*/_react["default"].createElement("img", {
    src: "https://steens-bucket.s3.us-east-2.amazonaws.com/map-icons/transparent-dot.png"
  }), document.getElementById("transparent-dot-id"));

  _reactDom["default"].render( /*#__PURE__*/_react["default"].createElement("img", {
    src: "https://steens-bucket.s3.us-east-2.amazonaws.com/map-icons/yellow-dot.png"
  }), document.getElementById("yellow-dot-id"));

  _reactDom["default"].render( /*#__PURE__*/_react["default"].createElement("img", {
    src: "https://steens-bucket.s3.us-east-2.amazonaws.com/map-icons/see-thru-dot.png"
  }), document.getElementById("see-thru-dot-id"));

  return gmap_events;
}

window.eventsMap = eventsMap;
var _default = eventsMap;
exports["default"] = _default;