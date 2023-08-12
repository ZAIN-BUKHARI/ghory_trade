import { useState,useEffect } from 'react'
import '../styles/globals.css'
import '../styles/auth.css'
import { useRouter } from 'next/router'
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingBar from 'react-top-loading-bar'
import Footer from '../newComp/Footer';
import Sidebar from '../newComp/Sidebar';
// import AuthForm from '../newComp/AuthForm';



function MyApp({ Component, pageProps
 }) {
  const router = useRouter()
  const [progress, setProgress] = useState(0)
  
  useEffect(() => {
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
  

  return(
  
<>
  <LoadingBar color='blue' progress={progress} waitingTime={400} onLoaderFinished={() => setProgress(0)}/>
  {/* <AuthForm/> */}
  <Sidebar/>
  <Component  {...pageProps} />
   <Footer  /> 
  </>
  )
}

export default MyApp
