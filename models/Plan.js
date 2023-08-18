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
        type:String,
        default:'pending',
        required:true
    },

},{timestamps:true})
mongoose.models={}

export default mongoose.model('Plan',PlanSchema)