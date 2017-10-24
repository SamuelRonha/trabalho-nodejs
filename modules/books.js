const mongoose = require('mongoose')

function getBook() {
    const _schema = new mongoose.Schema(
        {
            title: String,
            author: String,
            pages: Number
        }, { collection: 'Book' }
    )
    if (mongoose.models && mongoose.models.Model)
        return mongoose.models.Model

    return mongoose.model('Book', _schema)
}

module.exports = getBook()
