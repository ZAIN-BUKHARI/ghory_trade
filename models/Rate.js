const mongoose = require('mongoose')
const { Schema } = mongoose;
const RateSchema = new Schema({
    
    Rate:{
        type:Number,
        default:0
    },
    
    

},{timestamps:true})
mongoose.models={}

export default mongoose.model('Rate',RateSchema)