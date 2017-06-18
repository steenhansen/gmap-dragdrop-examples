var GLOBAL_WEBPACK = GLOBAL_WEBPACK || {}; GLOBAL_WEBPACK["gmap_activities_entry"] =
webpackJsonpGLOBAL_WEBPACK__name_([2],[
/* 0 */,
/* 1 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// activities_data.jsx

var _gmapDragdropReact = __webpack_require__(0);

var STEVESTON_COLOR = "#0101ff";
var NORTH_SHORE_COLOR = '#148aa5';
var SASAMAT_COLOR = "#ff01ff";
var STANLEY_COLOR = '#ff0101';

var CAN_MOVE_ACTIVITIES = true;

var STANLEY_PARK = {
  location_id: "STANLEY_PARK",
  lat: 49.3006,
  lng: -123.125,
  pin_color: STANLEY_COLOR,
  title_text: 'Visit Stanley Park',
  group_type: true,
  title_style: 'color: ' + STANLEY_COLOR + '; font-size: 16px; font-weight:bold; ',
  marker_svg: _gmapDragdropReact.MarkerIcons.PARK_PATH,
  can_move: CAN_MOVE_ACTIVITIES,
  group_lat: 49.29999460222812,
  group_lng: -123.12838696340592,
  group_zoom: 16
};

var VANCOUVER_AQUARIUM = {
  location_id: "VANCOUVER_AQUARIUM",
  lat: 49.301028448370104,
  lng: -123.1303740539247,
  pin_color: STANLEY_COLOR,
  marker_svg: _gmapDragdropReact.MarkerIcons.ORCA_PATH,
  can_move: CAN_MOVE_ACTIVITIES,
  content_text: 'Vancouver Aquarium'
};
VANCOUVER_AQUARIUM.extra_text = _gmapDragdropReact.KmsDistance.getKms(STANLEY_PARK, VANCOUVER_AQUARIUM);

var THEATRE_STARS = {
  location_id: "THEATRE_STARS",
  lat: 49.29859374164774,
  lng: -123.13408623120131,
  pin_color: STANLEY_COLOR,
  marker_svg: _gmapDragdropReact.MarkerIcons.THEATRE_PATH,
  can_move: CAN_MOVE_ACTIVITIES,
  title_text: _gmapDragdropReact.SvgButtons.THEATRE_SVG
};
THEATRE_STARS.extra_text = _gmapDragdropReact.KmsDistance.getKms(STANLEY_PARK, THEATRE_STARS);

var ROSE_GARDEN = {
  location_id: "rose_garden",
  lat: 49.298748185948476,
  lng: -123.13655332352153,
  pin_color: STANLEY_COLOR,
  marker_svg: _gmapDragdropReact.MarkerIcons.FLOWER_PATH,
  can_move: CAN_MOVE_ACTIVITIES,
  title_text: 'Rose Garden'
};
ROSE_GARDEN.extra_text = _gmapDragdropReact.KmsDistance.getKms(STANLEY_PARK, ROSE_GARDEN);

var TOTEM_POLES = {
  location_id: "totem_poles",
  lat: 49.29945424568891,
  lng: -123.12079550987937,
  pin_color: STANLEY_COLOR,
  marker_svg: _gmapDragdropReact.MarkerIcons.TOTEM_PATH,
  can_move: CAN_MOVE_ACTIVITIES,
  title_text: 'Totem Poles'
};
TOTEM_POLES.extra_text = _gmapDragdropReact.KmsDistance.getKms(STANLEY_PARK, TOTEM_POLES);

var STANLEY_PARK_OUTING = [STANLEY_PARK, VANCOUVER_AQUARIUM, THEATRE_STARS, ROSE_GARDEN, TOTEM_POLES];

var NORTH_SHORE = {
  location_id: "north_shore",
  lat: 49.35643927612489,
  lng: -123.0685231089592,
  pin_color: NORTH_SHORE_COLOR,
  title_text: "Visit the <a href='http://vancouversnorthshore.com/'>North Shore</a>",
  title_style: 'color: ' + NORTH_SHORE_COLOR + '; font-size: 16px; font-weight:bold; ',

  marker_svg: _gmapDragdropReact.MarkerIcons.WATER_PATH,
  can_move: CAN_MOVE_ACTIVITIES,
  group_type: true,
  group_lat: 49.367238543988286,
  group_lng: -123.0699056749604,
  group_zoom: 13
};

var LYNN_CREEK = {
  location_id: "Lynn Creek Ecology",
  lat: 49.3469483290511,
  lng: -123.01933489674076,
  marker_svg: _gmapDragdropReact.MarkerIcons.LEAF_PATH,
  can_move: CAN_MOVE_ACTIVITIES,
  pin_color: NORTH_SHORE_COLOR,
  title_text: "<a href='http://www.lynncanyonecologycentre.ca/' target='_blank'>Lynn Canyon Ecology Centre</a>",
  content_text: '',
  order_index: 1
};

var SUSPENSION_BRIDGE = {
  location_id: "Capilano Suspension Bridge",
  lat: 49.34431680519281,
  lng: -123.1154057370374,
  marker_svg: _gmapDragdropReact.MarkerIcons.TREES_PATH,
  can_move: CAN_MOVE_ACTIVITIES,

  pin_color: NORTH_SHORE_COLOR,
  title_text: '<a href=\'https://www.capbridge.com/\' target=\'_blank\'>Capilano Suspension Bridge</a>',
  content_text: _gmapDragdropReact.SvgButtons.BRIDGE_SVG,
  order_index: 3
};

var HATCHERY_URL = "https://www.tripadvisor.ca/Attraction_Review-g181717-d155847-Reviews-Capilano_Salmon_Hatchery-North_Vancouver_British_Columbia.html";
var HATCHERY = {
  location_id: "HATCHERY",
  lat: 49.35890968429735,
  lng: -123.11046738078812,
  marker_svg: _gmapDragdropReact.MarkerIcons.PLAIN_FISH,
  can_move: CAN_MOVE_ACTIVITIES,
  pin_color: NORTH_SHORE_COLOR,
  title_text: '<a href=\'' + HATCHERY_URL + '\' target=\'_blank\'>Capilano River Hatchery</a>',

  order_index: 4
};

var GROUSE = {
  location_id: "Grouse",
  lat: 49.38048692077353,
  lng: -123.08179818027958,
  marker_svg: _gmapDragdropReact.MarkerIcons.GONDOLA_PATH,
  can_move: CAN_MOVE_ACTIVITIES,
  pin_color: NORTH_SHORE_COLOR,
  title_text: "<a href='https://www.grousemountain.com/' target='_blank'>Grouse Mountain</a>",
  order_index: 2
};

var NORTH_SHORE_OUTING = [NORTH_SHORE, LYNN_CREEK, SUSPENSION_BRIDGE, HATCHERY, GROUSE];

var STEVESTON = {
  location_id: "steveston",
  lat: 49.125515219688346,
  lng: -123.19314694541674,
  pin_color: STEVESTON_COLOR,
  title_text: "Visit <a href='https://www.visitrichmondbc.com/things-to-do/steveston-village/'>Steveston</a>",
  title_style: 'color: ' + STEVESTON_COLOR + '; font-size: 16px; font-weight:bold; ',

  marker_svg: _gmapDragdropReact.MarkerIcons.CAR_PARK,
  can_move: CAN_MOVE_ACTIVITIES,
  group_type: true,
  group_lat: 49.12533062792256,
  group_lng: -123.18892228671896,
  group_zoom: 16

};

var GARRY_POINT_PARK = {
  location_id: "Garry Point Park",

  lat: 49.12450214052779,

  lng: -123.19713597062844,

  marker_svg: _gmapDragdropReact.MarkerIcons.BINOCULAR_PATH,

  can_move: CAN_MOVE_ACTIVITIES,

  pin_color: STEVESTON_COLOR,

  title_text: "<a href='http://www.richmond.ca/parks/parks/SigParks/parkinfo/park.aspx?ID=17' target='_blank'>Garry Point Park</a>",

  order_index: 1
};
GARRY_POINT_PARK.extra_text = _gmapDragdropReact.KmsDistance.getKms(STEVESTON, GARRY_POINT_PARK);

var MARYS_ICE_CREAM = {
  location_id: "Marys Ice Cream",
  lat: 49.12453021459576,
  lng: -123.18427506512461,

  marker_svg: _gmapDragdropReact.MarkerIcons.CONE_PATH,
  can_move: CAN_MOVE_ACTIVITIES,
  pin_color: STEVESTON_COLOR,
  content_text: "Mary's Ice Cream",
  order_index: 3
};
MARYS_ICE_CREAM.extra_text = _gmapDragdropReact.KmsDistance.getKms(STEVESTON, MARYS_ICE_CREAM);

var SEABREEZE_ADVENTURES = {
  location_id: "Seabreeze Adventures",
  lat: 49.123649970228,
  lng: -123.18069116765884,
  marker_svg: _gmapDragdropReact.MarkerIcons.ORCA_PATH,
  can_move: CAN_MOVE_ACTIVITIES,
  pin_color: STEVESTON_COLOR,
  title_text: "<a href='http://www.seabreezeadventures.ca/' target='_blank'>Steveston Seabreeze</a>",
  content_text: "Eco-Tours",
  order_index: 4
};
SEABREEZE_ADVENTURES.extra_text = _gmapDragdropReact.KmsDistance.getKms(STEVESTON, SEABREEZE_ADVENTURES);

var GEORGIA_CANNERY = {
  location_id: "Georgia Cannery",
  lat: 49.12551316365467,
  lng: -123.18719284231094,
  pin_color: STEVESTON_COLOR,
  marker_svg: _gmapDragdropReact.MarkerIcons.FISH_HOOK,
  can_move: CAN_MOVE_ACTIVITIES,
  title_text: "<a href='http://gulfofgeorgiacannery.org/' target='_blank'> Gulf of Georgia Cannery</a>",
  content_text: 'Historical Site',
  order_index: 2
};
GEORGIA_CANNERY.extra_text = _gmapDragdropReact.KmsDistance.getKms(STEVESTON, GEORGIA_CANNERY);
var STEVESTON_OUTING = [STEVESTON, GARRY_POINT_PARK, GEORGIA_CANNERY, MARYS_ICE_CREAM, SEABREEZE_ADVENTURES];

var VAN_TRAILS_SASAMAT = "https://www.vancouvertrails.com/trails/sasamat-lake/";

var SASAMAT = {
  location_id: "sasamat",
  lat: 49.31833185480837,
  lng: -122.89149357226643,
  pin_color: SASAMAT_COLOR,
  marker_svg: _gmapDragdropReact.MarkerIcons.CAR_PARK,
  can_move: CAN_MOVE_ACTIVITIES,
  title_style: 'color: ' + SASAMAT_COLOR + '; font-size: 16px; font-weight:bold; ',
  title_text: 'Visit <a href=\'' + VAN_TRAILS_SASAMAT + '\' target=\'_blank\'>Sasamat Lake</a>',
  group_type: true,
  group_lat: 49.322732829467164,
  group_lng: -122.88177324679653,
  group_zoom: 15
};

var FISH_URL = "http://www.fishingwithrod.com/articles/region_two/sasamat_lake.html";
var SASAMAT_FISH = {
  location_id: "sasamat_fish",
  lat: 49.316289665483986,
  lng: -122.88698746112141,
  pin_color: SASAMAT_COLOR,
  marker_svg: _gmapDragdropReact.MarkerIcons.MAN_FISH,
  can_move: CAN_MOVE_ACTIVITIES,
  title_text: '<a href=\'' + FISH_URL + '\' target=\'_blank\'>Fish at Sasamat</a>'
};
SASAMAT_FISH.extra_text = _gmapDragdropReact.KmsDistance.getKms(SASAMAT, SASAMAT_FISH

///

);var WHITE_PINE_URL = "https://www.tripadvisor.ca/Attraction_Review-g815383-d3923634-Reviews-White_Pine_Beach_Sasamat_Lake-Port_Moody_British_Columbia.html";
var SASAMAT_SWIM = {
  location_id: "sasamat swim",
  lat: 49.32218762262639,
  lng: -122.88518630109843,
  pin_color: SASAMAT_COLOR,
  marker_svg: _gmapDragdropReact.MarkerIcons.SWIM_PATH,
  can_move: CAN_MOVE_ACTIVITIES,
  title_text: '<a href=\'' + WHITE_PINE_URL + '\' target=\'_blank\'> White Pine Beach</a>'

};
SASAMAT_SWIM.extra_text = _gmapDragdropReact.KmsDistance.getKms(SASAMAT, SASAMAT_SWIM);

var BUNTZEN_RIDGE_TRAIL_HREF = '<a href="http://trailpeak.com/trail-White-Pine-to-Buntzen-Lake-near-Coquitlam-BC-5209" target="_blank">Buntzen Ridge Trail Hike</a>';
var BUNTZEN_RIDGE_TRAIL = {
  location_id: "sasamat BUNTZEN_RIDGE_TRAIL",
  lat: 49.325916969909045,
  lng: -122.8747565880135,
  pin_color: SASAMAT_COLOR,
  title_text: BUNTZEN_RIDGE_TRAIL_HREF,
  marker_svg: _gmapDragdropReact.MarkerIcons.HIKE_MAN,
  can_move: CAN_MOVE_ACTIVITIES,
  content_text: 'Buntzen Ridge Trail'
};
BUNTZEN_RIDGE_TRAIL.extra_text = _gmapDragdropReact.KmsDistance.getKms(SASAMAT, BUNTZEN_RIDGE_TRAIL);
var SASAMAT_OUTING = [SASAMAT, SASAMAT_FISH, BUNTZEN_RIDGE_TRAIL, SASAMAT_SWIM];

module.exports = {
  NORTH_SHORE_OUTING: NORTH_SHORE_OUTING, STEVESTON_OUTING: STEVESTON_OUTING, SASAMAT_OUTING: SASAMAT_OUTING, STANLEY_PARK_OUTING: STANLEY_PARK_OUTING
};

/***/ }),
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// gmap_activities_entry.jsx

var _gmapDragdropReact = __webpack_require__(0);

var activities_data = __webpack_require__(4);var NORTH_SHORE_OUTING = activities_data.NORTH_SHORE_OUTING,
    SASAMAT_OUTING = activities_data.SASAMAT_OUTING,
    STEVESTON_OUTING = activities_data.STEVESTON_OUTING,
    STANLEY_PARK_OUTING = activities_data.STANLEY_PARK_OUTING;

var activity_locations = [NORTH_SHORE_OUTING];

function drawStarShape(from_location, to_locations) {
  var star_pattern = [];
  if (from_location.lat !== undefined) {
    star_pattern.push(from_location);
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = to_locations[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var a_to_location = _step.value;

        star_pattern.push(a_to_location);
        star_pattern.push(from_location);
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
  }
  return star_pattern;
}

function getOutingDistanceStar(lat_lng_obj) {
  var a_location = void 0;
  var colored_locations = this.filterByPropertyValue('pin_color', lat_lng_obj.pin_color);
  if (colored_locations.length === 0) {
    return false;
  }
  for (var location_index in colored_locations) {
    a_location = colored_locations[location_index];
    if (a_location.group_type) {
      break;
    }
  }
  lat_lng_obj.extra_text = _gmapDragdropReact.KmsDistance.getKms(lat_lng_obj, a_location);
  return 0; // DO_NOT_PROCESS_NEXT_ITEM_IN_GROUP
}

function generateMemberStar(lat_lng_obj) {
  var outing_color = lat_lng_obj.pin_color;
  var new_lat_lng = Object.assign({}, lat_lng_obj);
  var location_id = this._unixTimeId();
  var input_id = this._unixTimeId();
  delete new_lat_lng.group_type;
  new_lat_lng.content_text = this.labelInput(location_id, 'Activity', 'gmap_activities', input_id);
  new_lat_lng.title_text = '';
  new_lat_lng.location_id = location_id;
  new_lat_lng.pin_color = outing_color;
  delete new_lat_lng.marker_svg;
  this.getOutingDistance(new_lat_lng);
  this.locationAdd(new_lat_lng);
  this.drawPolyline(outing_color);
  document.getElementById(input_id).focus();
}

var lat_start = activity_locations[0][0].group_lat;
var lng_start = activity_locations[0][0].group_lng;
var zoom_start = activity_locations[0][0].group_zoom;

var activity_options = {
  change_rebounding: false,
  init_zoom: zoom_start,
  pin_scale: 0.05,
  lat_center: lat_start,
  lng_center: lng_start,
  pin_svg: _gmapDragdropReact.MarkerIcons.PIN_SVG_NO_HOLE,
  sub_type: 'star_lines',
  map_styles: _gmapDragdropReact.MapStyles.RETRO_STYLE
};

var GOOGLE_MAP_KEY = "AIzaSyCE3HSVtJ6yOEkHiBpyoR_iU00gqYgTkfk";
var gmap_activities = ReactDOM.render(React.createElement(_gmapDragdropReact.GmapGroups, {
  google_map_key: GOOGLE_MAP_KEY,
  map_locations: activity_locations,
  map_options: activity_options
}), document.getElementById('gmap-activites-id'));

gmap_activities.drawShape = drawStarShape;
gmap_activities.getOutingDistance = getOutingDistanceStar;
gmap_activities.generateMember = generateMemberStar;

module.exports = {
  gmap_activities: gmap_activities, GmapDragDrop: _gmapDragdropReact.GmapDragDrop, SvgButtons: _gmapDragdropReact.SvgButtons,
  NORTH_SHORE_OUTING: NORTH_SHORE_OUTING, SASAMAT_OUTING: SASAMAT_OUTING, STEVESTON_OUTING: STEVESTON_OUTING, STANLEY_PARK_OUTING: STANLEY_PARK_OUTING
};

/***/ })
],[7]);