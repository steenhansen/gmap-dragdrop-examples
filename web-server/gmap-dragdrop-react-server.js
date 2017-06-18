"use strict"

var express = require('express')
var bodyParser = require('body-parser')
var compression = require('compression')
const LOCAL_PORT = 5000

function logExpressErrors(e, req, res, next) {
  global.Method_logger.chronicle('error', 'express-error', module.filename, ' e.stack', e.stack)
  next(e)
}

function expressErrorHandler(e, req, res, next_ignored) {
  res.status(500)
  res.send('SERVER ERROR')
}

let web_server = function (public_static_files, resource_folder, localhost_port) {
  var app = express()
  app.use(compression())
  app.use(express.static(public_static_files, {maxAge: '1y'}))
  app.use(bodyParser.urlencoded({extended: true}))
  app.use(bodyParser.json())
  app.use(logExpressErrors)
  app.use(expressErrorHandler)
  let gmaps_pages = require('./gmaps-pages.js')(public_static_files)

  app.get('/simple', function (req, res) {
    gmaps_pages.gmapSimple(req, res)
  })

  app.get('/dynamic', function (req, res) {
    gmaps_pages.gmapDynamic(req, res)
  })

  app.get('/activities', function (req, res) {
    gmaps_pages.gmapActivities(req, res)
  })

  app.get('/maps', function (req, res) {
    gmaps_pages.gmapAll(req, res)
  })

  app.get('/hikes', function (req, res) {
    gmaps_pages.gmapHikes(req, res)
  })

  app.get('/malls', function (req, res) {
    gmaps_pages.gmapMalls(req, res)
  })

  app.get('/events', function (req, res) {
    gmaps_pages.gmapEvents(req, res)
  })

  app.get('*', function (req, res) {
    res.redirect('/maps')
  })

  app.set('port', (process.env.PORT || localhost_port))
  var node_port = app.get('port')
  app.listen(node_port).on('error', function (e) {
    console.log(e)
    process.exit()
  })
  return app

}

console.log(`  Started web server on - http://localhost:${LOCAL_PORT}`)
web_server('public', 'gmap-resources', LOCAL_PORT)
















