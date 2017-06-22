#Google Maps Drag and Drop with React Component

## GmapDragDrop methods

### static browserFactory(html\_container\_id, dynamic\_properties)
>Returns: `React component reference`  
Dynamically create a Google Map in browser.


		window.GmapDragDrop = GLOBAL_WEBPACK.gmap_entry.GmapDragDrop
		const dynamic_properties = {
	    	google_map_key: "AIzaSyCE3HSVtJ6yOEkHiBpyoR_iU00gqYgTkfk"
	    	, map_locations: [ {lat: 12.34, lng: 12.34} ]
	  	}
	  	let dynamic_gmap = GmapDragDrop.browserFactory('dynamic-id', dynamic_properties)


### static browserDestroy(dynamic\_gmap)
>Param: `React component reference`     
Dynamically destroy a Google Map created by browserFactory() in browser.

		window.GmapDragDrop = GLOBAL_WEBPACK.gmap_entry.GmapDragDrop
	  	GmapDragDrop.browserDestroy(dynamic_gmap)



### static validLatLng( { lat:number, lng:number } ) 
>Param: `{lat:number, lng:number}`
Returns: `boolean`    
Checks if object is a valid latitude/longitude pair.
	
	import {GmapDragDrop} from 'gmap-dragdrop-react'
	if (GmapDragDrop.validLatLng({lat:12345.78, lng:123.456})){
		console.log('Invalid Latitude')
	}

### getMap()
>Returns: `Google Maps reference`   
Get reference to the actual Google Map in component. So can do direct call to underlying Google Map.

	import {GmapDragDrop} from 'gmap-dragdrop-react'
	let gmap_drag_drop_instance = ReactDOM.render(<GmapDragDrop  
				google_map_key ={"AIzaSyCE3HSVtJ6yOEkHiBpyoR_iU00gqYgTkfk"}  
				map_locations={ [ {lat: 12.34, lng: 12.34} ] }  
			/>, document.getElementById('gmap-container-id'))
	let google_map = gmap_drag_drop_instance.getMap()
	google_map.setClickableIcons(true)  // direct call to underlying Google Map



### numberLocations()
>Returns: `Integer`  
How many location markers are on the map.

	import {GmapDragDrop} from 'gmap-dragdrop-react'
	let gmap_drag_drop_instance = ReactDOM.render(<GmapDragDrop  
				google_map_key ={"AIzaSyCE3HSVtJ6yOEkHiBpyoR_iU00gqYgTkfk"}  
				map_locations={ [ {lat: 12.34, lng: 12.34} ] }  
			/>, document.getElementById('gmap-container-id'))
	let number_locations = gmap_drag_drop_instance.numberLocations()
	console.log('There are currently ' + number_markers + ' on the map')



### reboundMap(location_array = false)
>Param: `array of location objects`    
When called with an array of lat/lng pairs, then the map is reset to show all these locations ignoring any existing markers on the map. If called with nothing then map is reset to show all markers on map. 

	import {GmapDragDrop} from 'gmap-dragdrop-react'
	let gmap_drag_drop_instance = ReactDOM.render(<GmapDragDrop  
				google_map_key ={"AIzaSyCE3HSVtJ6yOEkHiBpyoR_iU00gqYgTkfk"}  
				map_locations={ [ {lat: 12.34, lng: 12.34} ] }  
			/>, document.getElementById('gmap-container-id'))
	gmap_drag_drop_instance.reboundMap([ {lat: 12.34, lng: 12.34}, [ {lat: 56.78, lng: 56.78} ]  ] )
	gmap_drag_drop_instance.reboundMap()

### centerMap()
>Use map_options lat_center and lng_center coordinates to center map, if they exist. If no map center was given on creation, then a new map center is generated from existing markers 

	import {GmapDragDrop} from 'gmap-dragdrop-react'
	let gmap_drag_drop_instance = ReactDOM.render(<GmapDragDrop  
				google_map_key ={"AIzaSyCE3HSVtJ6yOEkHiBpyoR_iU00gqYgTkfk"}  
				map_locations={ [ {lat: 12.34, lng: 12.34} ] }  
			/>, document.getElementById('gmap-container-id'))
	gmap_drag_drop_instance.centerMap()


### reCenter( { lat:number, lng:number } ) 
>Param: `{ lat:number, lng:number }`   
Change the center of the map

	import {GmapDragDrop} from 'gmap-dragdrop-react'
	let gmap_drag_drop_instance = ReactDOM.render(<GmapDragDrop  
				google_map_key ={"AIzaSyCE3HSVtJ6yOEkHiBpyoR_iU00gqYgTkfk"}  
				map_locations={ [ {lat: 12.34, lng: 12.34} ] }  
			/>, document.getElementById('gmap-container-id'))
	gmap_drag_drop_instance.reCenter({lat: 56.78, lng: 56.78})


### locationsClearAll() 
>Remove all marker locations from map

	import {GmapDragDrop} from 'gmap-dragdrop-react'
	let gmap_drag_drop_instance = ReactDOM.render(<GmapDragDrop  
				google_map_key ={"AIzaSyCE3HSVtJ6yOEkHiBpyoR_iU00gqYgTkfk"}  
				map_locations={ [ {lat: 12.34, lng: 12.34} ] }  
			/>, document.getElementById('gmap-container-id'))
	gmap_drag_drop_instance.locationsClearAll()

### locationsGetAll() 
>Returns: `array of location objects`  
Get all marker locations from map

	import {GmapDragDrop} from 'gmap-dragdrop-react'
	let gmap_drag_drop_instance = ReactDOM.render(<GmapDragDrop  
				google_map_key ={"AIzaSyCE3HSVtJ6yOEkHiBpyoR_iU00gqYgTkfk"}  
				map_locations={ [ {lat: 12.34, lng: 12.34} ] }  
			/>, document.getElementById('gmap-container-id'))
	let map_locations = gmap_drag_drop_instance.locationsGetAll()
	console.dir(map_locations)

### locationsPutAll(map_locations)  
>Param: `array of location objects`  
Clear all markers and put markers at map locations

	import {GmapDragDrop} from 'gmap-dragdrop-react'
	let gmap_drag_drop_instance = ReactDOM.render(<GmapDragDrop  
				google_map_key ={"AIzaSyCE3HSVtJ6yOEkHiBpyoR_iU00gqYgTkfk"}  
				map_locations={ [ {lat: 12.34, lng: 12.34} ] }  
			/>, document.getElementById('gmap-container-id'))
	let map_locations = gmap_drag_drop_instance.locationsGetAll()
	gmap_drag_drop_instance.locationsPutAll(map_locations)
	gmap_drag_drop_instance.locationsPutAll({lat: 12.34, lng: 12.34, id:'my_one_point'})

### locationsHideInfoAll()  
>Hide all info windows on map

	import {GmapDragDrop} from 'gmap-dragdrop-react'
	let gmap_drag_drop_instance = ReactDOM.render(<GmapDragDrop  
				google_map_key ={"AIzaSyCE3HSVtJ6yOEkHiBpyoR_iU00gqYgTkfk"}  
				map_locations={ [ {lat: 12.34, lng: 12.34} ] }  
			/>, document.getElementById('gmap-container-id'))
	gmap_drag_drop_instance.locationsHideInfoAll()



### locationsShowInfoAll()  
>Show all info windows on map, if marker locations have one

	import {GmapDragDrop} from 'gmap-dragdrop-react'
	let gmap_drag_drop_instance = ReactDOM.render(<GmapDragDrop  
				google_map_key ={"AIzaSyCE3HSVtJ6yOEkHiBpyoR_iU00gqYgTkfk"}  
				map_locations={ [ {lat: 12.34, lng: 12.34} ] }  
			/>, document.getElementById('gmap-container-id'))
	gmap_drag_drop_instance.locationsShowInfoAll()



### locationExists(location_id) 
>Param: `string`  
Returns: `boolean`  
Tells us if a marker exists on the map.

	import {GmapDragDrop} from 'gmap-dragdrop-react'
	let gmap_drag_drop_instance = ReactDOM.render(<GmapDragDrop  
				google_map_key ={"AIzaSyCE3HSVtJ6yOEkHiBpyoR_iU00gqYgTkfk"}  
				map_locations={ [ {lat: 12.34, lng: 12.34, id:'existing_marker'} ] }  
			/>, document.getElementById('gmap-container-id'))
	const marker_exists = gmap_drag_drop_instance.locationExists('existing_marker')
	console.log('Does marker exist?', marker_exists)



### locationDelete(location_id) 
>Param: `string`  
Deletes a marker on the map.

	import {GmapDragDrop} from 'gmap-dragdrop-react'
	let gmap_drag_drop_instance = ReactDOM.render(<GmapDragDrop  
				google_map_key ={"AIzaSyCE3HSVtJ6yOEkHiBpyoR_iU00gqYgTkfk"}  
				map_locations={ [ {lat: 12.34, lng: 12.34, id:'delete_marker'} ] }  
			/>, document.getElementById('gmap-container-id'))
	gmap_drag_drop_instance.locationDelete('delete_marker')

### locationAdd(lat_lng_obj) 
>Param: `location object`  
Deletes a marker on the map.

	import {GmapDragDrop} from 'gmap-dragdrop-react'
	let gmap_drag_drop_instance = ReactDOM.render(<GmapDragDrop  
				google_map_key ={"AIzaSyCE3HSVtJ6yOEkHiBpyoR_iU00gqYgTkfk"}  
				map_locations={ [ {lat: 12.34, lng: 12.34} ] }  
			/>, document.getElementById('gmap-container-id'))
	gmap_drag_drop_instance.locationDelete({lat: 56.78, lng: 56.78, id:'add_marker'})


### locationGet(location_id) 
>Param: `string`  
Returns an object representing a marker on the map.

	import {GmapDragDrop} from 'gmap-dragdrop-react'
	let gmap_drag_drop_instance = ReactDOM.render(<GmapDragDrop  
				google_map_key ={"AIzaSyCE3HSVtJ6yOEkHiBpyoR_iU00gqYgTkfk"}  
				map_locations={ [ {lat: 12.34, lng: 12.34, id:'get_marker'} ] }  
			/>, document.getElementById('gmap-container-id'))
	const location_object = gmap_drag_drop_instance.locationGet('get_marker')
	console.dir(location_object)



### locationModifyDirect(marker_data) 
>Param: `object`  
Change a location's attributes, as a Javascript object, by id.

	import {GmapDragDrop} from 'gmap-dragdrop-react'
	let gmap_drag_drop_instance = ReactDOM.render(<GmapDragDrop  
				google_map_key ={"AIzaSyCE3HSVtJ6yOEkHiBpyoR_iU00gqYgTkfk"}  
				map_locations={ [ {lat: 12.34, lng: 12.34, id:'change_object_marker'} ] }  
			/>, document.getElementById('gmap-container-id'))
	gmap_drag_drop_instance.locationModifyDirect({lat: 56.78, lng: 56.78, id:'change_object_marker'})


### locationModifyJSON(text_data) 
>Param: `string`  
Change a location's attributes, as a JSON text, by id.

	import {GmapDragDrop} from 'gmap-dragdrop-react'
	let gmap_drag_drop_instance = ReactDOM.render(<GmapDragDrop  
				google_map_key ={"AIzaSyCE3HSVtJ6yOEkHiBpyoR_iU00gqYgTkfk"}  
				map_locations={ [ {lat: 12.34, lng: 12.34, id:'change_json_marker'} ] }  
			/>, document.getElementById('gmap-container-id'))
	gmap_drag_drop_instance.locationModifyJSON('{"lat": 56.78, "lng": 56.78, "id":"change_json_marker"}')



### locationHideInfo(location_id) 
>Param: `string`  
Hide a location's info window.

	import {GmapDragDrop} from 'gmap-dragdrop-react'
	let gmap_drag_drop_instance = ReactDOM.render(<GmapDragDrop  
				google_map_key ={"AIzaSyCE3HSVtJ6yOEkHiBpyoR_iU00gqYgTkfk"}  
				map_locations={ [ {lat: 12.34, lng: 12.34, id:'hide_info_window'} ] }  
			/>, document.getElementById('gmap-container-id'))
	gmap_drag_drop_instance.locationHideInfo("hide_info_window")



### locationShowInfo(location_id) 
>Param: `string`  
Show a location's info window.

	import {GmapDragDrop} from 'gmap-dragdrop-react'
	let gmap_drag_drop_instance = ReactDOM.render(<GmapDragDrop  
				google_map_key ={"AIzaSyCE3HSVtJ6yOEkHiBpyoR_iU00gqYgTkfk"}  
				map_locations={ [ {lat: 12.34, lng: 12.34, id:'show_info_window'} ] }  
			/>, document.getElementById('gmap-container-id'))
	gmap_drag_drop_instance.locationShowInfo("show_info_window")


### filterByPropertyValue(property_name, property_value) 
>Param: `string`, `string`   
Get marker locations which have a property match a value.

	import {GmapDragDrop} from 'gmap-dragdrop-react'
	let gmap_drag_drop_instance = ReactDOM.render(<GmapDragDrop  
				google_map_key ={"AIzaSyCE3HSVtJ6yOEkHiBpyoR_iU00gqYgTkfk"}  
				map_locations={ [ {lat: 12.34, lng: 12.34, id:17, pin_color:'blue'}
                               ,  {lat: 56.78, lng: 56.78, id:23, pin_color:'blue'} ] }  
			/>, document.getElementById('gmap-container-id'))
	const locations_with_blue_pins = gmap_drag_drop_instance.filterByPropertyValue("pin_color", 'blue')
	console.dir(locations_with_blue_pins)


### filterByProperty(property_name) 
>Param: `string`  
Get marker locations which have a property.

	import {GmapDragDrop} from 'gmap-dragdrop-react'
	let gmap_drag_drop_instance = ReactDOM.render(<GmapDragDrop  
				google_map_key ={"AIzaSyCE3HSVtJ6yOEkHiBpyoR_iU00gqYgTkfk"}  
				map_locations={ [ {lat: 12.34, lng: 12.34, id:17, title_text:'Text for Title'}
                               ,  {lat: 56.78, lng: 56.78, id:23} ] }  
			/>, document.getElementById('gmap-container-id'))
	const locations_with_title_text = gmap_drag_drop_instance.filterByProperty("title_text"')
	console.dir(locations_with_title_text)



### filterByUndefProperty(property_name) 
>Param: `string`  
Get marker locations which do not have a property.

	import {GmapDragDrop} from 'gmap-dragdrop-react'
	let gmap_drag_drop_instance = ReactDOM.render(<GmapDragDrop  
				google_map_key ={"AIzaSyCE3HSVtJ6yOEkHiBpyoR_iU00gqYgTkfk"}  
				map_locations={ [ {lat: 12.34, lng: 12.34, id:17, extra_text:'4kms'}
                               ,  {lat: 56.78, lng: 56.78, id:23} ] }  
			/>, document.getElementById('gmap-container-id'))
	const locations_with_no_extra_text = gmap_drag_drop_instance.filterByUndefProperty("extra_text"')
	console.dir(locations_with_no_extra_text)



### startDragFromOutside(location_data) 
>Param: `string`  
Create a function that enables an HTML element to drag a location to a map 

	import {GmapDragDrop} from 'gmap-dragdrop-react'
	let gmap_drag_drop_instance = ReactDOM.render(<GmapDragDrop  
				google_map_key ={"AIzaSyCE3HSVtJ6yOEkHiBpyoR_iU00gqYgTkfk"}  
				map_locations={ [ {lat: 12.34, lng: 12.34, id:17} ] }  
			/>, document.getElementById('gmap-container-id'))
	var html_drag_element = document.getElementById('start_map_drag')
    html_drag_element.ondragstart = gmap_drag_drop_instance.startDragFromOutside({lat: 56.78, lng: 56.78, id:'drag_to_map'})

## Created by

[Steen Hansen][https://github.com/steenhansen](https://github.com/steenhansen)

## License

MIT © [Steen Hansen][https://www.jerkersearcher.com/](https://www.jerkersearcher.com)
