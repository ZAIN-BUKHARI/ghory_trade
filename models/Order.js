const mongoose = require('mongoose')
const { Schema } = mongoose;

const OrderSchema = new Schema({
    email:{
        type:String,
        required:true,
    },
    OrderId:{
        type:String,
        required:true
    },
    products:{
            type:Object,
            required:true   
        },
    // Details:{
    //     type:Object,
    //     required:true,
    // },
    city:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    subTotal:{
        type:Number,
        required:true,
    },
    status:{
        type:String,
        default:'pending'
    },
    payment:{
        type:String,
        default:'pending'
    },

},{timestamps:true})
mongoose.models={}

export default mongoose.model('Order',OrderSchema)