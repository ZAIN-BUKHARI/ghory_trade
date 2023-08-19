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
        type:Number,
        default:0,
        required:true
    },
    subscription:{
        type:String,
        default:"no",
    },
    subtime:{
        type:String,
    },
    

    },{timestamps:true})
    mongoose.models={}

export default mongoose.model('User',UserSchema) 

