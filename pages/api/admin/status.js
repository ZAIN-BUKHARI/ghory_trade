// import { use } from 'react'
import ConnectMongoDB from '../../../middleware/mongoose'
import Plan from '../../../models/Plan'
import User from '../../../models/User'
const nodemailer = require('nodemailer');

const handler= async (req, res)=> {
    //current DD/MM/YYY
    const join = new Date();
    const yyy = join.getFullYear();
    let mmm = join.getMonth() + 1; // Months start at 0!
    let ddd = join.getDate();
    if (ddd < 10) ddd = '0' + ddd;
    if (mmm < 10) mmm = '0' + mmm;
    const joinDate = ddd + '/' + mmm + '/' + yyy;
    //next year DD/MM/YY
    const end = new Date();
    const yyyy = end.getFullYear() + 1;
    let mmmm = end.getMonth() + 1; // Months start at 0!
    let dddd = end.getDate();
    if (dddd < 10) dddd = '0' + dddd;
    if (mmmm < 10) mmmm = '0' + mmmm;
    const endDate = dddd + '/' + mmmm + '/' + yyyy;
    let emailaddressto;
        let result = await Plan.findByIdAndUpdate({_id:req.query._id},{status:req.query.status,date:joinDate,enddate:endDate})
        await result.save()
        emailaddressto = result.email;
        if(result && req.query.status=='verified'){
                const percentage = (result.investment*20)/100
                const perDayBalance = percentage/30;
                await User.updateOne({email:result.email},{subscription:'yes',perDayProfit:perDayBalance,level:result.level})
                await User.updateOne({email:result.email},{planId:req.query._id})
                let user = await User.findOne({email:result.email})
                emailaddressto = result.email

                try{
                  if(user.invite!=""){
                    let u = await  User.findOne({_id:user.invite})
                    for(let i=0;i<u.teams.length;i++)
                    {
                        if(u.teams[i]['direct'].id.toString()==user._id.toString())
                        {
                            await User.findByIdAndUpdate({_id:user.invite},
                                {$set:{[`teams.${i}.direct.plan`]:'yes',[`teams.${i}.direct.investment`]:result.investment,[`teams.${i}.direct.joinDate`]:joinDate,[`teams.${i}.direct.salaryDate.d1`]:endDate}
                                })
                        }
                        if(true)
                        {
                            let user = await User.findOne({email:result.email})
                            let direct = await User.findOne({_id:user.invite})
                            let indirect = await User.findOne({_id:direct.invite})
                            if(indirect.teams[i]['indirect'].id.toString()==user._id.toString())
                            {
                                await User.findByIdAndUpdate(
                                     {_id:indirect._id},
                                    {$set:{[`teams.${i}.indirect.plan`]:'yes',[`teams.${i}.indirect.investment`]:result.investment,[`teams.${i}.indirect.joinDate`]:joinDate,[`teams.${i}.indirect.salaryDate.d2`]:endDate}}
                                    )
                            }
                        }
                    }
                }
                       //EMAIL PROCESS
                    //    let from = usman bhai ka account 
                    emailaddressto = 'zainnnnnnnnnnnnnnnnnnnn@gmail.com'
                        let transporter = nodemailer.createTransport({
                        service: 'Gmail',
                          auth: {
                          user: 'ghoryg7@gmail.com', 
                        //   pass: 'rvma faxr ablkzvrr' 
                          pass: 'hscq rlbp puns xlud' // new usman bhai password
                                }
                    });
                    let mailOptions = {
                        from: 'usmanghory3@gmail.com', 
                        to: `${emailaddressto}`,
                    subject: 'GHORY.TRADE',
                    text: `Dear sir,
                    
                    We're excited to share the wonderful news that your subscription plan has been successfully activated on your account at ghory.trade. Welcome to a
                    new world of possibilities!
                    
                    With your active subscription, you now have access to all the premium features and benefits that come with your chosen plan.
                    
                    Thank you for choosing ghory.trade as your subscription provider. We're committed to delivering exceptional value and service throughout your
                    subscription journey.
                    
                    
                    Here's to a fantastic experience ahead!
                    Best regards,
                    `
                    };

                    transporter.sendMail(mailOptions).then(result=>{
                        try{
                        }catch(e){
                        }
                        
                         })







                       res.status(200).send({'success':true})
                }catch(e){
                       res.status(200).send({'success':true})
               }
        }else{ 
                await User.updateOne({email:result.email},{subscription:'no'})
                let user = await User.findOne({email:result.email})
                try{
                  if(user.invite!=""){
                    let u = await  User.findOne({_id:user.invite})
                    for(let i=0;i<u.teams.length;i++)
                    {
                        if(u.teams[i]['direct'].id.toString()==user._id.toString())
                        {
                            await User.findByIdAndUpdate({_id:user.invite},
                                {$set:{[`teams.${i}.direct.plan`]:'no',[`teams.${i}.direct.investment`]:0,joinDate:"0",endDate:"0"}
                                })
                        }
                        if(true)
                        {
                            let user = await User.findOne({email:result.email})
                            let direct = await User.findOne({_id:user.invite})
                            let indirect = await User.findOne({_id:direct.invite})
                            if(indirect.teams[i]['indirect'].id.toString()==user._id.toString())
                            {
                                await User.findByIdAndUpdate(
                                     {_id:indirect._id},
                                    {$set:{[`teams.${i}.indirect.plan`]:'no',[`teams.${i}.indirect.investment`]:0,joinDate:"0",endDate:"0"}}
                                    )
                            }
                        }
                    }
                }
                       res.status(200).send({'success':true})
                }catch(e){
                       res.status(200).send({'success':true})
               }
                res.status(200).send({'success':true})
        }
}

  
  
export default   ConnectMongoDB(handler)