function start(response) {
  console.log("Request handler 'start was called.");

  var body = '<html>' + 

  '</html>';

  response.writeHead(200, {"Content-Type": "text/html"});
  response.write(body);
  response.end();
  
}

exports.start = start;