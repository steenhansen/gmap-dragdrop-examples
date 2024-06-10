"use strict";

// node lambda-maps.js 

const goog_map_api = 'AIzaSyCE3HSVtJ6yOEkHiBpyoR_iU00gqYgTkfk';

const fs = require("fs");

if (fs.existsSync("public/is_DEVELOPMENT.webpack.txt")) {
  console.log("DEVELOPMENT React CDN files");
} else {
  console.log("Production React CDN files");
}

function fixReactBrackets(a_string) {
  a_string = a_string.replace(/</g, "&lt;");
  a_string = a_string.replace(/>/g, "&gt;");
  return a_string;
}


let activities_entry = fs.readFileSync("compiled-javascript/gmap_activities_entry.js", "utf8");

let malls_entry = fs.readFileSync("compiled-javascript/gmap_malls_entry.js", "utf8");

let all_js = fs.readFileSync("public/all_entr.js", "utf8");
let shared_styles = fs.readFileSync("public/shared_styles.css", "utf8");

let dynamic_html = fs.readFileSync("public/dynamic-type/dynamic-divs.html", "utf8");
let dynamic_data = fs.readFileSync("public/dynamic-type/dynamic-data.js", "utf8");
let dynamic_css = fs.readFileSync("public/dynamic-type/dynamic-styles.css", "utf8");
let dynamic_js = fs.readFileSync("public/dynamic_entr.js", "utf8");
//dynamic_jsx = fixReactBrackets(dynamic_jsx);

let activities_html = fs.readFileSync("public/activities-type/activities-divs.html", "utf8");
let activities_data = fs.readFileSync("public/activities-type/activities-data.js", "utf8");
let activities_css = fs.readFileSync("public/activities-type/activities-styles.css", "utf8");
let activities_js = fs.readFileSync("public/activities_entr.js", "utf8");
//activities_jsx = fixReactBrackets(activities_jsx);

let events_html = fs.readFileSync("public/events-type/events-divs.html", "utf8");
let events_data = fs.readFileSync("public/events-type/events-data.js", "utf8");
let events_css = fs.readFileSync("public/events-type/events-styles.css", "utf8");
let events_js = fs.readFileSync("public/events_entr.js", "utf8");
//events_jsx = fixReactBrackets(events_jsx);

let hike_html = fs.readFileSync("public/hike-type/hike-divs.html", "utf8");
let hike_data = fs.readFileSync("public/hike-type/hike-data.js", "utf8");
let hike_css = fs.readFileSync("public/hike-type/hike-styles.css", "utf8");
let hike_js = fs.readFileSync("public/hike_entr.js", "utf8");
//hike_jsx = fixReactBrackets(hike_jsx);

let malls_html = fs.readFileSync("public/malls-type/malls-divs.html", "utf8");
let malls_data = fs.readFileSync("public/malls-type/malls-data.js", "utf8");
let malls_css = fs.readFileSync("public/malls-type/malls-styles.css", "utf8");
let malls_js = fs.readFileSync("public/malls_entr.js", "utf8");
//malls_jsx = fixReactBrackets(malls_jsx);

const simple_html = fs.readFileSync("public/simple-type/simple-divs.html", "utf8");
const simple_data = fs.readFileSync("public/simple-type/simple-data.js", "utf8");
let simple_css = fs.readFileSync("public/simple-type/simple-styles.css", "utf8");
let simple_js = fs.readFileSync("public/simple_entr.js", "utf8");
//simple_jsx = fixReactBrackets(simple_jsx);

if (fs.existsSync("public/is_DEVELOPMENT.webpack.txt")) {
  var react_cdns = ` <script crossorigin src="https://unpkg.com/react@17.0.2/umd/react.development.js"></script>
                    <script crossorigin src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.development.js"></script>
                      <script crossorigin src="https://unpkg.com/prop-types@15.8.1/prop-types.js"></script>`;
} else {
  var react_cdns = ` <script crossorigin src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
                      <script crossorigin src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
                        <script crossorigin src="https://unpkg.com/prop-types@15.8.1/prop-types.min.js"></script>	`;
}

const code_page = `

<style>
${shared_styles}
</style>

<script>
${all_js}
</script>


`;


const dynamic_page = `




  <style>${dynamic_css}</style>
  bbbbbbbbbbbbbbbb
  ${dynamic_html}
  nnnnnnnnnnnnn
  <script>${dynamic_data}</script>
  mmmmmmmmmmmmmmmm
<script>  ${dynamic_js}</script>
  kkkkkkkkkkkkkk
  <script>
    window.gmap_dynamic= window.dynamicMap("gmap-dynamic-id-A", "gmap-dynamic-id-B", locations_a, locations_b);
  </script>`;

const activity_page = `
  <style>${activities_css}</style>
  ${activities_html}
  <script>${activities_data}</script>
  5555555555555
 <script> ${activities_js}</script>
  66666666666666
  <script>
    window.gmap_activities = window.activitiesMap("gmap-activites-id", [NORTH_SHORE_OUTING]);
  </script> `;

const event_page = `
  <style>${events_css}</style>
  ${events_html} 
  <script>${events_data}</script>
   <script> ${events_js}</script>
  <script>
    window.gmap_events =  window.eventsMap("gmap-events-id", events_locations);
  </script> `;

const hike_page = `
  <style>${hike_css}</style>
  ${hike_html} 
  <script>${hike_data}</script>
  <script>
    window.gmap_hike = window.hikeMap("gmap-hikes", [BASTION_HIKE], hike_options);
  </script> `;

const mall_page = `
  <style>${malls_css}</style>
  ${malls_html} 
  <script>${malls_data}</script>
  <script>
    window.gmap_malls = window.mallsMap("gmap-mall-id",  [PACIFIC, OAKRIDGE]);
  </script> `;

const simple_page = `
  <style>${simple_css}</style>
  ${simple_html}
  <script>${simple_data}</script>
  <script>
    window.gmap_simple = window.simpleMap("gmap-simple-id", [CYPRESS, GROUSE_SKI, SEYMOUR]);
  </script> `;


const start_page = `
  <!doctype html>
  <html lang="en-US">
    <title>Dragging Google Maps Pins</title>
  
    ${react_cdns}
    <body>
    <script>
      var GLOBAL_WEBPACK={ GOOG_MAP_API: "${goog_map_api}" };
    </script>
`;




  
    const all_page = `${start_page}

    The Point of this React component is to enable drag-and-drop on-and-off a Google map, not
to <a href='https://developers.google.com/maps/documentation/javascript/markers#draggable'
target="_blank">drag a marker</a> inside a Google map. 								 					 
		 	 <br><br>
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
           ${code_page}
 bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb  
    <br />
   <a style="text-align: center" href="/dynamic">DYNAMIC SINGLE PAGE WITH CODE</a>
   <br />
   <br />
 cccccccccccccccccccccccccccccccccccc  
  ${event_page}
dddddddddddddddddddddddddddddddddddddddd
   <hr><hr>
 ${activity_page}

<br />
<a style="text-align: center" href="/activities">ACTIVITIES SINGLE PAGE WITH CODE</a>
<br />
<br />


    

      </body>
    </html>`;

     const all_pageOLD = `${start_page}

    The Point of this React component is to enable drag-and-drop on-and-off a Google map, not
to <a href='https://developers.google.com/maps/documentation/javascript/markers#draggable'
target="_blank">drag a marker</a> inside a Google map. 								 					 
		 	 <br><br>

        
   
    <br />
   <a style="text-align: center" href="/dynamic">DYNAMIC SINGLE PAGE WITH CODE</a>
   <br />
   <br />
   ${dynamic_page}
   <hr><hr>

<br />
<a style="text-align: center" href="/activities">ACTIVITIES SINGLE PAGE WITH CODE</a>
<br />
<br />

    ${activity_page}
    
   <hr><hr>
         <br />
<a style="text-align: center" href="/events">EVENTS SINGLE PAGE WITH CODE</a>
<br />
<br />
    ${event_page}
   <hr><hr>
      <br />
<a style="text-align: center" href="/hikes">HIKES SINGLE PAGE WITH CODE</a>
<br />
<br />
    ${hike_page}
   <hr><hr>
   <br />
<a style="text-align: center" href="/malls">MALLS SINGLE PAGE WITH CODE</a>
<br />
<br />
    ${mall_page}
   <hr><hr>
   
<br />
<a style="text-align: center" href="/simple">SIMPLE SINGLE PAGE WITH CODE</a>
<br />
<br />
    ${simple_page}
      </body>
    </html>`;



    fs.writeFile("lambda-maps.html", all_page, err=>console.log(err));
