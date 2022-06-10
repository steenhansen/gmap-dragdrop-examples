import ReactDOM from "react-dom";
import React from "react";

import { GmapDragDrop, KmsDistance } from "gmap-dragdrop-react";

function eventsMap(div_id, events_locations) {
  const event_options = {
    png_marker_location: "/icons/",

    onReady: (e) => {
      const { gmap_event } = e.gmap_params;
      const container_id = gmap_event._gmapDragDrop_vars.container_id;
      //console.log(`onReady : in div with id of '${container_id}' is ready`);
    },

    onCenterChanged: (e) => {
      const { moved_center, gmap_event } = e.gmap_params;
      //console.log(`onCenterChanged : at ${moved_center.lat}, ${moved_center.lng}`, gmap_event._object_type);
      return true;
    },

    onZoomChanged: (e) => {
      const { map_zoom, gmap_event } = e.gmap_params;
      //console.log(`onZoomChanged : with has a new zoom of ${map_zoom}`, gmap_event._object_type);
      return true;
    },

    onMouseMove: (e) => {
      const { gmap_event } = e.gmap_params;
      const rand_33 = Math.floor(Math.random() * 33);
      if (rand_33 === 0) {
        const { latLng, pageX, pageY } = e;
        const lat = latLng.lat();
        const lng = latLng.lng();
        //console.log(`onMouseMove (of 1/33) : at ${lat},${lng}  ${pageX},${pageY}`, gmap_event._object_type);
      }
    },

    onDoubleClick: (e) => {
      const { gmap_event } = e.gmap_params;
      const { latLng, pixel } = e;
      const lat = latLng.lat();
      const lng = latLng.lng();
      console.log(`onDoubleClick : at ${lat},${lng}  ${pixel.x},${pixel.y}`);
      gmap_event.locationAdd(latLng);
    },

    onAdd: (e) => {
      const { location_data, gmap_event } = e.gmap_params;
      console.log("onAdd : with this data", gmap_event._object_type);
      console.dir(location_data);
      return location_data;
    },

    onAfterAdd: (e) => {
      const { location_data, gmap_event } = e.gmap_params;
      console.log("onAfterAdd : with this data", gmap_event._object_type);
      console.dir(location_data);
    },

    onRightClick: (e) => {
      const { gmap_event } = e.gmap_params;
      const { latLng, pixel } = e;
      const lat = latLng.lat();
      const lng = latLng.lng();
      console.log(`onRightClick : at ${lat},${lng}  ${pixel.x},${pixel.y}`, gmap_event._object_type);
    },

    onRightClickMarker: (e) => {
      const { location_id, gmap_event } = e.gmap_params;
      const marker_data = gmap_event.locationGet(location_id);
      console.log("onRightClickMarker : with this data");
      console.dir(marker_data);
      gmap_event.locationDelete(location_id);
    },

    onDelete: (e) => {
      const { location_data, gmap_event } = e.gmap_params;
      console.log("onDelete : with this data", gmap_event._object_type);
      console.dir(location_data);
      return true;
    },

    onDragStartMarker: (e) => {
      const { location_data, gmap_event } = e.gmap_params;
      location_data.title_text = "onDragStartMarker : " + location_data.title_text;
      console.log("onDragStartMarker : with this data", gmap_event._object_type);
      return location_data;
    },

    onDragMarker: (e) => {
      const { start_lat_lng, location_id, page_x, page_y, gmap_event } = e.gmap_params;
      console.log("onDragMarker :", start_lat_lng, location_id, page_x, page_y, gmap_event._object_type);
    },

    onDragEndMarker: (e) => {
      const { from_location, gmap_event } = e.gmap_params;
      console.log("onDragEndMarker : with this data", gmap_event._object_type);
      console.dir(from_location);
    },

    onDragDrop: (e) => {
      const { location_data, gmap_event } = e.gmap_params;
      console.log("onDragDrop : with this data", gmap_event._object_type);
      console.dir(location_data);
      if (location_data.from_lat === undefined) {
        location_data.title_text = "onDragDrop 0km";
      } else {
        const from_location = {
          lat: location_data.from_lat,
          lng: location_data.from_lng,
        };
        const to_location = { lat: location_data.lat, lng: location_data.lng };
        const km_distance = KmsDistance.getKms(from_location, to_location);
        location_data.title_text = `onDragDrop ${km_distance}`;
      }
      return location_data;
    },
  };

  let gmap_events = ReactDOM.render(
    <GmapDragDrop google_map_key={GLOBAL_WEBPACK.GOOG_MAP_API} map_locations={events_locations} map_options={event_options} />,
    document.getElementById(div_id)
  );

  ReactDOM.render(<img src="/icons/black-dot.png" />, document.getElementById("black-dot-id"));

  ReactDOM.render(<img src="/icons/blue-dot.png" />, document.getElementById("blue-dot-id"));

  ReactDOM.render(<img src="/icons/circle-dot.png" />, document.getElementById("circle-dot-id"));

  ReactDOM.render(<img src="/icons/cyan-dot.png" />, document.getElementById("cyan-dot-id"));

  ReactDOM.render(<img src="/icons/green-dot.png" />, document.getElementById("green-dot-id"));

  ReactDOM.render(<img src="/icons/grey-dot.png" />, document.getElementById("grey-dot-id"));

  ReactDOM.render(<img src="/icons/pink-dot.png" />, document.getElementById("pink-dot-id"));

  ReactDOM.render(<img src="/icons/purple-dot.png" />, document.getElementById("purple-dot-id"));

  ReactDOM.render(<img src="/icons/rainbow-dot.png" />, document.getElementById("rainbow-dot-id"));

  ReactDOM.render(<img src="/icons/red-dot.png" />, document.getElementById("red-dot-id"));

  ReactDOM.render(<img src="/icons/square-dot.png" />, document.getElementById("square-dot-id"));

  ReactDOM.render(<img src="/icons/stripe-dot.png" />, document.getElementById("stripe-dot-id"));

  ReactDOM.render(<img src="/icons/transparent-dot.png" />, document.getElementById("transparent-dot-id"));

  ReactDOM.render(<img src="/icons/yellow-dot.png" />, document.getElementById("yellow-dot-id"));

  ReactDOM.render(<img src="/icons/see-thru-dot.png" />, document.getElementById("see-thru-dot-id"));

  return gmap_events;
}

window.eventsMap = eventsMap;

export default eventsMap;
