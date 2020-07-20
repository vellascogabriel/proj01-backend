const mongoose = require('mongoose');


const bookSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    subject: {
        type:String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    case:{
        type: Number,
        required: true,
    }
})

module.exports = mongoose.model('Books', bookSchema);