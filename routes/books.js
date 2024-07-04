const express = require('express');
const router = express.Router();

const { showAllBooks, addBook, showSingleBook, updateBook, deleteBook } = require('../controllers/books')
router.route('/').post(addBook)
router.route('/').get(showAllBooks);
router.route('/:id').get(showSingleBook).put(updateBook).delete(deleteBook)


module.exports = router