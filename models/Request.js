const mongoose = require('mongoose')
const { Schema } = mongoose;
const RequestSchema = new Schema({
    __v: { type: Number, default: 0 }, 
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
        type:String,
        default:"pending"
    },
    date:{
        type:String,
        default:"pending"
    },
    bankname:{
        type:String,
        default:""
    },
    
    

},{timestamps:true})
mongoose.models={}

export default mongoose.model('Request',RequestSchema);