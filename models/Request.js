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
        type:Number,
        required:true,
    },
    status:{
        type:"String",
        default:"pending"
    }
    
    

},{timestamps:true})
mongoose.models={}

export default mongoose.model('Request',RequestSchema);