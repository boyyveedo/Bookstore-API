const Author = require('../models/author');


const allAuthors = async (req, res) => {
    try {
        const authors = await Author.find({});
        res.status(201).json(authors);
    } catch (error) {
        console.error('Error listing authors:', error);
        res.status(500).json({ error: 'Could not find authors' });
    }
};

const createAuthor = async (req, res) => {
    try {
        const author = await Author.create(req.body);
        res.status(201).json(author);
    } catch (error) {
        console.error('Error creating author:', error);
        res.status(500).json({ error: 'Could not create author' });
    }
};


const getSingleAuthor = async (req, res) => {
    try {
        const { id: authorID } = req.params
        const author = await Author.findOne({ _id: authorID })

        if (!author) {
            return res.status(404).json({ msg: `No author with id : ${authorID}` })
        }
        res.status(200).json(author);

    } catch (error) {
        res.status(500).json({ msg: error });
    }
};



const updateAuthor = async (req, res) => {
    try {
        const { id: authorID } = req.params

        const author = await Author.findOneAndUpdate({ _id: authorID }, req.body, {
            new: true,
            runValidators: true,
        })
        if (!author) {
            return res.status(404).json({ msg: `No author with id : ${authorID}` })
        }
        res.status(200).json(author)

    } catch (error) {
        es.status(500).json({ msg: error });
    }
};


const deleteAuthor = async (req, res) => {
    try {
        const { id: authorID } = req.params
        const author = await Author.findByIdAndDelete({ _id: authorID })

        if (!author) {
            return res.status(404).json({ msg: `No author with id : ${authorID}` })
        }
        res.status(200).json(author);
    } catch (error) {
        res.status(500).json({ msg: error });
    }

};

module.exports = {
    allAuthors,
    createAuthor,
    getSingleAuthor,
    updateAuthor,
    deleteAuthor
};



