const mongoose = require('mongoose')
const { Schema } = mongoose;

const UserSchema = new Schema({
    name:{
        type:String,
         required:true
        },
    email:{
        type:String,
        required:true,
        unique:true},
    password:{
        type:String,
        required:true
    },
    address:{
        type:String,
    },
    city:{
        type:String,
    },
    phone:{
        type:Number,
    },

    },{timestamps:true})
    mongoose.models={}

export default mongoose.model('User',UserSchema) 

