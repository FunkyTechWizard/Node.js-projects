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
const mongoose = require('mongoose')
const router = express.Router()
const exphbs = require('express-handlebars')

// Import Book schema
const book_d = require('../../models/book_d')


router.get('/', (req, res) => res.send('routes'))


router.get('/get/:isbn', (req, res) => {
    
    console.log(typeof req.params.isbn)
    book_d
        .findOne({ isbn: req.params.isbn })
        .then(book => res.send(book))
        .catch(err => console.log(err))
})

router.get('/get', async(req, res) => {

 
    const book = await book_d.find({});
    try {
        res.send(book);
    } catch (error) {
        res.status(500).send(error);
    }

   
})
router.post('/add', (req, res) => {
    
    book_d
        .findOne({ isbn: req.body.isbn })
        .then(book => {
            if (book) {
                return res
                    .status(400)
                    .send('ISBN already exists')
            } else {
                const objectId = new mongoose.Types.ObjectId(req.body._id);
                const newbookData = book_d({
                    _id: req.body._id,
                    title: req.body.title,
                    isbn: req.body.isbn,
                    pageCount: req.body.pageCount,
                    publishDate: req.body.publishDate,
                    thumbnailUrl: req.body.thumbnailUrl,
                    shortDescription: req.body.shortDescription,
                    longDescription: req.body.longDescription,
                    status: req.body.status,
                    authors: req.body.authors,
                    categories: req.body.categories
                })

                newbookData
                    .save()
                    .then(book_d => res.send(newbookData))
                    .catch(err => console.log(err))
            }
        })
        .catch(err => console.log(err))
})

router.delete('/delete/:isbn', (req, res) => {
    book_d.deleteOne({ isbn: req.params.isbn })
        .exec()
        .then(() => {
            res.status(201).send('Data Deleted.')
        })
        .catch((err) => {
            console.log(err);
        })
})

router.put('/update/:isbn', (req, res) => {
    book_d.updateOne({ isbn: req.params.isbn }, { $set: { title: req.body.title, pageCount: req.body.pageCount } })
        .exec()
        .then(() => {
            res.status(201).send('Data Updated.')
        })
        .catch((err) => {
            console.log(err);
        })
})




module.exports = router