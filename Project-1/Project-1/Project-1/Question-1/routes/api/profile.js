
/****************************************************************************** 
* ITE5315 – Assignment 3 
* I declare that this assignment is my own work in accordance with Humber Academic Policy. * 
No part of this assignment has been copied manually or electronically from any other source * 
(including web sites) or distributed to other students. 
* 
* Name: __Utsav Jitendrabhai Patel_ Student ID: __N01516259__ Date: _26/03/2023_____ 
* 
* 
*******************************************************************************/
const express = require('express')
const router = express.Router()

// Import Person schema
const Person = require('./../../models/Person')


router.get('/', (req, res) => res.send('Profile related routes'))


router.get('/get', async (req, res) => {
    
    const people = await Person.find({});
    try {
        res.send(people);
    } catch (error) {
        res.status(500).send(error);
    }

  
})

router.get('/get/:username', (req, res) => {
    Person
        .findOne({username: req.params.username})
        .then(person => res.send(person))
        .catch(err => console.log(err))
})


router.post('/add', (req, res) => {
    Person
        .findOne({username: req.body.username})
        .then(person => {
            if (person) {
                return res
                        .status(400)
                        .send('Username already exists')    
            } else {
                const newPerson = Person({
                    name: req.body.name,
                    username: req.body.username,
                    password: req.body.password
                })

                newPerson
                    .save()
                    .then(person => res.send(person))
                    .catch(err => console.log(err))
            }
        })
        .catch(err => console.log(err))
})

router.put('/update-pwd/:username', (req, res) => {
    Person.updateOne(
        {username: req.params.username},
        { $set: { password: req.body.password }})
        .exec()
        .then(() => {
            res.status(201).send('Password Updated.')
        })
        .catch((err) => { console.log(err);
        })
})

router.delete('/delete/:username', (req, res) => {
    Person.deleteOne({username: req.params.username})
        .exec()
        .then(() => {
            res.status(201).send('Person Deleted.')
        })
        .catch((err) => { console.log(err);
        })
})

module.exports = router