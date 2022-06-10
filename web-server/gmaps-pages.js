"use strict";

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

let dynamic_html = fs.readFileSync("public/dynamic-type/dynamic-divs.html", "utf8");
let dynamic_data = fs.readFileSync("public/dynamic-type/dynamic-data.js", "utf8");
let dynamic_css = fs.readFileSync("public/dynamic-type/dynamic-styles.css", "utf8");
let dynamic_jsx = fs.readFileSync("jsx-javascript/gmap_dynamic_entry.jsx", "utf8");
dynamic_jsx = fixReactBrackets(dynamic_jsx);

let activities_html = fs.readFileSync("public/activities-type/activities-divs.html", "utf8");
let activities_data = fs.readFileSync("public/activities-type/activities-data.js", "utf8");
let activities_css = fs.readFileSync("public/activities-type/activities-styles.css", "utf8");
let activities_jsx = fs.readFileSync("jsx-javascript/gmap_activities_entry.jsx", "utf8");
activities_jsx = fixReactBrackets(activities_jsx);

let events_html = fs.readFileSync("public/events-type/events-divs.html", "utf8");
let events_data = fs.readFileSync("public/events-type/events-data.js", "utf8");
let events_css = fs.readFileSync("public/events-type/events-styles.css", "utf8");
let events_jsx = fs.readFileSync("jsx-javascript/gmap_events_entry.jsx", "utf8");
events_jsx = fixReactBrackets(events_jsx);

let hike_html = fs.readFileSync("public/hike-type/hike-divs.html", "utf8");
let hike_data = fs.readFileSync("public/hike-type/hike-data.js", "utf8");
let hike_css = fs.readFileSync("public/hike-type/hike-styles.css", "utf8");
let hike_jsx = fs.readFileSync("jsx-javascript/gmap_hike_entry.jsx", "utf8");
hike_jsx = fixReactBrackets(hike_jsx);

let malls_html = fs.readFileSync("public/malls-type/malls-divs.html", "utf8");
let malls_data = fs.readFileSync("public/malls-type/malls-data.js", "utf8");
let malls_css = fs.readFileSync("public/malls-type/malls-styles.css", "utf8");
let malls_jsx = fs.readFileSync("jsx-javascript/gmap_malls_entry.jsx", "utf8");
malls_jsx = fixReactBrackets(malls_jsx);

const simple_html = fs.readFileSync("public/simple-type/simple-divs.html", "utf8");
const simple_data = fs.readFileSync("public/simple-type/simple-data.js", "utf8");
let simple_css = fs.readFileSync("public/simple-type/simple-styles.css", "utf8");
let simple_jsx = fs.readFileSync("jsx-javascript/gmap_simple_entry.jsx", "utf8");
simple_jsx = fixReactBrackets(simple_jsx);

if (fs.existsSync("public/is_DEVELOPMENT.webpack.txt")) {
  var react_cdns = ` <script crossorigin src="https://unpkg.com/react@17.0.2/umd/react.development.js"></script>
                    <script crossorigin src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.development.js"></script>
                      <script crossorigin src="https://unpkg.com/prop-types@15.8.1/prop-types.js"></script>`;
} else {
  var react_cdns = ` <script crossorigin src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
                      <script crossorigin src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
                        <script crossorigin src="https://unpkg.com/prop-types@15.8.1/prop-types.min.js"></script>	`;
}
const dynamic_page = `
  <style>${dynamic_css}</style>
  ${dynamic_html}
  <script>${dynamic_data}</script>
  <script>
    window.gmap_dynamic= window.dynamicMap("gmap-dynamic-id-A", "gmap-dynamic-id-B", locations_a, locations_b);
  </script>`;

const activities_page = `
  <style>${activities_css}</style>
  ${activities_html}
  <script>${activities_data}</script>
  <script>
    window.gmap_activities = window.activitiesMap("gmap-activites-id", [NORTH_SHORE_OUTING]);
  </script> `;

const events_page = `
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

const goog_map_api = process.env["goog_map_api"];
const start_page = `
  <!doctype html>
  <html lang="en-US">
    <title>Dragging Google Maps Pins</title>
    <link rel="stylesheet" href="shared_styles.css">
    ${react_cdns}
    <body>
    <script>
      var GLOBAL_WEBPACK={ GOOG_MAP_API: "${goog_map_api}" };
    </script>
`;

module.exports = function () {
  var gmap_pages = {};

  gmap_pages.gmapSimple = function (req, res) {
    const all_page = `
        ${start_page}
        <script  src="simple_entr.js"></script>
        ${simple_page}
        
<pre>
${simple_data}
</pre>


<pre>
${simple_jsx}
</pre>


        </body>
      </html>`;
    res.send(all_page);
  };

  gmap_pages.gmapDynamic = function (req, res) {
    const all_page = `${start_page}
         <script  src="dynamic_entr.js"></script>
                      ${dynamic_page}
                      
<pre>
${dynamic_data}
</pre>


<pre>
${dynamic_jsx}
</pre>

                               </body>
                             </html>`;
    res.send(all_page);
  };

  gmap_pages.gmapActivities = function (req, res) {
    const all_page = `${start_page}
     <script  src="activities_entr.js"></script>
                      ${activities_page}
                      
                      
<pre>
${activities_data}
</pre>


<pre>
${activities_jsx}
</pre>


                               </body>
                             </html>`;
    res.send(all_page);
  };

  gmap_pages.gmapEvents = function (req, res) {
    const all_page = `${start_page}
           <script  src="events_entr.js"></script>
                      ${events_page}
                      
<pre>
${events_data}
</pre>


<pre>
${events_jsx}
</pre>

                               </body>
                             </html>`;
    res.send(all_page);
  };

  gmap_pages.gmapMalls = function (req, res) {
    const all_page = `${start_page}
            <script  src="malls_entr.js"></script>
                      ${mall_page}

<pre>
${malls_data}
</pre>

<pre>
${malls_jsx}
</pre>

                               </body>
                             </html>`;
    res.send(all_page);
  };
  gmap_pages.gmapHikes = function (req, res) {
    const all_page = `${start_page}
            <script  src="hike_entr.js"></script>
                      ${hike_page}
                      
                      <pre>
${hike_data}
</pre>

<pre>
${hike_jsx}
</pre>

                               </body>
                             </html>`;
    res.send(all_page);
  };

  gmap_pages.gmapAll = function (req, res) {
    const all_page = `${start_page}

    The Point of this React component is to enable drag-and-drop on-and-off a Google map, not
to <a href='https://developers.google.com/maps/documentation/javascript/markers#draggable'
target="_blank">drag a marker</a> inside a Google map. 								 					 
		 	 <br><br>

        
    <script  src="all_entr.js"></script>
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

    ${activities_page}
    
   <hr><hr>
         <br />
<a style="text-align: center" href="/events">EVENTS SINGLE PAGE WITH CODE</a>
<br />
<br />
    ${events_page}
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
    res.send(all_page);
  };

  return gmap_pages;
};
