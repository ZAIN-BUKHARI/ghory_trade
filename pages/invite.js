import React,{useState,useContext} from 'react'
import { useRouter } from 'next/router'
import { ThemeContext } from '../Context/ThemeContext'
import { toast } from 'react-toastify';
import axios from 'axios'


const invite = () => {

  //state variables
  const [firstname,setfirstname]=useState("")
  const [lastname,setlastname]=useState("")
  const [email,setemail]=useState("")
  const [password,setpassword]=useState("")
  const [cpassword,setcpassword]=useState("")
  //useRouter
  const { mobile } = useContext(ThemeContext)
  const router=useRouter()
  const {_id}=router.query

  const hideModla = () =>{
    router.push('/')
  }
 
  const signup =async (e) =>{
    e.preventDefault()
    if(email.includes('@')){
        if(password==cpassword){
            if(firstname.length>0 && lastname.length>0){
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
        }
        else{
            toast.error('Please fill remaining data', {
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

        }

        else{
            toast.error('Password and Confirm Password should be same ', {
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


    }
    else{
        toast.error('inccorect email address ', {
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

      
        
}
if(!mobile)
{
return (
    <>
      <div className="PlanForm-Head-modal-auth refferal-modal-invite">
        <div className="Invest-Container-authform" id="zain">
          <div className="title  authform-cancel-modal-button">
          <img src="remove_bg.png" className="planform-logo-web"/>

            {" "}
            <span className='span-title-palnform-web'>Referral Invite</span>  
            <h1 onClick={hideModla}>X</h1>
          </div>
          <div className="content">
            <form action="#">
              <div className="user-details-auth">
                
                  
                    <div className="input-box-auth">
                      <span className="details auth-authform-fields">
                        First Name
                      </span>
                      <input
                        type="text"
                        onChange={(e) => {
                          setfirstname(e.target.value);
                        }}
                        placeholder="Enter your name"
                        required
                      />
                    </div>
                    <div className="input-box-auth">
                      <span className="details ">Last Name</span>
                      <input
                        type="text"
                        onChange={(e) => {
                          setlastname(e.target.value);
                        }}
                        placeholder="Enter your lastname"
                        required
                      />
                    </div>
                  
                
                <div className="input-box-auth">
                  <span className="details">Email</span>
                  <input
                    type="text"
                    onChange={(e) => {
                      setemail(e.target.value);
                    }}
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="input-box-auth">
                  <span className="details">Password</span>
                  <input
                    type="text"
                    onChange={(e) => {
                      setpassword(e.target.value);
                    }}
                    placeholder="Enter your password"
                    required
                  />
                </div>
                  <div className="input-box-auth">
                    <span className="details">Confirm password</span>
                    <input
                      type="text"
                      onChange={(e) => {
                        setcpassword(e.target.value);
                      }}
                      placeholder="Enter your password"
                      required
                    />
                  </div>
              </div>
              
            <div className="button-auth">
              
                <input className='' type="button" value="Signup" onClick={signup} />
            </div>
            </form>
            {/* <div className="button " onClick={signup}>
                <input className='currency-btn-input' type="button" value="Singup"   />
              </div> */}
          </div>
        </div>
      </div>
    </>
  );
}else{
  return (
    <>
      <div className="PlanForm-Head-modal-auth refferal-modal-invite">
        <div className="Invest-Container-invite-mob" id="zain">
          <div className="title  authform-cancel-modal-button">
          <img src="remove_bg.png" className="planform-logo-web"/>

            {" "}
            <span className='span-title-palnform-web'>Referral Invite</span>  
            <h1 onClick={hideModla}>X</h1>
          </div>
          <div className="content">
            <form action="#">
              <div className="user-details-auth">
                
                  
                    <div className="input-box-auth">
                      <span className="details auth-authform-fields">
                        First Name
                      </span>
                      <input
                        type="text"
                        onChange={(e) => {
                          setfirstname(e.target.value);
                        }}
                        placeholder="Enter your name"
                        required
                      />
                    </div>
                    <div className="input-box-auth">
                      <span className="details ">Last Name</span>
                      <input
                        type="text"
                        onChange={(e) => {
                          setlastname(e.target.value);
                        }}
                        placeholder="Enter your lastname"
                        required
                      />
                    </div>
                  
                
                <div className="input-box-auth">
                  <span className="details">Email</span>
                  <input
                    type="text"
                    onChange={(e) => {
                      setemail(e.target.value);
                    }}
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="input-box-auth">
                  <span className="details">Password</span>
                  <input
                    type="text"
                    onChange={(e) => {
                      setpassword(e.target.value);
                    }}
                    placeholder="Enter your password"
                    required
                  />
                </div>
                  <div className="input-box-auth">
                    <span className="details">Confirm password</span>
                    <input
                      type="text"
                      onChange={(e) => {
                        setcpassword(e.target.value);
                      }}
                      placeholder="Enter your password"
                      required
                    />
                  </div>
              </div>
              
            <div className="button-auth">
              
                <input className='' type="button" value="Signup" onClick={signup} />
            </div>
            </form>
            {/* <div className="button " onClick={signup}>
                <input className='currency-btn-input' type="button" value="Singup"   />
              </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

}

export default invite