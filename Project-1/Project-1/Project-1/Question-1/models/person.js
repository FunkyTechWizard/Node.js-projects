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
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PersonSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = Person = mongoose.model('myPerson', PersonSchema)