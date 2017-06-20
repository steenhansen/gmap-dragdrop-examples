

#Google Maps Drag and Drop with React component


Drag&amp;drop location markers on&amp;off Google Maps with this React component, not just [`draggable markers`](https://developers.google.com/maps/documentation/javascript/markers#draggable). Internet Explorer has degraded performance but still works thanks to [`Mihai Valentin`](https://github.com/MihaiValentin/setDragImage-IE).


Live [gmap-dragdrop-react examples]([https://gddr.herokuapp.com/maps]).

Full [webserver with examples]([https://github.com/steenhansen/gmap-dragdrop-react]) on GitHub.

## Install

```
$ npm install --save gmap-dragdrop-react
```
## JSX Usage

	import {GmapDragDrop} from 'gmap-dragdrop-react'

	const CYPRESS = {lat: 49.396, lng: -123.204, title_text: "Cypress Mountain"}  
	const GROUSE = {lat: 49.380, lng: -123.082, title_text: "Grouse Mountain"}  
	const SEYMOUR = {lat: 49.367, lng: -122.948, title_text: "Mount Seymour"}  
	const GOOGLE_MAP_KEY = "AIzaSyCE3HSVtJ6yOEkHiBpyoR_iU00gqYgTkfk"

	ReactDOM.render(<GmapDragDrop  
		google_map_key={GOOGLE_MAP_KEY}  
		map_locations={[CYPRESS, GROUSE, SEYMOUR]}  
		map_options={}  
	/>, document.getElementById('gmap-container-id'))


## google\_map\_key
*Required* Type: `string`

The 40 character [Google API Key](https://developers.google.com/maps/documentation/javascript/get-api-key)

	google_map_key={1234567890123456789012345678901234567890}  

## map\_locations
*Required* Type: `array`

Array of locations to display on the map. A location is an object consisting of at least a 'lat' and 'lng' property

	map_locations={ [ ] } 
## Locations

### lat, lng
*Required* Type: `number`

Latitude and longitude of map locations

	map_locations={ [ lat: 123.456, lng: 123.456 ] }

### pin\_color
Type: `string`  
Default: `'#d00'`   

Color of a marker's icon.

	map_locations={ [ lat: 123.456, lng: 123.456, pin_color:'blue' ] }

### showing\_info\_window
Type: `boolean`  
Default: `'true'`   

Show or hide a marker's info_window balloon.

	map_locations={ [ lat: 123.456, lng: 123.456, showing_info_window: false ] }

### can\_move
Type: `boolean`  
Default: `'true'`   

Can a certain marker be dragged to a new position inside a map?

	map_locations={ [ lat: 123.456, lng: 123.456, can_move: false ] }

### can\_delete
Type: `boolean`  
Default: `'true'`   

Is a marker allowed to be deleted from a map?

	map_locations={ [ lat: 123.456, lng: 123.456, can_delete: false ] }

### can\_change
Type: `boolean`  
Default: `'true'`   

Allow a marker be changed on a map.

	map_locations={ [ lat: 123.456, lng: 123.456, can_change: false ] }

### title\_text
Type: `string`  
Default: `''`   

First line of text in an info window.

	map_locations={ [ lat: 123.456, lng: 123.456, title_text: 'My Title' ] }

### content\_text
Type: `string`  
Default: `''`   

Lines of text in the body of an info window.

	map_locations={ [ lat: 123.456, lng: 123.456, content_text: 'My Content' ] }

### extra\_text
Type: `string`  
Default: `''`   

Last text in the body of an info window, used for automatically generated kms distances when using GmapGroups objects.

	map_locations={ [ lat: 123.456, lng: 123.456, extra_text: '4km' ] }

### title\_style
Type: `string`  
Default: `'color:black; font-size: 12px;'`   

CSS style for the info window's title of a location.

	map_locations={ [ lat: 123.456, lng: 123.456, title_style: 'color:green;' ] }

### content\_style
Type: `string`  
Default: `'color:blue;'`   

CSS style for the info window's body of a location.

	map_locations={ [ lat: 123.456, lng: 123.456, content_style: 'font-size: 8px;"' ] }

### info\_style
Type: `string`  
Default: `'font-family: Arial, sans-serif;'`   

CSS style for the entire info window of a location.

	map_locations={ [ lat: 123.456, lng: 123.456, info_style: 'font-size: 8px;"' ] }


## map\_options

### lat\_center

Type: `float`

Latitude center of map.

	map_options={ lat : 123.456 }   

### lng\_center

Type: `float`

Longitude center of map.

	map_options={ lng : 123.456 }  
	
### map\_type

Type: `string`  
Default: `'roadmap'`   
Type of map being one of roadmap, satellite, hybrid, or terrain.

	map_options={ map_type : 'hybrid' }  

### street\_view

Type: `booean`    
Default: `'true'`   

Show street view button in lower right hand side of map.

	map_options={ street_view : false } 

### zoom\_control

Type: `booean`    
Default: `'true'`   

Show zoom in/out button in lower right hand side of map.

	map_options={ zoom_control : false } 

### map\_type\_control

Type: `boolean`    
Default: `'true'`   

Show Map/Satellite buttons in upper left hand side of map.

	map_options={ map_type_control : true } 

### pin\_svg

Type: `string`  
Default: `m256.5,512c-25.5,-255 -127.5,-280.5 -127.5,-382.5a127.5,127.5 0 1 1 255,0c0,102 -102,127.5 -127.5,382.5zm-25.5,-382.5a25.5,25.5 0 1 1 51,0a25.5,25.5 0 1 1 -51,0`

512x512 SVG for marker icons on map.

	map_options={ pin_svg : 'm221.58713,256.91159l-108.76713,76.67351l58.07834,27.29589l74.09215,-34.82382l74.10619,34.82484l58.07834,-27.29385l-108.75933,-76.66434l0,-228.32083l0,0l0,0l0,0l0,0l-46.82856,228.30861z' } 
	
### scroll\_wheel

Type: `booean`  
Default: `'true'`   

Let mouse scrollwheel change map resolution.

	map_options={ scroll_wheel : true } 

### gestureHandling

Type: `string`  
Default: `'auto'`   

Set to 'none' to disable map dragging.

	map_options={ gestureHandling : 'none' } 

### change\_rebounding

Type: `booean`  
Default: `'true'`   

Automatically change map resolution when map markers change.

	map_options={ change_rebounding : false } 

### pin\_scale

Type: `number`   
Default: `'0.1'`   

Scaling of 512x512 SVG icons

	map_options={ pin_scale : 0.5 } 

### map\_styles

Type: `array`   
Default: `'[]'`   

Change styling of map.

	map_options={ map_styles : MapStyles.NIGHT_STYLE } 
	
### init\_zoom

Type: `number`   
Default: `'14'`   

Initial map resolution.

	map_options={ init_zoom : 7 } 

### max_zoom

Type: `number`   
Default: `'20'`   

Maximum map zoom.

	map_options={ max_zoom : 10 } 
	
### min\_zoom

Type: `number`    
Default: `'0'`   

Minimum map zoom.

	map_options={ min_zoom : 4 } 

### onReady

	map_options={ onReady: (e)=> {
	    const {gmap_event} = e.gmap_params
	    const container_id = gmap_event._gmapDragDrop_vars.container_id
	    console.log(`onReady : in div with id of '${container_id}' is ready`)
	  } } 

### onCenterChanged

	map_options={ onCenterChanged: (e)=>{
	    const {moved_center, gmap_event} = e.gmap_params
	    console.log(`onCenterChanged : at ${moved_center.lat}, ${moved_center.lng}`, gmap_event._object_type)
	    return true
	  }} 

### onZoomChanged

	map_options={ onZoomChanged: (e)=>{
	 const {map_zoom, gmap_event} = e.gmap_params
	    console.log(`onZoomChanged : with has a new zoom of ${map_zoom}`, gmap_event._object_type)
	    return true
	  }} 

### onMouseMove

	map_options={ onMouseMove: (e)=>{
	   const {gmap_event} = e.gmap_params
	    const rand_33 = Math.floor(Math.random() * 33)
	    if (rand_33 === 0) {
	      const {latLng, pageX, pageY} = e
	      const lat = latLng.lat()
	      const lng = latLng.lng()
	      console.log(`onMouseMove (of 1/33) : at ${lat},${lng}  ${pageX},${pageY}`, gmap_event._object_type)
	    }
	  }} 

### onDoubleClick

	map_options={ onDoubleClick: (e)=>{
	   const {gmap_event} = e.gmap_params
	    const {latLng, pixel} = e
	    const lat = latLng.lat()
	    const lng = latLng.lng()
	    console.log(`onDoubleClick : at ${lat},${lng}  ${pixel.x},${pixel.y}`)
	    gmap_event.locationAdd(latLng)
	  }} 

### onAdd
	
	map_options={ onAdd: (e)=>{
	    const {location_data, gmap_event} = e.gmap_params
	    console.log('onAdd : with this data', gmap_event._object_type)
	    console.dir(location_data)
	    return location_data
	  }} 

### onAfterAdd
	
	map_options={ onAfterAdd: (e)=>{
    		const {location_data, gmap_event} = e.gmap_params
    		console.log('onAfterAdd : with this data', gmap_event._object_type)
    		console.dir(location_data)
	}} 

### onRightClick
	
	map_options={ onRightClick: (e)=>{
    		const {gmap_event} = e.gmap_params
    		const {latLng, pixel} = e
    		const lat = latLng.lat()
    		const lng = latLng.lng()
    		console.log(`onRightClick : at ${lat},${lng}  ${pixel.x},${pixel.y}`, gmap_event._object_type)
	}} 

### onRightClickMarker
	
	map_options={ onRightClickMarker: (e)=>{
    		const {location_id, gmap_event} = e.gmap_params
    		const marker_data = gmap_event.locationGet(location_id)
    		console.log('onRightClickMarker : with this data')
    		console.dir(marker_data)
    		gmap_event.locationDelete(location_id)
	}} 
	
### onDelete
	
	map_options={ onDelete: (e)=>{
    		const {location_data, gmap_event} = e.gmap_params
    		console.log('onDelete : with this data', gmap_event._object_type)
    		console.dir(location_data)
    		return true
	}} 	
	
### onDragStartMarker
	
	map_options={ onDragStartMarker: (e)=>{
    		const {location_data, gmap_event} = e.gmap_params
    		location_data.title_text = 'onDragStartMarker : ' + location_data.title_text
    		console.log('onDragStartMarker : with this data', gmap_event._object_type)
    		return location_data
	}} 
	
### onDragMarker
	
	map_options={ onDragMarker: (e)=>{
    		const {start_lat_lng, location_id, page_x, page_y, gmap_event} = e.gmap_params
    		console.log('onDragMarker :', start_lat_lng, location_id, page_x, page_y, gmap_event._object_type)
	}} 

### onDragEndMarker
	
	map_options={ onDragEndMarker: (e)=>{
    		const {from_location, gmap_event} = e.gmap_params
    		console.log('onDragEndMarker : with this data', gmap_event._object_type)
    		console.dir(from_location)
	}} 

### onDragDrop
	
	map_options={ onDragEndMarker: (e)=>{
    		const {location_data, gmap_event} = e.gmap_params
    		console.log('onDragDrop : with this data', gmap_event._object_type)
 		console.dir(location_data)
    		if (location_data.from_lat === undefined) {
      			location_data.title_text = 'onDragDrop 0km'
    		} else {
      			const from_location = {lat: location_data.from_lat, lng: location_data.from_lng}
      			const to_location = {lat: location_data.lat, lng: location_data.lng}
      			const km_distance = KmsDistance.getKms(from_location, to_location)
      			location_data.title_text = `onDragDrop ${km_distance}`
    		}
    		return location_data
	}} 
	
## GmapGroups
- [Drag from center of hub to create a new spoke]([https://gddr.herokuapp.com/activities]).
- [Static hiking trails with linked markers]([https://gddr.herokuapp.com/hikes])

## Related

- [setDragImage-IE]([https://github.com/MihaiValentin/setDragImage-IE](https://github.com/MihaiValentin/setDragImage-IE)) - setDragImage method support for HTML5 Drag &amp; Drop in Internet Explorer 10+

## Created by

[Steen Hansen]([https://github.com/steenhansen](https://github.com/steenhansen))

## License

MIT © [Steen Hansen]([https://www.jerkersearcher.com/]([https://www.jerkersearcher.com])
