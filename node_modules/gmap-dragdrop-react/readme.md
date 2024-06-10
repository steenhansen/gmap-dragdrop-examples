<a name="fast-start"></a>
<a name="s"></a>

# Google Maps Drag and Drop with React Component

  <img src="./tall-drag.webp" width="800">
	
Drag&amp;drop location markers on&amp;off Google Maps with this React component, not just [`draggable markers`](https://developers.google.com/maps/documentation/javascript/markers#draggable). Internet Explorer has degraded performance but still works thanks to [`Mihai Valentin`](https://github.com/MihaiValentin/setDragImage-IE).

![visual explanation](gddr_explain.png)

Live [gmap-dragdrop-react examples](https://gmap-dragdrop-examples.onrender.com/maps), takes 150sec to start on free hosting.

Full [webserver on GitHub with examples](https://github.com/steenhansen/gmap-dragdrop-examples).

## Install

$ npm install --save gmap-dragdrop-react

## Compile JS

$ gulp

## JSX

    import {GmapDragDrop} from 'gmap-dragdrop-react'

    const CYPRESS = {lat: 49.396, lng: -123.204, title_text: "Cypress Mountain"}
    const GROUSE = {lat: 49.380, lng: -123.082, title_text: "Grouse Mountain"}
    const SEYMOUR = {lat: 49.367, lng: -122.948, title_text: "Mount Seymour"}
    const GOOGLE_MAP_KEY = "abcdefgh**_Google_Map_API_Key_**ijelmen"

    ReactDOM.render(<GmapDragDrop
    	google_map_key={GOOGLE_MAP_KEY}
    	map_locations={[CYPRESS, GROUSE, SEYMOUR]}
    	map_options={ init_zoom:7, onAdd:(e)=>{ console.log('added a map location') } }
    />, document.getElementById('gmap-container-id'))

## google_map_key

_Required_ Type: `string`

The 40 character [Google API Key](https://developers.google.com/maps/documentation/javascript/get-api-key)

    google_map_key={1234567890123456789012345678901234567890}

## [map_locations](/readme_map_locations.md)

_Required_  
Type: `array`

Array of locations to display on the map. A location is an object consisting of at least a 'lat' and 'lng' property

    		map_locations={ [ ] }

## [map_options - attributes](/readme_map_options.md)

Type: `object`

    		map_options={ init_zoom : 7 }

## [map_options - events](/readme_events.md)

Type: `function`

    		map_options={ onAdd: (e)=>{
        			const {location_data, gmap_event} = e.gmap_params
        			console.log('onAdd : with this data', gmap_event._object_type)
        			console.dir(location_data)
        			return location_data
      		}}

## [Methods](/readme_methods.md)

    	import {GmapDragDrop} from 'gmap-dragdrop-react'
    	let gmap_drag_drop_instance = ReactDOM.render(<GmapDragDrop
    			google_map_key ={"abcdefgh**_Google_Map_API_Key_**ijelmen"}
    			map_locations={ [ {lat: 12.34, lng: 12.34} ] }
    		/>, document.getElementById('gmap-container-id'))
    	let number_locations = gmap_drag_drop_instance.numberLocations()
    	console.log('There are currently ' + number_markers + ' on the map')

## [GmapGroups](/readme_groups.md)

- [Drag from center of hub to create a new spoke](https://gddr.herokuapp.com/activities).
- [Static hiking trails with linked markers](https://gddr.herokuapp.com/hikes)

## Non-Existant API Key

![google maps image when bad api key](bad-api-key.png)

## API Key Not Yet Linked to Credit Card

![For developers only](for_dev_only.png)

Get a Google Maps API key at [https://developers.google.com/maps/documentation/javascript/get-api-key](https://developers.google.com/maps/documentation/javascript/get-api-key)

## Restrict API Key for Production

![API restrictions](website-restrictions.png)

## Related

- [setDragImage-IE](https://github.com/MihaiValentin/setDragImage-IE) - setDragImage method support for HTML5 Drag &amp; Drop in Internet Explorer 10+. This method is used to support marker dragging in IE.

## Created by

[Steen Hansen](https://github.com/steenhansen)

## License

MIT ©
