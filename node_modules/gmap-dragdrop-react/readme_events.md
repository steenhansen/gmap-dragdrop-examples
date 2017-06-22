

#Google Maps Drag and Drop with React Component

## map_options - Events

### JSX

	import {GmapDragDrop} from 'gmap-dragdrop-react'
	ReactDOM.render(<GmapDragDrop  
				google_map_key={"AIzaSyCE3HSVtJ6yOEkHiBpyoR_iU00gqYgTkfk"}  
				map_locations={ [ {lat: 12.34, lng: 12.34} ] }  
				map_options={ onAdd: (e)=>{	console.log('added a map location') } }   
			/>, document.getElementById('gmap-container-id'))

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
	

## Created by

[Steen Hansen](https://github.com/steenhansen)

## License

MIT © 
