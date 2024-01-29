var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
  // const text = fs.readFileSync('./content/big.txt', 'utf8')
  // the content of the file in big.txt will be display in web 
  // res.end(text)

  const fileStream = fs.createReadStream('./content/big.txt', 'utf8')
  fileStream.on('open', () => {
    fileStream.pipe(res)
  })
  fileStream.on('error', (err) => {
    res.end(err)
  })
}).listen(5000)