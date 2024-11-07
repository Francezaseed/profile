const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    name:String,
    age:Number,
    gender:String,
    skill:String,
    createdAt:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model("User", usersSchema)