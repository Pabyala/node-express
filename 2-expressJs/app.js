const express = require('express');
const app = express();

const people = require('./routes/people')
const auth = require('./routes/auth')

// static assets
app.use(express.static('./methods-public'))
// parse form data
app.use(express.urlencoded({extended: false}))
// parse json
app.use(express.json())
// routes for /api/people
app.use('/api/people', people)
// auth to /login
app.use('/login', auth)

app.listen(5000, () => {        
    console.log('server listening on port http://localhost:5000')
})