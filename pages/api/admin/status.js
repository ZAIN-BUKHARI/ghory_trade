
import ConnectMongoDB from "../../../middleware/mongoose";
import Plan from "../../../models/Plan";
import User from "../../../models/User";
import { joinDate,endDate,oneYearSalaryPlan,emailSendToUser } from "../../../Api_utils/statusfn";

const handler = async (req, res) => {
  let user = await User.findOne({ email: req.query.email });
  
  if (user && req.query.status == "verified") {
    try {

      if (user.invite != "") {
        let thirdDoc = await User.findOne({ _id: user.invite });

        if (thirdDoc.invite != "") {
          let Leader = await User.findOne({ _id: thirdDoc.invite });

          if (Leader.invite != "") {
           
            for (let i = 0; i < Leader.teams.length; i++) {
              if (user._id.toString() == Leader.teams[i]["indirect"].id.toString()) {
                const investment = Leader.teams[i]['indirect'].investment + parseInt(req.query.investment)
                await User.findByIdAndUpdate(
                  { _id: Leader._id },
                  {
                    $set: {
                      [`teams.${i}.indirect.plan`]: "yes",
                      [`teams.${i}.indirect.investment`]: parseInt(investment),
                      
                    },
                  }
                );
              }
            }

            for (let i = 0; i < thirdDoc.teams.length; i++) {
              if (user._id.toString() == thirdDoc.teams[i]["direct"].id.toString()) {
                const investment = thirdDoc.teams[i]['direct'].investment + parseInt(req.query.investment)
                await User.findByIdAndUpdate(
                  { _id: thirdDoc._id },
                  {
                    $set: {
                      [`teams.${i}.direct.plan`]: "yes",
                      [`teams.${i}.direct.investment`]: parseInt(investment),
                    },
                  }
                );
              }
            }
             
          } else if (Leader.invite == "") {
            for (let i = 0; i < Leader.teams.length; i++) {
              if (user._id.toString() == Leader.teams[i]["indirect"].id.toString()) {
                const investment = Leader.teams[i]['indirect'].investment + parseInt(req.query.investment)
                await User.findByIdAndUpdate(
                  { _id: Leader._id },
                  {
                    $set: {
                      [`teams.${i}.indirect.plan`]: "yes",
                      [`teams.${i}.indirect.investment`]: parseInt(investment),
                      
                    },
                  }
                );
              }
            }

            for (let i = 0; i < thirdDoc.teams.length; i++) {
              if (user._id.toString() == thirdDoc.teams[i]["direct"].id.toString()) {
                const investment = thirdDoc.teams[i]['direct'].investment + parseInt(req.query.investment)

                await User.findByIdAndUpdate(
                  { _id: thirdDoc._id },
                  {
                    $set: {
                      [`teams.${i}.direct.plan`]: "yes",
                      [`teams.${i}.direct.investment`]: parseInt(investment),
                    },
                  }
                );
              }
            }
          }    
        } else {
          for (let i = 0; i < thirdDoc.teams.length; i++) {
            if (user._id.toString() == thirdDoc.teams[i]["direct"].id.toString()) {
              const investment = thirdDoc.teams[i]['direct'].investment + parseInt(parseInt(req.query.investment))
              await User.findByIdAndUpdate(
                { _id: thirdDoc._id },
                {
                  $set: {
                    [`teams.${i}.direct.plan`]: "yes",
                    [`teams.${i}.direct.investment`]: parseInt(investment),
                  },
                }
              );
            }
          }
        }


       
      }
      let result = await Plan.findByIdAndUpdate(
        { _id: req.query._id },
        {
          status: req.query.status,
          date: joinDate,
          enddate: endDate,
        }
      );
      const perDayBalance = ((result.investment * 20) / 100)/30;
      if(user.planId.length==0)
      {
         await User.updateOne(
          { email: result.email },
          {
            subscription: "yes",
            level: 10,
            $inc: { 
              planCount: 1,
              perDayProfit: perDayBalance,
              totalInvestment:result.investment,
             },
            $push: { YearPlan: oneYearSalaryPlan,planId:result._id.toString() },
          });
       }
      else
      {
        await User.updateOne(
          { email: result.email },
          { review:'no',
            $inc: { 
            planCount: 1,
            totalInvestment:result.investment,
            perDayProfit:perDayBalance,
            },
            $push: { YearPlan: oneYearSalaryPlan,planId:result._id.toString() },
          });
      }

      //EMAIL PROCESS
      let Username = user.firstname + user.lastname 
      emailSendToUser(user.email,Username)
      
      res.status(200).send({ success: true });
    } catch (e) {
      res.status(200).send({ success: true });
    }

  } 
  else{

  try 
  {
      let plan = "yes";
      if (user.invite != "") {
        let thirdDoc = await User.findOne({ _id: user.invite });

        if (thirdDoc.invite != "") {
          let Leader = await User.findOne({ _id: thirdDoc.invite });
          if (Leader.invite != "") {
            for (let i = 0; i < Leader.teams.length; i++) {
              if (user._id.toString() == Leader.teams[i]["indirect"].id.toString()) {
                const investment = Leader.teams[i]['indirect'].investment - parseInt(req.query.investment)
                if(investment==0){plan="no"}
                await User.findByIdAndUpdate(
                  { _id: Leader._id },
                  {
                    $set: {
                      [`teams.${i}.indirect.plan`]: plan,
                      [`teams.${i}.indirect.investment`]: parseInt(investment),
                      
                    },
                  }
                );
              }
            }

            for (let i = 0; i < thirdDoc.teams.length; i++) {
              if (user._id.toString() == thirdDoc.teams[i]["direct"].id.toString()) {
                const investment = thirdDoc.teams[i]['direct'].investment - parseInt(req.query.investment)
                if(investment==0){plan="no"}
                await User.findByIdAndUpdate(
                  { _id: thirdDoc._id },
                  {
                    $set: {
                      [`teams.${i}.direct.plan`]: plan,
                      [`teams.${i}.direct.investment`]: parseInt(investment),
                    },
                  }
                );
              }
            }
            
          } else if (Leader.invite == "") {
            for (let i = 0; i < Leader.teams.length; i++) {
              if (user._id.toString() == Leader.teams[i]["indirect"].id.toString()) {
                const investment = Leader.teams[i]['indirect'].investment - parseInt(req.query.investment)
                if(investment==0){plan="no"}
                await User.findByIdAndUpdate(
                  { _id: Leader._id },
                  {
                    $set: {
                      [`teams.${i}.indirect.plan`]: plan,
                      [`teams.${i}.indirect.investment`]: parseInt(investment),
                      
                    },
                  }
                );
              }
            }

            for (let i = 0; i < thirdDoc.teams.length; i++) {
              if (user._id.toString() == thirdDoc.teams[i]["direct"].id.toString()) {
                const investment = thirdDoc.teams[i]['direct'].investment - parseInt(req.query.investment)
                if(investment==0){plan="no"}
                await User.findByIdAndUpdate(
                  { _id: thirdDoc._id },
                  {
                    $set: {
                      [`teams.${i}.direct.plan`]: plan,
                      [`teams.${i}.direct.investment`]: parseInt(investment),
                    },
                  }
                );
              }
            }
          }
          
        } else {
          for (let i = 0; i < thirdDoc.teams.length; i++) {
            if (user._id.toString() == thirdDoc.teams[i]["direct"].id.toString()) {
              const investment = thirdDoc.teams[i]['direct'].investment - parseInt(req.query.investment)
              if(investment==0){
                plan="no"
              }
              await User.findByIdAndUpdate(
                { _id: thirdDoc._id },
                {
                  $set: {
                    [`teams.${i}.direct.plan`]: plan,
                    [`teams.${i}.direct.investment`]: parseInt(investment),
                  },
                }
              );
            }
          }

            }
        
      }

     let result =  await Plan.findByIdAndUpdate(
        { _id: req.query._id },
        {
          status: req.query.status,
          date: joinDate,
          enddate: endDate,
        }
      );

      if(user.planId.length==1 ){
        await User.updateOne(
              { email: user.email },
              { subscription: "no",
                YearPlan: [],
                planId:[],
                perDayProfit:0,
                totalInvestment:0,
                Level: "0",
                review:'no',
                $inc:{planCount:-1},
               }
              );
      }else if(user.planId.length==0){
        await User.updateOne(
          { email: user.email },
          { subscription: "no",
            review:'no',
           }
          );
      }else{
  
        for(let i=0;i<user.planId.length; i++)
        {
          if(req.query._id==user.planId[i])
          {
          await User.updateOne(
            { email: user.email },
            { 
              $inc:{
                planCount:-1,
                totalInvestment:-parseInt(req.query.investment),
                perDayProfit:-((((parseInt(req.query.investment))*20)/100)/30)
              },
              $pull:{
                planId:req.query._id,
                YearPlan:user.YearPlan[i]
              },

             }
            );
           }
  
        }
      }
      
      res.status(200).json({ success: true });
  } 
  catch (e) {
      res.status(200).send({ success: true });
  }
}
    
  
};

export default ConnectMongoDB(handler);
