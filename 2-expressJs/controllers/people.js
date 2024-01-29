let { people } = require('../data')


const getPeople = (req, res) => {
    res.status(200).json({success: true, data: people})
}

const createPerson = (req, res) => {
    const { name } = req.body
    // if the name is not provided or empty input; send it back
    if(!name){
        return res.status(404).json({success: false, msg: 'Please provide name value'})
    }
    res.status(201).json({success: true, person: name})
}

const createPersonPostman = (req, res) => {
    const { name } = req.body
    // if the name is not provided or empty input; send it back
    if(!name){
        return res.status(404).json({success: false, msg: 'Please provide name value'})
    }
    res.status(201).json({success: true, data: [...people, name]})
}

const updatePerson = (req, res) => {
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
}

const deletePerson = (req, res) => {
    // const { id } = req.params;
    const { name } = req.body;

    const person = people.find((person) => person.id === Number(req.params.id));
    if(!person){
        return res.status(404).json({success: false, msg: `no person with ID ${req.params.id}`})
    }

    const newPeople = people.filter((person) => person.id !== Number(req.params.id))
    return res.status(200).json({success: true, data: newPeople})
}

module.exports = { 
    getPeople, 
    createPerson, 
    createPersonPostman, 
    updatePerson, 
    deletePerson 
}