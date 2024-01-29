const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req)
    // res.write('Welcom to our home page')
    // res.end()
    // you can SWITCH TO IF, ELSE IF, ELSE
    if(req.url === '/'){
        res.end('Welcome to home page')
    }
    if(req.url === '/about'){
        res.end('Here is our short history')
    }
    // if the user asking for contact page that we dont have. do this 👇
    res.end(
            `<p>Opps! we can't see the page you are looking for</p> 
            <a href="/">Back to home</a>`
        )
})

server.listen(5000)