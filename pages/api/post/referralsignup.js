import User from '../../../models/User'
import ConnectMongoDB from '../../../middleware/mongoose'
import { Loader } from 'react-feather';
var CryptoJS = require("crypto-js");

const handler= async (req, res)=> {
    if(req.method=='POST'){
        const {firstname,lastname,email,_id}=req.body
        let Leader = await User.findOne({_id:_id})
      try{
        if(Leader.invite==""){
          let B = new User({firstname,lastname,email,password:CryptoJS.AES.encrypt(req.body.password,'secret123').toString(),invite:_id})
          let teams=[
            {
                  Leader:_id,
                  direct:
                  {
                    level:1,
                    id:B._id.toString(),
                    plan:"no"
                  },
                  indirect:
                  {
                    level:2,
                    id:'no',
                    plan:"no"
                  }
                },
              ]
              const incrementTeamsA=Leader.nofteams+1
              await User.updateOne({email:Leader.email},{teams:teams,nofteams:incrementTeamsA})
              await B.save()
            res.status(200).json(true)
          }
        // -------------------------------------------
      else if(Leader.invite!=""){
          
          let C = new User({firstname,lastname,email,password:CryptoJS.AES.encrypt(req.body.password,'secret123').toString(),invite:_id})
              // direct 
              let directteam=[
                {
                  Leader:_id,
                  direct:
                  {
                    level:1,
                    id:_id.toString(),
                    plan:"no"
                  },
                  indirect:
                  {
                    level:2,
                    id:'no',
                    plan:"no"
                  }
                },
              ]
              // 
            const nofteamsB=Leader.nofteams+1
            await User.updateOne({email:Leader.email},{teams:directteam,nofteams:nofteamsB})
            let A = await User.findOne({_id:Leader.invite})
            // indirect 
            console.log(A.teams[0].direct.id)
            let indirectteam=[
              {
                Leader:Leader.invite,
                direct:
                {
                  level:1,
                  id:A.teams[0].direct.id.toString()
                },
                indirect:
                {
                  level:2,
                  id:C._id.toString()
                }
              },
            ]
            await User.findByIdAndUpdate({_id:Leader.invite},{teams:indirectteam})
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