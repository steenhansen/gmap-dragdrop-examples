# Google Maps Drag and Drop with React Component

## map_locations

A required array of locations to display on the map.
A map location must have a 'lat' ranging from -90 to 180, and a 'lng' ranging from -180 to 180.

### JSX

    		ReactDOM.render(<GmapDragDrop
    			google_map_key={"abcdefgh**_Google_Map_API_Key_**ijelmen"}
    			map_locations={ [ {lat: 12.34, lng: 12.34}
                 	    		, {lat: 56.78, lng: -56.78} ] }
    		/>, document.getElementById('gmap-container-id'))

### lat, lng

> _Required_  
> Type: `number`  
> Latitude and longitude of a map location.

    		map_locations= [ {lat: 12.34, lng: 12.34} ]

### pin_color

> Type: `string`  
> Default: `'#d00'`  
> Color of a marker's icon.

    		map_locations= [ {lat: 12.34, lng: 12.34, pin_color:'blue'} ]

### showing_info_window

> Type: `boolean`  
> Default: `'true'`  
> Show or hide a marker's info_window balloon.

    		map_locations= [ {lat: 12.34, lng: 12.34, showing_info_window: false} ]

### can_move

> Type: `boolean`  
> Default: `'true'`  
> Can a certain marker be dragged to a new position inside a map?

    		map_locations= [ {lat: 12.34, lng: 12.34, can_move: false} ]

### can_delete

> Type: `boolean`  
> Default: `'true'`  
> Is a marker allowed to be deleted from a map?

    		map_locations= [ {lat: 12.34, lng: 12.34, can_delete: false} ]

### can_change

> Type: `boolean`  
> Default: `'true'`  
> Allow a marker be changed on a map.

    		map_locations= [ {lat: 12.34, lng: 12.34, can_change: false} ]

### title_text

> Type: `string`  
> Default: `''`  
> First line of text in an info window.

    		map_locations= [ {lat: 12.34, lng: 12.34, title_text: 'My Title'} ]

### content_text

> Type: `string`  
> Default: `''`  
> Lines of text in the body of an info window.

    		map_locations= [ {lat: 12.34, lng: 12.34, content_text: 'My Content'} ]

### extra_text

> Type: `string`  
> Default: `''`  
> Last text in the body of an info window, used for automatically generated kms distances when using GmapGroups objects.

    		map_locations= [ {lat: 12.34, lng: 12.34, extra_text: '4km'} ]

### title_style

> Type: `string`  
> Default: `'color:black; font-size: 12px;'`  
> CSS style for the info window's title of a location.

    		map_locations= [ {lat: 12.34, lng: 12.34, title_style: 'color:green;'} ]

### content_style

> Type: `string`  
> Default: `'color:blue;'`  
> CSS style for the info window's body of a location.

    		map_locations= [ {lat: 12.34, lng: 12.34, content_style: 'font-size: 8px;"'} ]

### info_style

> Type: `string`  
> Default: `'font-family: Arial, sans-serif;'`  
> CSS style for the entire info window of a location.

    		map_locations= [ {lat: 12.34, lng: 12.34, info_style: 'font-size: 8px;"'} ]

## Created by

[Steen Hansen](https://github.com/steenhansen)

## License

MIT ©
