import ConnectMongoDB from '../../../middleware/mongoose'
import Request from '../../../models/Request'
import User from '../../../models/User'
const nodemailer = require('nodemailer');
import mail from '../mailsender/email'
const handler= async (req, res)=> {
        const today = new Date();
        const yyyy = today.getFullYear();
        let mm = today.getMonth() + 1; // Months start at 0!
        let dd = today.getDate();

        if (dd < 10) dd = '0' + dd;
        if (mm < 10) mm = '0' + mm;
        const formattedToday = dd + '/' + mm + '/' + yyyy;
        try{
        if(req.query.status =='verified'){
                let result = await Request.findByIdAndUpdate({_id:req.query._id},{status:req.query.status})
                if(result){
                        let response = await Request.findOne({_id:req.query._id})
                        if(response){
                                let user = await User.findOne({email:response.email})
                                if(user){
                                       const id=response._id
                                       const address=response.address
                                       const amount=response.amount
                                       const date=formattedToday
                                       const method = 'request'
                                       mail(id,address,amount,date,method,'d',emailaddressto)
                                        const decrementAmount = user.balance - response.amount;
                                       let updateOneuser =  await User.updateOne({email:response.email},{balance:decrementAmount})
                                       if(updateOneuser){
                                               await result.save()
                                               res.status(200).send({'success':true})
                                        }
                                        else{ res.status(200).send({'success':false}) }
                                }else{ res.status(200).send({'success':false}) }
                        }else{ res.status(200).send({'success':false}) }
                }else{ res.status(200).send({'success':false}) }
}else{
        let result = await Request.findByIdAndUpdate({_id:req.query._id},{status:req.query.status})
        await result.save()
        res.status(200).send({'success':true})
}
}catch(e){
        res.status(200).send({'error':false})
        
}
   
}

  
  
  
export default   ConnectMongoDB(handler)


