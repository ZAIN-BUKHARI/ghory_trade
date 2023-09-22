import ConnectMongoDB from '../../../middleware/mongoose'
import User from '../../../models/User'
import Plan from '../../../models/Plan'

    
const handler= async (req, res)=> {
    let user;
    let plan;
    let stop=0;
    let A=0;
    let totalSalary = 0;
    if(req.method=='POST'){
        const {Userid} = req.body
         user = await User.findOne({_id:Userid})
         plan = await Plan.findOne({_id:user.planId})
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
            A = A + plan.investment;
            for(let i=0;i<user.teams.length;i++)
        {
            user = await User.findOne({_id:Userid})
            plan = await Plan.findOne({_id:user.planId})
          
            console.log(A)
            const fivePercentSalary  = ((user.teams[i]['direct'].investment*20/100)*5/100)
            const threePercentSalary = ((user.teams[i]['indirect'].investment*20/100)*3/100)
        if(A<10000)
        {
        if(user.teams[i]['direct'].plan=='yes' && user.teams[i]['direct'].investment>=100 ){ 
          const short = user.teams[i]['direct'].joindate;  
          if(
            short==short.slice(0,4)+1+short.slice(5,10) /*for 1 month 22/01/2023 == 22/01/2023*/  &&
            short==short.slice(0,4)+2+short.slice(5,10) /*for 2 month 22/02/2023 == 22/02/2023*/  &&
            short==short.slice(0,4)+3+short.slice(5,10) /*for 3 month 22/03/2023 == 22/03/2023*/  &&
            short==short.slice(0,4)+4+short.slice(5,10) /*for 4 month 22/04/2023 == 22/04/2023*/  &&
            short==short.slice(0,4)+5+short.slice(5,10) /*for 5 month 22/05/2023 == 22/05/2023*/  &&
            short==short.slice(0,4)+6+short.slice(5,10) /*for 6 month 22/06/2023 == 22/06/2023*/  &&
            short==short.slice(0,4)+7+short.slice(5,10) /*for 7 month 22/07/2023 == 22/07/2023*/  &&
            short==short.slice(0,4)+8+short.slice(5,10) /*for 8 month 22/08/2023 == 22/08/2023*/  &&
            short==short.slice(0,4)+9+short.slice(5,10) /*for 9 month 22/09/2023 == 22/09/2023*/  &&
            short==short.slice(0,3)+10+short.slice(5,10) /*for10 month 22/10/2023 == 22/10/2023*/ &&
            short==short.slice(0,3)+11+short.slice(5,10) /*for11 month 22/11/2023 == 22/11/2023*/ &&
            short==short.slice(0,3)+12+short.slice(5,10) /*for12 month 22/12/2023 == 22/12/2023*/ 
            ){
              totalSalary = plan.investment + fivePercentSalary
              await User.updateOne({_id:user._id},{balance:totalSalary})
              totalSalary=0;
            }       
          }
          if(user.teams[i]['indirect'].plan=='yes' && user.teams[i]['indirect'].investment>=100 ){
          const short = user.teams[i]['indirect'].joindate;  
          if(
            short==short.slice(0,4)+1+short.slice(5,10) /*for 1 month 22/01/2023 == 22/01/2023*/  &&
            short==short.slice(0,4)+2+short.slice(5,10) /*for 2 month 22/02/2023 == 22/02/2023*/  &&
            short==short.slice(0,4)+3+short.slice(5,10) /*for 3 month 22/03/2023 == 22/03/2023*/  &&
            short==short.slice(0,4)+4+short.slice(5,10) /*for 4 month 22/04/2023 == 22/04/2023*/  &&
            short==short.slice(0,4)+5+short.slice(5,10) /*for 5 month 22/05/2023 == 22/05/2023*/  &&
            short==short.slice(0,4)+6+short.slice(5,10) /*for 6 month 22/06/2023 == 22/06/2023*/  &&
            short==short.slice(0,4)+7+short.slice(5,10) /*for 7 month 22/07/2023 == 22/07/2023*/  &&
            short==short.slice(0,4)+8+short.slice(5,10) /*for 8 month 22/08/2023 == 22/08/2023*/  &&
            short==short.slice(0,4)+9+short.slice(5,10) /*for 9 month 22/09/2023 == 22/09/2023*/  &&
            short==short.slice(0,3)+10+short.slice(5,10) /*for10 month 22/10/2023 == 22/10/2023*/ &&
            short==short.slice(0,3)+11+short.slice(5,10) /*for11 month 22/11/2023 == 22/11/2023*/ &&
            short==short.slice(0,3)+12+short.slice(5,10) /*for12 month 22/12/2023 == 22/12/2023*/ 
          )
          {
          let addingSalary = await User.findOne({_id:Userid})
          totalSalary = addingSalary.balance + threePercentSalary
          await User.updateOne({_id:Userid},{balance:totalSalary})
          totalSalary=0;
        }
        }
        }
        else if(A>=10000 && A<50000 && user.teams[i]['direct'].plan=='yes' && stop==0){
          console.log('else if')

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
          console.log('else')
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


