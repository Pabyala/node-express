const express = require('express');
const router = express.Router();

const {
    getPeople, 
    createPerson, 
    createPersonPostman, 
    updatePerson, 
    deletePerson 
} = require('../controllers/people')

// fecth/get the people data
router.get('/', getPeople)
// add/create new name;
router.post('/', createPerson)
// add/create new name;
router.post('/postman', createPersonPostman)
// update the data/name
router.put('/:id', updatePerson)
// delete the name base on the id
router.delete('/:id', deletePerson)

// OR YOU CAN USE THIS 👇 
// router.route('/').get(getPeople).post(createPerson)
// router.route('/postman').post(createPersonPostman)
// router.route('/:id').put(updatePerson).delete(deletePerson)


module.exports = router