"use strict";

// node lambda-maps.js 

const goog_map_api = 'AIzaSyCE3HSVtJ6yOEkHiBpyoR_iU00gqYgTkfk';
const fs = require("fs");

if (fs.existsSync("public/is_DEVELOPMENT.webpack.txt")) {
  console.log("DEVELOPMENT React CDN files");
} else {
  console.log("Production React CDN files");
}

let all_entry = fs.readFileSync("public/all_entr.js", "utf8");

let dynamic_html = fs.readFileSync("public/dynamic-type/dynamic-divs.html", "utf8");
let dynamic_data = fs.readFileSync("public/dynamic-type/dynamic-data.js", "utf8");
let dynamic_css = fs.readFileSync("public/dynamic-type/dynamic-styles.css", "utf8");

let activities_html = fs.readFileSync("public/activities-type/activities-divs.html", "utf8");
let activities_data = fs.readFileSync("public/activities-type/activities-data.js", "utf8");
let activities_css = fs.readFileSync("public/activities-type/activities-styles.css", "utf8");

let events_html = fs.readFileSync("public/events-type/events-divs.html", "utf8");
let events_data = fs.readFileSync("public/events-type/events-data.js", "utf8");
let events_css = fs.readFileSync("public/events-type/events-styles.css", "utf8");

let hike_html = fs.readFileSync("public/hike-type/hike-divs.html", "utf8");
let hike_data = fs.readFileSync("public/hike-type/hike-data.js", "utf8");
let hike_css = fs.readFileSync("public/hike-type/hike-styles.css", "utf8");

let malls_html = fs.readFileSync("public/malls-type/malls-divs.html", "utf8");
let malls_data = fs.readFileSync("public/malls-type/malls-data.js", "utf8");
let malls_css = fs.readFileSync("public/malls-type/malls-styles.css", "utf8");

const simple_html = fs.readFileSync("public/simple-type/simple-divs.html", "utf8");
const simple_data = fs.readFileSync("public/simple-type/simple-data.js", "utf8");
let simple_css = fs.readFileSync("public/simple-type/simple-styles.css", "utf8");


  var react_cdns = ` <script crossorigin src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
                      <script crossorigin src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
                        <script crossorigin src="https://unpkg.com/prop-types@15.8.1/prop-types.min.js"></script>	`;



const dynamic_page = `
  <style>${dynamic_css}</style>
  ${dynamic_html}
  <script>${dynamic_data}</script>
  <script>
    window.gmap_dynamic= window.dynamicMap("gmap-dynamic-id-A", "gmap-dynamic-id-B", locations_a, locations_b);
  </script>`;
  
const activity_page = `
  <style>${activities_css}</style>
  ${activities_html}
  <script>${activities_data}</script>
  <script>
    window.gmap_activities = window.activitiesMap("gmap-activites-id", [NORTH_SHORE_OUTING]);
  </script> `;

  const event_page = `
  <style>${events_css}</style>
  ${events_html} 
  <script>${events_data}</script>
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


    const all_page = `
         ${react_cdns}
           <script>
             var GLOBAL_WEBPACK={ GOOG_MAP_API: "${goog_map_api}" };
           ${all_entry}
    
    </script>
  ${dynamic_page}
   <hr><hr>
  ${activity_page}
     <hr><hr>
  ${event_page}
  <hr><hr>
  ${hike_page}
   <hr><hr>
  ${mall_page}
     <hr><hr>
  ${simple_page}
<br />
<a style="text-align: center" href="/activities">ACTIVITIES SINGLE PAGE WITH CODE</a>
<br />
<br />

      </body>
    </html>`;

 fs.writeFile("lambda-maps.html", all_page, err=>console.log(err));
