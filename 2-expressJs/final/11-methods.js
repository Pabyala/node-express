const express = require('express');
const app = express();
let { people } = require('./data')

// static assets
app.use(express.static('./methods-public'))
// parse form data
app.use(express.urlencoded({extended: false}))
// parse json
app.use(express.json())

app.post('/login', (req, res) => {
    // console.log(req.body)
    const { name } = req.body
    if(name){
        return res.status(200).send(`Welcome ${name}`)
    }
    res.status(401).send('Please provide credentials')
})

// fecth/get the people data
app.get('/api/people', (req, res) => {
    res.status(200).json({success: true, data: people})
})

// add/create new name;
app.post('/api/people', (req, res) => {
    const { name } = req.body
    // if the name is not provided or empty input; send it back
    if(!name){
        return res.status(404).json({success: false, msg: 'Please provide name value'})
    }
    res.status(201).json({success: true, person: name})
})

// add/create new name;
app.post('/api/people/postman', (req, res) => {
    const { name } = req.body
    // if the name is not provided or empty input; send it back
    if(!name){
        return res.status(404).json({success: false, msg: 'Please provide name value'})
    }
    res.status(201).json({success: true, data: [...people, name]})
})

// update the data/name
app.put('/api/people/:id', (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    // console.log(id, name)

    const person = people.find((person) => person.id === Number(id));
    if(!person){
        return res.status(404).json({success: false, msg: `no person with ID ${id}`})
    }

    const newPeople = people.map((person) => {
        // check if the person.id is same as id, do this 👇
        if(person.id === Number(id)){
            // update the name
            person.name = name
        }
        return person
    })

    res.status(200).json({success: true, data: newPeople})
})

// delete the name base on the id
app.delete('/api/people/:id', (req, res) => {
    // const { id } = req.params;
    const { name } = req.body;

    const person = people.find((person) => person.id === Number(req.params.id));
    if(!person){
        return res.status(404).json({success: false, msg: `no person with ID ${req.params.id}`})
    }

    const newPeople = people.filter((person) => person.id !== Number(req.params.id))
    return res.status(200).json({success: true, data: newPeople})
})


app.listen(5000, () => {        
    console.log('server listening on port http://localhost:5000')
})
