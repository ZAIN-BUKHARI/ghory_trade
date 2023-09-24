const mongoose = require('mongoose')
const { Schema } = mongoose;
const SelrateSchema = new Schema({
    
    Selrate:{
        type:Number,
        default:0
    },
    
    

},{timestamps:true})
mongoose.models={}

export default mongoose.model('Selrate',SelrateSchema)