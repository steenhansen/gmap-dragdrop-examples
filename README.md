# Google Maps Drag and Drop Examples

This project uses the [gmap-dragdrop-react](https://www.npmjs.com/package/gmap-dragdrop-react) package on NPM to show six examples of dragging pins on and off of a Google map. Not just making a marker pin draggable. A live slow to start free Render.com web page with [all six examples](https://gmap-dragdrop-examples.onrender.com/maps).

## Example 1 - [Dragging Pins Between Maps](https://gmap-dragdrop-examples.onrender.com/dynamic)

## Example 2 - [Dragging Pins On and Off a Map](https://gmap-dragdrop-examples.onrender.com/malls)

## Example 3 - [Sets of Pins](https://gmap-dragdrop-examples.onrender.com/activities)

Make new marker pins by dragging from the central hub, "Visit the North Shore" ![waves picture](public/images/north_shore_water.png). Modify pins by dragging on and off of modify bar.

## Example 4 - [Pins With Images and Distances](https://gmap-dragdrop-examples.onrender.com/hikes)

## Example 5 - [Pins With Draggable Text Data](https://gmap-dragdrop-examples.onrender.com/simple)

## Example 6 - [Custom Pins With Dragged Distances](https://gmap-dragdrop-examples.onrender.com/events)

## To Install

### $ nvm use 18.2.0

### $ npm install

## Start Development Version

```
$ npx gulp
$ npx webpack-cli --node-env 'development'
$ node local-server AIzaSyCE3HSVtJ6yOEkHiBpyoR_iU00gqYgTkfk

http://localhost:5000/maps
```

## Run Production Version

```
$ npx gulp
$ npx webpack-cli
$ node local-server abcdefgh**_Google_Map_API_Key_**ijelmen

http://localhost:5000/maps
```

## Non-Existant API Key

![google maps image when bad api key](public/images/bad-api-key.png)

## API Key Not Yet Linked to Credit Card

![For developers only](public/images/for_dev_only.png)

Get a Google Maps API key at [https://developers.google.com/maps/documentation/javascript/get-api-key](https://developers.google.com/maps/documentation/javascript/get-api-key)

## Restrict API Key for Production

![API restrictions](public/images/website-restrictions.png)

## Setting API Key on Heroku

![Heroku API google maps api key](public/images/heroku-config.png)

## Free Hosting on render.com
	Web Service
	
	Environment
		  Key	goog_map_api
		Value	Abcdefghijklmnopqrstuvwxyz_1234567890MN
		
	Settings
		Build Command	$ yarn
		Start Command	$ node heroku-server.js
		
		
///////////////

RefererNotAllowedMapError




bad_openSSL.png below

PS C:\Users\16043\Documents\GitHub\gmap-dragdrop-examples>                                                                                                                                   
PS C:\Users\16043\Documents\GitHub\gmap-dragdrop-examples>                                                                                                                                   
PS C:\Users\16043\Documents\GitHub\gmap-dragdrop-examples>                                                                                                                                   
PS C:\Users\16043\Documents\GitHub\gmap-dragdrop-examples> npm install                                                                                                                       
OpenSSL configuration error:                                                                                                                                                                 
30730000:error:80000002:system library:BIO_new_file:No such file or directory:c:\ws\deps\openssl\openssl\crypto\bio\bss_file.c:67:calling fopen(C:\Program Files\PostgreSQL\psqlODBC\etc\open
ssl.cnf, rb)                                                                                                                                                                                 
30730000:error:10000080:BIO routines:BIO_new_file:no such file:c:\ws\deps\openssl\openssl\crypto\bio\bss_file.c:75:                                                                          
30730000:error:07000072:configuration file routines:def_load:no such file:c:\ws\deps\openssl\openssl\crypto\conf\conf_def.c:179:                                                             
OpenSSL configuration error:                                                                                                                                                                 
50070000:error:80000002:system library:BIO_new_file:No such file or directory:c:\ws\deps\openssl\openssl\crypto\bio\bss_file.c:67:calling fopen(C:\Program Files\PostgreSQL\psqlODBC\etc\open
ssl.cnf, rb)                                                                                                                                                                                 
50070000:error:10000080:BIO routines:BIO_new_file:no such file:c:\ws\deps\openssl\openssl\crypto\bio\bss_file.c:75:                                                                          
50070000:error:07000072:configuration file routines:def_load:no such file:c:\ws\deps\openssl\openssl\crypto\conf\conf_def.c:179:                                                             
PS C:\Users\16043\Documents\GitHub\gmap-dragdrop-examples>                                                                                                                                   
                                                                                                                                                                                             
                                                                                                                                                                                             
                                                                                                                                                                                             