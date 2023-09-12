import User from '../../../models/User'
import ConnectMongoDB from '../../../middleware/mongoose'
var CryptoJS = require("crypto-js");
import mail from '../mailsender/email';

const handler= async (req, res)=> {
  const {firstname,lastname,email,password,cpassword}=req.body
    if(req.method=='POST'){
      try{
        try{

          let f = await User.findOne({email:email})
          if(f.email==email)
          {
            res.status(200).json({error:'Email must be unique'})
          }
        }catch(e){

        const today = new Date();
        const yyyy = today.getFullYear();
        let mm = today.getMonth() + 1; // Months start at 0!
        let dd = today.getDate();

        if (dd < 10) dd = '0' + dd;
        if (mm < 10) mm = '0' + mm;
        const formattedToday = dd + '/' + mm + '/' + yyyy;
        
          if(email.includes('@')){
          if(firstname.length!=0&&lastname.length!=0&&email.length!=0&&password.length!=0  ){
            if(password == cpassword){
              let u = new User({firstname,lastname,email,password:CryptoJS.AES.encrypt(req.body.password,'secret123').toString(),date:formattedToday})
              if(u.email==email){
                u.save()
                try{
                  const name = u.firstname;
                  const emailaddressto = u.email
                    if(mail('garbage1','garbage2','garbage3','garbage4','signup',name,emailaddressto))
                      res.status(200).json({success:true})
                   
                   }catch(e){
                    res.status(200).json({error:'server down'})
                   }     
              }
            }
            else
            res.status(200).json({ error:'Password not match' })
        }
        else
        res.status(200).json({ error:'Empty field' })
      }else
      res.status(200).json({ error:'Email must be unique' })
  }
}
    catch{
      res.status(200).json({ error: 'You missed something' })
    }
      
  }
    else
      res.status(200).json({ error : 'Try again' })
}

  
  
  export default   ConnectMongoDB(handler)