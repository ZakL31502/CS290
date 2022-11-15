/*
 * Write your server code in this file.
 *
 * name: Zakarie Leskowsky
 * email: leskowsz@oregonstate.edu
 */


//This grabs a file and prints it out completely
var fs = require("fs")
var http = require("http")

var port = 3000
if (process.env.PORT){
    port = process.env.PORT
}

var index = ""//= fs.readFileSync("./public/index.html", "utf-8")
var four = ""//= fs.readFileSync("./public/404.html", "utf-8")
var functions = ""//= fs.readFileSync("./public/index.js", "utf-8")
var style = ""//= fs.readFileSync("./public/style.css", "utf-8")
var benny = ""//= fs.readFileSync("./public/benny.jpg")

var server = http.createServer(function (req, res) {
    if (req.url == '/index.html' | req.url == '/'){
        res.writeHead(200, {'Content-Type': 'text/html'})
        if (!index){
            index = fs.readFileSync("./public/index.html", "utf-8")
            console.log("read index")
            console.log("status: ", res.statusCode)
        }
        res.end(index)
    }
    else if (req.url == '/index.js'){
        res.writeHead(200, {'Content-Type': 'text/js'})
        if (!functions){
            functions = fs.readFileSync("./public/index.js", "utf-8")
            console.log("read functions")
            console.log("status: ", res.statusCode)
        }
        res.end(functions)
    }
    else if (req.url == '/style.css'){
        res.writeHead(200, {'Content-Type': 'text/css'})
        if (!style){
            style = fs.readFileSync("./public/style.css", "utf-8")
            console.log("read style")
            console.log("status: ", res.statusCode)
        }
        res.end(style)
    }
    else if (req.url == '/benny.jpg'){
        res.writeHead(200, {'Content-Type': 'image/gif'})
        if (!benny){
            benny = fs.readFileSync("./public/benny.jpg")
            console.log("read benny")
            console.log("status: ", res.statusCode)
        }
            res.end(benny)
    }
    else if (req.url == '/404.html'){ 
        res.writeHead(200, {'Content-Type': 'text/html'})
        if(!four){
            four = fs.readFileSync("./public/404.html")
            console.log("read 404")
            console.log("status: ", res.statusCode)
        }
        res.end(four)
    }
    else{   //404 error
        res.writeHead(404, {'Content-Type': 'text/html'})
        if(!four){
            four = fs.readFileSync("./public/404.html")
            console.log("read 404")
            console.log("status: ", res.statusCode)
        }
        res.end(four)
    }
})

server.listen(port, function () {
    console.log("== Server is listening on port:", port)
})