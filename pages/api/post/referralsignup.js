import User from '../../../models/User'
import ConnectMongoDB from '../../../middleware/mongoose'
var CryptoJS = require("crypto-js");

const handler= async (req, res)=> {
    if(req.method=='POST'){
        const {firstname,lastname,email,_id,number}=req.body
        let Leader = await User.findOne({_id:_id})
        if(Leader.subscription=="yes")
        {

      try{
        if(Leader.invite==""){
          let B = new User({number,firstname,lastname,email,password:CryptoJS.AES.encrypt(req.body.password,'secret123').toString(),invite:_id})
          let teams={
                 direct:{
                    level:1,
                    id:B._id,
                    plan:"no",
                    investment:0,
                  },
                  
                 indirect:{
                    level:2,
                    id:'no',
                    plan:"no",
                    investment:0,
                  }
                
                }
              const incrementTeamsA=Leader.nofteams+1
              await User.updateOne({email:Leader.email},{$push:{teams:teams},nofteams:incrementTeamsA})
              await B.save()
            res.status(200).json({msg:'success'})
          }
        // -------------------------------------------
      else if(Leader.invite!=""){
          
          let C = new User({number,firstname,lastname,email,password:CryptoJS.AES.encrypt(req.body.password,'secret123').toString(),invite:_id})
              // direct 
              let directteam={
                direct:{
                  level:1,
                  id:C._id,
                  plan:"no",
                  investment:0,
                 },
                 
                indirect:{
                  level:2,
                  id:'no',
                  plan:"no",
                  investment:0,
                 }
               
               }
            
            let A = await User.findOne({_id:Leader.invite})
            for(let i=0;i<A.teams.length;i++)
            {
              
              console.log(A.teams[i]['direct'].id.toString()==Leader._id.toString())
              if(A.teams[i]['direct'].id.toString()==Leader._id.toString())
              {
                console.log('IF ENTER')
                  await User.findByIdAndUpdate(
                    {_id:Leader.invite},
                    {$set:{[`teams.${i}.indirect.id`]:C._id}}
                  )
                  const nofteamsB=Leader.nofteams+1
                  await User.updateOne({email:Leader.email},{$push:{teams:directteam},nofteams:nofteamsB})
                  await C.save()
                  res.status(200).json({msg:'success'})
              }
             
              }
              res.status(200).json({error:'error'})
            
          
        }   
        res.status(200).json({msg:'success'})

    }
    catch{
      res.status(200).json({msg:'success'})
      
    }
    res.status(200).json({msg:'success'})

  }else{
    res.status(200).json({error:'Invite Link broken'})

  }

  }
  else{

    res.status(400).json({ error : 'this method is not defined' })
}
   
  }

  
  
  export default   ConnectMongoDB(handler)