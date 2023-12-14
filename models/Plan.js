const mongoose = require('mongoose')
const { Schema } = mongoose;

const PlanSchema = new Schema({
    __v: { type: Number, default: 0 }, 
    email:{
        type:String,
        required:true,
    },
    method:{
        type:String,
        required:true
    },
    status:{
        type:String,
        default:'pending'
    },
    img1:{
        type:String,
        required:true
    },
    img2:{
        type:String,
        required:true
    },
    investment:{
        type:Number,
        required:true
    },
    date:{
        type:String,
        default:''
    },
    enddate:
    {
        type:String,
        default:''
    },

},{timestamps:true})
mongoose.models={}

export default mongoose.model('Plan',PlanSchema)