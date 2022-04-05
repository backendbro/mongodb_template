const mongoose = require('mongoose')

const BookSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },
    author:{
        type:String,
        required:true,
        unique:true
    },
    isbn:{
        type:String,
        unique:true
    }
})

module.exports = mongoose.model('BookSchema', BookSchema)
