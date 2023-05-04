const mongoose = require("mongoose")

const userSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true
    },password:{
        type:String,
        required:true
    },ConfirmPassword:{
        type:String,
        required:true
    },Contact:{
       type:String
    }
} , {timestamps:true})

const User=new mongoose.model('User' , userSchema);

module.exports=User;

