const mongoose = require('mongoose')
const { Schema } = mongoose;

const PlanSchema = new Schema({
    email:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        default:"none"
    },
    cnic:{
        type:String,
        required:true   
        },
    phone:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    
    level:{
        type:String,
        required:true,
    },
    status:{
        type:String,
        default:'pending'
    },
    img:{
        type:String,
        default:'pending',
        required:true
    },
    investment:{
        type:Number,
        required:true
    },
    currency:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },

},{timestamps:true})
mongoose.models={}

export default mongoose.model('Plan',PlanSchema)