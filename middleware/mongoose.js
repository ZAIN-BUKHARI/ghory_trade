import mongoose from 'mongoose'

const ConnectMongoDB = handler=> async (req,res) =>{
    console.log('connected')
    if(mongoose.connections[0].readyState){
        return handler(req, res)
    }
    
        // await mongoose.connect('mongodb+srv://usmanghory3:WATCHDOGS426890@ghory-trading.rxugb1n.mongodb.net/GHORYTRADE=true&w=majority').then(res=>{
            // mongodb+srv://usmanghory3:WATCHDOGS426890@ghory-trading.rxugb1n.mongodb.net/?retryWrites=true&w=majority
        await mongoose.connect('mongodb+srv://123:123@e-store.uf5qztz.mongodb.net/ZAINYWEAR=true&w=majority').then(res=>{
        // await mongoose.connect('mongodb+srv://usmanghory3:WATCHDOGS426890@ghory-trading.rxugb1n.mongodb.net/GHORYTRADE=true&w=majority').then(res=>{
            console.log('connect',res)
        })
        return handler(req,res)
    
    

}

export default ConnectMongoDB;