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
        let emaildate = formattedToday
        let emailid ;
        let emailaddress;
        let emailamount;
        let emailmethod;
        try{
        if(req.query.status =='verified'){
                let result = await Request.findByIdAndUpdate({_id:req.query._id},{status:req.query.status})
                if(result){
                        let response = await Request.findOne({_id:req.query._id})
                        emailaddressto = response.email
                        if(response){
                                let user = await User.findOne({email:response.email})
                                if(user){
                                       emailid=response._id
                                       emailaddress=response.address
                                       emailamount=response.amount
                                       emaildate=formattedToday
                                       emailmethod = 'request'
                                          //EMAIL PROCESS
                    //    let from = usman bhai ka account 
                    emailaddressto = 'zainnnnnnnnnnnnnnnnnnnn@gmail.com'
                    let transporter = nodemailer.createTransport({
                    service: 'Gmail',
                      auth: {
                      user: 'usmanghory3@gmail.com', 
                      pass: 'rvma faxr ablkzvrr' 
                            }
                });
                // Request Date: [${address}]
                //     Withdrawal Amount: [${id}]
                //     Account Number: [${amount}]
                //     Transaction ID: [${date}]
                let mailOptions = {
                    from: 'usmanghory3@gmail.com', 
                    to: `${emailaddressto}`,
                    subject: 'GHORY.TRADE',
                    text: `Withdrawal Details:
                    Request Date: [${emaildate}]
                    Withdrawal Amount: [${emailamount}]
                    Account Number: [${emailamount}]
                    Transaction ID: [${emailid}]
                    
                    Please allow for a processing time of 1-2 mins for the funds to reflect in your account. If you encounter any issues or have further questions, please feel free to reach out to our customer support team at [Customer ${FROM}].
                    
                    We appreciate your trust in our services and are pleased to have the opportunity to assist you with your financial needs. Should you require any assistance in the future, please don't hesitate to contact us.
                    
                    Thank you for choosing Ghory.trade.
                    
                    Best regards,
                    Usman Iqbal
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


