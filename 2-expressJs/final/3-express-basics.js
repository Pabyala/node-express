const express = require('express');
const app = express()

app.get('/', (req, res) => {
    console.log('user hit the resources')
    res.status(200).send('Home page')
})  

app.get('/about', (req, res) => {
    res.status(200).send('About page')   
})

// run this if the user access the resources that server dont have
app.all('*', (req, res) => {
    res .send('<h1>Resources not found</h1>')               
})
    
app.listen(5000, () => {        
    console.log('server listening on port 5000..')
})


// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen