

#GmapGroups Component


Displays groups of locations, in a star or line pattern. New locations are created when the central star pattern's icon is dragged. Distances in kms can be automatically displayed.

 ![visual explanation](https://gddr.herokuapp.com/images/group_explain.png)

## Install

Child class of GmapDragDrop.


## JSX - Star Pattern

	import {GmapDragDrop, GmapGroups} from 'gmap-dragdrop-react'

	const STANLEY_PARK = { lat: 49.300
	                     , lng: -123.125
	                     , group_type: true
	                     , group_lat: 49.299
	                     , group_lng: -123.128  }

	const VANCOUVER_AQUARIUM = { lat: 49.301
                               , lng: -123.130	}

	const ROSE_GARDEN = { lat: 49.298
                        , lng: -123.136	}

	let gmap_star = ReactDOM.render(<GmapGroups
        google_map_key={"AIzaSyCE3HSVtJ6yOEkHiBpyoR_iU00gqYgTkfk"}
        map_locations={[STANLEY_PARK, VANCOUVER_AQUARIUM, ROSE_GARDEN]}
	/>, document.getElementById('gmap-star'))

	gmap_star.drawShape = function drawShapeStar(from_location, to_locations){...}
	gmap_star.getOutingDistance = function getOutingDistanceStar(lat_lng_obj){...}
	gmap_star.generateMember = function generateMemberStar(lat_lng_obj){...}


## JSX - Line Pattern

	import {GmapDragDrop, GmapGroups} from 'gmap-dragdrop-react'

	const SWAN_PARKING = { lat: 49.336
	                     , lng: -122.858
	                     , group_type: true
	                     , group_lat: 49.360
	                     , group_lng: -122.849  }

	const SWAN_BIKE = { lat: 49.338
                      , lng: -122.854	}

	const SWAN_WALK = { lat: 49.368
                      , lng: -122.858	}

	let gmap_line = ReactDOM.render(<GmapGroups
        google_map_key={"AIzaSyCE3HSVtJ6yOEkHiBpyoR_iU00gqYgTkfk"}
        map_locations={[SWAN_PARKING, SWAN_BIKE, SWAN_WALK]}
	/>, document.getElementById('gmap-line'))

	gmap_line.drawShape = function drawShapeLine(from_location, to_locations){...}
	gmap_line.getOutingDistance = function getOutingDistanceLine(lat_lng_obj){...}
	gmap_line.generateMember = function generateMemberLine(lat_lng_obj){...}

### drawShape(from\_location, to\_locations) 
>Param: `starting_location, rest_locations`    
Puts locations into an array to give rise to a shape

			gmap_line.drawShape(STANLEY_PARK, [VANCOUVER_AQUARIUM, ROSE_GARDEN])

### getOutingDistance(lat\_lng\_obj) 
>Param: `a_location`    
Calculate distances from star origin, or from previous line location

			gmap_line.getOutingDistance(VANCOUVER_AQUARIUM)

### generateMember(lat\_lng\_obj) 
>Param: `a_location`    
Add a location to a group on the map.

			gmap_line.generateMember(VANCOUVER_AQUARIUM)

### drawPolyline(pin_color) 
>Param: `HTML color`    
Draws lines between locations on map in a star or line shape.

			gmap_line.drawPolyline('#ff00ff')

### locationsClearAll() 
>Clears all markers and their respective joining lines.

			gmap_line.locationsClearAll() 

### deleteMember(lat\_lng\_obj) 
>Param: `marker_data` 
Deletes location and re-draws the shape. 

			gmap_line.deleteMember({marker_data}) 

## Created by

[Steen Hansen](https://github.com/steenhansen)

## License

MIT © 
