import User from '../../../models/User'
import ConnectMongoDB from '../../../middleware/mongoose'
var CryptoJS = require("crypto-js");

const handler= async (req, res)=> {
  const join = new Date();
const yyy = join.getFullYear();
let mmm = join.getMonth() + 1; // Months start at 0!
let ddd = join.getDate();
if (ddd < 10) ddd = "0" + ddd;
if (mmm < 10) mmm = "0" + mmm;
const joinDate = ddd + "/" + mmm + "/" + yyy;
    if(req.method=='POST'){
        const {firstname,lastname,email,_id,number}=req.body
        let Leader = await User.findOne({_id:_id})
        console.log(Leader)
        if(Leader.subscription=="yes")
        {
      try{
        if(Leader.invite==""){
          let B = new User({number,firstname,lastname,email,password:CryptoJS.AES.encrypt(req.body.password,'secret123').toString(),invite:_id,date:joinDate})
          let teams={
                 direct:{
                    level:1,
                    id:B._id.toString(),
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
              await User.updateOne({email:Leader.email},
                {$push:{teams:teams},
                 inc:{nofteams:1}})
              await B.save()
            res.status(200).json({msg:'success'})
          }
        // -------------------------------------------
      else if(Leader.invite!=""){
          if(Leader.nofteams!=0)
          {
            let C = new User({number,firstname,lastname,email,password:CryptoJS.AES.encrypt(req.body.password,'secret123').toString(),invite:_id,date:joinDate})
            
              // direct 
              let directteam={
                direct:{
                  level:1,
                  id:C._id.toString(),
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

                await User.updateOne({email:Leader.email},
                  {$push:{teams:directteam},$inc:{nofteams:1}})
                await C.save()

          
          }
          else{

          let C = new User({number,firstname,lastname,email,password:CryptoJS.AES.encrypt(req.body.password,'secret123').toString(),invite:_id,date:joinDate})
              // direct 
              let directteam={
                direct:{
                  level:1,
                  id:C._id.toString(),
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
              if(A.teams[i]['direct'].id.toString()==Leader._id.toString())
              {
                  await User.findByIdAndUpdate(
                    {_id:Leader.invite},
                    {$set:{[`teams.${i}.indirect.id`]:C._id}}
                  )
                  await User.updateOne({email:Leader.email},{$push:{teams:directteam},$inc:{nofteams:1}})
                  await C.save()
                  res.status(200).json({msg:'success'})
              }
             
              }
              res.status(200).json({error:'error'})
          } //else end
            
  
        }   //else if end
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