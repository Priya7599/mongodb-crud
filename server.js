//import express , body-parser and cors module
var express = require('express')
var bodyparser = require('body-parser')
var cors = require('cors')
//create rest object
var app = express()
//set json as MIME type
app.use(bodyparser.json())
//client not sending form data -> encoding to JSON
app.use(bodyparser.urlencoded({extended:false}))
//enable CORS -> Corss Origin Resourse Sharing
app.use(cors())
let port = process.env.PORT || 8080
//import fetch insert update delete modules
var fetch = require("./fetch/fetch")
var insert = require("./insert/insert")
var update = require("./update/update")
var remove = require("./delete/delete")
//use above modules
app.use("/fetch",fetch)
app.use("/insert",insert)
app.use("/update", update)
app.use("/delete", remove)
//assign port no
app.listen(port,()=>{
    console.log("Server listening port no "+port)
})