const Joi = require('joi')
const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    shortDescription: {
        type: String,
        required: false
    },

    longDescription: {
        type: String,
        required: false
    },
    year: {
        type: Number,
        required: true,
        max: [2022, "year must be less than or equall 2020"]
    },
    isbn: {
        type: String,
        required: true,
        unique: [true, 'ISBN must be unique']
    },
    price: {
        type: Number,
        required: true,
        min: [0, 'Price must be greater than or equal to 0']
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    lastUpdateAt: {
        type: Date,
        default: Date.now
    }
});

const Book = mongoose.model('Book', BookSchema);

module.exports = Book;
