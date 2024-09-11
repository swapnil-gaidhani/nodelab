const http = require('node:http');
const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.write('Hello World');
        res.end();
    }

    if(req.url === '/api/courses'){
        res.write(JSON.stringify(['Back end Web Technology','Software Engineering','Python','MIS']));
        res.end();
    }
});


/*server.on('connection',(socket)=>{
    console.log('New Connection Detected!!');
}); */

server.listen(3000);
console.log('Server is listening at port No. 3000...');

/* const server = http.createServer((req, res) => {
    res.end('Hello!');
  });
  
  server.listen(3000, () => {
    console.log('Server started on localhost:3000!');
  }) */