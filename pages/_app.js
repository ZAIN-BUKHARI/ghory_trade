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
import { useRouter } from 'next/router'
import LoadingBar from 'react-top-loading-bar'
import Footer from '../newComp/Footer';
import Sidebar from '../newComp/Sidebar';
import Loading from '../universe.io/Loading'
import AuthFrom from '../newComp/AuthForm'
import Toastify from '../UI-Compoents/Toastify';
import Request from '../universe.io/Request';
import axios from 'axios';
function MyApp({ Component, pageProps
}) {
  const router = useRouter()
  const [progress, setProgress] = useState(0)

  async function getUser()
    {
      let token = JSON.stringify(localStorage.getItem('token'))
      if(token){
        let res = await axios.post('/api/post/user',{token})
        // if(res.data.success==true){
          // setuser(res.data.user)
          console.log(res)
          
        // }
      }
      
    }


  useEffect(() => {
    // getUser()
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
    const [balance,setbalance]=useState(5)


    // Admin
    const [Admin,setAdmin]=useState(true)

    //USER
    const [user,setuser]=useState({})

    //Login confirmation
    const[token,settoken]=useState(false)


  return(
  
<>
<ThemeContext.Provider value={{setLoader,setAuth,setbalance,balance,router,setPaymentRequestModal,setAdmin,Admin,token,settoken}}>
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
