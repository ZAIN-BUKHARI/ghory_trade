import ConnectMongoDB from '../../../middleware/mongoose'
import User from '../../../models/User'
var CryptoJS = require("crypto-js");

const handler= async (req, res)=> {
        
    const {_id}=req.body
    for(let i =0;i<40;i++)
    {
        let Leader = await User.findOne({_id:_id})
        if(Leader.invite==""){
          let B = new User({firstname:`USER_${i}`,lastname:`USER_${i}`,email:`DIRECT-USER_${i}100`,password:CryptoJS.AES.encrypt(req.body.password,'secret123').toString(),invite:_id})
          let teams={
                 direct:{
                    level:1,
                    id:B._id,
                    plan:"yes",
                    investment:100,
                  },
                  
                 indirect:{
                    level:2,
                    id:'no',
                    plan:"yes",
                    investment:100,
                  }
                
                }
              const incrementTeamsA=Leader.nofteams+1
              await User.updateOne({email:Leader.email},{$push:{teams:teams},nofteams:incrementTeamsA})
              await B.save()
            // res.status(200).json(true)
          }
        // -------------------------------------------
      else if(Leader.invite!=""){
          
          let C = new User({firstname:`USER_${i}`,lastname:`USER_${i}`,email:`DIRECT-USER_${i}100`,password:CryptoJS.AES.encrypt(req.body.password,'secret123').toString(),invite:_id})
              // direct 
              let directteam={
                direct:{
                  level:1,
                  id:C._id,
                  plan:"yes",
                  investment:100,
                 },
                 
                indirect:{
                  level:2,
                  id:'no',
                  plan:"yes",
                  investment:100,
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
            // res.status(200).json(true)
          
        
    }
    
  }
  res.status(200).json(true)

   
  }

  
  
    

  
  
  
export default   ConnectMongoDB(handler)