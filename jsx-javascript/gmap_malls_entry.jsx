"use strict";

import ReactDOM from "react-dom";
import { GmapDragDrop, SvgButtons } from "gmap-dragdrop-react";

var new_input_id;

var PIN_SVG_NO_HOLE =
  "m256,0c-70.703,0 -128,57.313 -128,128c0,51.5 30.563,95.563 74.375,115.875l53.625,268.125l53.625,-268.125c43.813,-20.312 74.375,-64.375 74.375,-115.875c0,-70.687 -57.312,-128 -128,-128z";
var NIGHT_STYLE = [
  { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
  {
    elementType: "labels.text.stroke",
    stylers: [{ color: "#242f3e" }],
  },
  { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
  {
    featureType: "administrative.locality",
    elementType: "labels.text.fill",
    stylers: [{ color: "#d59563" }],
  },
  { featureType: "poi", elementType: "labels.text.fill", stylers: [{ color: "#d59563" }] },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [{ color: "#263c3f" }],
  },
  { featureType: "poi.park", elementType: "labels.text.fill", stylers: [{ color: "#6b9a76" }] },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [{ color: "#38414e" }],
  },
  { featureType: "road", elementType: "geometry.stroke", stylers: [{ color: "#212a37" }] },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [{ color: "#9ca5b3" }],
  },
  { featureType: "road.highway", elementType: "geometry", stylers: [{ color: "#746855" }] },
  {
    featureType: "road.highway",
    elementType: "geometry.stroke",
    stylers: [{ color: "#1f2835" }],
  },
  {
    featureType: "road.highway",
    elementType: "labels.text.fill",
    stylers: [{ color: "#f3d19c" }],
  },
  { featureType: "transit", elementType: "geometry", stylers: [{ color: "#2f3948" }] },
  {
    featureType: "transit.station",
    elementType: "labels.text.fill",
    stylers: [{ color: "#d59563" }],
  },
  { featureType: "water", elementType: "geometry", stylers: [{ color: "#17263c" }] },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [{ color: "#515c6d" }],
  },
  { featureType: "water", elementType: "labels.text.stroke", stylers: [{ color: "#17263c" }] },
];

function mallsMap(div_id, mall_locations) {
  const mall_options = {
    max_zoom: 13,
    street_view: false,
    zoom_control: false,
    map_type_control: false,
    pin_svg: PIN_SVG_NO_HOLE,
    map_styles: NIGHT_STYLE,
    onDragDrop: (e) => {
      const { location_data, gmap_event } = e.gmap_params;
      new_input_id = gmap_event._unixTimeId();
      if (location_data.showing_info_window !== undefined) {
        location_data.title_text = gmap_event.labelInput(location_data.location_id, "New Location", "gmap_malls", new_input_id);
      }
      return location_data;
    },
    onAfterAdd: () => {
      //const {location_data, gmap_event} = e.gmap_params
      if (document.getElementById(new_input_id) !== null) {
        document.getElementById(new_input_id).focus();
      }
    },
    onDoubleClick: (e) => {
      const { gmap_event } = e.gmap_params;
      let { latLng } = e;
      const random_color = gmap_event.newRandomColor();
      latLng.pin_color = random_color;
      gmap_event.locationAdd(latLng);
    },
  };

  let gmap_malls = ReactDOM.render(
    <GmapDragDrop
      google_map_key={GLOBAL_WEBPACK.GOOG_MAP_API}
      lat_center={49.275314}
      lng_center={-122.8547288}
      map_locations={mall_locations}
      map_options={mall_options}
    />,
    document.getElementById(div_id)
  );

  function dropOnMallDelete(event) {
    event.preventDefault();
    var delete_data = event.dataTransfer.getData("text");
    var marker_data = JSON.parse(delete_data);
    var location_id = marker_data.location_id;
    if (gmap_malls.locationExists(location_id)) {
      gmap_malls.locationDelete(location_id);
    } else {
      throw 'Location id "' + location_id + '" does not exist on the mall map';
    }
  }
  gmap_malls.dropOnMallDelete = dropOnMallDelete;

  function mallDragStart(mall_id, mall_data) {
    var mall_element = document.getElementById(mall_id);
    mall_element.ondragstart = gmap_malls.startDragFromOutside(mall_data);
  }

  var svg_buttons = SvgButtons;
  svg_buttons.do_delete(delete_malls_options);
  svg_buttons.upMarkerHover(coquitlam_options);
  svg_buttons.upMarkerHover(central_city_options);
  svg_buttons.upMarkerHover(pacific_options);
  svg_buttons.upMarkerHover(oakridge_options);
  svg_buttons.upMarkerHover(park_royal_options);
  svg_buttons.upMarkerHover(capilano_options);
  svg_buttons.upMarkerHover(royal_city_options);
  svg_buttons.upMarkerHover(richmond_options);
  svg_buttons.upMarkerHover(lansdowne_options);
  svg_buttons.upMarkerHover(aberdeen_options);
  svg_buttons.upMarkerHover(lougheed_options);
  svg_buttons.upMarkerHover(brentwood_options);
  svg_buttons.upMarkerHover(metropolis_options);
  svg_buttons.upMarkerHover(guildford_options);

  mallDragStart("coquitlam_id", COQUITLAM_CENTRE);
  mallDragStart("central_city_id", CENTRAL_CITY);
  mallDragStart("pacific_id", PACIFIC);
  mallDragStart("oakridge_id", OAKRIDGE);
  mallDragStart("park_royal_id", PARK_ROYAL);
  mallDragStart("capilano_id", CAPILANO);
  mallDragStart("royal_city_id", ROYAL_CITY);
  mallDragStart("richmond_id", RICHMOND_CENTRE);
  mallDragStart("lansdowne_id", LANSDOWNE);
  mallDragStart("aberdeen_id", ABERDEEN);
  mallDragStart("lougheed_id", LOUGHEED);
  mallDragStart("brentwood_id", BRENTWOOD);
  mallDragStart("metropolis_id", METROPOLIS);
  mallDragStart("guildford_id", GUILDFORD);

  return gmap_malls;
}

window.mallsMap = mallsMap;

export default mallsMap;
