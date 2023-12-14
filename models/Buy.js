const mongoose = require('mongoose')
const { Schema } = mongoose;
const BuySchema = new Schema({
    
    buyRate:{
        type:Number,
        default:0
    },
    
    

},{timestamps:true})
mongoose.models={}

export default mongoose.model('Buy',BuySchema)