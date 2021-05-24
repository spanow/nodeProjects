const mongoose = require('mongoose');

const {Schema} = mongoose;

const bookModel = new Schema(
    {
        title:{type:String},
        author:{type:String},
        price:{type:Number},
        genre:{type:String},
        quantity:{type:Number},
        available:{type:Boolean, default:false}
    }
    );

module.exports = mongoose.model('book', bookModel);