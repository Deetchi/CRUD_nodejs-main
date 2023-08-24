const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    name : {
        type : String
    },
    email : {
        type : String
    },
    phone : {
        type : String
    }
},{timestamps:true});

const User = mongoose.model('User',userSchema);
module.exports = User