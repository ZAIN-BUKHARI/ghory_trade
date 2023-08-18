const mongoose = require('mongoose')
const { Schema } = mongoose;

const UserSchema = new Schema({
    firstname:{
        type:String,
         required:true
        },
    lastname:{
        type:String,
         required:true
        },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    balance:{
        type:String,
        required:true
    },
    

    },{timestamps:true})
    mongoose.models={}

export default mongoose.model('User',UserSchema) 

