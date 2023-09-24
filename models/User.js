const mongoose = require('mongoose')
const { Schema } = mongoose;

const UserSchema = new Schema({
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
    channel:
    {
        type:String,
        default:"no"
    },
    todaywork:
    {
        type:String,
        default:"no"
    },
    Rank:
    {
        type:String,
        default:"no"
    },
    teams:[{type:Object}],
    nofteams:
    {
        type:Number,
        default:0
    },
    invite:
    {
        type:String,
        default:''
    },
    date:
    {
        type:String,
        default:''
    },
    
    admin:
    {
        type:String,
        default:'no'
    },
    perDayProfit:
    {
        type:Number,
        default:0
    },
    level:
    {
        type:String,
        default:"0"
    },
    views:
    {
        type:Number,
        default:"0"
    },
    planId:
    {
        type:String,
        default:""
    },
    Login:
    {
        type:String,
        default:"no"
    },
    DirectsalaryDate:[],
    InDirectsalaryDate:[]
    

    },{timestamps:true})
    mongoose.models={}

export default mongoose.model('User',UserSchema) 

