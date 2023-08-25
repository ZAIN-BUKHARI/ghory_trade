import { useState,useEffect,createContext } from 'react'
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
import '../styles/invite.css'
import { useRouter } from 'next/router'
import LoadingBar from 'react-top-loading-bar'
import Footer from '../newComp/Footer';
import Sidebar from '../newComp/Sidebar';
import Loading from '../universe.io/Loading'
import AuthFrom from '../newComp/AuthForm'
import Toastify from '../UI-Compoents/Toastify';
import Request from '../universe.io/Request';
import axios from 'axios';
import { parse } from 'postcss';
function MyApp({ Component, pageProps
}) {
  const router = useRouter()
  const [progress, setProgress] = useState(0)
var access='ya29.a0AfB_byB_FHuiyFNMMPiB3Ud85R3yJ8Hj-GvMDW_iEFc3D9fxZSpW6xUYWJDKbGt0_RgOKSXMQD7i3zRGnAtx9oeTW5E3k709EEVlY7rDcljtr84rRKsSpPpBjYP20cxqUohj5IgK17NVIAJkcDlLn2B9TarEMkb_SIBOyAaCgYKAbgSARASFQHsvYlsmfkQsyvRKOyPqONpmzwIpg0173'
var API_KEY='AIzaSyC9dvwyqo7y7mUQZYn7X_YWQG1Y86DJ02g'
//  get User func 
async function getUser()
{
  setLoader(true)
  let token = JSON.stringify(localStorage.getItem('token'))
  if(token=="null"){
      setLoader(false)
  }else{
    let res = await axios.get(`/api/get/user?user=${token}`)
      setuser(res.data.orders[0]) 
      setemail(res.data.orders[0].email) 
      setbalance(parseFloat(res.data.orders[0].balance))
      setsubscription(res.data.orders[0].subscription) 
      setchannel(res.data.orders[0].channel)
      setworkStatus(res.data.orders[0].todaywork)
      setLoader(false)

  }
  
}
  //Admin Get functions
async function getAllCustomers(param){
  setLoader(true)
    const res = await axios.get(`/api/get/join?status=${param}`)
      setcustomers(res.data.orders)
      // setTimeout(() => {setLoader(false) }, 2000);
      setLoader(false)




  


}
async function getAllRequests(param){
  setLoader(true)
    const res = await axios.get(`/api/get/request?status=${param}`)
      setrequests(res.data.orders)
      // setTimeout(() => {setLoader(false) }, 2000);
      setLoader(false)

}
async function PostComment(textarea){
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
  console.log(result.data)
  if(result.status==200){
    setLoader(false)
    return true
  }
  else{
    setLoader(false)
    return false
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
// https://www.googleapis.com/youtube/v3/videos?key=${API_KEY}&part=snippet,contentDetails&id=${VIDEO_ID}
async function getVideoInfo(id){
  setLoader(true)
  // let result = await axios.get(`https://www.googleapis.com/youtube/v3/videos?key=${API_KEY}&part=snippet&id=${id}`)
  let result = await axios.get(`https://www.googleapis.com/youtube/v3/videos?key=${API_KEY}&part=snippet,contentDetails&id=${id}`)
  if(result.status==200){
    var time = result.data.items[0].contentDetails.duration
    setduration((parseInt(time.split('M')[0].slice(2)))*60000)

    setvideoTitle(result.data.items[0].snippet.localized.title)
    setLoader(false)
    
  }
  else{
    setLoader(false)
    return false
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
    console.error("Error fetching data: ", error);
  }
}

  useEffect(() => {
    getUser()
    if(JSON.stringify(localStorage.getItem('token'))){
      settoken(true)
    }
    
    router.events.on('routeChangeStart', ()=>{
      setProgress(40)
    })
    router.events.on('routeChangeComplete', ()=>{
      setProgress(70)
    })
    router.events.on('routeChangeComplete', ()=>{
      setProgress(100)
    })
   
    },[])

    
    //Loader
    const [loader,setLoader]=useState(false)
    //Auth Modal
    const [Auth,setAuth]=useState(false)
    //Payment Modal
    const [PaymentRequestModal,setPaymentRequestModal]=useState(false)

    //Balance
    // const [balance,setbalance]=useState(5) before fake balance 
    
    //USER
    const [user,setuser]=useState({})
    const [email,setemail]=useState("")
    const [balance,setbalance]=useState(0)
    const [subscription,setsubscription]=useState("no")
    const [workStatus,setworkStatus]=useState("no")
    
    //Login confirmation
    const[token,settoken]=useState(false)
    
    // Admin Variables
    const [Admin,setAdmin]=useState(true)
    const [customers,setcustomers]=useState([]) 
    const [requests,setrequests]=useState([]) 
    
    //youtube variables
    const [channel,setchannel]=useState("") 
    const [videoTitle,setvideoTitle]=useState("Watch the whole video and post a comment") 
    const [duration,setduration]=useState(300000) 
    const [videoLinks,setvideoLinks]=useState("") 

  return(
  
<>
<ThemeContext.Provider value={{setLoader,setAuth,setbalance,balance,router,setPaymentRequestModal,setAdmin,Admin,token,settoken,user,email,subscription,workStatus,getAllCustomers,customers,requests,getAllRequests,PostComment,SubscribeChannel,channel,getVideoInfo,videoTitle,duration,videoLinks,getTenvideos}}>
    <Toastify angle={"top-right"}/>
    <LoadingBar color='blue' progress={progress} waitingTime={400} onLoaderFinished={() => setProgress(0)}/>
    <Sidebar/>
    {PaymentRequestModal && <Request/>}
    {loader && <Loading/>}
    {Auth   && <AuthFrom/>}
    <Component  {...pageProps} />
    <Footer  /> 
</ThemeContext.Provider>
  </>
  )
}

export default MyApp
