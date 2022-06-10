"use strict";

import { GmapDragDrop } from "gmap-dragdrop-react";

function dynamicMap(dynamic_id_a, dynamic_id_b, locations_a, locations_b) {
  let dynamic_gmap_a,
    dynamic_gmap_b,
    saved_locations_a = [],
    saved_locations_b = [];

  function createMapA() {
    let the_locations;
    if (saved_locations_a.length === 0) {
      the_locations = locations_a;
    } else {
      the_locations = saved_locations_a;
    }
    const dynamic_properties = {
      google_map_key: GLOBAL_WEBPACK.GOOG_MAP_API,
      map_locations: the_locations,
      map_options: { map_type: "terrain" },
    };
    dynamic_gmap_a = GmapDragDrop.browserFactory(dynamic_id_a, dynamic_properties);
    document.getElementById("create_a").disabled = true;
    document.getElementById("destroy_a").disabled = false;
  }

  function destroyMapA() {
    saved_locations_a = dynamic_gmap_a.locationsGetAll();
    GmapDragDrop.browserDestroy(dynamic_gmap_a);
    document.getElementById("create_a").disabled = false;
    document.getElementById("destroy_a").disabled = true;
  }

  function createMapB() {
    let the_locations;
    if (saved_locations_b.length === 0) {
      the_locations = locations_b;
    } else {
      the_locations = saved_locations_b;
    }
    const dynamic_properties = {
      google_map_key: GLOBAL_WEBPACK.GOOG_MAP_API,
      map_locations: the_locations,
      map_options: { map_type: "hybrid" },
    };
    dynamic_gmap_b = GmapDragDrop.browserFactory(dynamic_id_b, dynamic_properties);
    document.getElementById("create_b").disabled = true;
    document.getElementById("destroy_b").disabled = false;
  }

  function destroyMapB() {
    saved_locations_b = dynamic_gmap_b.locationsGetAll();
    GmapDragDrop.browserDestroy(dynamic_gmap_b);
    document.getElementById("create_b").disabled = false;
    document.getElementById("destroy_b").disabled = true;
  }

  ReactDOM.render(<img src="/icons/green-dot.png" />, document.getElementById("green-dot-id"));

  createMapA(dynamic_id_a);
  createMapB(dynamic_id_b);
  const gmap_dynamic = {};
  gmap_dynamic.createMapA = createMapA;
  gmap_dynamic.createMapB = createMapB;
  gmap_dynamic.destroyMapA = destroyMapA;
  gmap_dynamic.destroyMapB = destroyMapB;
  return gmap_dynamic;
}

window.dynamicMap = dynamicMap;
export default dynamicMap;
