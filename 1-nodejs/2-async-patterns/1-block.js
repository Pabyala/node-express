const http = require('http')

const server = http.createServer((req, res) => {
  //res.end('Hello World') // it will display the "Hello World" in web
  if(req.url === '/'){
    res.end('Home Page')
  }
  if(req.url === '/about'){
    // BLOCKING CODE
    // after 999 then i will show the res.end('About Page');
    for( let i = 0; i < 1000; i++){
      for( let j = 0; j < 1000; j++){
        console.log(`I: ${i}; J: ${j};`);
      }
    }
    res.end('About Page');
  }
  res.end('Error Page');
})

server.listen(5000, () => {
  console.log('Server listening on port : 5000....')
})