const mongoose = require('mongoose')
const { Schema } = mongoose;
const VideoSchema = new Schema({
    links:{
        type:Object,
    },
    date:{
        type:String,
    },
    
    

},{timestamps:true})
mongoose.models={}

export default mongoose.model('Video',VideoSchema)