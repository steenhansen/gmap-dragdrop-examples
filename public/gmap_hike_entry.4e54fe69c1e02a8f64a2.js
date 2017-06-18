var GLOBAL_WEBPACK = GLOBAL_WEBPACK || {}; GLOBAL_WEBPACK["gmap_hike_entry"] =
webpackJsonpGLOBAL_WEBPACK__name_([1],[
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
/* 4 */,
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// hikes_data.jsx

var _gmapDragdropReact = __webpack_require__(0);

var BURKE_COLOR = '#060';
var BURKE_HOVER = '#080';

var ALOUETTE_COLOR = '#006';
var ALOUETTE_HOVER = '#008';

var SWAN_COLOR = '#600';
var SWAN_HOVER = '#800';

var BASTION_COLOR = '#606';
var BASTION_HOVER = '#808';

var CAN_MOVE_HIKES = false; /// CANNOT be TRUE, the indexes are not handled leading to unk-unks

var SWAN_STREETVIEW = "https://www.google.ca/maps/place/Buntzen+Lake/@49.3356061,-122.8560224,3a,75y,19.35h,84.44t/data=!3m7!1e1!3m5!1sR60c4Gjv--BjkYEWc3MM2w!2e0!6s%2F%2Fgeo0.ggpht.com%2Fcbk%3Fpanoid%3DR60c4Gjv--BjkYEWc3MM2w%26output%3Dthumbnail%26cb_client%3Dmaps_sv.tactile.gps%26thumb%3D2%26w%3D203%26h%3D100%26yaw%3D73.829185%26pitch%3D0%26thumbfov%3D100!7i13312!8i6656!4m5!3m4!1s0x54867c6c78e46731:0x3249c68d91b95fd5!8m2!3d49.3506255!4d-122.8598586";
var SWAN_PARKING = {
  location_id: "SWAN_PARKING",
  lat: 49.33637893455591,
  lng: -122.85809945315123,
  pin_color: SWAN_COLOR,
  hover_color: SWAN_HOVER,
  title_text: 'Swan Falls Hike Parking',
  title_style: 'color: ' + ALOUETTE_COLOR + '; font-size: 16px; font-weight:bold; ',
  marker_svg: _gmapDragdropReact.MarkerIcons.CAR_PARK,
  can_move: CAN_MOVE_HIKES,

  group_type: true,
  group_lat: 49.36042241229385,
  group_lng: -122.84934472292657,
  group_zoom: 13,
  order_index: 0
};

var swan_walk_url = "http://forums.clubtread.com/27-british-columbia/34939-tangled-summit-lindsay-lake-aug-12-2010-a.html";
var SWAN_BIKE = {
  location_id: "SWAN_BIKE",
  lat: 49.338808405725935,
  lng: -122.85463373943537,
  marker_svg: _gmapDragdropReact.MarkerIcons.BIKE_PATH,
  can_move: CAN_MOVE_HIKES,
  pin_color: SWAN_COLOR,
  title_text: '<a href="' + swan_walk_url + '" target="_blank">Dirt Road</a>',
  content_text: '<a target="_blank" href="' + SWAN_STREETVIEW + '">Street View</a>',
  disable_auto_pan: true,
  order_index: 1
};
SWAN_BIKE.extra_text = _gmapDragdropReact.KmsDistance.getKms(SWAN_PARKING, SWAN_BIKE);

var swan_walk_img = "http://www.clubtread.com/forumPix/265000/265968.jpg";
var SWAN_WALK = {
  location_id: "SWAN_WALK",
  lat: 49.368904718354486,
  lng: -122.8580779954791,
  marker_svg: _gmapDragdropReact.MarkerIcons.HIKE_MAN,
  can_move: CAN_MOVE_HIKES,
  pin_color: SWAN_COLOR,
  title_text: '<a href="' + swan_walk_img + '" target="_blank">Get Off Dirt Road</a>',
  disable_auto_pan: true,
  order_index: 2
};
SWAN_WALK.extra_text = _gmapDragdropReact.KmsDistance.getKms(SWAN_BIKE, SWAN_WALK);

var swan_swim_url = "http://www.buntzenlake.ca/swan-falls-loop/#prettyPhoto[1385]/14/";
var SWAN_SWIM = {
  location_id: "SWAN_SWIM",
  lat: 49.367376531251395,
  lng: -122.85191863627165,
  marker_svg: _gmapDragdropReact.MarkerIcons.SWIM_PATH,
  can_move: CAN_MOVE_HIKES,
  pin_color: SWAN_COLOR,
  title_text: '<a href="' + swan_swim_url + '" target="_blank">Water Fall</a>',
  disable_auto_pan: true,
  order_index: 3

};
SWAN_SWIM.extra_text = _gmapDragdropReact.KmsDistance.getKms(SWAN_WALK, SWAN_SWIM);

var swan_peak_url = "http://fieldandforest.co/adventures/halvorlunden";
var swan_peak_img = _gmapDragdropReact.SvgButtons.standardMapImage("swan_falls.jpg");
var SWAN_SUMMIT = {
  location_id: "SWAN_SUMMIT",
  lat: 49.367926602842765,
  lng: -122.82982729375362,
  marker_svg: _gmapDragdropReact.MarkerIcons.MOUNTAIN_PATH,
  can_move: CAN_MOVE_HIKES,
  pin_color: SWAN_COLOR,
  title_text: '<a href="' + swan_peak_url + '" target="_blank">Swan Falls Summit</a>',
  content_text: swan_peak_img,
  disable_auto_pan: true,
  order_index: 4

};
SWAN_SUMMIT.extra_text = _gmapDragdropReact.KmsDistance.getKms(SWAN_SWIM, SWAN_SUMMIT);

var SWAN_HIKE = [SWAN_PARKING, SWAN_BIKE, SWAN_WALK, SWAN_SWIM, SWAN_SUMMIT];

//////////////////////////////////////////////////////

var bastion_streetview = "https://www.google.ca/maps/@49.3108934,-122.8117843,3a,60y,324.13h,81.44t/data=!3m6!1e1!3m4!1syDCCPi9uoqBH4yoyrGhVLw!2e0!7i13312!8i6656";

var bastion_page = "http://www.buntzenlake.ca/east-bastion-trail-and-white-rock-viewpoint/";
var BASTION_PARKING = {
  location_id: "BASTION_PARKING",
  lat: 49.31084084797064,
  lng: -122.81200837343931,
  pin_color: BASTION_COLOR,
  hover_color: BASTION_HOVER,
  title_text: '<a target="_blank" href="' + bastion_page + '">East Bastion Trail</a>',
  content_text: '<a target="_blank" href="' + bastion_streetview + '">Stree View</a>',
  title_style: 'color: ' + BASTION_COLOR + '; font-size: 16px; font-weight:bold; ',
  marker_svg: _gmapDragdropReact.MarkerIcons.CAR_PARK,
  can_move: CAN_MOVE_HIKES,
  group_type: true,
  group_lat: 49.33429588090191,
  group_lng: -122.80588768422605,
  group_zoom: 13,
  order_index: 0
};

var WOOD_PATHS_IMG = _gmapDragdropReact.SvgButtons.standardMapImage("above_pumping_station.jpg");

var WOOD_PATHS = {
  location_id: "WOOD_PATHS",
  lat: 49.31714967936051,
  lng: -122.81145952641964,
  marker_svg: _gmapDragdropReact.MarkerIcons.TREES_PATH,
  can_move: CAN_MOVE_HIKES,
  pin_color: BASTION_COLOR,
  title_text: "Wood bike paths",
  content_text: WOOD_PATHS_IMG,
  disable_auto_pan: true,
  order_index: 1

};
WOOD_PATHS.extra_text = _gmapDragdropReact.KmsDistance.getKms(BASTION_PARKING, WOOD_PATHS);

var FORD_IMG = _gmapDragdropReact.SvgButtons.standardMapImage("portage.jpg");
var FORD_STREAM = {
  location_id: "FORD_STREAM",
  lat: 49.324422717095025,
  lng: -122.81592272222042,
  can_move: CAN_MOVE_HIKES,
  marker_svg: _gmapDragdropReact.MarkerIcons.WATER_PATH,
  pin_color: BASTION_COLOR,
  title_text: "Ford small stream",
  content_text: FORD_IMG,
  disable_auto_pan: true,
  order_index: 2

};
FORD_STREAM.extra_text = _gmapDragdropReact.KmsDistance.getKms(WOOD_PATHS, FORD_STREAM);

var CYPRESS_IMG = _gmapDragdropReact.SvgButtons.standardMapImage("cypress_lake.jpg");
var CYPRESS_LAKE_URL = "http://www.trailpeak.com/trail-Cypress-Lake-Coquitlam-near-Coquitlam-BC-5760";
var CYPRESS_LAKE = {
  location_id: "CYPRESS_LAKE",
  lat: 49.336141236888444,
  lng: -122.8173141181469,
  marker_svg: _gmapDragdropReact.MarkerIcons.SWIM_PATH,
  can_move: CAN_MOVE_HIKES,
  pin_color: BASTION_COLOR,
  title_text: '<a href="' + CYPRESS_LAKE_URL + '" target="_blank">Cypress Lake</a>',
  content_text: CYPRESS_IMG,
  disable_auto_pan: true,
  order_index: 3

};
CYPRESS_LAKE.extra_text = _gmapDragdropReact.KmsDistance.getKms(WOOD_PATHS, CYPRESS_LAKE);

var WHITE_ROCK_IMG = _gmapDragdropReact.SvgButtons.standardMapImage("white_rock.jpg");
var WHITE_ROCK_URL = "http://www.buntzenlake.ca/east-bastion-trail-and-white-rock-viewpoint/";
var WHITE_ROCK = {
  location_id: "WHITE_ROCK",
  lat: 49.34374699288048,
  lng: -122.82076310366392,
  marker_svg: _gmapDragdropReact.MarkerIcons.MOUNTAIN_PATH,
  can_move: CAN_MOVE_HIKES,
  pin_color: BASTION_COLOR,
  title_text: '<a href="' + WHITE_ROCK_URL + '" target="_blank">White Rock Viewpoint</a>',
  content_text: WHITE_ROCK_IMG,
  disable_auto_pan: true,
  order_index: 4

};
WHITE_ROCK.extra_text = _gmapDragdropReact.KmsDistance.getKms(CYPRESS_LAKE, WHITE_ROCK);

var WEST_RAMPART_URL = "http://www.buntzenlake.ca/west-rampart-viewpoint/";
var WEST_RAMPART_IMG = _gmapDragdropReact.SvgButtons.standardMapImage("coquitlam_lake.jpg");
var WEST_RAMPART = {
  location_id: "WEST_RAMPART",
  lat: 49.34973010706198,
  lng: -122.816566452384,
  marker_svg: _gmapDragdropReact.MarkerIcons.BINOCULAR_PATH,
  can_move: CAN_MOVE_HIKES,
  pin_color: BASTION_COLOR,
  title_text: '<a href="' + WEST_RAMPART_URL + '" target="_blank">West Rampart Viewpoint</a>',
  content_text: WEST_RAMPART_IMG,
  disable_auto_pan: true,
  order_index: 5

};
WEST_RAMPART.extra_text = _gmapDragdropReact.KmsDistance.getKms(WHITE_ROCK, WEST_RAMPART);
var BASTION_HIKE = [BASTION_PARKING, WOOD_PATHS, FORD_STREAM, CYPRESS_LAKE, WHITE_ROCK, WEST_RAMPART];

//////////////////////////////////////////////////////
var ALOUETTE_STREETVIEW = "https://www.google.ca/maps/@49.2755349,-122.5153901,3a,75y,8.66h,79.05t/data=!3m6!1e1!3m4!1sJRq3uqlbQJA-sQ-sm2zkNA!2e0!7i13312!8i6656";
var ALOUETTE_PDF = "http://www.env.gov.bc.ca/bcparks/explore/parkpgs/golden_ears/goldenears.pdf?v=1495820303049";
var ALOUETTE_MOUNTAIN = {
  location_id: "ALOUETTE_MOUNTAIN",

  lat: 49.27574284899156,

  lng: -122.51520585268736,

  pin_color: ALOUETTE_COLOR,

  hover_color: ALOUETTE_HOVER,

  title_text: 'Alouette Mountain Hike',

  content_text: '<a target="_blank" href="' + ALOUETTE_STREETVIEW + '">Street view</a> <a target="_blank" href="' + ALOUETTE_PDF + '">Map</a>',

  title_style: 'color: ' + ALOUETTE_COLOR + '; font-size: 16px; font-weight:bold; ',

  marker_svg: _gmapDragdropReact.MarkerIcons.HIKE_MAN,

  can_move: CAN_MOVE_HIKES,

  group_type: true,

  group_lat: 49.327440140182276,

  group_lng: -122.49846123126021,

  group_zoom: 12,

  order_index: 0
};

var ALOUETTE_PARKING = {
  location_id: "ALOUETTE_PARKING",
  lat: 49.274636884013546,
  lng: -122.52087973058224,
  marker_svg: _gmapDragdropReact.MarkerIcons.CAR_PARK,
  can_move: CAN_MOVE_HIKES,
  pin_color: ALOUETTE_COLOR,
  disable_auto_pan: true,
  order_index: 1
};
ALOUETTE_PARKING.extra_text = _gmapDragdropReact.KmsDistance.getKms(ALOUETTE_MOUNTAIN, ALOUETTE_PARKING);

var ALOUETTE_VIEW = "http://forums.clubtread.com/27-british-columbia/4607-alouette-mountain-feb-22-2004-a.html";
var ALOUETTE_LOOKOUT = {
  location_id: "ALOUETTE_LOOKOUT",
  lat: 49.28843426679796,
  lng: -122.5175954796091,
  marker_svg: _gmapDragdropReact.MarkerIcons.BINOCULAR_PATH,
  can_move: CAN_MOVE_HIKES,
  pin_color: ALOUETTE_COLOR,
  title_text: '<a href="http://www.clubtread.com/forumPix/13000/13476.jpg" target="_blank">East Lookout</a>',
  content_text: '<a target="_blank" href="' + ALOUETTE_VIEW + '">info</a>',
  disable_auto_pan: true,
  order_index: 2
};
ALOUETTE_LOOKOUT.extra_text = _gmapDragdropReact.KmsDistance.getKms(ALOUETTE_PARKING, ALOUETTE_LOOKOUT);

var BEAUTIFUL_IMG = _gmapDragdropReact.SvgButtons.standardMapImage("jelly_eggs.jpg");
var BEAUTIFUL_LAKE = {
  location_id: "BEAUTIFUL_LAKE",
  lat: 49.309791629136406,
  lng: -122.51212215051055,
  marker_svg: _gmapDragdropReact.MarkerIcons.BINOCULAR_PATH,
  can_move: CAN_MOVE_HIKES,
  pin_color: ALOUETTE_COLOR,
  title_text: "Frog Eggs at Lake Beautiful",
  content_text: BEAUTIFUL_IMG,
  disable_auto_pan: true,
  order_index: 3
};
BEAUTIFUL_LAKE.extra_text = _gmapDragdropReact.KmsDistance.getKms(ALOUETTE_LOOKOUT, BEAUTIFUL_LAKE);

var ALOUETTE_BRANCH_LEFT = "http://3.bp.blogspot.com/_uP00YGymb-8/SkeXVjxrTSI/AAAAAAAAA8E/tvyc3g-eDEk/s400/all+008b.JPG";
var ALOUETTE_BRANCH = {
  location_id: "ALOUETTE_BRANCH",
  lat: 49.31204392473146,
  lng: -122.50492310151458,
  marker_svg: _gmapDragdropReact.MarkerIcons.LEFT_PATH,
  can_move: CAN_MOVE_HIKES,
  pin_color: ALOUETTE_COLOR,
  title_text: '<a href="' + ALOUETTE_BRANCH_LEFT + '" target="_blank">Branch to Left</a>',
  disable_auto_pan: true,
  order_index: 4
};
ALOUETTE_BRANCH.extra_text = _gmapDragdropReact.KmsDistance.getKms(BEAUTIFUL_LAKE, ALOUETTE_BRANCH);

var ALOUETTE_TOP_IMG = _gmapDragdropReact.SvgButtons.standardMapImage("maggie_alouette.jpg");
var ALOUETTE_TOP_LINK = "https://www.vancouvertrails.com/contest/2013/gallery/photos/20130801_00_29_14_alouettelaketopviewingoldenearsparkjpeg.jpg";
var ALOUETTE_TOP = {
  location_id: "ALOUETTE_TOP",
  lat: 49.33594548500625,
  lng: -122.49753378331661,
  marker_svg: _gmapDragdropReact.MarkerIcons.MOUNTAIN_PATH,
  can_move: CAN_MOVE_HIKES,
  pin_color: ALOUETTE_COLOR,
  title_text: '<a href="' + ALOUETTE_TOP_LINK + '" target="_blank">Top of Alouette</a>',
  content_text: ALOUETTE_TOP_IMG,
  disable_auto_pan: true,
  order_index: 5
};
ALOUETTE_TOP.extra_text = _gmapDragdropReact.KmsDistance.getKms(ALOUETTE_BRANCH, ALOUETTE_TOP);

var ALOUETTE_HIKE = [ALOUETTE_MOUNTAIN, ALOUETTE_PARKING, ALOUETTE_LOOKOUT, BEAUTIFUL_LAKE, ALOUETTE_BRANCH, ALOUETTE_TOP];

////////////////////////////////////////////////////////////////////

var STREET_VIEW_QUARRY_ROAD = "https://www.google.ca/maps/@49.3222685,-122.6884666,3a,75y,324.33h,81.26t/data=!3m6!1e1!3m4!1ss05gUd4rBFGXtSHuQgWiYg!2e0!7i13312!8i6656";
var QUARRY_ROAD_URL = '<a target="_blank" href="' + STREET_VIEW_QUARRY_ROAD + '">Street view</a>';
var BURKE_MOUNTAIN = {
  location_id: "BURKE_MOUNTAIN",
  lat: 49.32248622909634,
  lng: -122.68820262801762,
  pin_color: BURKE_COLOR,
  hover_color: BURKE_HOVER,
  title_text: 'Burke Mountain',
  content_text: QUARRY_ROAD_URL,
  title_style: 'color: ' + BURKE_COLOR + '; font-size: 16px; font-weight:bold; ',
  marker_svg: _gmapDragdropReact.MarkerIcons.TREES_PATH,
  can_move: CAN_MOVE_HIKES,

  group_type: true,
  group_lat: 49.3398785307147,
  group_lng: -122.69397985157242,
  group_zoom: 13,
  order_index: 0
};

var MUNRO_OUTLOOK_URL = "https://www.wanderung.ca/munro-lake-29-mar-2015/";
var MUNRO_OUTLOOK_IMG = _gmapDragdropReact.SvgButtons.standardMapImage("minnekhada.jpg");
var OUTLOOK_VIEW = {
  location_id: "OUTLOOK_VIEW",
  lat: 49.3327773014427,
  lng: -122.69172269045959,
  marker_svg: _gmapDragdropReact.MarkerIcons.BINOCULAR_PATH,
  can_move: CAN_MOVE_HIKES,
  pin_color: BURKE_COLOR,
  title_text: '<a href="' + MUNRO_OUTLOOK_URL + '" target="_blank">1/2 Way Outlook</a>',
  content_text: MUNRO_OUTLOOK_IMG,
  disable_auto_pan: true,
  order_index: 1
};
OUTLOOK_VIEW.extra_text = _gmapDragdropReact.KmsDistance.getKms(BURKE_MOUNTAIN, OUTLOOK_VIEW);

var MUNRO_SWIM_IMG = _gmapDragdropReact.SvgButtons.standardMapImage("swim_munro.jpg");
var MUNRO_LAKE = {
  location_id: "MUNRO_LAKE",
  lat: 49.34536057734585,
  lng: -122.67979222476134,
  pin_color: BURKE_COLOR,
  can_move: CAN_MOVE_HIKES,
  marker_svg: _gmapDragdropReact.MarkerIcons.SWIM_PATH,
  title_text: 'Swimming in Munro Lake',
  content_text: MUNRO_SWIM_IMG,
  disable_auto_pan: true,
  order_index: 2

};
MUNRO_LAKE.extra_text = _gmapDragdropReact.KmsDistance.getKms(OUTLOOK_VIEW, MUNRO_LAKE);

var MUNRO_LAKE_IMG = _gmapDragdropReact.SvgButtons.standardMapImage("munro_lake.jpg");
var MUNROE_LOOKOUT = {
  location_id: "MUNROE_LOOKOUT",
  lat: 49.34555039127768,
  lng: -122.69482802599669,
  pin_color: BURKE_COLOR,
  marker_svg: _gmapDragdropReact.MarkerIcons.BINOCULAR_PATH,
  can_move: CAN_MOVE_HIKES,
  title_text: 'Munroe Lake Lookout',
  content_text: MUNRO_LAKE_IMG,
  disable_auto_pan: true,
  order_index: 3

};
MUNROE_LOOKOUT.extra_text = _gmapDragdropReact.KmsDistance.getKms(MUNRO_LAKE, MUNROE_LOOKOUT);

var DENNET_LAKE_A_IMG = _gmapDragdropReact.SvgButtons.standardMapImage("dennet_lake.jpg");
var DENNETT_LAKE = {
  location_id: "DENNETT_LAKE",
  lat: 49.350952111708516,
  lng: -122.7028377646173,
  pin_color: BURKE_COLOR,
  marker_svg: _gmapDragdropReact.MarkerIcons.MAN_FISH,
  can_move: CAN_MOVE_HIKES,
  title_text: 'Dennett Lake',
  content_text: DENNET_LAKE_A_IMG,
  disable_auto_pan: true,
  order_index: 4

};
DENNETT_LAKE.extra_text = _gmapDragdropReact.KmsDistance.getKms(MUNRO_LAKE, DENNETT_LAKE);

var BURKE_MOUNTAIN_HIKE = [BURKE_MOUNTAIN, OUTLOOK_VIEW, MUNRO_LAKE, MUNROE_LOOKOUT, DENNETT_LAKE];

module.exports = {
  BURKE_MOUNTAIN_HIKE: BURKE_MOUNTAIN_HIKE, ALOUETTE_HIKE: ALOUETTE_HIKE, SWAN_HIKE: SWAN_HIKE, BASTION_HIKE: BASTION_HIKE
};

/***/ }),
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// gmap_hike_entry.jsx

var _gmapDragdropReact = __webpack_require__(0);

var hikes_data = __webpack_require__(5);var BURKE_MOUNTAIN_HIKE = hikes_data.BURKE_MOUNTAIN_HIKE,
    SWAN_HIKE = hikes_data.SWAN_HIKE,
    ALOUETTE_HIKE = hikes_data.ALOUETTE_HIKE,
    BASTION_HIKE = hikes_data.BASTION_HIKE;


function drawLineShape(from_location, to_locations) {
  var line_pattern = [];
  if (from_location.lat !== undefined) {
    line_pattern.push(from_location);
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = to_locations[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var a_to_location = _step.value;

        var order_index = a_to_location.order_index;
        line_pattern[order_index] = a_to_location;
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
  return line_pattern;
}

function getOutingDistanceLine(lat_lng_obj) {
  var next_location_id = 0;
  var order_index = lat_lng_obj.order_index;
  if (order_index > 0) {
    var previous_index = order_index - 1;
    var next_index = order_index + 1;

    var colored_locations = this.filterByPropertyValue('pin_color', lat_lng_obj.pin_color);
    for (var location_index in colored_locations) {
      var a_location = colored_locations[location_index];
      if (previous_index === a_location.order_index) {
        lat_lng_obj.extra_text = _gmapDragdropReact.KmsDistance.getKms(lat_lng_obj, a_location);
      } else if (next_index === a_location.order_index) {
        next_location_id = a_location.location_id;
      }
    }
  }
  return next_location_id;
}

function generateMemberLine() {}

var hike_locations = [BASTION_HIKE];
var lat_start = hike_locations[0][0].group_lat;
var lng_start = hike_locations[0][0].group_lng;
var zoom_start = hike_locations[0][0].group_zoom;

var hike_options = {
  change_rebounding: false,
  init_zoom: zoom_start,
  pin_scale: 0.05,
  pin_svg: _gmapDragdropReact.MarkerIcons.PIN_SVG_NO_HOLE,
  map_styles: _gmapDragdropReact.MapStyles.BLUE_WATER,
  lat_center: lat_start,
  lng_center: lng_start,
  sub_type: 'snake_line'
};
var GOOGLE_MAP_KEY = "AIzaSyCE3HSVtJ6yOEkHiBpyoR_iU00gqYgTkfk";
var gmap_hikes = ReactDOM.render(React.createElement(_gmapDragdropReact.GmapGroups, {
  google_map_key: GOOGLE_MAP_KEY,
  map_locations: hike_locations,
  map_options: hike_options
}), document.getElementById('gmap-hikes'));

gmap_hikes.drawShape = drawLineShape;
gmap_hikes.getOutingDistance = getOutingDistanceLine;
gmap_hikes.generateMember = generateMemberLine;

module.exports = {
  gmap_hikes: gmap_hikes, GmapDragDrop: _gmapDragdropReact.GmapDragDrop, SvgButtons: _gmapDragdropReact.SvgButtons,
  BURKE_MOUNTAIN_HIKE: BURKE_MOUNTAIN_HIKE, ALOUETTE_HIKE: ALOUETTE_HIKE, SWAN_HIKE: SWAN_HIKE, BASTION_HIKE: BASTION_HIKE
};

/***/ })
],[10]);