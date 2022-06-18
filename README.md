# Google Maps Drag and Drop Examples

This project uses the [gmap-dragdrop-react](https://www.npmjs.com/package/gmap-dragdrop-react) package on NPM to show six examples of dragging pins on and off of a Google map. Not just making a marker pin draggable. A live slow to start free Heroku web page with [all six examples](https://gddr.herokuapp.com/maps).

## Example 1 - [Dragging Pins Between Maps](https://gddr.herokuapp.com/dynamic)

## Example 2 - [Dragging Pins On and Off a Map](https://gddr.herokuapp.com/malls)

## Example 3 - [Sets of Pins](https://gddr.herokuapp.com/activities)

Make new marker pins by dragging from the central hub, "Visit the North Shore" ![waves picture](public/images/north_shore_water.png). Modify pins by dragging on and off of modify bar.

## Example 4 - [Pins With Images and Distances](https://gddr.herokuapp.com/hikes)

## Example 5 - [Pins With Draggable Text Data](https://gddr.herokuapp.com/simple)

## Example 6 - [Custom Pins With Dragged Distances](https://gddr.herokuapp.com/events)

## To Install

### $ npm install

## Start Development Version

```
$ npx gulp
$ npx webpack-cli --node-env 'development'
$ node local-server abcdefgh**_Google_Map_API_Key_**ijelmen

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
