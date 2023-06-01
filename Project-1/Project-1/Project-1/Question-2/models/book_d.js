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
const mongoose = require('mongoose');
var dummySchema = mongoose.Schema
const bschema = new mongoose.Schema({
    _id: dummySchema.ObjectId,
    title: String,
    isbn: String,
    pageCount: Number,
    publishedDate: {
        $date: {
            $numberLong: String,
        },
    },
    thumbnailUrl: String,
    shortDescription: String,
    longDescription: String,
    status: String,
    authors: [String],
    categories: [String],
});

const Book = mongoose.model('Book', bschema);
module.exports = Book;