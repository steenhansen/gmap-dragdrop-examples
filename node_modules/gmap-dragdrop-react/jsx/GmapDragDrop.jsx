import ReactDOM from "react-dom";

//import React, {PropTypes} from 'react'
import React from "react";
import PropTypes from "prop-types"; // ES6
import KmsDistance from "./KmsDistance.js"; //GmapKms
import Component from "react-class";

// _not_use_strict_ie_gmapDragDrop() was copied from https://github.com/MihaiValentin/setDragImage-IE

function _not_use_strict_ie_gmapDragDrop(drag_image) {
  const ie_drag_css_class_name = IE_DRAG_CSS_CLASS_NAME;
  const ie_drag_pixels = IE_DRAG_PIXELS;
  const no_indent_ie_drag_css = `
.${ie_drag_css_class_name} {
background: url(${drag_image.src}) no-repeat #fff 0 0 !important;
width: ${ie_drag_pixels}px !important;
height: 20px !important;
text-indent: -9999px !important;
border: 0 !important;
outline: 0 !important;}
.${ie_drag_css_class_name} * {
display: none !important; }`;
  let ie_drag_styles = document.createElement("style");
  ie_drag_styles.innerText = no_indent_ie_drag_css;
  let ie_drag_style_element = document.getElementById(IE_DRAG_STYLE_ID_NAME);
  ie_drag_style_element.appendChild(ie_drag_styles);
  let ie_event_target = GmapDragDrop._getIeDragTarget();
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

const GMAP_DRAG_DROP_TYPE = "GmapDragDrop";

const PIN_TEXT_START = 0.8;
const PIN_SVG_H_W = 512;
const FIT_BOUNDS_PADDING = 100;
const IE_DRAG_PIXELS = 5;

const IE_DRAG_TOP_TIP_COLOR = "rgb(200,0,0)";

const GMAP_REACT_CONTAINER = "react__div_";
const GMAP_CONTAINER = "google__div_";
const DRAG_DIV_PREFIX = "gmap_drag__div_";
const IE_SVG_PREFIX = "gmap_drag__ie_";

const IE_DRAG_CSS_CLASS_NAME = "set-drag-image-ie--dragging-";
const IE_DRAG_STYLE_ID_NAME = "ie_drag_style__id_";
const IE_DRAG_DIV_ID_NAME = "ie_drag_div__id_";

const USE_SVG_ID = "use_svg__id_";
const USE_SYMBOL_ID = "svg_path_symbol__id_";
const DRAG_CANVAS_ID = "drag_canvas__id_";

const INSIDE_TO_INSIDE_MOVE = "INSIDE_TO_INSIDE_MOVE";

const ALLOWABLE_MARKER_DRIFT = 15;
const RIGHT_CLICK_BUTTON = 2;

const DRAG_FONT_HEIGHT = 10;
const DRAG_FONT = "Verdana";
const DRAG_FONT_RGBA = "rgba(0, 0, 0, 0.99)";

const GOOGLE_MAPS_API = "https://maps.googleapis.com/maps/api/js?key=";

const VERTICAL_PAN_FOR_MAP_REDRAW = 100000;
const HIDE_IE_DRAG_IMAGE = "-8888px";

const H_W_100_REL_STYLE = {
  position: "relative",
  height: "100%",
  width: "100%",
};
const DRAG_OVERLAY_STYLE = {
  position: "absolute",
  width: "100%",
  height: "100%",
  left: 0,
  top: 0,
  display: "none",
  cursor: "url(ie_drag_drop.cur),auto", //http://www.cursor.cc/?
};
const PIN_SVG_DEFAULT =
  "m255.5,511.07425c-17.90024,-179.00239 -89.5012,-196.90263 -89.5012,-268.50359a89.5012,89.5012 0 1 1 179.00239,0c0,71.60096 -71.60096,89.5012 -89.5012,268.50359l0.00001,0zm-17.90024,-268.50359a17.90024,17.90024 0 1 1 35.80048,0a17.90024,17.90024 0 1 1 -35.80048,0";

const DEFAULT_PNG_COLOR = "red";
const PNG_PIN_COLORS = {
  blue: "#6991FD",
  red: "#FD7567",
  purple: "#8E67FD",
  yellow: "#FEFC6C",
  green: "#00E64D",
};

const PNG_COLOR_NAMES = [
  "black",
  "blue",
  "circle",
  "cyan",
  "green",
  "grey",
  "pink",
  "purple",
  "rainbow",
  "red",
  "see-thru",
  "square",
  "stripe",
  "transparent",
  "yellow",
];

class GmapDragDrop extends Component {
  // auto	"use strict"

  static _map_count = 0;
  static _waiting_for_init = [];
  static _ie_drag_target = "";
  static _google_script_element = "";

  _gmapDragDrop_vars = {
    current_page_x: 0,
    current_page_y: 0,
    last_marker_x: 0,
    last_marker_y: 0,
    center_lat_lng: { lat: 0, lng: 0 },
    drag_start_pos: { lat: 0, lng: 0 },
    dragging_location_id: 0,
    am_dragging: false,
    mouse_is_up: true,
    container_id: "parent_id",
    map_number: 0,
    browser_zoom_level: 1,
    location_markers: {}, // google map markers
    location_info_windows: {}, // google map info windows
    location_lat_lngs: {}, // locations
    location_datas: {}, // original constructor data
  };

  static browserFactory(container_id, gmap_properties) {
    const gmap_component = React.createElement(GmapDragDrop, gmap_properties);
    const gmap_element = document.getElementById(container_id);
    let factory_gmap = ReactDOM.render(gmap_component, gmap_element);
    return factory_gmap;
  }

  static browserDestroy(factory_gmap) {
    factory_gmap.locationsClearAll();
    let load_script_element = GmapDragDrop._google_script_element;
    load_script_element.removeEventListener("load", this._initAllMaps, false);
    const container_id = factory_gmap._gmapDragDrop_vars.container_id;
    const gmap_element = document.getElementById(container_id);
    ReactDOM.unmountComponentAtNode(gmap_element);
  }

  static validLatLng(lat_lng_obj) {
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

  static _getIeDragTarget() {
    return GmapDragDrop._ie_drag_target;
  }

  _canvasPin(json_parameters) {
    let pin_svg_path;
    let { pin_color, title_text, content_text, marker_svg } = json_parameters;
    let pin_scale = this.state.map_options.pin_scale;
    let canvas_element = document.getElementById(DRAG_CANVAS_ID);
    let context = canvas_element.getContext("2d");
    context.fillStyle = DRAG_FONT_RGBA;
    context.font = DRAG_FONT_HEIGHT + "px " + DRAG_FONT;
    let title_clean = title_text.replace(/<[^>]+>/g, "");
    if (title_clean === "") {
      title_clean = content_text.replace(/<[^>]+>/g, "");
    }
    const text = context.measureText(title_clean);
    const text_width = text.width;
    canvas_element.width =
      PIN_SVG_H_W * pin_scale * PIN_TEXT_START + text_width;
    canvas_element.height = PIN_SVG_H_W * pin_scale;
    context.clearRect(0, 0, canvas_element.width, canvas_element.height);
    if (title_clean) {
      const text_start_x = PIN_SVG_H_W * pin_scale * PIN_TEXT_START;
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

  _onDragStart_react(drag_event) {
    let start_lat_lng = this._gmapDragDrop_vars.drag_start_pos;
    const location_id = this._locationIdForLatLng(start_lat_lng);
    if (location_id) {
      const json_parameters = this._makeDragParameters(location_id, drag_event);
      const canvas_element = this._canvasPin(json_parameters);
      const pin_scale = this.state.map_options.pin_scale;
      const browser_zoom_level = window.devicePixelRatio;
      const pin_size = PIN_SVG_H_W * pin_scale;
      const x_offset = ((browser_zoom_level - 1) * pin_size) / 2;
      const y_offset = (browser_zoom_level - 1) * pin_size;
      const drag_x = pin_size / 2 + x_offset;
      const drag_y = pin_size + y_offset;
      drag_event.dataTransfer.setDragImage(canvas_element, drag_x, drag_y);
    } else {
      drag_event.preventDefault();
    }
  }

  _startIePreload() {
    let canvas_element = document.getElementById(DRAG_CANVAS_ID);
    if (typeof canvas_element.msToBlob === "function") {
      let context = canvas_element.getContext("2d");
      context.fillStyle = IE_DRAG_TOP_TIP_COLOR;
      context.fillRect(0, 0, IE_DRAG_PIXELS, IE_DRAG_PIXELS);
      var blob = canvas_element.msToBlob();
      var newImg = document.createElement("img");
      var url = URL.createObjectURL(blob);
      newImg.onload = function () {
        let div_element = document.getElementById(IE_DRAG_DIV_ID_NAME);
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

  newRandomColor() {
    let have_unique_color, random_color;
    do {
      random_color = "#" + Math.floor(Math.random() * 16777215).toString(16);
      have_unique_color = true;
      for (let a_location_id in this._gmapDragDrop_vars.location_datas) {
        const pin_color =
          this._gmapDragDrop_vars.location_datas[a_location_id].pin_color;
        if (random_color === pin_color) {
          have_unique_color = false;
        }
      }
    } while (!have_unique_color);
    return random_color;
  }

  labelInput(location_id, text_label, gmap_var_name, input_id) {
    let label_input = `${text_label}:<input 
                                        id="${input_id}"
										type="text" 
										data-location_id=${location_id}
										onkeypress =" if(event.keyCode === 13){
														event.preventDefault();
														let location_id = this.dataset.location_id;
														let location_change = ${gmap_var_name}.locationGet(location_id)
														location_change.content_text =  this.value
														location_change.title_text = ''
														${gmap_var_name}.locationModifyDirect(location_change)
													} "
									/>`;
    return label_input;
  }

  _latLngDrop(drop_event) {
    const scrolled_y =
      document.documentElement.scrollTop || document.body.scrollTop;
    const scrolled_x =
      document.documentElement.scrollLeft || document.body.scrollLeft;
    const map_div = document.getElementById(this.state.GOOGLE_DIV_ID);
    const viewportOffset = map_div.getBoundingClientRect();
    let marker_pos_x = drop_event.pageX - viewportOffset.left - scrolled_x;
    let marker_pos_y = drop_event.pageY - viewportOffset.top - scrolled_y;
    if (
      DataTransfer.prototype.setDragImage === _not_use_strict_ie_gmapDragDrop
    ) {
      marker_pos_y = marker_pos_y - IE_DRAG_PIXELS;
    }
    let lat_lng_func = this._convertXyToLatLng({
      x: marker_pos_x,
      y: marker_pos_y,
    });
    let lat_lng_obj = this._latLngToObj(lat_lng_func);
    return lat_lng_obj;
  }

  _convertXyToLatLng(mouse_pos) {
    const google_map = this.state.map_options.google_map;
    const top_right = google_map
      .getProjection()
      .fromLatLngToPoint(google_map.getBounds().getNorthEast());
    const bottom_left = google_map
      .getProjection()
      .fromLatLngToPoint(google_map.getBounds().getSouthWest());
    const map_scale = Math.pow(2, google_map.getZoom());
    const world_point = new google.maps.Point(
      mouse_pos.x / map_scale + bottom_left.x,
      mouse_pos.y / map_scale + top_right.y
    );
    const lat_lng_func = google_map
      .getProjection()
      .fromPointToLatLng(world_point);
    if (isNaN(lat_lng_func.lat())) {
      lat_lng_func.lat = 0;
      lat_lng_func.lng = 0;
    }
    return lat_lng_func;
  }

  _makeDragParameters(location_id, drag_event) {
    let location_data = Object.assign(
      {},
      this._gmapDragDrop_vars.location_datas[location_id],
      { from_id: this._gmapDragDrop_vars.container_id }
    );
    if (this.state.map_options.onDragStartMarker !== undefined) {
      const event_parameters = this._eventParameters(
        "location_data",
        location_data
      );
      let extended_event = Object.assign({}, drag_event, event_parameters);
      location_data = this.state.map_options.onDragStartMarker(extended_event);
    }
    const json_string = JSON.stringify(location_data);
    drag_event.dataTransfer.setData("text", json_string);
    this._gmapDragDrop_vars.drag_location = location_data;
    return location_data;
  }

  _onDragEnd_react(drag_event) {
    let from_location = this._gmapDragDrop_vars.drag_location;
    this._hideIeImageDrag();
    if (this.state.map_options.onDragEndMarker !== undefined) {
      const event_parameters = this._eventParameters(
        "from_location",
        from_location
      );
      let extended_event = Object.assign({}, drag_event, event_parameters);
      this.state.map_options.onDragEndMarker(extended_event);
    }
  }

  _checkLatLng(marker_data, dropped_at_lat_lng) {
    if (!Array.isArray(marker_data)) {
      marker_data.from_lat = marker_data.lat;
      marker_data.from_lng = marker_data.lng;
    }
    marker_data.lat = dropped_at_lat_lng.lat;
    marker_data.lng = dropped_at_lat_lng.lng;
  }

  _onDropOnMap_react(drop_event) {
    drop_event.preventDefault();
    const text_data = drop_event.dataTransfer.getData("text");
    if (text_data) {
      let dropped_at_lat_lng = this._latLngDrop(drop_event);
      const trim_data = text_data.trim();
      try {
        try {
          var marker_data = JSON.parse(trim_data);
        } catch (e) {
          throw (
            e.message + '. "' + trim_data + '"" is not a valid JSON location'
          );
        }
        const location_id = marker_data.location_id;
        this._checkLatLng(marker_data, dropped_at_lat_lng);
        if (this.state.map_options.onDragDrop !== undefined) {
          let event_parameters = this._eventParameters(
            "location_data",
            marker_data
          );
          let extended_event = Object.assign({}, drop_event, event_parameters);
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

  getMap() {
    let google_map = this.state.map_options.google_map;
    return google_map;
  }

  filterByProperty(property_name) {
    let matching_locations = [];
    for (let location_index in this._gmapDragDrop_vars.location_datas) {
      const a_location = this._gmapDragDrop_vars.location_datas[location_index];
      if (a_location[property_name] !== undefined) {
        matching_locations.push(a_location);
      }
    }
    return matching_locations;
  }

  filterByUndefProperty(property_name) {
    let matching_locations = [];
    for (let location_index in this._gmapDragDrop_vars.location_datas) {
      const a_location = this._gmapDragDrop_vars.location_datas[location_index];
      if (a_location[property_name] === undefined) {
        matching_locations.push(a_location);
      }
    }
    return matching_locations;
  }

  filterByPropertyValue(property_name, property_value) {
    let matching_locations = [];
    for (let location_index in this._gmapDragDrop_vars.location_datas) {
      const a_location = this._gmapDragDrop_vars.location_datas[location_index];
      if (a_location[property_name] !== undefined) {
        if (a_location[property_name] === property_value) {
          matching_locations.push(a_location);
        }
      }
    }
    return matching_locations;
  }

  _onStartIeDrag(drag_event) {
    let start_lat_lng = this._gmapDragDrop_vars.drag_start_pos;
    const location_id = this._locationIdForLatLng(start_lat_lng);
    if (location_id) {
      this._makeDragParameters(location_id, drag_event);
      GmapDragDrop._ie_drag_target = drag_event.target;
      let ie_drag_image = document.getElementById("_ie_pre_load_drag_image");
      drag_event.dataTransfer.setDragImage(ie_drag_image);
    } else {
      drag_event.preventDefault();
    }
  }

  _canvasSvg() {
    const canvas_to_draw_on = document.getElementById(DRAG_CANVAS_ID);
    if (canvas_to_draw_on === null) {
      const canvas_style = "position:fixed; left:-9999px; top:-9999px";
      const canvas_elem = ` <canvas
								id="${DRAG_CANVAS_ID}" style="${canvas_style}"></canvas>`;
      window.document.body.insertAdjacentHTML("beforeend", canvas_elem);
    }
  }

  _ieCssStyle() {
    const ie_drag_style_id = IE_DRAG_STYLE_ID_NAME;
    const ie_drag_image_id = IE_DRAG_DIV_ID_NAME;
    const canvas_to_draw_on = document.getElementById(ie_drag_style_id);
    if (canvas_to_draw_on === null) {
      const canvas_elem = ` <div id=${ie_drag_style_id}></div>
				                  <div id=${ie_drag_image_id}></div> `;
      window.document.body.insertAdjacentHTML("beforeend", canvas_elem);
    }
  }

  componentDidMount() {
    this._ieCssStyle();
    this._addSvgToBody();
    this._canvasSvg();
    this._gmapDragDrop_vars.container_id =
      ReactDOM.findDOMNode(this).parentNode.getAttribute("id");
    this._lazyReactGoogleMap();
  }

  _lazyReactGoogleMap() {
    const init_gmap_func = this._initGmap();
    if (this._isGoogleMapsReady()) {
      init_gmap_func();
    } else {
      this._pushInitMap(init_gmap_func);
      if (this._isFirstInitialization()) {
        this._startIePreload();
        let load_script_element = document.createElement("script");
        load_script_element.src = GOOGLE_MAPS_API + this.props.google_map_key;
        load_script_element.addEventListener("load", this._initAllMaps, false);
        document.body.appendChild(load_script_element);
        GmapDragDrop._google_script_element = load_script_element;
      }
    }
  }

  _initGmap() {
    const map_element = document.getElementById(this.state.GOOGLE_DIV_ID);
    this._gmapDragDrop_vars.center_lat_lng = this.centerMap();
    let {
      scroll_wheel,
      gestureHandling,
      init_zoom,
      map_type,
      street_view,
      zoom_control,
      map_type_control,
      map_styles,
    } = this.state.map_options;
    const self = this;
    const init_gmap_func = function () {
      let google_map = new google.maps.Map(map_element, {
        center: self._gmapDragDrop_vars.center_lat_lng,
        disableDoubleClickZoom: true,
        scrollwheel: scroll_wheel,
        gestureHandling: gestureHandling,
        zoom: init_zoom,
        mapTypeId: map_type,
        streetViewControl: street_view,
        zoomControl: zoom_control,
        mapTypeControl: map_type_control,
        styles: map_styles,
      });
      self.state.map_options.google_map = google_map;
      self._gmapDragDrop_vars.previous_zoom = google_map.getZoom();
      for (let partial_map_location of self._gmapDragDrop_vars.map_positions) {
        self._placeMarker(partial_map_location);
      }
      self._googleEvents();
    };
    return init_gmap_func;
  }

  _ieDragDiv() {
    return (
      <div
        id={this.state.DRAG_DIV_ID}
        draggable="true"
        onDragStart={this._onStartIeDrag}
        onDragEnd={this._onDragEnd_Overlay}
        onMouseMove={this._onMouseMoveOverlay}
        onContextMenu={this._onMouseDownOverlay}
        onMouseDown={this._onMouseDownOverlay}
        style={DRAG_OVERLAY_STYLE}
      ></div>
    );
  }

  _normalDragDiv() {
    return (
      <div
        id={this.state.DRAG_DIV_ID}
        draggable="true"
        onDragStart={this._onDragStart_react}
        onDragEnd={this._onDragEnd_Overlay}
        onMouseMove={this._onMouseMoveOverlay}
        onContextMenu={this._onMouseDownOverlay}
        onMouseDown={this._onMouseDownOverlay}
        style={DRAG_OVERLAY_STYLE}
      ></div>
    );
  }

  render() {
    if (
      DataTransfer.prototype.setDragImage === _not_use_strict_ie_gmapDragDrop
    ) {
      var start_drag_function = this._ieDragDiv();
    } else {
      var start_drag_function = this._normalDragDiv();
    }
    const canvas_ie_svg = this._canvasIeSvg();
    return (
      <div
        id={this.state.REACT_DIV_ID}
        onDrop={this._onDropOnMap_react}
        onDragOver={this._onDragOver_react}
        onDragEnd={this._onDragEnd_react}
        onMouseMove={this._onMouseMove_react}
        onMouseDown={this._onMouseDown_react}
        onMouseUp={this._onMouseUp_react}
        style={H_W_100_REL_STYLE}
      >
        <div id={this.state.GOOGLE_DIV_ID} style={H_W_100_REL_STYLE}></div>
        {start_drag_function}
        {canvas_ie_svg}
      </div>
    );
  }

  constructor(props) {
    super(props);
    this._gmapDragDrop_vars.map_positions = this.props.map_locations;
    this._object_type = GMAP_DRAG_DROP_TYPE;
    this._gmapDragDrop_vars.browser_zoom_level = window.devicePixelRatio;
    this._gmapDragDrop_vars.on_ready_fired = false;
    GmapDragDrop._map_count++;
    this._gmapDragDrop_vars.map_number = GmapDragDrop._map_count;
    let map_options = Object.assign(
      {},
      this.props.map_defaults,
      this.props.map_options
    );
    this.state = {
      REACT_DIV_ID: GMAP_REACT_CONTAINER + GmapDragDrop._map_count,
      GOOGLE_DIV_ID: GMAP_CONTAINER + GmapDragDrop._map_count,
      DRAG_DIV_ID: DRAG_DIV_PREFIX + GmapDragDrop._map_count,
      IE_SVG_DRAG: IE_SVG_PREFIX + GmapDragDrop._map_count,
      map_options: map_options,
    };
  }

  _canvasIeSvg() {
    const ie_drag_image_id = this.state.IE_SVG_DRAG;
    const view_box = "0 0 " + PIN_SVG_H_W + " " + PIN_SVG_H_W;
    const symbol_id = "#" + USE_SYMBOL_ID;
    const ie_drag_pin_width =
      PIN_SVG_H_W * this.state.map_options.pin_scale + "px";
    const svg_style = {
      position: "fixed",
      zIndex: 0,
      left: HIDE_IE_DRAG_IMAGE,
      top: HIDE_IE_DRAG_IMAGE,
      width: ie_drag_pin_width,
      height: ie_drag_pin_width,
    };
    let ie_drag_svg = (
      <div>
        <svg
          viewBox={view_box}
          preserveAspectRatio={"xMinYMin"}
          id={ie_drag_image_id}
          style={svg_style}
        >
          <use xlinkHref={symbol_id} x={0} y={0} />
        </svg>
      </div>
    );
    return ie_drag_svg;
  }

  _stopDragging() {
    this._gmapDragDrop_vars.am_dragging = false;
    let start_drag_div = document.getElementById(this.state.DRAG_DIV_ID);
    start_drag_div.style.display = "none";
  }

  _onMouseMoveOverlay(event) {
    /// drag 2
    if (this._gmapDragDrop_vars.mouse_is_up) {
      const mouse_out_x = Math.abs(
        this._gmapDragDrop_vars.last_marker_x - event.pageX
      );
      const mouse_out_y = Math.abs(
        this._gmapDragDrop_vars.last_marker_y - event.pageY
      );
      if (
        mouse_out_x > ALLOWABLE_MARKER_DRIFT ||
        mouse_out_y > ALLOWABLE_MARKER_DRIFT
      ) {
        this._stopDragging();
      }
    }
  }

  _addSvgToBody() {
    const svg_id = USE_SVG_ID;
    const svg_symbol_id = USE_SYMBOL_ID;
    const svg_pin = document.getElementById(svg_id);
    if (this.state.map_options.pin_svg) {
      const pin_svg = this.state.map_options.pin_svg;
      if (svg_pin === null) {
        const svg_path_symbol = `<svg style="height:0;" id="${svg_id}">
								<symbol id="${svg_symbol_id}">
									<path fill="#000" d="${pin_svg}" style="fill:inherit" />
								</symbol>
							</svg>`;
        window.document.body.insertAdjacentHTML("beforeend", svg_path_symbol);
      }
    }
  }

  _onDragOver_react(drag_event) {
    if (this._gmapDragDrop_vars.am_dragging) {
      drag_event.preventDefault();
      let start_lat_lng = this._gmapDragDrop_vars.drag_start_pos;
      const location_id = this._locationIdForLatLng(start_lat_lng);
      this._gmapDragDrop_vars.dragging_location_id = location_id;
      if (this.state.map_options.onDragMarker !== undefined) {
        const event_parameters = this._eventParameters(
          "start_lat_lng",
          start_lat_lng,
          "location_id",
          location_id,
          "page_x",
          drag_event.pageX,
          "page_y",
          drag_event.pageY
        );
        let extended_event = Object.assign({}, drag_event, event_parameters);
        this.state.map_options.onDragMarker(extended_event);
      }
    } else {
      this._onDropOnMap_react(drag_event);
    }
  }

  _hideIeImageDrag() {
    let ie_drag_image = document.getElementById(this.state.IE_SVG_DRAG);
    ie_drag_image.style.left = HIDE_IE_DRAG_IMAGE;
    ie_drag_image.style.top = HIDE_IE_DRAG_IMAGE;
  }

  _onMouseUp_react() {
    this._gmapDragDrop_vars.mouse_is_up = true;
    this._hideIeImageDrag();
  }

  _onMouseLeftDownOverlay(event) {
    /// drag 3
    const mouse_out_x = Math.abs(
      this._gmapDragDrop_vars.last_marker_x - event.pageX
    );
    const mouse_out_y = Math.abs(
      this._gmapDragDrop_vars.last_marker_y - event.pageY
    );
    if (
      mouse_out_x < ALLOWABLE_MARKER_DRIFT &&
      mouse_out_y < ALLOWABLE_MARKER_DRIFT
    ) {
      this._gmapDragDrop_vars.am_dragging = true;
    } else {
      this._gmapDragDrop_vars.am_dragging = false;
    }
  }

  _mouseOverMarker_googleListener(map_marker, lat_lng_obj) {
    /// drag 1
    let self = this;
    map_marker.addListener("mouseover", function (e_ignored) {
      if (self._gmapDragDrop_vars.mouse_is_up) {
        let start_drag_div = document.getElementById(self.state.DRAG_DIV_ID);
        start_drag_div.style.display = "inline";
        self._gmapDragDrop_vars.last_marker_x =
          self._gmapDragDrop_vars.current_page_x;
        self._gmapDragDrop_vars.last_marker_y =
          self._gmapDragDrop_vars.current_page_y;
        self._gmapDragDrop_vars.drag_start_pos = lat_lng_obj;
      }
    });
  }

  startDragFromOutside(json_parameters) {
    const json_string = JSON.stringify(json_parameters);
    let outside_drag_start = function (start_drag_event) {
      start_drag_event.dataTransfer.setData("text", json_string);
    };
    return outside_drag_start;
  }

  _onMouseDown_react() {
    this._gmapDragDrop_vars.mouse_is_up = false;
  }

  _onMouseMove_react(event) {
    if (this._gmapDragDrop_vars.mouse_is_up) {
      this._gmapDragDrop_vars.am_dragging = false;
    } else {
    }
    this._gmapDragDrop_vars.current_page_x = event.pageX;
    this._gmapDragDrop_vars.current_page_y = event.pageY;
    if (
      this._gmapDragDrop_vars.browser_zoom_level !== window.devicePixelRatio
    ) {
      this._browserResizeReDraw();
    }
  }

  _onDragEnd_Overlay(e_ignored) {
    this._stopDragging();
    this._gmapDragDrop_vars.mouse_is_up = true;
  }

  _onMouseRightDownOverlay(event) {
    event.preventDefault();
    if (this.state.map_options.onRightClickMarker !== undefined) {
      let start_lat_lng = this._gmapDragDrop_vars.drag_start_pos;
      const location_id = this._locationIdForLatLng(start_lat_lng);
      if (location_id) {
        const event_parameters = this._eventParameters(
          "location_id",
          location_id
        );
        let extended_event = Object.assign({}, event, event_parameters);
        this.state.map_options.onRightClickMarker(extended_event);
      }
    }
  }

  _onMouseDownOverlay(event) {
    if (event.button === RIGHT_CLICK_BUTTON) {
      this._onMouseRightDownOverlay(event);
    } else {
      this._onMouseLeftDownOverlay(event);
    }
  }

  _browserResizeReDraw() {
    this._gmapDragDrop_vars.browser_zoom_level = window.devicePixelRatio;
    const google_map = this.state.map_options.google_map;
    google_map.panBy(VERTICAL_PAN_FOR_MAP_REDRAW, VERTICAL_PAN_FOR_MAP_REDRAW);
    google_map.panBy(
      -VERTICAL_PAN_FOR_MAP_REDRAW,
      -VERTICAL_PAN_FOR_MAP_REDRAW
    );
  }

  numberLocations() {
    const location_lat_lngs = this._gmapDragDrop_vars.location_lat_lngs;
    const number_locations = Object.keys(location_lat_lngs).length;
    return number_locations;
  }

  centerMap() {
    let lat_center = this.state.map_options.lat_center;
    let lng_center = this.state.map_options.lng_center;
    if (lat_center === undefined || lng_center === undefined) {
      let lat_center_accum = 0;
      let lng_center_accum = 0;
      for (let marker_info of this._gmapDragDrop_vars.map_positions) {
        let { lat, lng } = marker_info;
        lat_center_accum += lat;
        lng_center_accum += lng;
      }
      let number_markers = this._gmapDragDrop_vars.map_positions.length;
      lat_center = lat_center_accum / number_markers;
      lng_center = lng_center_accum / number_markers;
    }
    const lat_lng_center = { lat: lat_center, lng: lng_center };
    return lat_lng_center;
  }

  _pushInitMap(init_gmap_func) {
    GmapDragDrop._waiting_for_init.push(init_gmap_func);
  }

  _isFirstInitialization() {
    if (GmapDragDrop._waiting_for_init.length === 1) {
      return true;
    } else {
      return false;
    }
  }

  _isGoogleMapsReady() {
    if (typeof google === "undefined") {
      return false;
    } else {
      return true;
    }
  }

  _initAllMaps() {
    let init_gmap_func = GmapDragDrop._waiting_for_init.pop();
    while (init_gmap_func) {
      init_gmap_func();
      init_gmap_func = GmapDragDrop._waiting_for_init.pop();
    }
  }

  _googleEvents() {
    const google_map = this.state.map_options.google_map;
    google_map.addListener("dblclick", this._onDoubleClick_googleListener);
    google_map.addListener("rightclick", this._onRightClick_googleListener);
    google_map.addListener("mousemove", this._onMouseMove_googleListener);
    google_map.addListener("zoom_changed", this._onZoomChanged_googleListener);
    google_map.addListener(
      "center_changed",
      this._onCenterChanged_googleListener
    );
    google_map.addListener("idle", this._onIdle_googleListener);
  }

  reCenter(map_center) {
    this._gmapDragDrop_vars.center_lat_lng = map_center;
    const google_map = this.state.map_options.google_map;
    google_map.panTo(this._gmapDragDrop_vars.center_lat_lng);
  }

  _onRightClick_googleListener(event) {
    if (this.state.map_options.onRightClick !== undefined) {
      const event_parameters = this._eventParameters();
      const extended_event = Object.assign({}, event, event_parameters);
      this.state.map_options.onRightClick(extended_event);
    }
  }

  _eventParameters(...parameter_name_values) {
    const event_parameters = {
      gmap_params: {
        gmap_event: this,
      },
    };
    while (parameter_name_values.length > 0) {
      const parameter_name = parameter_name_values.shift();
      const parameter_value = parameter_name_values.shift();
      event_parameters.gmap_params[parameter_name] = parameter_value;
    }
    return event_parameters;
  }

  _equalLatLngObj(lat_lan_obj_a, lat_lan_obj_b) {
    if (lat_lan_obj_a.lat !== lat_lan_obj_b.lat) {
      return false;
    } else if (lat_lan_obj_a.lng !== lat_lan_obj_b.lng) {
      return false;
    }
    return true;
  }

  _locationIdForLatLng(lat_lng_obj) {
    let lat_lng_locations = this._gmapDragDrop_vars.location_lat_lngs;
    for (const location_id in lat_lng_locations) {
      const a_lat_lng_location = lat_lng_locations[location_id];
      if (this._equalLatLngObj(lat_lng_obj, a_lat_lng_location)) {
        return location_id;
      }
    }
    return false;
  }

  _onDoubleClick_googleListener(event) {
    if (this.state.map_options.onDoubleClick !== undefined) {
      const event_parameters = this._eventParameters();
      const extended_event = Object.assign({}, event, event_parameters);
      this.state.map_options.onDoubleClick(extended_event);
    }
  }

  _latLngToObj(str_array_obj_funcs) {
    let lat_value, lng_value;
    if (typeof str_array_obj_funcs === "string") {
      let string_arr = str_array_obj_funcs.split(",");
      let lat_str = string_arr.shift();
      let lng_str = string_arr.shift();
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
    const lat_number = Number(lat_value);
    const lng_number = Number(lng_value);
    const lat_lng = { lat: lat_number, lng: lng_number };
    if (!GmapDragDrop.validLatLng(lat_lng)) {
      throw new Error("Invalid lat/lng =" + lat_number + "/" + lng_number);
    }
    return lat_lng;
  }

  _removeLocation(location_id) {
    let info_window =
      this._gmapDragDrop_vars.location_info_windows[location_id];
    if (info_window !== null) {
      info_window.close();
    }
    let map_marker = this._gmapDragDrop_vars.location_markers[location_id];
    if (map_marker !== undefined) {
      map_marker.setMap(null);
    }
    delete this._gmapDragDrop_vars.location_info_windows[location_id];
    delete this._gmapDragDrop_vars.location_markers[location_id];
    delete this._gmapDragDrop_vars.location_lat_lngs[location_id];
    delete this._gmapDragDrop_vars.location_datas[location_id];
  }

  locationDelete(location_id, moving_marker = "") {
    let delete_location_data =
      this._gmapDragDrop_vars.location_datas[location_id];
    if (
      delete_location_data.can_delete ||
      moving_marker === INSIDE_TO_INSIDE_MOVE
    ) {
      let delete_confirm = true;
      if (this.state.map_options.onDelete !== undefined) {
        const event_parameters = this._eventParameters(
          "location_data",
          delete_location_data
        );
        delete_confirm = this.state.map_options.onDelete(event_parameters);
      }
      if (delete_confirm !== false) {
        this._removeLocation(location_id);
      }
    } else {
      alert(` Cannot Delete '${location_id}' `);
    }
  }

  locationExists(location_id) {
    if (location_id in this._gmapDragDrop_vars.location_lat_lngs) {
      return true;
    } else {
      return false;
    }
  }

  locationsShowInfoAll() {
    for (let location_id in this._gmapDragDrop_vars.location_lat_lngs) {
      this.locationShowInfo(location_id);
    }
  }

  locationsHideInfoAll() {
    for (let location_id in this._gmapDragDrop_vars.location_lat_lngs) {
      this.locationHideInfo(location_id);
    }
  }

  locationGet(location_id) {
    let a_location = this._gmapDragDrop_vars.location_datas[location_id];
    return a_location;
  }

  locationsGetAll() {
    let location_datas_copy = [];
    let location_datas = this._gmapDragDrop_vars.location_datas;
    for (let location_id in location_datas) {
      let a_location = location_datas[location_id];
      let location_copy = Object.assign({}, a_location);
      location_datas_copy.push(location_copy);
    }
    return location_datas_copy;
  }

  locationsPutAll(map_locations) {
    this.locationsClearAll();
    for (let location_id in map_locations) {
      let a_location = map_locations[location_id];
      this.locationAdd(a_location);
    }
  }

  locationsClearAll() {
    for (let location_id in this._gmapDragDrop_vars.location_lat_lngs) {
      this.locationDelete(location_id);
    }
  }

  locationModifyDirect(marker_data) {
    const location_id = marker_data.location_id;
    if (marker_data.can_change !== undefined) {
      if (!marker_data.can_change) {
        throw ` Cannot Change '${location_id}' `;
      }
    }
    if (this.locationExists(location_id)) {
      this._removeLocation(location_id);
    }
    this._gmapDragDrop_vars.location_datas[location_id] = marker_data;
    this.locationAdd(marker_data);
  }

  locationModifyJSON(text_data) {
    const trim_data = text_data.trim();
    try {
      let marker_data = JSON.parse(trim_data);
      this.locationModifyDirect(marker_data);
    } catch (e) {
      alert(e);
    }
  }

  _markerInfoWindow(map_location, map_marker) {
    const { title_text, content_text } = map_location;
    if (title_text !== "" || content_text !== "") {
      const info_window = this._popUpWindow(map_location, map_marker);
      return info_window;
    } else {
      return null;
    }
  }

  _popUpWindow(map_location, map_marker) {
    const {
      title_text,
      content_text,
      info_style,
      title_style,
      content_style,
      showing_info_window,
      extra_text,
    } = map_location;
    let disable_autopanning = false;
    if (map_location.disable_auto_pan !== undefined) {
      disable_autopanning = map_location.disable_auto_pan;
    }
    const content_string = `<div style="${info_style}" ondragstart="event.preventDefault()">
                                        <div style="${title_style}" > ${title_text}</div>
                                         <span style="${content_style}">${content_text}</span>
                                          <span style="${content_style}">${extra_text}</span>
                                      </div>`;
    const info_window = new google.maps.InfoWindow({
      content: content_string,
      disableAutoPan: disable_autopanning,
    });
    if (showing_info_window) {
      const google_map = this.state.map_options.google_map;
      info_window.open(google_map, map_marker);
    }
    return info_window;
  }

  _unixTimeId() {
    return "_unix_time_" + Date.now() + "_" + Math.random();
  }

  locationShowInfo(location_id) {
    let info_window =
      this._gmapDragDrop_vars.location_info_windows[location_id];
    if (info_window !== null) {
      const google_map = this.state.map_options.google_map;
      let map_marker = this._gmapDragDrop_vars.location_markers[location_id];
      info_window.open(google_map, map_marker);
    }
  }

  locationHideInfo(location_id) {
    let info_window =
      this._gmapDragDrop_vars.location_info_windows[location_id];
    if (info_window !== null) {
      info_window.close();
    }
  }

  _outsideToInsideDrop(location_id, id_lat_lng_title_content_obj) {
    this._hideIeImageDrag();
    let changed_location = this._addChangeEvent(id_lat_lng_title_content_obj);
    if (changed_location) {
      if (this.locationExists(location_id)) {
        let old_location_data =
          this._gmapDragDrop_vars.location_datas[location_id];
        if (old_location_data.can_change) {
          this.locationDelete(location_id);
        } else {
          throw ` Cannot Change '${location_id}' `;
        }
      }
      changed_location.lat = changed_location.from_lat;
      changed_location.lng = changed_location.from_lng;
      this._gmapDragDrop_vars.location_datas[location_id] = changed_location;
      this.locationAdd(changed_location);
    }
  }

  _addChangeEvent(lat_lng_obj) {
    let changed_lat_lng_obj = Object.assign({}, lat_lng_obj);
    if (this.state.map_options.onAdd !== undefined) {
      let event_parameters = this._eventParameters(
        "location_data",
        changed_lat_lng_obj
      );
      changed_lat_lng_obj = this.state.map_options.onAdd(event_parameters);
    }
    return changed_lat_lng_obj;
  }

  _insideToInsideDrop(location_id, old_location_data) {
    if (
      old_location_data.can_move === undefined ||
      old_location_data.can_move
    ) {
      this.locationDelete(location_id, INSIDE_TO_INSIDE_MOVE);
      this.locationAdd(old_location_data);
    } else {
      this._stopDragging();
    }
  }

  _onCenterChanged_googleListener() {
    if (this._gmapDragDrop_vars.on_ready_fired) {
      const google_map = this.state.map_options.google_map;
      const map_center = google_map.getCenter();
      let moved_center = { lat: map_center.lat(), lng: map_center.lng() };
      if (this.state.map_options.onCenterChanged === undefined) {
        this._gmapDragDrop_vars.center_lat_lng = moved_center;
      } else {
        const event_parameters = this._eventParameters(
          "moved_center",
          moved_center
        );
        const move_allowed =
          this.state.map_options.onCenterChanged(event_parameters);
        if (move_allowed) {
          this._gmapDragDrop_vars.center_lat_lng = moved_center;
        } else {
          const last_lat = this._gmapDragDrop_vars.center_lat_lng.lat;
          const last_lng = this._gmapDragDrop_vars.center_lat_lng.lng;
          if (moved_center.lat !== last_lat || moved_center.lng !== last_lng) {
            google_map.panTo(this._gmapDragDrop_vars.center_lat_lng);
          }
        }
      }
    }
  }

  _onZoomChanged_googleListener() {
    if (this._gmapDragDrop_vars.on_ready_fired) {
      const google_map = this.state.map_options.google_map;
      let map_zoom = google_map.getZoom();
      if (this.state.map_options.onZoomChanged === undefined) {
        if (map_zoom > this.state.map_options.max_zoom) {
          google_map.setZoom(this.state.map_options.max_zoom);
        } else if (map_zoom < this.state.map_options.min_zoom) {
          google_map.setZoom(this.state.map_options.min_zoom);
        }
      } else {
        const event_parameters = this._eventParameters("map_zoom", map_zoom);
        const zoom_allowed =
          this.state.map_options.onZoomChanged(event_parameters);
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

  _onMouseMove_googleListener(event) {
    if (this.state.map_options.onMouseMove !== undefined) {
      event.pageX = this._gmapDragDrop_vars.current_page_x;
      event.pageY = this._gmapDragDrop_vars.current_page_y;
      this._gmapDragDrop_vars.mouse_lat = event.latLng.lat;
      this._gmapDragDrop_vars.mouse_lng = event.latLng.lng;
      const event_parameters = this._eventParameters();
      let extended_event = Object.assign({}, event, event_parameters);
      this.state.map_options.onMouseMove(extended_event);
    }
  }

  _onIdle_googleListener() {
    if (!this._gmapDragDrop_vars.on_ready_fired) {
      if (this.state.map_options.onReady !== undefined) {
        const event_parameters = this._eventParameters();
        let extended_event = Object.assign({}, event_parameters);
        this.state.map_options.onReady(extended_event);
      }
      this._gmapDragDrop_vars.on_ready_fired = true;
      return true;
    }
    return false;
  }

  reboundMap(location_array = false) {
    const map_bounds = new google.maps.LatLngBounds();
    if (location_array) {
      for (let location_id in location_array) {
        let lat_lng_obj = location_array[location_id];
        if (typeof lat_lng_obj === "object") {
          map_bounds.extend(lat_lng_obj);
        }
      }
    } else {
      let location_lat_lngs = this._gmapDragDrop_vars.location_lat_lngs;
      for (let location_id in location_lat_lngs) {
        let lat_lng_obj = location_lat_lngs[location_id];
        map_bounds.extend(lat_lng_obj);
      }
      const google_map = this.state.map_options.google_map;
      google_map.fitBounds(map_bounds, FIT_BOUNDS_PADDING);
    }
  }

  locationAdd(changed_lat_lng_obj) {
    if (changed_lat_lng_obj[0] === undefined) {
      if (changed_lat_lng_obj) {
        let changed_location = this._addChangeEvent(changed_lat_lng_obj);
        if (changed_location) {
          this._placeMarker(changed_location);
          if (this.state.map_options.change_rebounding) {
            this.reboundMap();
          }
          if (this.state.map_options.onAfterAdd !== undefined) {
            let event_parameters = this._eventParameters(
              "location_data",
              changed_location
            );
            this.state.map_options.onAfterAdd(event_parameters);
          }
        }
      }
    }
    return changed_lat_lng_obj;
  }

  _placeMarker(partial_map_location) {
    let map_location = Object.assign(
      {},
      this.props.marker_defaults,
      partial_map_location
    );
    if (map_location.location_id === undefined) {
      map_location.location_id = this._unixTimeId();
    }
    const location_id = map_location.location_id;
    const google_map = this.state.map_options.google_map;
    try {
      const lat_lng_obj = this._latLngToObj(map_location);
      const marker_icon = this._getMakerIcon(map_location);
      let map_marker = new google.maps.Marker({
        position: lat_lng_obj,
        icon: marker_icon,
        map: google_map,
        draggable: false,
        raiseOnDrag: false,
      });
      map_marker.location_id = location_id;
      this._mouseOverMarker_googleListener(map_marker, lat_lng_obj);
      const info_window = this._markerInfoWindow(map_location, map_marker);
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

  _getMakerIcon(map_location) {
    let pin_path, png_color;
    if (map_location.marker_svg) {
      pin_path = map_location.marker_svg;
    } else if (this.state.map_options.pin_svg) {
      pin_path = this.state.map_options.pin_svg;
    } else {
      png_color = map_location.pin_color;
      if (!PNG_COLOR_NAMES.includes(png_color)) {
        png_color = "red";
      }
      const marker_png =
        this.state.map_options.png_marker_location + `${png_color}-dot.png`;
      return marker_png;
    }
    const y_anchor = PIN_SVG_H_W - PIN_SVG_H_W / 2;
    const marker_icon = {
      path: pin_path,
      fillColor: map_location.pin_color,
      fillOpacity: 0.9,
      origin: new google.maps.Point(0, 0),
      size: new google.maps.Size(0, 0),
      anchor: new google.maps.Point(y_anchor, PIN_SVG_H_W),
      strokeWeight: 0,
      scale: this.state.map_options.pin_scale,
    };
    return marker_icon;
  }
}

GmapDragDrop.displayName = "GmapDragDropComponent";

GmapDragDrop.propTypes = {
  google_map_key: PropTypes.string.isRequired,
  map_locations: PropTypes.array, // [ {lat:49.39, lng:-123.08} ]
  lat_center: PropTypes.number, // 49.27
  lng_center: PropTypes.number, // -122.85
  map_type: PropTypes.string, // roadmap/satellite/hybrid/terrain
  street_view: PropTypes.bool, // street view button
  zoom_control: PropTypes.bool, // +/- buttons
  map_type_control: PropTypes.bool, // map/satellite button
  pin_svg: PropTypes.string, // marker icon
  scroll_wheel: PropTypes.bool, // scrolling zooms
  gestureHandling: PropTypes.string, // 'none' === no dragging map
  change_rebounding: PropTypes.bool, // zoom to all markers
  png_marker_location: PropTypes.string, // url of png markers, if svgs are not used
  pin_scale: PropTypes.number, // scale 512x512 svg icons down
  map_styles: PropTypes.array, // MapStyles.NIGHT_STYLE
  init_zoom: PropTypes.number, // start map zoom
  max_zoom: PropTypes.number, // highest zoom allowed
  min_zoom: PropTypes.number, // minimum zoom

  onReady: PropTypes.func,
  onCenterChanged: PropTypes.func,
  onZoomChanged: PropTypes.func,
  onMouseMove: PropTypes.func,
  onDoubleClick: PropTypes.func,
  onAdd: PropTypes.func,
  onAfterAdd: PropTypes.func,
  onRightClick: PropTypes.func,
  onRightClickMarker: PropTypes.func,
  onDelete: PropTypes.func,
  onDragStartMarker: PropTypes.func,
  onDragMarker: PropTypes.func,
  onDragEndMarker: PropTypes.func,
  onDragDrop: PropTypes.func,
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

    onReady: (e) => {
      const { gmap_event } = e.gmap_params;
      const container_id = gmap_event._gmapDragDrop_vars.container_id;
      // console.log(`onReady : in div with id of '${container_id}' is ready`);
    },

    onCenterChanged: (e) => {
      const { moved_center, gmap_event } = e.gmap_params;
      // console.log(
      //   `onCenterChanged : at ${moved_center.lat}, ${moved_center.lng}`
      // );
      return true;
    },

    onZoomChanged: (e) => {
      const { map_zoom, gmap_event } = e.gmap_params;
      //console.log(`onZoomChanged : with has a new zoom of ${map_zoom}`);
      return true;
    },

    onMouseMove: (e) => {
      const { gmap_event } = e.gmap_params;
      const { latLng, pageX, pageY } = e;
      const lat = latLng.lat();
      const lng = latLng.lng();
      //console.log(`onMouseMove : at ${lat},${lng}  ${pageX},${pageY}`);
    },

    onDoubleClick: (e) => {
      const { gmap_event } = e.gmap_params;
      const { latLng, pixel } = e;
      const lat = latLng.lat();
      const lng = latLng.lng();
      //console.log(`onDoubleClick : at ${lat},${lng}  ${pixel.x},${pixel.y}`);
      gmap_event.locationAdd(latLng);
    },

    onAdd: (e) => {
      const { location_data, gmap_event } = e.gmap_params;
      // console.log("onAdd : with this data");
      //   console.dir(location_data);
      return location_data;
    },

    onAfterAdd: (e) => {
      const { location_data, gmap_event } = e.gmap_params;
      // console.log("onAfterAdd");
      //console.dir(location_data);
    },

    onRightClick: (e) => {
      const { gmap_event } = e.gmap_params;
      const { latLng, pixel } = e;
      const lat = latLng.lat();
      const lng = latLng.lng();
      //  console.log(`onRightClick : at ${lat},${lng}  ${pixel.x},${pixel.y}`);
    },

    onRightClickMarker: (e) => {
      const { location_id, gmap_event } = e.gmap_params;
      const marker_data = gmap_event.locationGet(location_id);
      //console.log("onRightClickMarker : with this data");
      //console.dir(marker_data);
      gmap_event.locationDelete(location_id);
    },

    onDelete: (e) => {
      const { location_data, gmap_event } = e.gmap_params;
      console.log("onDelete : with this data");
      //    console.dir(location_data);
      return true;
    },

    onDragStartMarker: (e) => {
      const { location_data, gmap_event } = e.gmap_params;
      let new_location = {};
      new_location.title_text =
        "onDragStartMarker : " + location_data.title_text;
      //    console.log("onDragStartMarker : ", new_location.title_text);
      return location_data;
    },

    onDragMarker: (e) => {
      const { start_lat_lng, location_id, page_x, page_y, gmap_event } =
        e.gmap_params;
      //   console.log("onDragMarker :", start_lat_lng, location_id, page_x, page_y);
    },

    onDragEndMarker: (e) => {
      const { from_location, gmap_event } = e.gmap_params;
      //  console.log("onDragEndMarker : with this data");
      // console.dir(from_location);
    },

    onDragDrop: (e) => {
      const { location_data, gmap_event } = e.gmap_params;
      let new_location = {};
      if (location_data.from_lat === undefined) {
        new_location.title_text = "onDragDrop 0km";
      } else {
        const from_location = {
          lat: location_data.from_lat,
          lng: location_data.from_lng,
        };
        const to_location = { lat: location_data.lat, lng: location_data.lng };
        const km_distance = KmsDistance.getKms(from_location, to_location);
        new_location.title_text = `onDragDrop ${km_distance}`;
      }
      //    console.log("onDragDrop : ", new_location);
      location_data.title_text += " - moved";
      return location_data;
    },
  },
  marker_defaults: {
    pin_color: "#d00", // default marker color
    showing_info_window: true, // marker has pop-up window information to show
    can_move: true, // marker can be dragged on map
    can_delete: true, // marker can be deleted
    can_change: true, // marker can be changed
    title_text: "", // first line in info window
    content_text: "", // second line in info window
    extra_text: "", // appended second line text, distance kms
    title_style: "color:black; font-size: 12px;", // first line style
    content_style: "color:blue;", // second line style
    info_style: "font-family: Arial, sans-serif;", // info window style
  },
};

module.exports = GmapDragDrop;
