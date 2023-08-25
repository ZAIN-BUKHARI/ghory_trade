const mongoose = require('mongoose')
const { Schema } = mongoose;

const ReferralUserSchema = new Schema({
    firstname:{
        type:String,
         required:true
        },
    lastname:{
        type:String,
         required:true
        },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    balance:{
        type:Number,
        default:0,
        required:true
    },
    subscription:{
        type:String,
        default:"no",
    },
    subtime:{
        type:String,
        default:"000"
    },
    channel:{
        type:String,
        default:"no"
    },
    todaywork:{
        type:String,
        default:"no"
    },
    invitePosition:{
        type:String,
        default:"no"
    },
    team:{
        type:Object,
    },
    
    

    },{timestamps:true})
    mongoose.models={}

export default mongoose.model('User',ReferralUserSchema) 

