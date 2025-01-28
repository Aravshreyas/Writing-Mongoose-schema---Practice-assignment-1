const mongoose = require('mongoose')


const profileSchema = new mongoose.Schema({
    firstName : {
        type : String,
        required : true,
    },
    lastName : {
        type : String,
        required : true,
    },
    age:{
        type:Number,
        required:true,
    }
}) 

const UserSchema = new mongoose.Schema({
username : {
    type : String,
    required : true,
    unique : true,
},
email : {
    type : String,
    required : true,
    unique : true
},
password : {
    type : String,
    required : true,
},
roles : {
    type : [String]
},
profile : profileSchema,
lastLogin : {
    type : Date,
    default : null,
}

},{timestamps : true})

const User = mongoose.model('User',UserSchema)
module.exports = User