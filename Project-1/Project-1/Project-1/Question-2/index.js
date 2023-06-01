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
const bodyParser = require('body-parser')
const mongoose = require('mongoose')


const port = process.env.PORT || 8000

const app = express()






app.use(bodyParser.urlencoded({ extended: false }))


const settings = require('./config/settings')


const db = settings.mongoDBUrl

mongoose
    .connect(db)
    .then(() => console.log('MongoDB connected successfully.'))
    .catch(err => console.log(err))

const profile = require('./routes/api/profile')

app.get('/', (req, res) => {
    res.send('Project is Running')
})

app.use('/api/profile', profile)

app.listen(port, () => console.log(`App running at port : ${port}`))