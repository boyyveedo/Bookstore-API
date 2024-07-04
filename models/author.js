const Joi = require('joi')
const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: false
    },

    dob: {
        type: Date,
    },
    country: {
        type: String,
        required: false,
    },
    books: {
        type: Array,
        default: [],
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

const Author = mongoose.model('Author', AuthorSchema);

module.exports = Author;
