import mongoose from 'mongoose'

const ConnectMongoDB = handler=> async (req,res) =>{
    console.log('connected')
    if(mongoose.connections[0].readyState){
        return handler(req, res)
    }
    
        await mongoose.connect(process.env.MONGO_URI).then(res=>{
            console.log('connect',res)
        })
        return handler(req,res)
    
    

}

export default ConnectMongoDB;