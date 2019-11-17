// Import module
const http = require('http')
const url = require('url')
const qs = require('querystring')
const mmodule = require('./handles')

const content = '<!DOCTYPE html>' +
'<html>' +
'    <head>' +
'        <meta charset="utf-8" />' +
'        <title>ECE AST</title>' +
'    </head>' + 
'    <body>' +
'         <p>Hello World!</p>' +
'    </body>' +
'</html>'

//mmodule.serverHandle();

const server = http.createServer(mmodule.serverHandle);
server.listen(8080)
console.log("Server online");