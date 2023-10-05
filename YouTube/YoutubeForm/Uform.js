import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useRouter } from "next/router";
import { ThemeContext } from "../../Context/ThemeContext";
import Script from "next/script";
const Uform = () => {
  //useContext
  const {setLoader, token, subscription ,email,mobile,sethideSidebar,} = useContext(ThemeContext);
  //useRouter
  const router = useRouter();
  // DROP DOWN CURRENCY & PAYMENT METHODS VARIABLE
  const [wallet, setwallet] = useState("TRC20");

  const [currency, setcurrency] = useState("USD");
  // DATA STATE VARIABLE
  const [investment, setinvestment] = useState();
  const [phone, setphone] = useState("");
  const [name, setname] = useState("");
  const [lastname, setlastname] = useState("");
  const [cnic, setcnic] = useState("");
  const [address, setaddress] = useState("");
  const [img1, setimg1] = useState("");
  const [img2, setimg2] = useState("");
  // ERROR STATE
  const [usderror, seterror] = useState(false);
  const [pkrerror, setpkrerror] = useState(false);
  // TYPE-OF-USER
  const [level, setlevel] = useState("");
  // investment formula
  const [formula, setformula] = useState(true);
  //after subit disable subscribebtn
  const[ disable,setdisable]=useState(false)

  useEffect(() => {
    if(mobile)
    {
      sethideSidebar(false)
    }
  }, []);

  const ChangeEvent =()=>{}
  
  
  

 if(!mobile)
 {

  return (
    <>
    {token  && (
      <div className="PlanForm-Head">
        <div className="Invest-Container">
          <div className=" title ">
            <img src='youtube.png'  className="img-planfirm-upload-top" />
            {/* <img src="remove_bg.png" className="planform-logo-web-planform"/> */}

            {" "}
            <span className="planform-main-web-title-Uform">
            6M <span> Plan</span>
            </span>
            <span className="Address">
              <span className="wallet">
                <select
                  value={wallet}
                  name="select"
                  onChange={(e) => {
                    setwallet(e.target.value);
                  }}
                  className="PlanForm-select-main"
                >
                  <option value={"TRC20"}>TRC20</option>
                  {/* <option value={"JAZZCASH"}>JAZZCASH</option> */}
                  <option value={"EASYPAISA"}>EASYPAISA</option>
                  {/* <option value={"RASS"}>RASS</option> */}
                  <option value={"BANK"}>Al-BARAKA</option>
                </select>
                {/* {" "} */}
                {/* :{" "} */}

              </span>
              {wallet == "TRC20" && (
                                <span className="planfirm-space-span">TVqsVrj4pXKdmZZqNhuT9EYHhW1FiEkm5a</span>
                )}{" "}
              {/* {wallet == "JAZZCASH" && <span  className="planfirm-space-span">03364569511</span>}{" "} */}
              {wallet == "EASYPAISA" && <span  className="planfirm-space-span">03364569822</span>}{" "}
              {/* {wallet == "RASS" && <span  className="planfirm-space-span">03364569533</span>} */}
              {wallet == "BANK" && <span className="planfirm-space-span" >0102626361016</span>}
            </span>
          </div>
          <div className="content">
            <form action="#" >
              <div className="user-details">
                
              
                <div className="input-box">
                  <span className="details">Name</span>
                  <input
                    type="text"
                    value={name}
                    placeholder="Enter your Name"
                    required
                  />
                </div>
                <div className="input-box">
                  <span className="details">Email</span>
                  <input
                    type="text"
                    value={email}
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="input-box">
                  <span className="details">Phone Number</span>
                  <input
                    type="text"
                    onChange={(e) => {
                      setphone(e.target.value);
                    }}
                    placeholder="Enter your number"
                    required
                  />
                </div>               
                <div className="input-box">
                  <span className="details">investment</span>
                  <div className="flex">
                    <select
                      value={currency}
                      name="select"
                      className="PlanForm-select-usd"
                    >
                      <option value={"PKR"}>PKR</option>
                    </select>
                  
                    <input
                      type="number"
                      value={investment}
                      onChange={ChangeEvent}
                      // onChange={(e)=>{setinvestment(e.target.value)}}
                      name="investment"
                      placeholder="Enter your Amount 💲"
                    />
                  </div>
                  {currency == "PKR" &&
                    investment > 0 &&
                    investment < 5000 &&
                    (
                      <span className="PlanForm-investment-error">
                        Minimum investment 5K PKR
                      </span>
                    )}
                  {currency == "USD" &&
                    investment >= 100 &&
                    (
                      <span className="PlanForm-investment-error-green">
                        Minimum investment 100$
                      </span>
                    )}
                  
                </div>






              </div>
              <div className="button">
              <div className='space'>
                  <div class="g-ytsubscribe " data-channelid="UC8fgDqHGY6ETUl6buqwsLcg" data-layout="default" data-count="default"></div>
                 </div>
                <input type="submit" value="Subscribe" disabled={disable} />
              </div>
              <script>
    <Script src="https://apis.google.com/js/platform.js"></Script>
    </script><a className="youtube-channel-link">https://www.youtube.com/@YMPGHORY4289</a>
   

    <style></style>
            </form>
          </div>
        </div>
        
      </div>)}
      <style>{`
      .flexing-span-plan-form{
        display:flex !important;
        
      }
      .img-planfirm-upload-top{
        // margin-top:10px;
        // margin:auto;
        width:50px !important;
        height:50px !important;
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
}else{
  return (
    <>
    {token  && (
      <div className="PlanForm-Head">
        <div className="Invest-Container-mobile-planform">
          <div className=" mobile-planform-title ">
            {" "}
            Yearly Plan
            <span className="Address">
              <span className="wallet">
            {/* <img src="remove_bg.png" className="img-planfirm-upload-top"/> */}
                <select
                  value={wallet}
                  name="select"
                  onChange={(e) => {
                    setwallet(e.target.value);
                  }}
                  className="PlanForm-select-mobile"
                >
                  <option value={"TRC20"}>TRC20</option>
                  {/* <option value={"JAZZCASH"}>JAZZCASH</option> */}
                  <option value={"EASYPAISA"}>EASYPAISA</option>
                  {/* <option value={"RASS"}>RASS</option> */}
                  <option value={"BANK"}>AL-BARAKA</option>
                </select>
              </span>
              {wallet == "TRC20" && (
                <span className="trc-address-text">TVqsVrj4pXKdmZZqNhuT9EYHhW1FiEkm5a</span>
                )}{" "}
              {/* {wallet == "JAZZCASH" && <span  >03224959827</span>}{" "} */}
              {wallet == "EASYPAISA" && <span  >03224959827</span>}{" "}
              {/* {wallet == "RASS" && <span  >03224959827</span>} */}
              {wallet == "BANK" && <span  >0102626361016</span>}
            </span>
          </div>
          <div className="content">
            <form action="#" >
              <div className="user-details">
                <div className="input-box">
                  <span className="details">First Name</span>
                  <input
                    type="text"
                    onChange={(e) => {
                      setname(e.target.value);
                    }}
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="input-box">
                  <span className="details">Last Name</span>
                  <input
                    type="text"
                    onChange={(e) => {
                      setlastname(e.target.value);
                    }}
                    placeholder="Enter your username"
                    required
                  />
                </div>
                <div className="input-box">
                  <span className="details">Email</span>
                  <input
                    type="text"
                    value={email}
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="input-box">
                  <span className="details">Phone Number</span>
                  <input
                    type="text"
                    onChange={(e) => {
                      setphone(e.target.value);
                    }}
                    placeholder="Enter your number"
                    required
                  />
                </div>
                <div className="input-box">
                  <span className="details">Address</span>
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
                  <span className="details">CNIC</span>
                  <input
                    type="text"
                    onChange={(e) => {
                      setcnic(e.target.value);
                    }}
                    placeholder="Enter your Cnic"
                    required
                  />
                </div>
                <div className="input-box">
                  <span className="details">investment</span>
                  <div className="flex">
                    <select
                      value={currency}
                      name="select"
                      className="PlanForm-select-usd"
                    >
                      <option value={"USD"}>USD</option>
                    </select>
                  
                    <input
                      type="number"
                      value={investment}
                      onChange={ChangeEvent}
                      // onChange={(e)=>{setinvestment(e.target.value)}}
                      name="investment"
                      placeholder="Enter your Amount"
                    />
                  </div>
                  {currency == "USD" &&
                    investment > 0 &&
                    investment < 100 &&
                    (
                      <span className="PlanForm-investment-error">
                        Minimum investment 100$
                      </span>
                    )}
                  {currency == "USD" &&
                    investment >= 100 &&
                    (
                      <span className="PlanForm-investment-error-green">
                        Minimum investment 100$
                      </span>
                    )}
                  
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
                          fill=""
                          d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z"
                          clip-rule="evenodd"
                          fill-rule="evenodd"
                        ></path>{" "}
                      </g>
                    </svg>
                  </div>
                  {/* <div className=" flexing-span-plan-form"> */}
                    <div>Click to upload payment screenshot</div>
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
                          fill=""
                          d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z"
                          clip-rule="evenodd"
                          fill-rule="evenodd"
                        ></path>{" "}
                      </g>
                    </svg>
                  </div>
                  {/* <div className=" flexing-span-plan-form"> */}
                    <div>Click to upload youtube  screenshot </div>
                  {/* </div> */}
                  <input onChange={cloudinaryonChange} name="cloud2" type="file" id="file" />
                </label>}
              </div>
              <div className="button">
              <div className=''>
                  <div class="g-ytsubscribe " data-channelid="UC8fgDqHGY6ETUl6buqwsLcg" data-layout="default" data-count="default"></div>
                 </div>
             
                <input type="submit" value="Subscribe" />
              </div>
              <script>
    <Script src="https://apis.google.com/js/platform.js"></Script>
    </script><a className="youtube-channel-link">https://www.youtube.com/@YMPGHORY4289</a>
   

    <style></style>
            </form>
          </div>
        </div>
        
      </div>)}
      <style>{`
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
}

};

export default Uform;
