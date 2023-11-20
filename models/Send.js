const mongoose = require('mongoose')
const { Schema } = mongoose;
const SendSchema = new Schema({
    senderaddress:{
        type:String,
        required:true,
    },
    sendername:{
        type:String,
        required:true,
    },
    senderemail:{
        type:String,
        required:true,
    },
    receivername:{
        type:String,
        required:true,
    },
    receiveremail:{
        type:String,
        required:true,
    },
    receiveraddress:{
        type:String,
        required:true,
    },
    comment:{
        type:String,
        required:true,
    },
    sender:{
        type:String,
        required:true,
    },
    amount:{
        type:Number,
        required:true,
    },
    date:{
        type:String,
        default:"pending"
    },
    
    

},{timestamps:true})
mongoose.models={}

export default mongoose.model('Send',SendSchema);