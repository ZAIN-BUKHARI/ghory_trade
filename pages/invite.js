import axios from 'axios'
import { useRouter } from 'next/router'
import React,{useEffect,useState,useContext} from 'react'
import { ThemeContext } from '../Context/ThemeContext'
import { toast } from 'react-toastify';


const invite = () => {

  //state variables
  const [firstname,setfirstname]=useState("")
  const [lastname,setlastname]=useState("")
  const [email,setemail]=useState("")
  const [password,setpassword]=useState("")
  const [cpassword,setcpassword]=useState("")
  //state variables
  const [Inviter,setInviter]=useState([])
  //useContext
  const {setAuth}=useContext(ThemeContext)
  //security
  const [ActiveLoginModal,setActiveLoginModal]=useState(false)
  //useRouter
  const router=useRouter()
  const {_id}=router.query

 
  const signup =async (e) =>{
    e.preventDefault()
        // if(email.length>=5 && firstname.length>=2 && lastname.length>=2 && password.length>=3 ){
        const data = {email,password,firstname,lastname,_id} 
            axios.post('/api/post/referralsignup',data).then(res=>{
                if(res.data==true){
                toast.success('Account created now login', {
                    position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                    router.push('/')
                }
                else{
                    toast.error('Try again ', {
                        position: "top-right",
                            autoClose: 2000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                        });
                }
            })
        // }
//         else{
//             toast.error('Try again  ', {
//                 position: "top-right",
//                     autoClose: 2000,
//                     hideProgressBar: false,
//                     closeOnClick: true,
//                     pauseOnHover: true,
//                     draggable: true,
//                     progress: undefined,
//                     theme: "light",
//                 });
//   }
        
}
  return (
    <>
    <div className='authform'>
    <div className="form-auth form-auth-height" id='form-remove'>
    
    <p className="message">Signup now and get full access to our app. </p>
    <div className="flex">
        <label>
            <input  required="" value={firstname} onChange={(e)=>{setfirstname(e.target.value)}} placeholder="" type="text" className="input authform-input"/>
            <span className='authform-span'>Firstname</span>
        </label>

        <label>
            <input required="" value={lastname} onChange={(e)=>{setlastname(e.target.value)}} placeholder="" type="text" className="input authform-input"/>
            <span className='authform-span'>Lastname</span>
        </label>
    </div>  
            
    <label>
        <input required=""  value={email} onChange={(e)=>{setemail(e.target.value)}}placeholder="" type="email" className="input authform-input"/>
        <span className='authform-span'>Email</span>
    </label> 
        
    <label>
        <input required="" placeholder="" type="password" value={password} onChange={(e)=>{setpassword(e.target.value)}} className="input authform-input"/>
        <span className='authform-span'>Password</span>
    </label> <label>
        <input required="" placeholder="" value={cpassword} onChange={(e)=>{setcpassword(e.target.value)}}  type="password" className="input authform-input"/>
        <span className='authform-span'>Confirm password</span>
    </label>
    {!ActiveLoginModal &&  <button onClick={signup} className="submit">Signup</button>}
   
</div>
</div>
    </>
  )
}

export default invite