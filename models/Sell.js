const mongoose = require('mongoose')
const { Schema } = mongoose;
const SellSchema = new Schema({
    
    sellRate:{
        type:Number,
        default:0
    },
    
    

},{timestamps:true})
mongoose.models={}

export default mongoose.model('Sell',SellSchema)