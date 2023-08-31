const mongoose = require('mongoose')
const { Schema } = mongoose;
const LinkSchema = new Schema({
    links:[Object],
    date:{
        type:String,
    },
    
    

},{timestamps:true})
mongoose.models={}

export default mongoose.model('Link',LinkSchema)
// 'Link',LinkSchema.index({createdAt: 1},{expireAfterSeconds: 3000})