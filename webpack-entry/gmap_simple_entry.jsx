'use strict'

import {GmapDragDrop, MarkerIcons} from 'gmap-dragdrop-react'

const CYPRESS = {lat: 49.39659076296729, lng: -123.2044346158587, can_move: false, title_text: "  Cypress Mountain"}
const GROUSE = {lat: 49.38013738002717, lng: -123.08255503822198, can_move: false, title_text: "  Grouse Mountain"}
const SEYMOUR = {lat: 49.36750710612791, lng: -122.94865916419855, can_move: false, title_text: "  Mount Seymour"}

const GOOGLE_MAP_KEY = "AIzaSyCE3HSVtJ6yOEkHiBpyoR_iU00gqYgTkfk"

ReactDOM.render(<GmapDragDrop
        google_map_key={GOOGLE_MAP_KEY}
        map_locations={[CYPRESS, GROUSE, SEYMOUR]}
        map_options={{pin_svg: MarkerIcons.SKI_ICON_PATH, gestureHandling:'none'}}
/>, document.getElementById('gmap-simple-id'))


