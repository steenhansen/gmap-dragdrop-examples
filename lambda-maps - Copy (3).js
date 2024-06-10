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
//let dynamic_js = fs.readFileSync("public/dynamic_entr.js", "utf8");

let activities_html = fs.readFileSync("public/activities-type/activities-divs.html", "utf8");
let activities_data = fs.readFileSync("public/activities-type/activities-data.js", "utf8");
let activities_css = fs.readFileSync("public/activities-type/activities-styles.css", "utf8");
//let activities_js = fs.readFileSync("public/activities_entr.js", "utf8");

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
  5555555555555

  66666666666666
  <script>
    window.gmap_activities = window.activitiesMap("gmap-activites-id", [NORTH_SHORE_OUTING]);
  </script> `;

    const all_page = `
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
         ${react_cdns}
           <script>
             var GLOBAL_WEBPACK={ GOOG_MAP_API: "${goog_map_api}" };
           ${all_entry}
    
    </script>
  ${dynamic_page}
dddddddddddddddddddddddddddddddddddddddd
   <hr><hr>
  ${activity_page}
<br />
<a style="text-align: center" href="/activities">ACTIVITIES SINGLE PAGE WITH CODE</a>
<br />
<br />

      </body>
    </html>`;

 fs.writeFile("lambda-maps.html", all_page, err=>console.log(err));
