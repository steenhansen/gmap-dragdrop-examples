# Google Maps Drag and Drop with React Component

## map_options - Attributes

### JSX

    import {GmapDragDrop} from 'gmap-dragdrop-react'
    ReactDOM.render(<GmapDragDrop
    			google_map_key ={"abcdefgh**_Google_Map_API_Key_**ijelmen"}
    			map_locations={ [ {lat: 12.34, lng: 12.34} ] }
    			map_options={ init_zoom : 7 }
    		/>, document.getElementById('gmap-container-id'))

### lat_center

> Type: `float`  
> Latitude center of map.

    		map_options={ lat : 123.456 }

### lng_center

> Type: `float`  
> Longitude center of map.

    		map_options={ lng : 123.456 }

### map_type

> Type: `string`  
> Default: `'roadmap'`  
> Type of map being one of roadmap, satellite, hybrid, or terrain.

    		map_options={ map_type : 'hybrid' }

### street_view

> Type: `booean`  
> Default: `'true'`  
> Show street view button in lower right hand side of map.

    		map_options={ street_view : false }

### zoom_control

> Type: `booean`  
> Default: `'true'`  
> Show zoom in/out button in lower right hand side of map.

    		map_options={ zoom_control : false }

### map_type_control

> Type: `boolean`  
> Default: `'true'`  
> Show Map/Satellite buttons in upper left hand side of map.

    		map_options={ map_type_control : true }

### pin_svg

> Type: `string`  
> Default: `m256.5,512c-25.5,-255 -127.5,-280.5 -127.5,-382.5a127.5,127.5 0 1 1 255,0c0,102 -102,127.5 -127.5,382.5zm-25.5,-382.5a25.5,25.5 0 1 1 51,0a25.5,25.5 0 1 1 -51,0`  
> A 512x512 SVG for marker icons on map.

    		map_options={ pin_svg : 'm221.58713,256.91159l-108.76713,76.67351l58.07834,27.29589l74.09215,-34.82382l74.10619,34.82484l58.07834,-27.29385l-108.75933,-76.66434l0,-228.32083l0,0l0,0l0,0l0,0l-46.82856,228.30861z' }

### scroll_wheel

> Type: `booean`  
> Default: `'true'`  
> Let mouse scrollwheel change map resolution.

    		map_options={ scroll_wheel : true }

### gestureHandling

> Type: `string`  
> Default: `'auto'`  
> Set to 'none' to disable map dragging.

    		map_options={ gestureHandling : 'none' }

### change_rebounding

> Type: `booean`  
> Default: `'true'`  
> Automatically change map resolution when map markers change.

    		map_options={ change_rebounding : false }

### png_marker_location

> Type: `url`  
> Default: `'//maps.google.com/mapfiles/ms/icons/'`  
> Where marker PNG images are located when not using svgs

    		map_options={ png_marker_location : '/gmap-resources/icons/' }

### pin_scale

> Type: `number`  
> Default: `'0.1'`  
> Scaling of 512x512 SVG icons

    		map_options={ pin_scale : 0.5 }

### map_styles

> Type: `array`  
> Default: `'[]'`  
> Change styling of map.

    		map_options={ map_styles : MapStyles.NIGHT_STYLE }

### init_zoom

> Type: `number`  
> Default: `'14'`  
> Initial map resolution.

    		map_options={ init_zoom : 7 }

### max_zoom

> Type: `number`  
> Default: `'20'`  
> Maximum map zoom.

    		map_options={ max_zoom : 10 }

### min_zoom

> Type: `number`  
> Default: `'0'`  
> Minimum map zoom.

    		map_options={ min_zoom : 4 }

## Created by

[Steen Hansen](https://github.com/steenhansen)

## License

MIT ©
