const url = require('url')
const qs = require('querystring')

const serverHandle = function (req, res) {

    // Retrieve and print the current path
    const route = url.parse(req.url)
    const path = route.pathname 
    const params = qs.parse(route.query)
  

  res.writeHead(200, {'Content-Type': 'text/plain'});
    if (path === '/') {
      res.write('/hello takes a name query parameter and random names replies hello [name]. Your own name replies with a short intro of yourself. Any other replies a 404 code with a not found message. Tap : hello?name=alex')
    }
    else if (path === '/hello' && 'name' in params) {
      if (params['name'] === 'alex'){
        res.write('Hello' + ' ' + params['name'] + '! Je suis Alexandre, un etudiant a ECE Paris en 4eme annee')
      }
      else {
      res.write('Hello' + ' ' + params['name'])
      }
    } 
    
    else {
        res.write('ERROR 404')
    }
    res.end();
}

exports.serverHandle = serverHandle;