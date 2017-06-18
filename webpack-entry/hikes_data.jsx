'use strict'

// hikes_data.jsx
import {KmsDistance, SvgButtons, MarkerIcons} from 'gmap-dragdrop-react'

const BURKE_COLOR = '#060'
const BURKE_HOVER = '#080'

const ALOUETTE_COLOR = '#006'
const ALOUETTE_HOVER = '#008'

const SWAN_COLOR = '#600'
const SWAN_HOVER = '#800'

const BASTION_COLOR = '#606'
const BASTION_HOVER = '#808'

const CAN_MOVE_HIKES = false     /// CANNOT be TRUE, the indexes are not handled leading to unk-unks

const SWAN_STREETVIEW = "https://www.google.ca/maps/place/Buntzen+Lake/@49.3356061,-122.8560224,3a,75y,19.35h,84.44t/data=!3m7!1e1!3m5!1sR60c4Gjv--BjkYEWc3MM2w!2e0!6s%2F%2Fgeo0.ggpht.com%2Fcbk%3Fpanoid%3DR60c4Gjv--BjkYEWc3MM2w%26output%3Dthumbnail%26cb_client%3Dmaps_sv.tactile.gps%26thumb%3D2%26w%3D203%26h%3D100%26yaw%3D73.829185%26pitch%3D0%26thumbfov%3D100!7i13312!8i6656!4m5!3m4!1s0x54867c6c78e46731:0x3249c68d91b95fd5!8m2!3d49.3506255!4d-122.8598586"
const SWAN_PARKING = {
  location_id: "SWAN_PARKING"
  , lat: 49.33637893455591
  , lng: -122.85809945315123
  , pin_color: SWAN_COLOR
  , hover_color: SWAN_HOVER
  , title_text: 'Swan Falls Hike Parking'
  , title_style: `color: ${ALOUETTE_COLOR}; font-size: 16px; font-weight:bold; `
  , marker_svg: MarkerIcons.CAR_PARK
  , can_move: CAN_MOVE_HIKES

  , group_type: true
  , group_lat: 49.36042241229385
  , group_lng: -122.84934472292657
  , group_zoom: 13
  , order_index: 0
}

const swan_walk_url = "http://forums.clubtread.com/27-british-columbia/34939-tangled-summit-lindsay-lake-aug-12-2010-a.html"
let SWAN_BIKE = {
  location_id: "SWAN_BIKE"
  , lat: 49.338808405725935
  , lng: -122.85463373943537
  , marker_svg: MarkerIcons.BIKE_PATH
  , can_move: CAN_MOVE_HIKES
  , pin_color: SWAN_COLOR
  , title_text: `<a href="${swan_walk_url}" target="_blank">Dirt Road</a>`
  , content_text: `<a target="_blank" href="${SWAN_STREETVIEW}">Street View</a>`
  , disable_auto_pan: true
  , order_index: 1
}
SWAN_BIKE.extra_text = KmsDistance.getKms(SWAN_PARKING, SWAN_BIKE)

const swan_walk_img = "http://www.clubtread.com/forumPix/265000/265968.jpg"
let SWAN_WALK = {
  location_id: "SWAN_WALK"
  , lat: 49.368904718354486
  , lng: -122.8580779954791
  , marker_svg: MarkerIcons.HIKE_MAN
  , can_move: CAN_MOVE_HIKES
  , pin_color: SWAN_COLOR
  , title_text: `<a href="${swan_walk_img}" target="_blank">Get Off Dirt Road</a>`
  , disable_auto_pan: true
  , order_index: 2
}
SWAN_WALK.extra_text = KmsDistance.getKms(SWAN_BIKE, SWAN_WALK)

const swan_swim_url = "http://www.buntzenlake.ca/swan-falls-loop/#prettyPhoto[1385]/14/"
let SWAN_SWIM = {
  location_id: "SWAN_SWIM"
  , lat: 49.367376531251395
  , lng: -122.85191863627165
  , marker_svg: MarkerIcons.SWIM_PATH
  , can_move: CAN_MOVE_HIKES
  , pin_color: SWAN_COLOR
  , title_text: `<a href="${swan_swim_url}" target="_blank">Water Fall</a>`
  , disable_auto_pan: true
  , order_index: 3

}
SWAN_SWIM.extra_text = KmsDistance.getKms(SWAN_WALK, SWAN_SWIM)

const swan_peak_url = "http://fieldandforest.co/adventures/halvorlunden"
const swan_peak_img = SvgButtons.standardMapImage("swan_falls.jpg")
let SWAN_SUMMIT = {
  location_id: "SWAN_SUMMIT"
  , lat: 49.367926602842765
  , lng: -122.82982729375362
  , marker_svg: MarkerIcons.MOUNTAIN_PATH
  , can_move: CAN_MOVE_HIKES
  , pin_color: SWAN_COLOR
  , title_text: `<a href="${swan_peak_url}" target="_blank">Swan Falls Summit</a>`
  , content_text: swan_peak_img
  , disable_auto_pan: true
  , order_index: 4

}
SWAN_SUMMIT.extra_text = KmsDistance.getKms(SWAN_SWIM, SWAN_SUMMIT)

let SWAN_HIKE = [SWAN_PARKING, SWAN_BIKE, SWAN_WALK, SWAN_SWIM, SWAN_SUMMIT]

//////////////////////////////////////////////////////

const bastion_streetview = "https://www.google.ca/maps/@49.3108934,-122.8117843,3a,60y,324.13h,81.44t/data=!3m6!1e1!3m4!1syDCCPi9uoqBH4yoyrGhVLw!2e0!7i13312!8i6656"

const bastion_page = "http://www.buntzenlake.ca/east-bastion-trail-and-white-rock-viewpoint/"
const BASTION_PARKING = {
  location_id: "BASTION_PARKING"
  , lat: 49.31084084797064
  , lng: -122.81200837343931
  , pin_color: BASTION_COLOR
  , hover_color: BASTION_HOVER
  , title_text: `<a target="_blank" href="${bastion_page}">East Bastion Trail</a>`
  , content_text: `<a target="_blank" href="${bastion_streetview}">Stree View</a>`
  , title_style: `color: ${BASTION_COLOR}; font-size: 16px; font-weight:bold; `
  , marker_svg: MarkerIcons.CAR_PARK
  , can_move: CAN_MOVE_HIKES
  , group_type: true
  , group_lat: 49.33429588090191
  , group_lng: -122.80588768422605
  , group_zoom: 13
  , order_index: 0
}

const WOOD_PATHS_IMG = SvgButtons.standardMapImage("above_pumping_station.jpg")

let WOOD_PATHS = {
  location_id: "WOOD_PATHS"
  , lat: 49.31714967936051
  , lng: -122.81145952641964
  , marker_svg: MarkerIcons.TREES_PATH
  , can_move: CAN_MOVE_HIKES
  , pin_color: BASTION_COLOR
  , title_text: "Wood bike paths"
  , content_text: WOOD_PATHS_IMG
  , disable_auto_pan: true
  , order_index: 1

}
WOOD_PATHS.extra_text = KmsDistance.getKms(BASTION_PARKING, WOOD_PATHS)

const FORD_IMG = SvgButtons.standardMapImage("portage.jpg")
let FORD_STREAM = {
  location_id: "FORD_STREAM"
  , lat: 49.324422717095025
  , lng: -122.81592272222042
  , can_move: CAN_MOVE_HIKES
  , marker_svg: MarkerIcons.WATER_PATH
  , pin_color: BASTION_COLOR
  , title_text: "Ford small stream"
  , content_text: FORD_IMG
  , disable_auto_pan: true
  , order_index: 2

}
FORD_STREAM.extra_text = KmsDistance.getKms(WOOD_PATHS, FORD_STREAM)

const CYPRESS_IMG = SvgButtons.standardMapImage("cypress_lake.jpg")
const CYPRESS_LAKE_URL = "http://www.trailpeak.com/trail-Cypress-Lake-Coquitlam-near-Coquitlam-BC-5760"
let CYPRESS_LAKE = {
  location_id: "CYPRESS_LAKE"
  , lat: 49.336141236888444
  , lng: -122.8173141181469
  , marker_svg: MarkerIcons.SWIM_PATH
  , can_move: CAN_MOVE_HIKES
  , pin_color: BASTION_COLOR
  , title_text: `<a href="${CYPRESS_LAKE_URL}" target="_blank">Cypress Lake</a>`
  , content_text: CYPRESS_IMG
  , disable_auto_pan: true
  , order_index: 3

}
CYPRESS_LAKE.extra_text = KmsDistance.getKms(WOOD_PATHS, CYPRESS_LAKE)

const WHITE_ROCK_IMG = SvgButtons.standardMapImage("white_rock.jpg")
const WHITE_ROCK_URL = "http://www.buntzenlake.ca/east-bastion-trail-and-white-rock-viewpoint/"
let WHITE_ROCK = {
  location_id: "WHITE_ROCK"
  , lat: 49.34374699288048
  , lng: -122.82076310366392
  , marker_svg: MarkerIcons.MOUNTAIN_PATH
  , can_move: CAN_MOVE_HIKES
  , pin_color: BASTION_COLOR
  , title_text: `<a href="${WHITE_ROCK_URL}" target="_blank">White Rock Viewpoint</a>`
  , content_text: WHITE_ROCK_IMG
  , disable_auto_pan: true
  , order_index: 4

}
WHITE_ROCK.extra_text = KmsDistance.getKms(CYPRESS_LAKE, WHITE_ROCK)

const WEST_RAMPART_URL = "http://www.buntzenlake.ca/west-rampart-viewpoint/"
const WEST_RAMPART_IMG = SvgButtons.standardMapImage("coquitlam_lake.jpg")
let WEST_RAMPART = {
  location_id: "WEST_RAMPART"
  , lat: 49.34973010706198
  , lng: -122.816566452384
  , marker_svg: MarkerIcons.BINOCULAR_PATH
  , can_move: CAN_MOVE_HIKES
  , pin_color: BASTION_COLOR
  , title_text: `<a href="${WEST_RAMPART_URL}" target="_blank">West Rampart Viewpoint</a>`
  , content_text: WEST_RAMPART_IMG
  , disable_auto_pan: true
  , order_index: 5

}
WEST_RAMPART.extra_text = KmsDistance.getKms(WHITE_ROCK, WEST_RAMPART)
let BASTION_HIKE = [BASTION_PARKING, WOOD_PATHS, FORD_STREAM, CYPRESS_LAKE, WHITE_ROCK, WEST_RAMPART]

//////////////////////////////////////////////////////
const ALOUETTE_STREETVIEW = "https://www.google.ca/maps/@49.2755349,-122.5153901,3a,75y,8.66h,79.05t/data=!3m6!1e1!3m4!1sJRq3uqlbQJA-sQ-sm2zkNA!2e0!7i13312!8i6656"
const ALOUETTE_PDF = "http://www.env.gov.bc.ca/bcparks/explore/parkpgs/golden_ears/goldenears.pdf?v=1495820303049"
const ALOUETTE_MOUNTAIN = {
  location_id: "ALOUETTE_MOUNTAIN"
  ,
  lat: 49.27574284899156
  ,
  lng: -122.51520585268736
  ,
  pin_color: ALOUETTE_COLOR
  ,
  hover_color: ALOUETTE_HOVER
  ,
  title_text: 'Alouette Mountain Hike'
  ,
  content_text: `<a target="_blank" href="${ALOUETTE_STREETVIEW}">Street view</a> <a target="_blank" href="${ALOUETTE_PDF}">Map</a>`
  ,
  title_style: `color: ${ALOUETTE_COLOR}; font-size: 16px; font-weight:bold; `
  ,
  marker_svg: MarkerIcons.HIKE_MAN
  ,
  can_move: CAN_MOVE_HIKES

  ,
  group_type: true
  ,
  group_lat: 49.327440140182276
  ,
  group_lng: -122.49846123126021
  ,
  group_zoom: 12
  ,
  order_index: 0
}

let ALOUETTE_PARKING = {
  location_id: "ALOUETTE_PARKING"
  , lat: 49.274636884013546
  , lng: -122.52087973058224
  , marker_svg: MarkerIcons.CAR_PARK
  , can_move: CAN_MOVE_HIKES
  , pin_color: ALOUETTE_COLOR
  , disable_auto_pan: true
  , order_index: 1
}
ALOUETTE_PARKING.extra_text = KmsDistance.getKms(ALOUETTE_MOUNTAIN, ALOUETTE_PARKING)

const ALOUETTE_VIEW = "http://forums.clubtread.com/27-british-columbia/4607-alouette-mountain-feb-22-2004-a.html"
let ALOUETTE_LOOKOUT = {
  location_id: "ALOUETTE_LOOKOUT"
  , lat: 49.28843426679796
  , lng: -122.5175954796091
  , marker_svg: MarkerIcons.BINOCULAR_PATH
  , can_move: CAN_MOVE_HIKES
  , pin_color: ALOUETTE_COLOR
  , title_text: `<a href="http://www.clubtread.com/forumPix/13000/13476.jpg" target="_blank">East Lookout</a>`
  , content_text: `<a target="_blank" href="${ALOUETTE_VIEW}">info</a>`
  , disable_auto_pan: true
  , order_index: 2
}
ALOUETTE_LOOKOUT.extra_text = KmsDistance.getKms(ALOUETTE_PARKING, ALOUETTE_LOOKOUT)

const BEAUTIFUL_IMG = SvgButtons.standardMapImage("jelly_eggs.jpg")
let BEAUTIFUL_LAKE = {
  location_id: "BEAUTIFUL_LAKE"
  , lat: 49.309791629136406
  , lng: -122.51212215051055
  , marker_svg: MarkerIcons.BINOCULAR_PATH
  , can_move: CAN_MOVE_HIKES
  , pin_color: ALOUETTE_COLOR
  , title_text: "Frog Eggs at Lake Beautiful"
  , content_text: BEAUTIFUL_IMG
  , disable_auto_pan: true
  , order_index: 3
}
BEAUTIFUL_LAKE.extra_text = KmsDistance.getKms(ALOUETTE_LOOKOUT, BEAUTIFUL_LAKE)

const ALOUETTE_BRANCH_LEFT = "http://3.bp.blogspot.com/_uP00YGymb-8/SkeXVjxrTSI/AAAAAAAAA8E/tvyc3g-eDEk/s400/all+008b.JPG"
let ALOUETTE_BRANCH = {
  location_id: "ALOUETTE_BRANCH"
  , lat: 49.31204392473146
  , lng: -122.50492310151458
  , marker_svg: MarkerIcons.LEFT_PATH
  , can_move: CAN_MOVE_HIKES
  , pin_color: ALOUETTE_COLOR
  , title_text: `<a href="${ALOUETTE_BRANCH_LEFT}" target="_blank">Branch to Left</a>`
  , disable_auto_pan: true
  , order_index: 4
}
ALOUETTE_BRANCH.extra_text = KmsDistance.getKms(BEAUTIFUL_LAKE, ALOUETTE_BRANCH)

const ALOUETTE_TOP_IMG = SvgButtons.standardMapImage("maggie_alouette.jpg")
const ALOUETTE_TOP_LINK = "https://www.vancouvertrails.com/contest/2013/gallery/photos/20130801_00_29_14_alouettelaketopviewingoldenearsparkjpeg.jpg"
let ALOUETTE_TOP = {
  location_id: "ALOUETTE_TOP"
  , lat: 49.33594548500625
  , lng: -122.49753378331661
  , marker_svg: MarkerIcons.MOUNTAIN_PATH
  , can_move: CAN_MOVE_HIKES
  , pin_color: ALOUETTE_COLOR
  , title_text: `<a href="${ALOUETTE_TOP_LINK}" target="_blank">Top of Alouette</a>`
  , content_text: ALOUETTE_TOP_IMG
  , disable_auto_pan: true
  , order_index: 5
}
ALOUETTE_TOP.extra_text = KmsDistance.getKms(ALOUETTE_BRANCH, ALOUETTE_TOP)

let ALOUETTE_HIKE = [ALOUETTE_MOUNTAIN, ALOUETTE_PARKING, ALOUETTE_LOOKOUT, BEAUTIFUL_LAKE, ALOUETTE_BRANCH, ALOUETTE_TOP]

////////////////////////////////////////////////////////////////////

const STREET_VIEW_QUARRY_ROAD = "https://www.google.ca/maps/@49.3222685,-122.6884666,3a,75y,324.33h,81.26t/data=!3m6!1e1!3m4!1ss05gUd4rBFGXtSHuQgWiYg!2e0!7i13312!8i6656"
const QUARRY_ROAD_URL = `<a target="_blank" href="${STREET_VIEW_QUARRY_ROAD}">Street view</a>`
const BURKE_MOUNTAIN = {
  location_id: "BURKE_MOUNTAIN"
  , lat: 49.32248622909634
  , lng: -122.68820262801762
  , pin_color: BURKE_COLOR
  , hover_color: BURKE_HOVER
  , title_text: 'Burke Mountain'
  , content_text: QUARRY_ROAD_URL
  , title_style: `color: ${BURKE_COLOR}; font-size: 16px; font-weight:bold; `
  , marker_svg: MarkerIcons.TREES_PATH
  , can_move: CAN_MOVE_HIKES

  , group_type: true
  , group_lat: 49.3398785307147
  , group_lng: -122.69397985157242
  , group_zoom: 13
  , order_index: 0
}

const MUNRO_OUTLOOK_URL = "https://www.wanderung.ca/munro-lake-29-mar-2015/"
const MUNRO_OUTLOOK_IMG = SvgButtons.standardMapImage("minnekhada.jpg")
let OUTLOOK_VIEW = {
  location_id: "OUTLOOK_VIEW"
  , lat: 49.3327773014427
  , lng: -122.69172269045959
  , marker_svg: MarkerIcons.BINOCULAR_PATH
  , can_move: CAN_MOVE_HIKES
  , pin_color: BURKE_COLOR
  , title_text: `<a href="${MUNRO_OUTLOOK_URL}" target="_blank">1/2 Way Outlook</a>`
  , content_text: MUNRO_OUTLOOK_IMG
  , disable_auto_pan: true
  , order_index: 1
}
OUTLOOK_VIEW.extra_text = KmsDistance.getKms(BURKE_MOUNTAIN, OUTLOOK_VIEW)

const MUNRO_SWIM_IMG = SvgButtons.standardMapImage("swim_munro.jpg")
let MUNRO_LAKE = {
  location_id: "MUNRO_LAKE"
  , lat: 49.34536057734585
  , lng: -122.67979222476134
  , pin_color: BURKE_COLOR
  , can_move: CAN_MOVE_HIKES
  , marker_svg: MarkerIcons.SWIM_PATH
  , title_text: 'Swimming in Munro Lake'
  , content_text: MUNRO_SWIM_IMG
  , disable_auto_pan: true
  , order_index: 2

}
MUNRO_LAKE.extra_text = KmsDistance.getKms(OUTLOOK_VIEW, MUNRO_LAKE)

const MUNRO_LAKE_IMG = SvgButtons.standardMapImage("munro_lake.jpg")
let MUNROE_LOOKOUT = {
  location_id: "MUNROE_LOOKOUT"
  , lat: 49.34555039127768
  , lng: -122.69482802599669
  , pin_color: BURKE_COLOR
  , marker_svg: MarkerIcons.BINOCULAR_PATH
  , can_move: CAN_MOVE_HIKES
  , title_text: 'Munroe Lake Lookout'
  , content_text: MUNRO_LAKE_IMG
  , disable_auto_pan: true
  , order_index: 3

}
MUNROE_LOOKOUT.extra_text = KmsDistance.getKms(MUNRO_LAKE, MUNROE_LOOKOUT)

const DENNET_LAKE_A_IMG = SvgButtons.standardMapImage("dennet_lake.jpg")
let DENNETT_LAKE = {
  location_id: "DENNETT_LAKE"
  , lat: 49.350952111708516
  , lng: -122.7028377646173
  , pin_color: BURKE_COLOR
  , marker_svg: MarkerIcons.MAN_FISH
  , can_move: CAN_MOVE_HIKES
  , title_text: 'Dennett Lake'
  , content_text: DENNET_LAKE_A_IMG
  , disable_auto_pan: true
  , order_index: 4

}
DENNETT_LAKE.extra_text = KmsDistance.getKms(MUNRO_LAKE, DENNETT_LAKE)

let BURKE_MOUNTAIN_HIKE = [BURKE_MOUNTAIN, OUTLOOK_VIEW, MUNRO_LAKE, MUNROE_LOOKOUT, DENNETT_LAKE]

module.exports = {
  BURKE_MOUNTAIN_HIKE, ALOUETTE_HIKE, SWAN_HIKE, BASTION_HIKE
}