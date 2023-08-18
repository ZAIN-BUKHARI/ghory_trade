const mongoose = require('mongoose')
const { Schema } = mongoose;
const RequestSchema = new Schema({
    method:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    amount:{
        type:String,
        required:true,
    }
    
    

},{timestamps:true})
mongoose.models={}

export default mongoose.model('Request',RequestSchema)