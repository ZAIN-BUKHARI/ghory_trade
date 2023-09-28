import ConnectMongoDB from '../../../middleware/mongoose'
import User from '../../../models/User'
import Plan from '../../../models/Plan'

    
const handler = async (req, res) => {
    let salary=0;   
    var join = new Date();
    var yyy = join.getFullYear();
    var mmm = String(join.getMonth() + 1).padStart(2, '0');
    var ddd = String(join.getDate()).padStart(2, '0');
    var currentDate = `${ddd}/${mmm}/${yyy}`;
  
    if (req.method === 'POST') {
      var { Userid } = req.body;
      var user = await User.findOne({ _id: Userid });
      var plan = await Plan.findOne({ _id: user.planId });
  
      let arr = [...user.teams];
      arr = arr.filter((data) => data['direct'].plan === 'yes');
      arr.sort((a, b) => b['direct'].investment - a['direct'].investment);
  
    //   note leader investment is not included in the sub total 

    if(arr.length >= 80 && arr.slice(0, 80).reduce((sum, data) => {if (data['direct'].plan === 'yes') { return sum + plan.investment + data['direct'].investment;}return sum;}, 0) >= 6000000){
        await User.updateOne({_id:user._id},{Rank:'ED',balance:(user.balance+13000)})
    }else if(arr.length >= 40 && arr.slice(0, 40).reduce((sum, data) => {if (data['direct'].plan === 'yes') { return sum + plan.investment + data['direct'].investment;}return sum;}, 0) >= 2000000){
        await User.updateOne({_id:user._id},{Rank:'MD',balance:(user.balance+1500)})
    }else if(arr.length >= 20 && arr.slice(0, 20).reduce((sum, data) => {if (data['direct'].plan === 'yes') { return sum + plan.investment + data['direct'].investment;}return sum;}, 0) >= 1000000){
        await User.updateOne({_id:user._id},{Rank:'SVP',balance:(user.balance+600)})
    }else if(arr.length >= 10 && arr.slice(0, 10).reduce((sum, data) => {if (data['direct'].plan === 'yes') { return sum + plan.investment + data['direct'].investment;}return sum;}, 0) >= 150000 ){
        await User.updateOne({_id:user._id},{Rank:'VP',balance:(user.balance+150)})
    }else if(arr.length >= 5 && arr.slice(0, 5).reduce((sum, data) => {if (data['direct'].plan === 'yes')   { return sum + plan.investment + data['direct'].investment;}return sum;}, 0) >= 50000  ){
        await User.updateOne({_id:user._id},{Rank:'GM',balance:(user.balance+100)})
    }else if(arr.length >= 4 && arr.slice(0, 4).reduce((sum, data) => {if (data['direct'].plan === 'yes')   { return sum + plan.investment + data['direct'].investment;}return sum;}, 0) >= 40000  ){
       
        if(currentDate==arr[0]['direct'].salaryDate[0] || arr[1]['direct'].salaryDate[1]|| arr[2]['direct'].salaryDate[2] || arr[3]['direct'].salaryDate[3] || arr[4]['direct'].salaryDate[4] || arr[5]['direct'].salaryDate[5] || arr[6]['direct'].salaryDate[6] || arr[7]['direct'].salaryDate[7] || arr[8]['direct'].salaryDate[8] || arr[9]['direct'].salaryDate[9] || arr[10]['direct'].salaryDate[10] || arr[11]['direct'].salaryDate[11])
          {
          salary = user.balance + 400; 
          await User.updateOne({_id:user._id},{balance:salary,Rank:'D'})
          }
       
        
    }else if(arr.length >= 3 && arr.slice(0, 3).reduce((sum, data) => {if (data['direct'].plan === 'yes')   { return sum + plan.investment + data['direct'].investment;}return sum;}, 0) >= 30000  ){
        
        if(currentDate==arr[0]['direct'].salaryDate[0] || arr[1]['direct'].salaryDate[1]|| arr[2]['direct'].salaryDate[2] || arr[3]['direct'].salaryDate[3] || arr[4]['direct'].salaryDate[4] || arr[5]['direct'].salaryDate[5] || arr[6]['direct'].salaryDate[6] || arr[7]['direct'].salaryDate[7] || arr[8]['direct'].salaryDate[8] || arr[9]['direct'].salaryDate[9] || arr[10]['direct'].salaryDate[10] || arr[11]['direct'].salaryDate[11])
          {
          salary = user.balance + 300; 
          await User.updateOne({_id:user._id},{balance:salary,Rank:"C"})
        }
    
    }else if(arr.length >= 2 && arr.slice(0, 2).reduce((sum, data) => {if (data['direct'].plan === 'yes')   { return sum + plan.investment + data['direct'].investment;}return sum;}, 0) >= 20000  ){
        
        if(currentDate==arr[0]['direct'].salaryDate[0] || arr[1]['direct'].salaryDate[1]|| arr[2]['direct'].salaryDate[2] || arr[3]['direct'].salaryDate[3] || arr[4]['direct'].salaryDate[4] || arr[5]['direct'].salaryDate[5] || arr[6]['direct'].salaryDate[6] || arr[7]['direct'].salaryDate[7] || arr[8]['direct'].salaryDate[8] || arr[9]['direct'].salaryDate[9] || arr[10]['direct'].salaryDate[10] || arr[11]['direct'].salaryDate[11])
        {
          salary = user.balance + 200; 
          await User.updateOne({_id:user._id},{balance:salary,Rank:'B'})  
        }
    
    }else if(arr.length >= 1 && arr.slice(0, 1).reduce((sum, data) => {if (data['direct'].plan === 'yes')   { return sum + plan.investment + data['direct'].investment;}return sum;}, 0) >= 10000  ){
        
        if(currentDate==arr[0]['direct'].salaryDate[0] || arr[1]['direct'].salaryDate[1]|| arr[2]['direct'].salaryDate[2] || arr[3]['direct'].salaryDate[3] || arr[4]['direct'].salaryDate[4] || arr[5]['direct'].salaryDate[5] || arr[6]['direct'].salaryDate[6] || arr[7]['direct'].salaryDate[7] || arr[8]['direct'].salaryDate[8] || arr[9]['direct'].salaryDate[9] || arr[10]['direct'].salaryDate[10] || arr[11]['direct'].salaryDate[11])
        {
          salary = user.balance + 100; 
          await User.updateOne({_id:user._id},{balance:salary,Rank:'A'})  
        }
    
    }else
    {
        let directsalary=0;
        let indirectsalary=0;
        user = await User.findOne({_id:Userid})

        for(let i=0;i<arr.length;i++)
        {
            const fivePercentSalary  = ((arr[i]['direct'].investment*20/100)*5/100)
            const threePercentSalary = ((arr[i]['indirect'].investment*20/100)*3/100)
            for(let j=0;j<12;j++)
            {

                if(arr[i]['direct'].plan=='yes' && currentDate==arr[i]['direct'].salaryDate[j])
                    directsalary +=  user.balance + fivePercentSalary
            
                if(arr[i]['indirect'].plan=='yes' && currentDate==arr[i]['indirect'].salaryDate[j])
                    indirectsalary +=  user.balance + threePercentSalary
            }
            
        }

                const finalAmount = directsalary + indirectsalary
                if(finalAmount>0)
                    await User.updateOne({_id:user._id},{balance:finalAmount})
                
    }

}
res.status(200).json({success:true})
}
  
  
  
  export default   ConnectMongoDB(handler)


