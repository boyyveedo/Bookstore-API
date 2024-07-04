
const Book = require('../models/book')


const showAllBooks = async (req, res) => {
    try {
        const books = await Book.find({})
        res.status(200).json(books)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "An error occured" })

    }
}





const addBook = async (req, res) => {
    try {

        // add the article
        const book = await Book.create(req.body);

        res.status(201).json(book);
    } catch (error) {
        console.error('Error adding book:', error);
        res.status(500).json({ error: 'Could not add book' });
    }
};



const showSingleBook = async (req, res) => {
    try {
        const { id: bookID } = req.params;

        // Find the book by its ID
        const book = await Book.findOne({ _id: bookID })

        if (!book) {
            return res.status(404).json({ msg: `No book with id : ${bookID}` });
        }

        res.status(200).json(book);
    } catch (error) {
        console.error('Error fetching single book:', error);
        res.status(500).json({ msg: 'Could not fetch book' });
    }
};




const updateBook = async (req, res) => {
    try {
        const { id: bookID } = req.params
        const { status } = req.body;

        const book = await Book.findOneAndUpdate({ _id: bookID }, req.body, {
            new: true,
            runValidators: true,
        })
        if (!book) {
            return res.status(404).json({ msg: `No Book with id : ${bookID}` })
        }
        res.status(200).json(book)

    } catch (error) {
        es.status(500).json({ msg: error });
    }
};


const deleteBook = async (req, res) => {
    try {
        const { id: bookID } = req.params
        const book = await Book.findOneAndDelete({ _id: bookID })

        if (!book) {
            return res.status(404).json({ msg: `No Book with id : ${bookID}` })
        }
        res.status(200).json(book);
    } catch (error) {
        res.status(500).json({ msg: error });
    }

};


module.exports = {
    showAllBooks,
    addBook,
    showSingleBook,
    updateBook,
    deleteBook
};


