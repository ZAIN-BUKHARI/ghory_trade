// import { use } from 'react'
import ConnectMongoDB from '../../../middleware/mongoose'
import Plan from '../../../models/Plan'
import User from '../../../models/User'
const nodemailer = require('nodemailer');
const { addMonths, format } = require('date-fns');

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
    //time formula program

function generateOneYearSalaryPlan(todayDate) {
  const salaryPlan = [];
  let currentDate = new Date(todayDate);
  const endDate = addMonths(currentDate, 12);

  while (currentDate <= endDate) {
    salaryPlan.push(format(currentDate, 'dd/MM/yyyy'))
    currentDate = addMonths(currentDate, 1);
  }

  return salaryPlan;
}
function parseCustomDateFormat(customDate) {
  const [day, month, year] = customDate.split('/');
  return new Date(year, month - 1, day); // Note: Months are 0-based
}
const todayDate = parseCustomDateFormat(joinDate) // Note: Months are 0-based (8 represents September)
const oneYearSalaryPlan = generateOneYearSalaryPlan(todayDate);


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

                
                  if(user.invite!=""){
                    let u = await  User.findOne({_id:user.invite})
                    for(let i=0;i<u.teams.length;i++)
                    {
                        console.log(u.teams[1]['direct'].id.toString())
                        console.log(user._id.toString())
                        if(u.teams[i]['direct'].id.toString()==user._id.toString())
                        {
                            console.log(result.investment)
                            console.log(oneYearSalaryPlan)
                            await User.findByIdAndUpdate({_id:user.invite},
                                {$set:{[`teams.${i}.direct.plan`]:'yes',[`teams.${i}.direct.investment`]:result.investment,[`teams.${i}.direct.salaryDate`]:[oneYearSalaryPlan[1],oneYearSalaryPlan[2],oneYearSalaryPlan[3],oneYearSalaryPlan[4],oneYearSalaryPlan[5],oneYearSalaryPlan[6],oneYearSalaryPlan[7],oneYearSalaryPlan[8],oneYearSalaryPlan[9],oneYearSalaryPlan[10],oneYearSalaryPlan[11],oneYearSalaryPlan[12],]}
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
                                    {$set:{[`teams.${i}.indirect.plan`]:'yes',[`teams.${i}.indirect.investment`]:result.investment,[`teams.${i}.indirect.salaryDate`]:[oneYearSalaryPlan[1],oneYearSalaryPlan[2],oneYearSalaryPlan[3],oneYearSalaryPlan[4],oneYearSalaryPlan[5],oneYearSalaryPlan[6],oneYearSalaryPlan[7],oneYearSalaryPlan[8],oneYearSalaryPlan[9],oneYearSalaryPlan[10],oneYearSalaryPlan[11],oneYearSalaryPlan[12],]}}
                                    )
                            }
                        }
                    }
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
                                {$set:{[`teams.${i}.direct.plan`]:'no',[`teams.${i}.direct.investment`]:0,},DirectsalaryDate:[]
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
                                    {$set:{[`teams.${i}.indirect.plan`]:'no',[`teams.${i}.indirect.investment`]:0},InDirectsalaryDate:[]}
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