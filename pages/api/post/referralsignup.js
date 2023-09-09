import User from '../../../models/User'
import ConnectMongoDB from '../../../middleware/mongoose'
var CryptoJS = require("crypto-js");

const handler= async (req, res)=> {
    if(req.method=='POST'){
        const {firstname,lastname,email,_id}=req.body
        let Leader = await User.findOne({_id:_id})
        console.log(Leader)
      try{
        if(Leader.invite==""){
          let B = new User({firstname,lastname,email,password:CryptoJS.AES.encrypt(req.body.password,'secret123').toString(),invite:_id})
          let teams={
                 direct:{
                    level:1,
                    id:B._id,
                    plan:"no"
                  },
                  
                 indirect:{
                    level:2,
                    id:'no',
                    plan:"no"
                  }
                
                }
              const incrementTeamsA=Leader.nofteams+1
              let rspo = await User.updateOne({email:Leader.email},{$push:{teams:teams},nofteams:incrementTeamsA})
              console.log(rspo)
              await B.save()
            res.status(200).json(true)
          }
        // -------------------------------------------
      else if(Leader.invite!=""){
          
          let C = new User({firstname,lastname,email,password:CryptoJS.AES.encrypt(req.body.password,'secret123').toString(),invite:_id})
              // direct 
              let directteam={
                direct:{
                  level:1,
                  id:C._id,
                  plan:"no"
                 },
                 
                indirect:{
                  level:2,
                  id:'no',
                  plan:"no"
                 }
               
               }
            const nofteamsB=Leader.nofteams+1
            await User.updateOne({email:Leader.email},{$push:{teams:directteam},nofteams:nofteamsB})
            let A = await User.findOne({_id:Leader.invite})
            
            await User.findByIdAndUpdate(
            {_id:Leader.invite},
            {$set:{[`teams.${A.nofteams-1}.indirect.id`]:C._id}}
            )
            await C.save()
            res.status(200).json(true)
          
        }   
    }
    catch{
      res.status(200).json({ error:false })
    }
  }
  else{

    res.status(400).json({ error : 'this method is not defined' })
}
   
  }

  
  
  export default   ConnectMongoDB(handler)