import { useState,useEffect } from 'react'
import { ThemeContext } from '../Context/ThemeContext';
import '../styles/globals.css'
import '../styles/auth.css'
import '../styles/sidebar.css'
import '../styles/intro.css'
import '../styles/balls.css'
import '../styles/planform.css'
import '../styles/player.css'
import '../styles/slider.css'
import '../styles/worksheet.css'
import '../styles/widthdraw.css'
import '../styles/test.css'
import '../styles/currency.css'
import '../styles/invite.css'
import '../styles/searchbar.css'
import '../styles/download.css'
import '../styles/otp.css'
import '../styles/stats.css'
import '../styles/adminsheet.css'
import '../styles/dropdown.css'
import { scheduleJob } from 'node-schedule';
import { useRouter } from 'next/router'
import LoadingBar from 'react-top-loading-bar'
import Loading from '../universe.io/Loading'
import Toastify from '../UI-Compoents/Toastify';
import axios from 'axios';
import Navbar from '../Components/Header/Navbar';
import Footer from '../Components/Footer/Footer';
import Maintenance from '../Components/Maintenance/Maintenance';




function MyApp({ Component, pageProps}) {
  var access='ya29.a0AfB_byB_FHuiyFNMMPiB3Ud85R3yJ8Hj-GvMDW_iEFc3D9fxZSpW6xUYWJDKbGt0_RgOKSXMQD7i3zRGnAtx9oeTW5E3k709EEVlY7rDcljtr84rRKsSpPpBjYP20cxqUohj5IgK17NVIAJkcDlLn2B9TarEMkb_SIBOyAaCgYKAbgSARASFQHsvYlsmfkQsyvRKOyPqONpmzwIpg0173'
  var API_KEY='AIzaSyC9dvwyqo7y7mUQZYn7X_YWQG1Y86DJ02g'
  const router = useRouter()
  const [progress, setProgress] = useState(0)


//  get User func 
async function getUser()
{
  let _id;
  let data;
  setLoader(true)
  let token = localStorage.getItem('token')
  try{
    if(token=="null" || token=='no'){
      setLoader(false)
  }else{
    let res = await axios.get(`/api/get/localstorage?token=${token}`,)
    if(res.data.success==true)
    {
      setviews(res.data.orders[0].views)
      setplanCount(res.data.orders[0].planCount)
      setlevel(res.data.orders[0].level)
      setUname(res.data.orders[0].firstname)
      setreview(res.data.orders[0].review)
      setperDayProfit(res.data.orders[0].perDayProfit)
      setuser(res.data.orders[0]) 
      setemail(res.data.orders[0].email) 
      setbalance(parseFloat(res.data.orders[0].balance)) 
      setsubscription(res.data.orders[0].subscription) 
      setchannel(res.data.orders[0].channel)
      setworkStatus(res.data.orders[0].todaywork)
      setUserid(res.data.orders[0]._id)
      setteamlength(res.data.orders[0].teams.length)
      setrank(res.data.orders[0].Rank)
      setcommission(res.data.orders[0].commission)
      setisLogin(res.data.orders[0].Login)
      setyourinvestment(res.data.orders[0].totalInvestment)
      

      if(res.data.orders[0].admin=='yes'){setusman(true)}
      _id=res.data.orders[0]._id

      if(res.data.orders[0].admin=='yes')
      {
        setAdmin(true)
      }
      else{
        setAdmin(false)
      }
      const email = res.data.orders[0].email
      const Userid = res.data.orders[0]._id
      const status='yes'
      
      
      data={email}
      const response = await axios.post('/api/TTL/subscription',data)//After one year subscription cancelled automatically
      if(response.data.success=='subscription-end' && res.data.orders[0].Login=="no" )
      {
        alert('Your subscription end ')
        window.location.reload();
     }else
     {
        data = {email,Userid,status}
        if(res.data.orders[0].Login=="no" && res.data.orders[0].subscription=='yes')
        {
          axios.post('/api/TTL/salary',data).then(res=>{})
        }
     }

     
  
      setLoader(false)
      
    }
    
      setLoader(false)
      
      
        

      
  }
      
}catch(e){
    setLoader(false)
}
}
async function getAllCustomers(param){
  try{

    setLoader(true)
    const res = await axios.get(`/api/get/join?status=${param}`)
    setcustomers(res.data.orders)
    // setTimeout(() => {setLoader(false) }, 2000);
    setLoader(false)
  }catch(e){
    setLoader(false)
    alert('Server error')
  }




  


}
async function getAllRequest(param){
  try{

    setLoader(true)
    const res = await axios.get(`/api/get/request?status=${param}`)
    console.log(res)
    setrequests(res.data.orders)
    // setTimeout(() => {setLoader(false) }, 2000);
    setLoader(false)
  }
catch(e){
    setLoader(false)
    alert('Server error')
  }

}
async function PostComment(textarea){
  try{

    setLoader(true)
    const headers = {
    'Content-Type': 'application/json', // Example header
    'Authorization': `Bearer ${access}`, // Example authorization header
    // 'Accept':'application/json'
    
  };
  const data = {
    "snippet": {
      "videoId": "5Xs-awoSmhw",
      "topLevelComment": {
        "snippet": {
          "textOriginal": textarea
        }
      }
    }
  }
  let result = await axios.post(`https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&key=AIzaSyC9dvwyqo7y7mUQZYn7X_YWQG1Y86DJ02g`,data,{headers})
  if(result.status==200){
    setLoader(false)
    return true
  }
  else{
    setLoader(false)
    return false
  }
}catch(e){
  setLoader(false)
  alert('Server error')
}
}
async function SubscribeChannel(){
  setLoader(true)
  const headers = {
    'Content-Type': 'application/json', // Example header
    'Authorization': `Bearer ${access}`, // Example authorization header
    'Accept':'application/json'
    
  };
  const data = {
    snippet: {
      resourceId: {
        channelId: "UC6LRyDpPgR2ypljDuCvU-cw",
      },
    },
  }
  try{
    let result = await axios.post(`https://www.googleapis.com/youtube/v3/subscriptions?part=snippet&key=AIzaSyC9dvwyqo7y7mUQZYn7X_YWQG1Y86DJ02g`,data,{headers})
    if(result.status==200){
      const data = {email}
      let response = await axios.post('/api/get/user',data)
      if(response.data==true){
        setLoader(false)
        return true
      }else{
        setLoader(false)
        return false
      }
    }
  }catch(e){
    setLoader(false)
    return false
  }
}
async function getVideoInfo(id){
  try{

    setLoader(true)
  let result = await axios.get(`https://www.googleapis.com/youtube/v3/videos?key=${API_KEY}&part=snippet,contentDetails&id=${id}`)
  if(result.status==200){
    setvideoTitle(result.data.items[0].snippet.localized.title)
    setLoader(false)
    
  }
  else{
    setLoader(false)
    return false
  }
}catch(e){
  alert('Server error')
  router.push('/')
}
}
async function getTenvideos(){
  try {
    const response = await axios.get(
      "https://www.googleapis.com/youtube/v3/search",
      {
        params: {
          key: API_KEY,
          channelId: "UC6LRyDpPgR2ypljDuCvU-cw",
          part: "snippet",
          maxResults: 10, // You can adjust this value
          // order: "latest", // You can change the order as needed
        },
      }
    );
    setvideoLinks(response.data.items);
    return true
  } catch (error) {
    alert("Error fetching data: ", error);
  }
}
async function getAllUsers(){
  try{
    let users = await axios.get('/api/get/user')
    if(users.status==200){setadminallusers(users.data.orders)}
  }catch(e){
    alert('Server error')
  }
}
async function getAllPlans(){
  try{
    let plan = await axios.get('/api/get/plans')
    if(plan.status==200){setplanssearchresults(plan.data.plan)}
  }catch(e){
    alert('Server error')
  }
}
async function getAllRequests(){
  try{

    let request = await axios.get('/api/get/allrequests')
    if(request.status==200){setallrequests(request.data.request)}
  }catch(e){
    alert('Server error')
  }
}
function resolutionChecker(){
  let mq = window.matchMedia("(max-width: 768px)");
      if (mq.matches==true) {
        setmobile(true)
      } else {
        setmobile(false)
      }
}
function fetchDailyWork()
{
  try{
    // setLoader(true)
  axios.get('/api/get/links').then(res=>{

      if(res.status==200 && res.data.links.length!=0)
      {
        let arr=[]
      for(let i=0;i<level;i++)
      {
        arr.push(res.data.links[0].links[i])
      }
      setlinktoLevel(arr)
      setallLinks(res.data.links)
      setdailyWork(res.data.links[0].links)
      setworkUploadedDate(res.data.links[0].date)
      // setLoader(false)
    }else{
      // setLoader(false)
    }
  })
}catch(e)
{
  setallLinks([])
  setdailyWork([])
  setworkUploadedDate([])
  // setLoader(false)
}
}
function getBalanceCurrent()
{
  const data = {email}
  axios.post('/api/get/balance',data).then(res=>{
    if(res.data.success==true)
        setbalance(res.data.balance)
  })
}
async function achievementAttributes()
{
   axios.get('/api/get/noofusers').then(res=>{setusers(res.data.users)})
    axios.get('/api/sell/get').then(res=>{setsell(res.data.sell)})
    axios.get('/api/buy/get').then(res=>{setbuy(res.data.buy)})
    // axios.get('/api/get/allinvestment').then(res=>{setinvestment(res.data.investment)})
}
const schedulingTime = '0 0 0 * * *'
  useEffect(() => {
    // import('tw-elements');
    getUser()
    achievementAttributes();
    resolutionChecker()
    if(localStorage.getItem('token')=='no' || localStorage.getItem('token')==null ){
      settoken(false)
    }
    else{
      settoken(true)
    }
    scheduleJob(schedulingTime, async () => {
      await axios.get(`/api/post/missProfitStatus`)
    });
    router.events.on('routeChangeStart', ()=>{
      setProgress(40)
    })
    router.events.on('routeChangeComplete', ()=>{
      setProgress(70)
    })
    router.events.on('routeChangeComplete', ()=>{
      setProgress(100)
    })

  window.addEventListener('scroll', handleScroll);
    },[])
    const handleScroll = () => {
      if(openModal)
      {
        setOpenModal(false)      
      }
  };

    // achievements
    const[sell,setsell]=useState(0)
    const[buy,setbuy]=useState(0)
    const[users,setusers]=useState(0)
    //Loader
    const [loader,setLoader]=useState(false)
    
    //Login USER Details
    const [user,setuser]=useState({})
    const [email,setemail]=useState("")
    const [Uname,setUname]=useState("")
    const [balance,setbalance]=useState(0)
    const [planCount,setplanCount]=useState(0)
    const [subscription,setsubscription]=useState("no")
    const [workStatus,setworkStatus]=useState("no")
    const [perDayProfit,setperDayProfit]=useState(0)
    const [level,setlevel]=useState("0")
    const [views,setviews]=useState(0)
    const [Userid,setUserid]=useState('')
    const [usman,setusman]=useState(false)
    const [teamlength,setteamlength]=useState(0)
    const [rank,setrank]=useState('no')
    const [isLogin,setisLogin]=useState('')
    const [yourinvestment,setyourinvestment]=useState(0)
    const [commission,setcommission]=useState(0)
    const [review,setreview]=useState("")
    // const [missProfit,setmissProfit]=useState(0)
    // const [dates,setdates]=useState([])
    //Login confirmation
    const[token,settoken]=useState(false)
    // Admin Variables
    const [Admin,setAdmin]=useState(false)
    const [customers,setcustomers]=useState([]) 
    const [requests,setrequests]=useState([]) 
    const [adminallusers,setadminallusers]=useState([])
    const [adminallplans,setadminallplans]=useState([])
    const [usersearchresults,setusersearchresults]=useState([])
    const [planssearchresults,setplanssearchresults]=useState([])
    const [allrequests,setallrequests]=useState([])
    const [searchrequestresults,setsearchrequestresults]=useState([])
    const [allLinks,setallLinks]=useState([])
    //youtube variables
    const [channel,setchannel]=useState("") 
    const [videoTitle,setvideoTitle]=useState("Watch the whole video and post a comment") 
    const [videoLinks,setvideoLinks]=useState("")  
    const [dailyWork,setdailyWork]=useState([]) 
    const [workUploadedDate,setworkUploadedDate]=useState('') 
    const [linktoLevel,setlinktoLevel]=useState([]) 

    //mobile responsiveness
    const[mobile,setmobile]=useState()
    // const[hideSidebar,sethideSidebar]=useState(false)
    //Daily work + video player
    const [videoID,setvideoID]=useState('')
    const [Length,setLength]=useState('')

    
   //logout
   const logout = () =>{
    localStorage.setItem('token','no')
    settoken(false)
    setOpenModal(false)
  }

  //toggle nav options modal
  const [openModal,setOpenModal]=useState(false)
  const toggleModal = () =>{
    if(!openModal)
      setOpenModal(true)
    else 
      setOpenModal(false)
  }

  //maintenance mode status 
  const [maintenance,setMaintenance]=useState(false);
    

  return(
<>
  {maintenance  && <Maintenance/>}
  {!maintenance && <ThemeContext.Provider value={{allLinks,users,sell,buy,workUploadedDate,setworkUploadedDate,linktoLevel,setlinktoLevel,dailyWork,setdailyWork,fetchDailyWork,openModal,setOpenModal,toggleModal,logout,planCount,review,commission,yourinvestment,isLogin,rank,teamlength,getBalanceCurrent,videoID,setvideoID,Length,setLength,usman,Userid,views,level,Uname,perDayProfit,setLoader,setbalance,balance,router,setAdmin,Admin,token,settoken,user,email,subscription,workStatus,getAllCustomers,customers,requests,getAllRequests,PostComment,SubscribeChannel,channel,getVideoInfo,videoTitle,videoLinks,getTenvideos,mobile,adminallusers,getAllUsers,setusersearchresults,usersearchresults,adminallplans,getAllPlans,planssearchresults,setplanssearchresults,allrequests,setallrequests,getAllRequest,searchrequestresults,setsearchrequestresults,getUser}}>
    <Toastify angle={"top-right"}/>
    <LoadingBar color='#ffdb1a' progress={progress} waitingTime={400} onLoaderFinished={() => setProgress(0)}/>
    <Navbar/>
    
    {loader && <Loading/>}
    <Component  {...pageProps} />
    <Footer/>
</ThemeContext.Provider>}
  </>
  )
}

export default MyApp
