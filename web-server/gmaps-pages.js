'use strict'

let jsx_chunks = require('./jsx-chunks.js')

function gmapJsIncludes() {
  var common_js = ` <script DEFER src="https://cdnjs.cloudflare.com/ajax/libs/react/15.4.2/react.js"></script>
	                    <script DEFER src="https://cdnjs.cloudflare.com/ajax/libs/react/15.4.2/react-dom.js"></script>
						<script DEFER src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.6.15/browser-polyfill.min.js"></script><!-- for IE symbol -->
						<script DEFER src="canvasPolyfill.js"> // for IE canvas.Path2D </script>`
  return common_js
}

module.exports = function (public_static_files) {

  var gmap_pages = {}

  let resource_location = public_static_files + '/gmap-resources/'

  gmap_pages.gmapSimple = function (req, res) {
    let gmap_simple_entry = jsx_chunks.chunkhashEntry('gmap_simple_entry', req)
    let common_js_include = jsx_chunks.chunkhashEntry('commons', req)
    let simple_html = jsx_chunks.readResourceFile(resource_location, 'simple/simple.html')
    let simple_pre_jsx = jsx_chunks.readEntryJsx('gmap_simple_entry.jsx')
    let simple_pre_js = jsx_chunks.readResourceFile(resource_location, 'simple/gmap_simple.js')
    let simple_promises = [gmap_simple_entry, common_js_include, simple_html, simple_pre_jsx, simple_pre_js]
    return Promise.all(simple_promises)
            .then(([gmap_simple_entry, common_js_include, simple_html, simple_pre_jsx, simple_pre_js]) => {
              const react_includes = gmapJsIncludes()
              const simple_pre_jsx_text = jsx_chunks.html2Text(simple_pre_jsx)
              const simple_page = `<!doctype html>
                             <html lang="en-US">
                                <title>Simple</title>
								<body>
						
								<link rel="stylesheet" type="text/css" href="shared_styles.css">
								<link rel="stylesheet" type="text/css" href="gmap-resources/simple/simple_styles.css">
									${react_includes}      
									
							
									
									
									<script DEFER src="${common_js_include}"></script>									
										${simple_html}
									<script DEFER src="${gmap_simple_entry}"></script>
										<script DEFER src="gmap-resources/simple/gmap_simple.js"></script>
									<pre>${simple_pre_jsx_text}</pre>
									<pre>${simple_pre_js}</pre>
                               </body>
                             </html>`
              res.send(simple_page)
            })
  }
  gmap_pages.gmapDynamic = function (req, res) {
    let gmap_dynamic_entry = jsx_chunks.chunkhashEntry('gmap_dynamic_entry', req)
    let common_js_include = jsx_chunks.chunkhashEntry('commons', req)
    let dynamic_html = jsx_chunks.readResourceFile(resource_location, 'dynamic_map/dynamic.html')
    let dynamic_pre_jsx = jsx_chunks.readEntryJsx('gmap_dynamic_entry.jsx')
    let dynamic_pre_js = jsx_chunks.readResourceFile(resource_location, 'dynamic_map/gmap_dynamic.js')
    let dynamic_promises = [gmap_dynamic_entry, common_js_include, dynamic_html, dynamic_pre_jsx, dynamic_pre_js]
    return Promise.all(dynamic_promises)
            .then(([gmap_dynamic_entry, common_js_include, dynamic_html, dynamic_pre_jsx, dynamic_pre_js]) => {
              const react_includes = gmapJsIncludes()
              const dynamic_pre_jsx_text = jsx_chunks.html2Text(dynamic_pre_jsx)
              const dynamic_page = `<!doctype html>
                             <html lang="en-US">
                                <title>Dynamic</title>
								<body>
								<link rel="stylesheet" type="text/css" href="shared_styles.css">
								<link rel="stylesheet" type="text/css" href="gmap-resources/dynamic_map/dynamic_styles.css">
									${react_includes}      
									<script DEFER  src="${common_js_include}"></script>									
									<script DEFER src="${gmap_dynamic_entry}"></script>
									<script DEFER src="gmap-resources/dynamic_map/gmap_dynamic.js"></script>
										${dynamic_html}
									<pre>${dynamic_pre_jsx_text}</pre>
									<pre>${dynamic_pre_js}</pre>
								
                               </body>
                             </html>`
              res.send(dynamic_page)
            })

  }
  gmap_pages.gmapActivities = function (req, res) {
    let gmap_activities_entry = jsx_chunks.chunkhashEntry('gmap_activities_entry', req)
    let common_js_include = jsx_chunks.chunkhashEntry('commons', req)
    let activities_html = jsx_chunks.readResourceFile(resource_location, 'activities/activities.html')
    let activities_pre_jsx = jsx_chunks.readEntryJsx('gmap_activities_entry.jsx')
    let activities_pre_js = jsx_chunks.readResourceFile(resource_location, 'activities/gmap_activities.js')
    let activities_pre_data = jsx_chunks.readEntryJsx('activities_data.jsx')
    let activities_promises = [gmap_activities_entry, common_js_include, activities_html, activities_pre_jsx, activities_pre_js, activities_pre_data]
    return Promise.all(activities_promises)
            .then(([gmap_activities_entry, common_js_include, activities_html,  activities_pre_jsx, activities_pre_js, activities_pre_data]) => {
              const activities_pre_jsx_text = jsx_chunks.html2Text(activities_pre_jsx)
              const react_includes = gmapJsIncludes()
              const dynamic_page = `<!doctype html>
                             <html lang="en-US">
                             <title>Activities</title>
								<body>
								<link rel="stylesheet" type="text/css" href="shared_styles.css">
								<link rel="stylesheet" type="text/css" href="gmap-resources/activities/activities_styles.css">
									${react_includes}      
									<script DEFER src="${common_js_include}"></script>	
                                    ${activities_html}
									<script DEFER src="${gmap_activities_entry}"></script>
									<script DEFER src="gmap-resources/activities/gmap_activities.js"></script>
									<pre>${activities_pre_jsx_text}</pre>
									<pre>${activities_pre_js}</pre>
									<pre>${activities_pre_data}</pre>
                               </body>
                             </html>`
              res.send(dynamic_page)
            })
  }
  gmap_pages.gmapEvents = function (req, res) {
    let gmap_events_entry = jsx_chunks.chunkhashEntry('gmap_events_entry', req)
    let common_js_include = jsx_chunks.chunkhashEntry('commons', req)
    let events_html = jsx_chunks.readResourceFile(resource_location, 'events/events.html')
    let events_pre_jsx = jsx_chunks.readEntryJsx('gmap_events_entry.jsx')
    let events_pre_js = jsx_chunks.readResourceFile(resource_location, 'events/gmap_events.js')
    let events_promises = [gmap_events_entry, common_js_include, events_html, events_pre_jsx, events_pre_js]
    return Promise.all(events_promises)
            .then(([gmap_events_entry, common_js_include, events_html, events_pre_jsx, events_pre_js]) => {
              const react_includes = gmapJsIncludes()
              const events_pre_jsx_text = jsx_chunks.html2Text(events_pre_jsx)
              const events_page = `<!doctype html>
                             <html lang="en-US">
                                <title>events</title>
								<body>
								<link rel="stylesheet" type="text/css" href="shared_styles.css">
								<link rel="stylesheet" type="text/css" href="gmap-resources/events/events_styles.css">
									${events_html}
									${react_includes}      
									<script DEFER src="${common_js_include}"></script>									
									<script DEFER src="${gmap_events_entry}"></script>
									<script DEFER src="gmap-resources/events/gmap_events.js"></script>
									<pre>${events_pre_jsx_text}</pre>
                                    <pre>${events_pre_js}</pre>
                               </body>
                             </html>`
              res.send(events_page)
            })

  }
  gmap_pages.gmapMalls = function (req, res) {
    let gmap_malls_entry = jsx_chunks.chunkhashEntry('gmap_malls_entry', req)
    let common_js_include = jsx_chunks.chunkhashEntry('commons', req)
    let malls_html = jsx_chunks.readResourceFile(resource_location, 'malls/malls.html')
    let malls_pre_jsx = jsx_chunks.readEntryJsx('gmap_malls_entry.jsx')
    let malls_pre_js = jsx_chunks.readResourceFile(resource_location, 'malls/gmap_malls.js')
    let malls_pre_data = jsx_chunks.readEntryJsx('malls_data.jsx')
    let malls_promises = [gmap_malls_entry, common_js_include, malls_html, malls_pre_jsx, malls_pre_js, malls_pre_data]
    return Promise.all(malls_promises)
            .then(([gmap_malls_entry, common_js_include, malls_html, malls_pre_jsx, malls_pre_js, malls_pre_data]) => {
              const react_includes = gmapJsIncludes()
              const malls_pre_jsx_text = jsx_chunks.html2Text(malls_pre_jsx)
              const malls_page = `<!doctype html>
                             <html lang="en-US">
                                <title>malls</title>
								<body>
								<link rel="stylesheet" type="text/css" href="shared_styles.css">
								<link rel="stylesheet" type="text/css" href="gmap-resources/malls/malls_styles.css">
									${malls_html}
									${react_includes}      
									<script DEFER src="${common_js_include}"></script>									
									<script DEFER src="${gmap_malls_entry}"></script>
									<script DEFER src="gmap-resources/malls/gmap_malls.js"></script>
									<pre>${malls_pre_jsx_text}</pre>
                                    <pre>${malls_pre_js}</pre>
                                    <pre>${malls_pre_data}</pre>
                               </body>
                             </html>`
              res.send(malls_page)
            })
  }
  gmap_pages.gmapHikes = function (req, res) {
    let gmap_hike_entry = jsx_chunks.chunkhashEntry('gmap_hike_entry', req)
    let common_js_include = jsx_chunks.chunkhashEntry('commons', req)
    let hike_html = jsx_chunks.readResourceFile(resource_location, 'hike/hike.html')
    let hike_pre_jsx = jsx_chunks.readEntryJsx('gmap_hike_entry.jsx')
    let hike_pre_js = jsx_chunks.readResourceFile(resource_location, 'hike/gmap_hike.js')
    let hike_pre_data = jsx_chunks.readEntryJsx('hikes_data.jsx')
    let hike_promises = [gmap_hike_entry, common_js_include, hike_html, hike_pre_jsx, hike_pre_js, hike_pre_data]
    return Promise.all(hike_promises)
            .then(([gmap_hike_entry, common_js_include, hike_html, hike_pre_jsx, hike_pre_js, hike_pre_data]) => {
              const react_includes = gmapJsIncludes()
              const hike_pre_jsx_text = jsx_chunks.html2Text(hike_pre_jsx)
              const hike_page = `<!doctype html>
                             <html lang="en-US">
                                <title>hike</title>
								<body>
								<link rel="stylesheet" type="text/css" href="shared_styles.css">
								<link rel="stylesheet" type="text/css" href="gmap-resources/hike/hike_styles.css">
									${hike_html}
									${react_includes}      
									<script DEFER src="${common_js_include}"></script>									
									<script DEFER src="${gmap_hike_entry}"></script>
									<pre>${hike_pre_jsx_text}</pre>
									<pre>${hike_pre_js}</pre>
									<pre>${hike_pre_data}</pre>
									<script DEFER src="gmap-resources/hike/gmap_hike.js"></script>
                               </body>
                             </html>`
              res.send(hike_page)
            })
  }
  gmap_pages.gmapAll = function (req, res) {
    let common_js_include = jsx_chunks.chunkhashEntry('commons', req)
    let gmap_dynamic_entry = jsx_chunks.chunkhashEntry('gmap_dynamic_entry', req)
    let gmap_simple_entry = jsx_chunks.chunkhashEntry('gmap_simple_entry', req)
    let gmap_activities_entry = jsx_chunks.chunkhashEntry('gmap_activities_entry', req)
    let gmap_malls_entry = jsx_chunks.chunkhashEntry('gmap_malls_entry', req)
    let gmap_hike_entry = jsx_chunks.chunkhashEntry('gmap_hike_entry', req)
    let gmap_events_entry = jsx_chunks.chunkhashEntry('gmap_events_entry', req)
    let dynamic_html = jsx_chunks.readResourceFile(resource_location, 'dynamic_map/dynamic.html')
    let simple_html = jsx_chunks.readResourceFile(resource_location, 'simple/simple.html')
    let activities_html = jsx_chunks.readResourceFile(resource_location, 'activities/activities.html')
    let malls_html = jsx_chunks.readResourceFile(resource_location, 'malls/malls.html')
    let hike_html = jsx_chunks.readResourceFile(resource_location, 'hike/hike.html')
    let event_html = jsx_chunks.readResourceFile(resource_location, 'events/events.html')
    let my_promises = [common_js_include,
      gmap_dynamic_entry, gmap_simple_entry, gmap_activities_entry, gmap_malls_entry, gmap_hike_entry, gmap_events_entry,
      dynamic_html, simple_html, activities_html, malls_html, hike_html, event_html]
    return Promise.all(my_promises)
            .then(([common_js_include,
              gmap_dynamic_entry, gmap_simple_entry, gmap_activities_entry, gmap_malls_entry, gmap_hike_entry,gmap_events_entry,
              dynamic_html, simple_html, activities_html, malls_html, hike_html,event_html]) => {
              const react_includes = gmapJsIncludes()
              const dynamic_page = `<!doctype html>
                             <html lang="en-US">
                                <title>All</title>
								<body>
								<link rel="stylesheet" type="text/css" href="shared_styles.css">
								<link rel="stylesheet" type="text/css" href="gmap-resources/dynamic_map/dynamic_styles.css">
								<link rel="stylesheet" type="text/css" href="gmap-resources/malls/malls_styles.css">
								<link rel="stylesheet" type="text/css" href="gmap-resources/activities/activities_styles.css">
								<link rel="stylesheet" type="text/css" href="gmap-resources/hike/hike_styles.css">
								<link rel="stylesheet" type="text/css" href="gmap-resources/events/events_styles.css">
								
				
The Point of this React component is to enable drag-and-drop on-and-off a Google map, not
 to <a href='https://developers.google.com/maps/documentation/javascript/markers#draggable'
          target="_blank">drag a marker</a> inside a Google map. 								 					 
									 	 <br><br>
									 	 	 Drag markers between maps and browsers.
									 	 	 
									 	 	 
									 	 	
									 	 	 	 	 	 	 	 	 	 
									 	 	 	 	 	 	 	 	 	 	 	 ${dynamic_html} 
									
								 	<a href='/dynamic'>Dynamic single page</a>
								<hr>
								
								
						
									${malls_html}
									<div style='clear:both'>&nbsp;</div>
									<a href='/malls'>Malls single page</a>
								<hr>

								    ${activities_html}
									<a href='/activities'>Activities single page</a>
								<hr>
									${hike_html}
								 	<a href='/hikes'>Hikes single page</a>
								 	
								 		<hr>
								 			
																	${simple_html} 
									 <a href='/simple'>Simple single page</a> 
								<hr>
								 	
							
									${event_html}
								 	<a href='/events'>Events single page</a>
								 	
								 	
								 	
     							${react_includes}      
								<script DEFER src="${common_js_include}"></script>	
								<script DEFER src="${gmap_dynamic_entry}"></script>
								<script DEFER src="${gmap_simple_entry}"></script>
								<script DEFER src="${gmap_activities_entry}"></script>
								<script DEFER src="${gmap_malls_entry}"></script>
								<script DEFER src="${gmap_hike_entry}"></script>
								<script DEFER src="${gmap_events_entry}"></script>
								<script DEFER  src="gmap-resources/hike/gmap_hike.js"></script>
								<script DEFER  src="gmap-resources/malls/gmap_malls.js"></script>
								<script DEFER  src="gmap-resources/dynamic_map/gmap_dynamic.js"></script>
								<script DEFER src="gmap-resources/simple/gmap_simple.js"></script>
								<script DEFER src="gmap-resources/activities/gmap_activities.js"></script>
								<script DEFER src="gmap-resources/events/gmap_events.js"></script>
                               </body>
                             </html>`
              res.send(dynamic_page)
            })
  }

  return gmap_pages
}
