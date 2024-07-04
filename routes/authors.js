const express = require('express');
const router = express.Router();
const { AddAuthorValidationMw, UpdateAuthorValidationMw } = require('../validators/authors.validator')

const { allAuthors, createAuthor, getSingleAuthor, updateAuthor, deleteAuthor } = require('../controllers/authors')
router.route('/').post(AddAuthorValidationMw, createAuthor)
router.route('/').get(allAuthors);
router.route('/:id').get(getSingleAuthor).put(UpdateAuthorValidationMw, updateAuthor).delete(deleteAuthor)


module.exports = router