const http = require('http');
const fs = require('fs');
const qs = require('querystring');
// new line added
// Function to handle requests
function handleRequest(req, res) {
  if (req.method === 'GET' && req.url === '/') {
    // Serve the HTML form
    fs.readFile('./index.html', (err, data) => {
      if (err) {
        res.writeHead(500, {'Content-Type': 'text/plain'});
        res.end('Error loading page');
      } else {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data);
      }
    });
  } else if (req.method === 'POST' && req.url === '/submit') {
    // Collect form data
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      // Parse the form data
      const formData = qs.parse(body);
      console.log(formData);
      
      const username = formData.username;
      const password = formData.password;

      // Generate response
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(`
        Hello ${username}!, Please check if your password is ${password}
      `);
    });
  } else {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('404 Not Found');
  }
}

// Create server
const server = http.createServer(handleRequest);

// Listen on port 3000
server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
