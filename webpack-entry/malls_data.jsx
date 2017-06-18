'use strict'

// malls_data.jsx

const CAN_MOVE_MALLS = true

const RICHMOND_COLOR = "#faa"
const LANSDOWNE_COLOR = "#f55"
const ABERDEEN_COLOR = "#f00"
const PARK_ROYAL_COLOR = "#0f0"
const CAPILANO_COLOR = "#5f5"
const METROPOLIS_COLOR = "#00f"
const BRENTWOOD_COLOR = "#55f"
const LOUGHEED_COLOR = "#aaf"
const CENTRAL_CITY_COLOR = "#ff0"
const GUILDFORD_COLOR = "#ff5"
const PACIFIC_COLOR = "#0ff"
const OAKRIDGE_COLOR = "#5ff"
const ROYAL_CITY_COLOR = "#f0f"
const COQUITLAM_COLOR = "#888"

const GUILDFORD = {
  location_id: "GUILDFORD"
  , lat: 49.190394623255415
  , lng: -122.80325320059376
  , pin_color: GUILDFORD_COLOR
  , title_text: "Guildford"
  , can_move: CAN_MOVE_MALLS
}

const CENTRAL_CITY = {
  location_id: "CENTRAL_CITY"
  , lat: 49.18722518632946
  , lng: -122.84885075384693
  , pin_color: CENTRAL_CITY_COLOR
  , title_text: "Central City"
  , can_move: CAN_MOVE_MALLS
}

const COQUITLAM = {
  location_id: "COQUITLAM"
  , lat: 49.28033907405998
  , lng: -122.79818918997364
  , pin_color: COQUITLAM_COLOR
  , title_text: "Coquitlam"
  , can_move: CAN_MOVE_MALLS
}

const LOUGHEED = {
  location_id: "LOUGHEED"
  , lat: 49.25123553530833
  , lng: -122.89551046187
  , pin_color: LOUGHEED_COLOR
  , title_text: "Lougheed"
  , can_move: CAN_MOVE_MALLS
}

const BRENTWOOD = {
  location_id: "BRENTWOOD"
  , lat: 49.26825032258869
  , lng: -123.00019171530323
  , pin_color: BRENTWOOD_COLOR
  , title_text: "Brentwood"
  , can_move: CAN_MOVE_MALLS
}

const METROPOLIS = {
  location_id: "METROPOLIS"
  , lat: 49.22626298069146
  , lng: -122.99864676291065
  , pin_color: METROPOLIS_COLOR
  , title_text: "Metropolis"
  , can_move: CAN_MOVE_MALLS
}

const ROYAL_CITY = {
  location_id: "ROYAL_CITY"
  , lat: 49.21303366500012
  , lng: -122.92149139788904
  , pin_color: ROYAL_CITY_COLOR
  , title_text: "Royal City"
  , can_move: CAN_MOVE_MALLS
}

const RICHMOND = {
  location_id: "RICHMOND"
  , lat: 49.165543056364825
  , lng: -123.13828898814478
  , pin_color: RICHMOND_COLOR
  , title_text: "Richmond Centre"
  , can_move: CAN_MOVE_MALLS
}

const LANSDOWNE = {
  location_id: "LANSDOWNE"
  , lat: 49.17523728713617
  , lng: -123.1327636375741
  , pin_color: LANSDOWNE_COLOR
  , title_text: "Lansdowne"
  , can_move: CAN_MOVE_MALLS
}

const ABERDEEN = {
  location_id: "ABERDEEN"
  , lat: 49.18394158933542
  , lng: -123.13495232013025
  , pin_color: ABERDEEN_COLOR
  , title_text: "Aberdeen"
  , can_move: CAN_MOVE_MALLS
}

const PARK_ROYAL = {
  location_id: "PARK_ROYAL"
  , lat: 49.326145309414855
  , lng: -123.13733412173548
  , pin_color: PARK_ROYAL_COLOR
  , title_text: "Park Royal"
  , can_move: CAN_MOVE_MALLS
}

const CAPILANO = {
  location_id: "CAPILANO"
  , lat: 49.321655891212075
  , lng: -123.09966517833033
  , pin_color: CAPILANO_COLOR
  , title_text: "Capilano"
  , can_move: CAN_MOVE_MALLS
}

const PACIFIC = {
  location_id: "PACIFIC"
  , lat: 49.28224054113661
  , lng: -123.11931504157343
  , pin_color: PACIFIC_COLOR
  , title_text: "Pacific Centre"
  , can_move: CAN_MOVE_MALLS
}

const OAKRIDGE = {
  location_id: "OAKRIDGE"
  , lat: 49.23249560178528
  , lng: -123.11870886233606
  , pin_color: OAKRIDGE_COLOR
  , title_text: "Oakridge Centre"
  , can_move: CAN_MOVE_MALLS
}

module.exports = {
  GUILDFORD, CENTRAL_CITY, COQUITLAM, LOUGHEED, BRENTWOOD, METROPOLIS, ROYAL_CITY, RICHMOND,
  LANSDOWNE, ABERDEEN, PARK_ROYAL, CAPILANO, PACIFIC, OAKRIDGE
}