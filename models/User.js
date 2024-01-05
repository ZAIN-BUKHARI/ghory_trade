const mongoose = require('mongoose')
const { Schema } = mongoose;

const UserSchema = new Schema({
    __v: { type: Number, default: 0 }, 
    // personel details
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
    cnic:{
        type:String,
        default:"no" 
        },
    number:{
            type:String,
            default:"no"
    },
    address:{
        type:String,
        default:"no" 

    },
    //pass
    password:{
        type:String,
        required:true
    },
    balance:{
        type:Number,
        default:0,
        required:true
    },
    totalInvestment:{
        type:Number,
        default:0,
    },
    subscription:{
        type:String,
        default:"no",
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
        required:true,
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
    planCount:
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
    Login:
    {
        type:String,
        default:"no"
    },
    review:
    {
        type:String,
        default:"no"
    },
    
    commission:
    {
        type:Number,
        default:0
    },
    upload:
    {
        type:Boolean,
    },
    //arrays
    teams:[{type:Object}],
    planId:[],
    YearPlan:[{type:Object}],
    missProfits:[]
    

    },{timestamps:true})
    mongoose.models={}

export default mongoose.model('User',UserSchema) 

