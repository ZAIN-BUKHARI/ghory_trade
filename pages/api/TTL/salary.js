import { use } from 'react';
import ConnectMongoDB from '../../../middleware/mongoose'
import User from '../../../models/User'

    
const handler= async (req, res)=> {
    let user;
    let stop=0;
    let A=0;
    let totalSalary = 0;
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
            if(user.teams[i] && arr[i]['direct'].plan=='yes')
            {
              if(arr[i]['direct'].plan=='yes')    
                  sortedArr[i] = arr[i]
                  A = A + arr[i]['direct'].investment
                    
              }
            
            }
            A = A + user.balance;
            console.log('A' + A)
        for(let i=0;i<user.teams.length;i++)
        {
          user = await User.findOne({_id:Userid})
          
            
            const fivePercentSalary  = ((user.teams[i]['direct'].investment*20/100)*5/100)
            const threePercentSalary = ((user.teams[i]['indirect'].investment*20/100)*3/100)
        if(A<10000)
        {
        if(user.teams[i]['direct'].plan=='yes' && user.teams[i]['direct'].investment>=100 ){
          console.log('if direct Hit Block')
          
          totalSalary = user.balance + fivePercentSalary
          console.log('Salary' + totalSalary)
          await User.updateOne({_id:user._id},{balance:totalSalary})

          // subtracing the  5% monthly salary from the direct 
          let u = await User.findOne({_id:user.teams[i]['direct'].id})
          let BALANCE = u.balance-fivePercentSalary;
          console.log('subtract balance ' + BALANCE)
          await User.updateOne({_id:u._id},{balance:BALANCE})
          console.log('if direct Close block')
          totalSalary=0;
        }
        if(user.teams[i]['indirect'].plan=='yes' && user.teams[i]['indirect'].investment>=100 ){

          console.log('if Indirect Hit')
          let addingSalary = await User.findOne({_id:Userid})
          totalSalary = addingSalary.balance + threePercentSalary
          console.log('Adding ' + totalSalary)
          await User.updateOne({_id:Userid},{balance:totalSalary})

          let subtractingSalary = await User.findOne({_id:user.teams[i]['indirect'].id})
          let BALANCE = subtractingSalary.balance-threePercentSalary;
          console.log('Subtrac' + BALANCE)
          await User.updateOne({_id:user.teams[i]['indirect'].id},{balance:BALANCE})
          console.log('if Indirect close block')
          totalSalary=0;
        }
        
        
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
        else if(A>=50000)
        {
          if(A>=50000 && A<150000)
            await User.updateOne({_id:user._id},{Rank:'GM',balance:(user.balance+100)})
          else if(A>=150000 && A<500000)
            await User.updateOne({_id:user._id},{Rank:'VP',balance:(user.balance+150)})
          else if(A>=500000 && A<200000)
            await User.updateOne({_id:user._id},{Rank:'SVP',balance:(user.balance+600)})
          else if(A>=200000 && A<600000)
            await User.updateOne({_id:user._id},{Rank:'MD',balance:(user.balance+1500)})
          else if(A>=600000 )
            await User.updateOne({_id:user._id},{Rank:'ED',balance:(user.balance+13000)})
          
        }
            
        

        stop=1;
    }

    

       res.status(200).json({success:true})
        


    }
else{

    res.status(200).json({ error : 'request method is incorrect it should be post' })
}
  }
  
  
  
  export default   ConnectMongoDB(handler)


