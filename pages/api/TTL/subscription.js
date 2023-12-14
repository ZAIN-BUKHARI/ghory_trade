import ConnectMongoDB from "../../../middleware/mongoose";
import Plan from "../../../models/Plan";
import User from "../../../models/User";
import { joinDate } from "../../../Api_utils/statusfn";

const handler = async (req, res) => {
  
  try {
    let user = await User.findOne({ email: req.body.email });
    if (user.subscription == "yes" && user.Login!='yes') {
     
      for (let i = 0; i < user.planId.length; i++) {
        let plan = await Plan.findOne({ _id: user.planId[i] });
        

        if (plan) {
          
          const Current_month = joinDate.slice(3, 5);
          const End_month = plan.enddate.slice(3, 5);
          const plan_date = joinDate.slice(6, 10);
          const plan_enddate = plan.enddate.slice(6, 10);

          if (parseInt(joinDate) >= parseInt(plan.enddate) &&
              parseInt(plan_date) >= parseInt(plan_enddate) &&
              parseInt(Current_month) >= parseInt(End_month) ) {;
   
            let u;
            if(user.planId.length==1)
            {
             
                u = await User.updateOne(
                    { email: req.body.email },
                    {
                subscription: "no",
                planId:[],
                YearPlan:[],
                planCount:0,
                perDayProfit: 0,
                totalInvestment:0,
                todaywork: "no",
                views: 0,
                commission:0,
                Login: "yes",
                Rank: "no",
            }
            );
            }else{
            u = await User.updateOne(
                { email: req.body.email },
                {
            $pull:{
              planId: user.planId[i],
              YearPlan:user.YearPlan[i],

            },
            $inc: {
              planCount:-1,
              perDayProfit: -((((plan.investment)*20)/100)/30),
              totalInvestment:-plan.investment,
            },
            Login: "yes",
        }
        );
            }
            await Plan.findByIdAndDelete({ _id: plan._id });
            if (u) {
              if (user.invite != "") {
                let leader = await User.findOne({ _id: user.invite });
                if (leader.invite == "") {
                  for (let i = 0; i < leader.teams.length; i++) {
                    let team = leader.teams[i]["direct"].id.toString();
                    const amount = leader.teams[i]['direct'].investment;
                    if (team == user._id.toString()) {
                      const investmentAmount = amount - plan.investment
                      if(investmentAmount==0)
                      {
                        await User.findByIdAndUpdate(
                          { _id: leader._id },
                          {
                            $set: {
                              [`teams.${i}.direct.plan`]: "no",
                              [`teams.${i}.direct.investment`]: investmentAmount,
                            },
                          }
                        );
                      }else{
                        await User.findByIdAndUpdate(
                          { _id: leader._id },
                          {
                            $set: {
                              [`teams.${i}.direct.plan`]: "yes",
                              [`teams.${i}.direct.investment`]: investmentAmount,
                            },
                          }
                        );
                      }
                      
                    }
                  }
                } else {
                  let MainLeader = await User.findOne({ _id: leader.invite });
                  for (
                    let i = 0;
                    i < MainLeader.teams.length;
                    i++ //Main Leader indirect
                  ) {
                    let indirectteams = MainLeader.teams[i][indirect].investment
                      MainLeader.teams[i]["indirect"].id.toString();
                      const amount =MainLeader.teams[i]['indirect'].investment;
                    if (indirectteams == user._id.toString()) {
                      const investmentAmount = amount - plan.investment;
                      if(investmentAmount==0)
                      {
                        await User.findByIdAndUpdate(
                          { _id: MainLeader._id },
                          {
                            $set: {
                              [`teams.${i}.indirect.plan`]: "no",
                              [`teams.${i}.indirect.investment`]: investmentAmount,
                            },
                          }
                        );
                      }else{
                        await User.findByIdAndUpdate(
                          { _id: MainLeader._id },
                          {
                            $set: {
                              [`teams.${i}.indirect.plan`]: "yes",
                              [`teams.${i}.indirect.investment`]: investmentAmount,
                            },
                          }
                        );
                      }
                      
                      break;
                    }
                  }
                  for (
                    let i = 0;
                    i < leader.teams.length;
                    i++ //sub leader direct
                  ) {
                    let directteam = leader.teams[i]["direct"].id.toString();
                    const amount = leader.teams[i]['direct'].investment;
                    if (directteam == user._id.toString()) {
                      const investmentAmount = amount - plan.investment;
                      if(investmentAmount==0)
                      {
                        await User.findByIdAndUpdate(
                          { _id: leader._id },
                          {
                            $set: {
                              [`teams.${i}.direct.plan`]: "no",
                              [`teams.${i}.direct.investment`]: 0,
                            },
                          }
                        );
                      }
                      await User.findByIdAndUpdate(
                        { _id: leader._id },
                        {
                          $set: {
                            [`teams.${i}.direct.plan`]: "yes",
                            [`teams.${i}.direct.investment`]: investmentAmount,
                          },
                        }
                      );
                      break;
                    }
                  }
                }
              }
              res.status(200).json({ success: "subscription-end" });
          }
        }
      }
    }
      res.status(200).json({ success: true });
    } else {
      res.status(200).json({ success: true });
    }
  }   catch (error) {
    res.status(200).json({ success: true });
}
};

export default ConnectMongoDB(handler);
