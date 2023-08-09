const mongoose = require('mongoose')
const { Schema } = mongoose;
const ProductSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    slug:{
        type:String,
        required:true,
        unique:true
    },
    desc:{
        type:String,
        required:true
    },
    image:{
        type:String,

    },
    size:{
        type:String,
    
    },
    color:{
        type:String,
        
    },
    price:{
        type:Number,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    AvailableQty:{
        type:Number,
        required:true
    },
    Profit:{
        type:Number,
        required:true
    },
    Feature:{
        type:String,
        default:''
    }
    

},{timestamps:true})
mongoose.models={}

export default mongoose.model('Product',ProductSchema)