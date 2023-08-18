const mongoose = require('mongoose')
const { Schema } = mongoose;
const LinkSchema = new Schema({
    links:{
        type:object,
        required:true
    },
    length:{
        type:object,
        required:true
    }
    
    

},{timestamps:true})
mongoose.models={}

export default mongoose.model('Link',LinkSchema)