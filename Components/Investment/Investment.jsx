import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useRouter } from "next/router";
import { ThemeContext } from "../../Context/ThemeContext";
import Link from 'next/link';
import Script from "next/script";
import Navbar from '../Header/Navbar'
const Investment = () => {
  //useContext
  const {setLoader,balance, token, mobile,getUser,Userid} = useContext(ThemeContext);
  //useRouter
  const router = useRouter();
  // DROP DOWN CURRENCY & PAYMENT METHODS VARIABLE
  const [wallet, setwallet] = useState("Binance");

  const [currency, setcurrency] = useState("USD");
  // DATA STATE VARIABLE
  const [investment, setinvestment] = useState();
  // const [lastname, setlastname] = useState("");
  const [cnic, setcnic] = useState("");
  const [address, setaddress] = useState("");
  const [img1, setimg1] = useState("");
  const [img2, setimg2] = useState("");


  // investment formula
  const [formula, setformula] = useState(true);
  
  //after subit disable subscribebtn
  const[ disable,setdisable]=useState(false)
  const[ showBTN,setshowBTN]=useState(true)
  //personel details user
  const[ number,setnumber]=useState("no")
  const[ Uname,setuname]=useState("no")
  const[ email,setemail]=useState("no")
  const[ lastname,setlastname]=useState("no")

  async function getUserDetails(){
    try{
      const email = localStorage.getItem('token')
      const res = await axios.get(`/api/get/userpersoneldetails?email=${email}`)
        if(res.success!=false){
            setuname(res.data.uname)
            setemail(res.data.email)
            setlastname(res.data.lastname)
          }else{
            router.push('/')
            info(
              "Network Error",
              {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
              }
            );
          } 
        }catch(e){
        router.push('/')
        info(
          "Network Error",
          {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          }
        );
      }
  }
  
  useEffect(() => {
    getUserDetails() 
  }, []);
 
  const ChangeEvent = (e) => {
    if (e.target.name == "investment") {
      setinvestment(e.target.value)
      if((e.target.value/100).toString().includes('.')){
        setformula(true)
      }else{
        setformula(false)
      } 
    }
  };
  const submit = async (e) => {
    e.preventDefault();
    alert('Checking Details 💰')
    setshowBTN(false)
    setLoader(true)
    setdisable(true)
    try{
        let data = {email,address,number,cnic,investment,img1,img2,wallet,}
         const res = await axios.post("/api/post/join", data)
            if (res.data.success == true) {
              toast.success(
                "Thanks for joining our plan its currenlty under review status and it will take 24 hours to review your request ",
                {
                  position: "top-right",
                  autoClose: 30000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "colored",
                }
              );
              downloadPDF()
              setLoader(false)
              router.push("/");
              setTimeout(() => {
                window.location.reload()
              }, 1000);
            } else {
              setshowBTN(true)
              setdisable(false)
              setLoader(false)
            toast.error(res.data.error, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
              });
            }
        
    
    }catch(e){
      setLoader(false)
      router.push('/')
      setTimeout(() => {
        window.location.reload()
      }, 1000);
      toast.error('Network Error', {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
      });
    }



  };

  const cloudinaryonChange=(e)=>{
    try{
      setLoader(true)
    if(e.target.name=='cloud1'){
      setLoader(true)
      const data= new FormData()
    data.append('file',e.target.files[0])
    // data.append('upload_preset','vru3vgic') // old
    // data.append('cloud_name','dklqbx5k0')  //old
    // const url='https://api.cloudinary.com/v1_1/dklqbx5k0/image/upload'

    data.append('upload_preset','hasmui7k') // ghory
    data.append('cloud_name','dy2hybbx5')  // Ghory
    const url='https://api.cloudinary.com/v1_1/dy2hybbx5/image/upload'//Ghry
    axios.post(url,data).then(res=>{
      setimg1(res.data.secure_url)
      setLoader(false)
    })
    }else{
      setLoader(true)
      const data= new FormData()
    data.append('file',e.target.files[0])
    data.append('upload_preset','hasmui7k') // ghory
    data.append('cloud_name','dy2hybbx5')  // Ghory
    const url='https://api.cloudinary.com/v1_1/dy2hybbx5/image/upload'//Ghory

    // data.append('upload_preset','vru3vgic') // old
    // data.append('cloud_name','dklqbx5k0')  //old
    // const url='https://api.cloudinary.com/v1_1/dklqbx5k0/image/upload'//Ghory
    axios.post(url,data).then(res=>{
      setimg2(res.data.secure_url)
      setLoader(false)
    })
    }
  }catch(e)
  {
    setLoader(false)
    alert('Server down try again later')
  }
  }
  const downloadPDF = () =>{
     // Define the path to the PDF file in the public directory
     const pdfPath = 'UGTRADING.pdf';

     // Create an anchor element
     const anchor = document.createElement('a');
     anchor.href = pdfPath;
     anchor.target = '_blank'; // Open the link in a new tab/window
     anchor.download = pdfPath; // Name for the downloaded file
     anchor.click();
  }

 

  return (
    <>
    {token  && (
      <div className="font_family mt-[70px] flex h-[100vh] justify-center items-center p-[10px] bg-[#121212]">
        <div className="goldShadow Invest-Container">
          <div className="  title text-[#ffdb1a]">
            {" "}
            <span  className="planform-main-web-title  text-[#ffdb1a]">
            Yearly Plan
            </span>
            <span className="Address">
              <span className="wallet">
                <select
                  value={wallet}
                  name="select"
                  onChange={(e) => {
                    setwallet(e.target.value);
                  }}
                  className="!w-[170px] PlanForm-select-main ml-8  md:ml-[250px]"
                >
                  <option value={"Binance"}>Binance TRC20</option>
                  <option value={"KuCoin"}>KuCoin TRC20</option>
                  <option value={"OKX"}>OKX TRC20</option>
                  <option value={"EASYPAISA"}>EASYPAISA</option>
                  <option value={"NAYAPAY"}>NAYAPAY</option>
                  <option value={"BANK"}>Al-BARAKA</option>
                  <option value={"WALLET"}>WALLET</option>
                </select>

              </span>
              {wallet == "Binance" && (
                                <span className="planfirm-space-span">TVqsVrj4pXKdmZZqNhuT9EYHhW1FiEkm5a</span>
                )}{" "}
              {wallet == "KuCoin" && (
                                <span className="planfirm-space-span">TH3XZiv9AHsGqefDxdtW5T4AUMMmeph8f1</span>
                )}{" "}
              {wallet == "OKX" && (
                                <span className="planfirm-space-span">TMEPJQQwSWdBBLic85opn4rXdqkJH2TqyM</span>
                )}{" "}
              {wallet == "EASYPAISA" && <span  className="planfirm-space-span">0322495827</span>}{" "}
              {wallet == "NAYAPAY" && <span  className="planfirm-space-span">0322495827</span>}{" "}
              {wallet == "BANK" && <span className="planfirm-space-span" >0102626361016</span>}
              {wallet == "WALLET" && <span className="planfirm-space-span" >{Userid}</span>}
            </span>
          </div>
          <div className="content">
            <form action="#" onSubmit={submit}>
              <div className="user-details">

                <div className="input-box">
                  <span className="details text-[#ffdb1a] ">First Name</span>
                  <input
                  className=""
                    type="text"
                    value={Uname=="no"?'':Uname}
                    placeholder={Uname=="no"?'Enter your first name':Uname}
                    readOnly={true}
                    required
                  />

                </div>
                <div className="input-box">
                  <span className="details text-[#ffdb1a]">Last Name</span>
                  <input
                    type="text"
                    value={lastname=="no"?'':lastname}
                    placeholder={lastname=="no"?'Enter your last name':lastname}
                    readOnly={true}
                    required
                  />
                </div>

                <div className="input-box">
                  <span className="details text-[#ffdb1a]">Email</span>
                  <input
                    type="text"
                    value={email=="no"?'':email}
                    placeholder={email=="no"?'Enter your email':email}
                    readOnly={true}
                    required
                  />
                </div>

                
               <div className="input-box">
                  <span className="details text-[#ffdb1a]">Phone Number</span>
                  <input
                    type="text"
                    onChange={(e) => {
                      setnumber(e.target.value);
                    }}
                    placeholder="Enter your number"
                    required
                  />
                </div>

               <div className="input-box">
                  <span className="details text-[#ffdb1a]">Address</span>
                  <input
                    type="text"
                    onChange={(e) => {
                      setaddress(e.target.value);
                    }}
                    placeholder="Enter your Address"
                    required
                  />
                </div>

                
               <div className="input-box">
                  <span className="details text-[#ffdb1a]">CNIC</span>
                  <input
                    type="text"
                    onChange={(e) => {
                      setcnic(e.target.value);
                    }}
                    placeholder="Enter your Cnic"
                    required
                  />
                </div>
               

               {img1!=""  && <img src={img1} className="img-planfirm-upload" />}
                {img1=="" && <label className="custum-file-upload" for="file">
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill=""
                      viewBox="0 0 24 24"
                    >
                      <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
                      <g
                        stroke-linejoin="round"
                        stroke-linecap="round"
                        id="SVGRepo_tracerCarrier"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          fill="#ffdb1a"
                          d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z"
                          clip-rule="evenodd"
                          fill-rule="evenodd"
                        ></path>{" "}
                      </g>
                    </svg>
                  </div>
                  {/* <div className=" flexing-span-plan-form"> */}
                    <div className="text-[#ffdb1a] font-bold">Click to upload payment screenshot</div>
                  {/* </div> */}
                  <input onChange={cloudinaryonChange} name="cloud1" type="file" id="file" />
                </label>}

               {img2!=""  && <img src={img2} className="img-planfirm-upload" />}
                {img2=="" && <label className="custum-file-upload" for="file">
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill=""
                      viewBox="0 0 24 24"
                    >
                      <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
                      <g
                        stroke-linejoin="round"
                        stroke-linecap="round"
                        id="SVGRepo_tracerCarrier"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          fill="#ffdb1a"
                          d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z"
                          clip-rule="evenodd"
                          fill-rule="evenodd"
                        ></path>{" "}
                      </g>
                    </svg>
                  </div>
                  {/* <div className=" flexing-span-plan-form"> */}
                    <div className="text-[#ffdb1a] font-bold">Click to upload youtube  screenshot </div>
                  {/* </div> */}
                  <input onChange={cloudinaryonChange} name="cloud2" type="file" id="file" />
                </label>}
                <div className="input-box">
                  <span className="details text-[#ffdb1a]">investment</span>
                  <div className="flex">
                    
                  
                    <input
                      type="number"
                      value={investment}
                      onChange={ChangeEvent}
                      name="investment"
                      placeholder="Enter your Amount 💲"
                    />
                    <select
                      value={currency}
                      name="select"
                      className="PlanForm-select-usd"
                    >
                      <option value={"USD"}>USD</option>
                    </select>
                  </div>
                  { investment>=0 && investment < 100 && investment!="" &&
                    (
                      <span className="PlanForm-investment-error">
                        Minimum investment 100$
                      </span>
                    )}
                  
                  
                </div>
              </div>
              
              <div className="button-webview ">
              <div className='mr-[250px]'>
                  <div class="g-ytsubscribe " data-channelid="UCLifmeEanPv_W6swcFZM_aw" data-layout="default" data-count="default"></div>
                 </div>
              {showBTN &&  <input className="bg-gradient-to-br from-white via-[#ffdb1a]  to-transparent hover:bg-gradient-to-r hover:from-white hover:via-[#ffdb1a] hover:to-[#ffdb1a]" type="submit" value="Subscribe" disabled={disable} />}
              </div>
              <script>
    <Script src="https://apis.google.com/js/platform.js"></Script>
    </script>
    <div className="flex youtube-logo-planform-title-size ">
    <Link href={'https://www.youtube.com/@UGTardnig'}><img className="youtube-logo-planform-size" src='youtube.png'/></Link>
    <a className="youtube-channel-link  ">UG TRADING YOUTUBE CHANNEL CLICK ME</a>
    </div>
   

    <style></style>
            </form>
          </div>
        </div>
        
      </div>)}
      <style>{`
     
      .PlanForm-select-usd {
        -moz-appearance: none;        
        -webkit-appearance: none;
        appearance: none;
      }
      .youtube-logo-planform-size{
        height:15px;
        width:15px;
      }
      .youtube-logo-planform-title-size{
        padding-top:50px;
      }
      .flexing-span-plan-form{
        display:flex !important;
        
      }
      .img-planfirm-upload-top{
        // margin-top:10px;
        // margin:auto;
        width:70px;
        height:70px;
        // margin-right:20px;
      }
      .img-planfirm-upload{
        margin-top:10px;
        margin:auto;
        width:50px;
        height:50px;
      }
      .space{
        // margin-bottom:10px;
        margin-left:250px;
      }
      .space-mobile{
        // margin-bottom:10px;
        // margin-left:100px;
      }
      `}</style>
    </>
  );
// }
//   
};

export default Investment;
