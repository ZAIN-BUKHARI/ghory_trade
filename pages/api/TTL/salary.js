import { use } from 'react';
import ConnectMongoDB from '../../../middleware/mongoose'
import User from '../../../models/User'

    
const handler= async (req, res)=> {
    let user;
    let stop=0;
    let A=0;
  
    if(req.method=='POST'){
        const {Userid} = req.body
         user = await User.findOne({_id:Userid})
         let arr=[];
         let sortedArr=[5]
            for(let i=0;i<user.teams.length;i++)
            {
                arr[i] = user.teams[i]
            }
            for(let i=0;i<arr.length;i++)
            {
                for(let j=i;j<arr.length;j++)
                {
                    if(arr[j]['direct'].investment>arr[i]['direct'].investment && arr[i]['direct'].plan=='yes')
                    {
                        let temp =  arr[i]; 
                        arr[i] = arr[j]
                        arr[j] = temp;
                    }
                }
            }
            for(let i=0;i<5;i++)
            {
            
                
                    sortedArr[i] = arr[i]
                    A = A + arr[i]['direct'].investment
                
            }
                A = A + user.balance;

        for(let i=0;i<user.teams.length;i++)
        {
          user = await User.findOne({_id:Userid})
          
            
            const fivePercentSalary  = (user.teams[i]['direct'].investment*5/100)
            const threePercentSalary = (user.teams[i]['indirect'].investment*3/100)
            // checking Rank A 
            console.log(A)


        if(A<10000)
        {
        if(user.teams[i]['direct'].plan=='yes')
            directbalance = fivePercentSalary;//5%
        if(user.teams[i]['indirect'].plan=='yes')
            indirectbalance = threePercentSalary; //3%
        
        totalSalary = user.balance + directbalance + indirectbalance
        await User.updateOne({_id:user._id},{balance:totalSalary})
        }
        else if(A>=10000 && A<50000 && user.teams[i]['direct'].plan=='yes' && stop==0){
            let salary=0;
          if(A>=10000 && A<20000)
          {
            salary = user.balance + 100; 
            await User.updateOne({_id:user._id},{balance:salary})
            break;
          }
          else if(A>=20000 && A<30000)
          {
            salary = user.balance + 200; 
            await User.updateOne({_id:user._id},{balance:salary})
            break;

          }
          else if(A>=30000 && A<40000)
          {
            salary = user.balance + 300; 
            await User.updateOne({_id:user._id},{balance:salary})
            break;

          }
          else if(A>=40000 && A<50000)
          {
            salary = user.balance + 400; 
            await User.updateOne({_id:user._id},{balance:salary})
            break;

          }


        }
        else
            res.json({msg:'ranking'})
        

        stop=1;
    }

    

       res.status(200).json({success:true})
        


    }
else{

    res.status(200).json({ error : 'request method is incorrect it should be post' })
}
  }
  
  
  
  export default   ConnectMongoDB(handler)


