import ConnectMongoDB from '../../../middleware/mongoose'
import Request from '../../../models/Request'
import User from '../../../models/User'
const nodemailer = require('nodemailer');

const handler= async (req, res)=> {
        const today = new Date();
        const yyyy = today.getFullYear();
        let mm = today.getMonth() + 1; // Months start at 0!
        let dd = today.getDate();

        if (dd < 10) dd = '0' + dd;
        if (mm < 10) mm = '0' + mm;
        const formattedToday = dd + '/' + mm + '/' + yyyy;
        let emailaddressto;
        let emailid ;
        let emailaddress;
        let emailamount;
        try{
        if(req.query.status =='verified'){
                let result = await Request.findByIdAndUpdate({_id:req.query._id},{status:req.query.status})
                if(result){
                        let response = await Request.findOne({_id:req.query._id})
                        emailaddressto = response.email
                        if(true){
                                let user = await User.findOne({email:response.email})
                                if(true){
                                       emailid=response._id
                                       emailaddress=response.address
                                       emailamount=response.amount
                
                //   EMAIL PROCESS
                let transporter = nodemailer.createTransport({
                        service: 'Gmail',
                          auth: {
                          user: 'ghoryg7@gmail.com', 
                        //   pass: 'rvma faxr ablkzvrr' 
                          pass: 'hscq rlbp puns xlud' // new usman bhai password
                                }
                    });
                    let mailOptions = {
                        from: 'ghoryg7@gmail.com', 
                        to: `${emailaddressto}`,
                    subject: 'GHORY.TRADE',
                    text: `Withdrawal Details:
                    Request Date: [${formattedToday}]
                    Withdrawal Amount: [${emailamount}]
                    Account Number: [${emailaddress}]
                    Transaction ID: [${emailid}]
                    
                    Please allow for a processing time of 1-2 mins for the funds to reflect in your account. If you encounter any issues or have further questions, please feel 
                    free to reach out to our customer support team at [Customer usman@ghory.trade}].
  
                    We appreciate your trust in our services and are pleased to have the opportunity to assist you with your financial needs. Should you require any
                    assistance in the future, please don't hesitate to contact us.
                    
                    Thank you for choosing Ghory.trade.
                    
                    Best regards,
                    Usman Amir
                    Manager
                    `
                    };

                    transporter.sendMail(mailOptions).then(result=>{
                        try{
                        }catch(e){
                        }
                        
                         })
                
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


