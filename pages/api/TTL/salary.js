import ConnectMongoDB from '../../../middleware/mongoose'
import User from '../../../models/User'
import { joinDate } from '../../../Api_utils/statusfn'
    
const handler = async (req, res) => {
     

    if (req.method === 'POST') {
      var { Userid } = req.body;
      var user = await User.findOne({ _id: Userid });
  
      let arr = [...user.teams];
      arr = arr.filter((data) => data['direct'].plan === 'yes');
      arr.sort((a, b) => b['direct'].investment - a['direct'].investment);
  
    //   note leader investment is not included in the sub total 
    if(arr.length >= 80 && arr.slice(0, 80).reduce((sum, data) => {if (data['direct'].plan === 'yes') { return sum + user.totalInvestment + data['direct'].investment;}return sum;}, 0)+user.totalInvestment >= 6000000){
        await User.updateOne({_id:user._id},{Rank:'ED',$inc:{balance:13000},Login:"yes"});res.status(200).json({success:true})
    }else if(arr.length >= 40 && arr.slice(0, 40).reduce((sum, data) => {if (data['direct'].plan === 'yes') { return sum + data['direct'].investment;}return sum}, 0)+user.totalInvestment >= 2000000){
        await User.updateOne({_id:user._id},{Rank:'MD',$inc:{balance:1500},Login:"yes"});res.status(200).json({success:true})
    }else if(arr.length >= 20 && arr.slice(0, 20).reduce((sum, data) => {if (data['direct'].plan === 'yes') { return sum + data['direct'].investment;}return sum}, 0)+user.totalInvestment >= 1000000){
        await User.updateOne({_id:user._id},{Rank:'SVP',$inc:{balance:600},Login:"yes"});res.status(200).json({success:true})
    }else if(arr.length >= 10 && arr.slice(0, 10).reduce((sum, data) => {if (data['direct'].plan === 'yes') { return sum +  data['direct'].investment;}return sum}, 0)+user.totalInvestment >= 150000 ){
        await User.updateOne({_id:user._id},{Rank:'VP',$inc:{balance:150},Login:"yes"});res.status(200).json({success:true})
    }else if(arr.length >= 5 && arr.slice(0, 5).reduce((sum, data) => {if (data['direct'].plan === 'yes')   {return sum + data['direct'].investment;}return sum}, 0)+user.totalInvestment >= 50000  ){
        await User.updateOne({_id:user._id},{Rank:'GM', $inc:{balance:100},Login:"yes"});res.status(200).json({success:true})
    }else if(arr.length >= 4 && arr.slice(0, 4).reduce((sum, data) => {if (data['direct'].plan === 'yes')   { return sum  + data['direct'].investment;}return sum}, 0)+user.totalInvestment >= 40000  ){
      for(let i=1;i<user.YearPlan[0].length;i++)
      {
        if(joinDate==user.YearPlan[0][i])
        {
          await User.updateOne({_id:user._id},{$inc:{ balance:400},Rank:'D',Login:"yes"})
          res.status(200).json({success:true})
        }
      }
       
        
    }else if(arr.length >= 3 && arr.slice(0, 3).reduce((sum, data) => {if (data['direct'].plan === 'yes')   { return sum  + data['direct'].investment;}return sum;}, 0)+user.totalInvestment >= 30000  ){
      
      for(let i=1;i<user.YearPlan[0].length;i++)
      {
        if(joinDate==user.YearPlan[0][i])
        {
          await User.updateOne({_id:user._id},{$inc:{ balance:300},Rank:"C",Login:"yes"})
          res.status(200).json({success:true})
        }
      }
    }else if(arr.length >= 2 && arr.slice(0, 2).reduce((sum, data) => {if (data['direct'].plan === 'yes')   { return sum  + data['direct'].investment;};return sum;}, 0)+user.totalInvestment >= 20000  ){
      
      for(let i=1;i<user.YearPlan[0].length;i++)
      {

        if(
          joinDate==user.YearPlan[0][i] 
          )
        {
          await User.updateOne({_id:user._id},{$inc:{ balance:200},Rank:'B',Login:"yes"})  
          res.status(200).json({success:true})

        }
      }
    
    }else if(arr.length >= 1 && arr.slice(0, 1).reduce((sum, data) => {if (data['direct'].plan === 'yes')   {return sum +  data['direct'].investment}; return  sum;}, 0)+user.totalInvestment >= 10000  ){
      for(let i=1;i<user.YearPlan[0].length;i++)
      {
        if( joinDate==user.YearPlan[0][i] )
        {
          await User.updateOne({_id:user._id},{$inc:{ balance:100},Rank:'A',Login:"yes"}) 
          res.status(200).json({success:true})

        }
      }

    
    }
    await User.updateOne({_id:user._id},{Login:"yes"}) 
    res.status(200).json({success:true})
}
}
  
  
  
  export default   ConnectMongoDB(handler)


