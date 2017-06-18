'use strict'

// activities_data.jsx

import {KmsDistance, SvgButtons, MarkerIcons} from 'gmap-dragdrop-react'

const STEVESTON_COLOR = "#0101ff"
const NORTH_SHORE_COLOR = '#148aa5'
const SASAMAT_COLOR = "#ff01ff"
const STANLEY_COLOR = '#ff0101'

const CAN_MOVE_ACTIVITIES = true

const STANLEY_PARK = {
  location_id: "STANLEY_PARK"
  , lat: 49.3006
  , lng: -123.125
  , pin_color: STANLEY_COLOR
  , title_text: 'Visit Stanley Park'
  , group_type: true
  , title_style: `color: ${STANLEY_COLOR}; font-size: 16px; font-weight:bold; `
  , marker_svg: MarkerIcons.PARK_PATH
  , can_move: CAN_MOVE_ACTIVITIES
  , group_lat: 49.29999460222812
  , group_lng: -123.12838696340592
  , group_zoom: 16
}

let VANCOUVER_AQUARIUM = {
  location_id: "VANCOUVER_AQUARIUM"
  , lat: 49.301028448370104
  , lng: -123.1303740539247
  , pin_color: STANLEY_COLOR
  , marker_svg: MarkerIcons.ORCA_PATH
  , can_move: CAN_MOVE_ACTIVITIES
  , content_text: 'Vancouver Aquarium'
}
VANCOUVER_AQUARIUM.extra_text = KmsDistance.getKms(STANLEY_PARK, VANCOUVER_AQUARIUM)

let THEATRE_STARS = {
  location_id: "THEATRE_STARS"
  , lat: 49.29859374164774
  , lng: -123.13408623120131
  , pin_color: STANLEY_COLOR
  , marker_svg: MarkerIcons.THEATRE_PATH
  , can_move: CAN_MOVE_ACTIVITIES
  , title_text: SvgButtons.THEATRE_SVG
}
THEATRE_STARS.extra_text = KmsDistance.getKms(STANLEY_PARK, THEATRE_STARS)

let ROSE_GARDEN = {
  location_id: "rose_garden"
  , lat: 49.298748185948476
  , lng: -123.13655332352153
  , pin_color: STANLEY_COLOR
  , marker_svg: MarkerIcons.FLOWER_PATH
  , can_move: CAN_MOVE_ACTIVITIES
  , title_text: 'Rose Garden'
}
ROSE_GARDEN.extra_text = KmsDistance.getKms(STANLEY_PARK, ROSE_GARDEN)

let TOTEM_POLES = {
  location_id: "totem_poles"
  , lat: 49.29945424568891
  , lng: -123.12079550987937
  , pin_color: STANLEY_COLOR
  , marker_svg: MarkerIcons.TOTEM_PATH
  , can_move: CAN_MOVE_ACTIVITIES
  , title_text: 'Totem Poles'
}
TOTEM_POLES.extra_text = KmsDistance.getKms(STANLEY_PARK, TOTEM_POLES)

let STANLEY_PARK_OUTING = [STANLEY_PARK, VANCOUVER_AQUARIUM, THEATRE_STARS, ROSE_GARDEN, TOTEM_POLES]

const NORTH_SHORE = {
  location_id: "north_shore"
  , lat: 49.35643927612489
  , lng: -123.0685231089592
  , pin_color: NORTH_SHORE_COLOR
  , title_text: "Visit the <a href='http://vancouversnorthshore.com/'>North Shore</a>"
  , title_style: `color: ${NORTH_SHORE_COLOR}; font-size: 16px; font-weight:bold; `

  , marker_svg: MarkerIcons.WATER_PATH
  , can_move: CAN_MOVE_ACTIVITIES
  , group_type: true
  , group_lat: 49.367238543988286
  , group_lng: -123.0699056749604
  , group_zoom: 13
}

let LYNN_CREEK = {
  location_id: "Lynn Creek Ecology"
  , lat: 49.3469483290511
  , lng: -123.01933489674076
  , marker_svg: MarkerIcons.LEAF_PATH
  , can_move: CAN_MOVE_ACTIVITIES
  , pin_color: NORTH_SHORE_COLOR
  , title_text: "<a href='http://www.lynncanyonecologycentre.ca/' target='_blank'>Lynn Canyon Ecology Centre</a>"
  , content_text: ''
  , order_index: 1
}

let SUSPENSION_BRIDGE = {
  location_id: "Capilano Suspension Bridge"
  , lat: 49.34431680519281
  , lng: -123.1154057370374
  , marker_svg: MarkerIcons.TREES_PATH
  , can_move: CAN_MOVE_ACTIVITIES

  , pin_color: NORTH_SHORE_COLOR
  , title_text: `<a href='https://www.capbridge.com/' target='_blank'>Capilano Suspension Bridge</a>`
  , content_text: SvgButtons.BRIDGE_SVG
  , order_index: 3
}

const HATCHERY_URL = "https://www.tripadvisor.ca/Attraction_Review-g181717-d155847-Reviews-Capilano_Salmon_Hatchery-North_Vancouver_British_Columbia.html"
let HATCHERY = {
  location_id: "HATCHERY"
  , lat: 49.35890968429735
  , lng: -123.11046738078812
  , marker_svg: MarkerIcons.PLAIN_FISH
  , can_move: CAN_MOVE_ACTIVITIES
  , pin_color: NORTH_SHORE_COLOR
  , title_text: `<a href='${HATCHERY_URL}' target='_blank'>Capilano River Hatchery</a>`

  , order_index: 4
}

let GROUSE = {
  location_id: "Grouse"
  , lat: 49.38048692077353
  , lng: -123.08179818027958
  , marker_svg: MarkerIcons.GONDOLA_PATH
  , can_move: CAN_MOVE_ACTIVITIES
  , pin_color: NORTH_SHORE_COLOR
  , title_text: "<a href='https://www.grousemountain.com/' target='_blank'>Grouse Mountain</a>"
  , order_index: 2
}

let NORTH_SHORE_OUTING = [NORTH_SHORE, LYNN_CREEK, SUSPENSION_BRIDGE, HATCHERY, GROUSE]

const STEVESTON = {
  location_id: "steveston"
  , lat: 49.125515219688346
  , lng: -123.19314694541674
  , pin_color: STEVESTON_COLOR
  , title_text: "Visit <a href='https://www.visitrichmondbc.com/things-to-do/steveston-village/'>Steveston</a>"
  , title_style: `color: ${STEVESTON_COLOR}; font-size: 16px; font-weight:bold; `

  , marker_svg: MarkerIcons.CAR_PARK
  , can_move: CAN_MOVE_ACTIVITIES
  , group_type: true
  , group_lat: 49.12533062792256
  , group_lng: -123.18892228671896
  , group_zoom: 16

}

let GARRY_POINT_PARK = {
  location_id: "Garry Point Park"
  ,
  lat: 49.12450214052779
  ,
  lng: -123.19713597062844
  ,
  marker_svg: MarkerIcons.BINOCULAR_PATH
  ,
  can_move: CAN_MOVE_ACTIVITIES
  ,
  pin_color: STEVESTON_COLOR
  ,
  title_text: "<a href='http://www.richmond.ca/parks/parks/SigParks/parkinfo/park.aspx?ID=17' target='_blank'>Garry Point Park</a>"
  ,
  order_index: 1
}
GARRY_POINT_PARK.extra_text = KmsDistance.getKms(STEVESTON, GARRY_POINT_PARK)

let MARYS_ICE_CREAM = {
  location_id: "Marys Ice Cream"
  , lat: 49.12453021459576
  , lng: -123.18427506512461

  , marker_svg: MarkerIcons.CONE_PATH
  , can_move: CAN_MOVE_ACTIVITIES
  , pin_color: STEVESTON_COLOR
  , content_text: "Mary's Ice Cream"
  , order_index: 3
}
MARYS_ICE_CREAM.extra_text = KmsDistance.getKms(STEVESTON, MARYS_ICE_CREAM)

let SEABREEZE_ADVENTURES = {
  location_id: "Seabreeze Adventures"
  , lat: 49.123649970228
  , lng: -123.18069116765884
  , marker_svg: MarkerIcons.ORCA_PATH
  , can_move: CAN_MOVE_ACTIVITIES
  , pin_color: STEVESTON_COLOR
  , title_text: "<a href='http://www.seabreezeadventures.ca/' target='_blank'>Steveston Seabreeze</a>"
  , content_text: "Eco-Tours"
  , order_index: 4
}
SEABREEZE_ADVENTURES.extra_text = KmsDistance.getKms(STEVESTON, SEABREEZE_ADVENTURES)

let GEORGIA_CANNERY = {
  location_id: "Georgia Cannery"
  , lat: 49.12551316365467
  , lng: -123.18719284231094
  , pin_color: STEVESTON_COLOR
  , marker_svg: MarkerIcons.FISH_HOOK
  , can_move: CAN_MOVE_ACTIVITIES
  , title_text: "<a href='http://gulfofgeorgiacannery.org/' target='_blank'> Gulf of Georgia Cannery</a>"
  , content_text: 'Historical Site'
  , order_index: 2
}
GEORGIA_CANNERY.extra_text = KmsDistance.getKms(STEVESTON, GEORGIA_CANNERY)
let STEVESTON_OUTING = [STEVESTON, GARRY_POINT_PARK, GEORGIA_CANNERY, MARYS_ICE_CREAM, SEABREEZE_ADVENTURES]

const VAN_TRAILS_SASAMAT = "https://www.vancouvertrails.com/trails/sasamat-lake/"

const SASAMAT = {
  location_id: "sasamat"
  , lat: 49.31833185480837
  , lng: -122.89149357226643
  , pin_color: SASAMAT_COLOR
  , marker_svg: MarkerIcons.CAR_PARK
  , can_move: CAN_MOVE_ACTIVITIES
  , title_style: `color: ${SASAMAT_COLOR}; font-size: 16px; font-weight:bold; `
  , title_text: `Visit <a href='${VAN_TRAILS_SASAMAT}' target='_blank'>Sasamat Lake</a>`
  , group_type: true
  , group_lat: 49.322732829467164
  , group_lng: -122.88177324679653
  , group_zoom: 15
}

const FISH_URL = "http://www.fishingwithrod.com/articles/region_two/sasamat_lake.html"
let SASAMAT_FISH = {
  location_id: "sasamat_fish"
  , lat: 49.316289665483986
  , lng: -122.88698746112141
  , pin_color: SASAMAT_COLOR
  , marker_svg: MarkerIcons.MAN_FISH
  , can_move: CAN_MOVE_ACTIVITIES
  , title_text: `<a href='${FISH_URL}' target='_blank'>Fish at Sasamat</a>`
}
SASAMAT_FISH.extra_text = KmsDistance.getKms(SASAMAT, SASAMAT_FISH)

///

const WHITE_PINE_URL = "https://www.tripadvisor.ca/Attraction_Review-g815383-d3923634-Reviews-White_Pine_Beach_Sasamat_Lake-Port_Moody_British_Columbia.html"
const SASAMAT_SWIM = {
  location_id: "sasamat swim"
  , lat: 49.32218762262639
  , lng: -122.88518630109843
  , pin_color: SASAMAT_COLOR
  , marker_svg: MarkerIcons.SWIM_PATH
  , can_move: CAN_MOVE_ACTIVITIES
  , title_text: `<a href='${WHITE_PINE_URL}' target='_blank'> White Pine Beach</a>`

}
SASAMAT_SWIM.extra_text = KmsDistance.getKms(SASAMAT, SASAMAT_SWIM)

const BUNTZEN_RIDGE_TRAIL_HREF = '<a href="http://trailpeak.com/trail-White-Pine-to-Buntzen-Lake-near-Coquitlam-BC-5209" target="_blank">Buntzen Ridge Trail Hike</a>'
const BUNTZEN_RIDGE_TRAIL = {
  location_id: "sasamat BUNTZEN_RIDGE_TRAIL"
  , lat: 49.325916969909045
  , lng: -122.8747565880135
  , pin_color: SASAMAT_COLOR
  , title_text: BUNTZEN_RIDGE_TRAIL_HREF
  , marker_svg: MarkerIcons.HIKE_MAN
  , can_move: CAN_MOVE_ACTIVITIES
  , content_text: 'Buntzen Ridge Trail'
}
BUNTZEN_RIDGE_TRAIL.extra_text = KmsDistance.getKms(SASAMAT, BUNTZEN_RIDGE_TRAIL)
let SASAMAT_OUTING = [SASAMAT, SASAMAT_FISH, BUNTZEN_RIDGE_TRAIL, SASAMAT_SWIM]

module.exports = {
  NORTH_SHORE_OUTING, STEVESTON_OUTING, SASAMAT_OUTING, STANLEY_PARK_OUTING
}