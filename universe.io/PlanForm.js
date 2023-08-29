import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useRouter } from "next/router";
import { ThemeContext } from "../Context/ThemeContext";
const PlanForm = () => {
  //useContext
  const {  token, subscription } = useContext(ThemeContext);
  //useRouter
  const router = useRouter();
  // DROP DOWN CURRENCY & PAYMENT METHODS VARIABLE
  const [wallet, setwallet] = useState("TRC20");

  const [currency, setcurrency] = useState("USD");
  // DATA STATE VARIABLE
  const [investment, setinvestment] = useState();
  const [phone, setphone] = useState("");
  const [email, setemail] = useState("");
  const [name, setname] = useState("");
  const [lastname, setlastname] = useState("");
  const [cnic, setcnic] = useState("");
  const [address, setaddress] = useState("");
  const [img, setimg] = useState("path");
  // ERROR STATE
  const [usderror, seterror] = useState(false);
  const [pkrerror, setpkrerror] = useState(false);
  // TYPE-OF-USER
  const [level, setlevel] = useState("");

  useEffect(() => {
    if (!token && subscription == "no") {
      router.push("/");
      toast.success("Not allowed here", {
        position: "top-right",
        autoClose: 30000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }, []);
  const ChangeEvent = (e) => {
    if (e.target.name == "select") {
      setcurrency(e.target.value);
    } else if (e.target.name == "investment") {
      setinvestment(e.target.value);
      if (currency == "USD" && e.target.value >= 100) {
        var val = e.target.value;
        if (val >= 100 && val < 200) setlevel("1");
        else if (val >= 200 && val < 300) setlevel("2");
        else if (val > 300 && val < 400) setlevel("3");
        else if (val >= 400 && val < 500) setlevel("4");
        else if (val >= 500 && val < 600) setlevel("5");
        else if (val >= 600 && val < 700) setlevel("6");
        else if (val >= 700 && val < 800) setlevel("7");
        else if (val >= 800 && val < 900) setlevel("8");
        else if (val >= 900 && val < 1000) setlevel("9");
        else setlevel("10");
        seterror(true);
        setpkrerror(false);
      } else if (currency == "PKR" && e.target.value < "30000") {
        setpkrerror(true);
        seterror(false);
      } else {
        seterror(false);
        setpkrerror(false);
      }
    }
  };
  const submit = (e) => {
    e.preventDefault();
    try{

      if (currency == "PKR" && investment >= 3000 || currency == "USD" && investment >= 100) {
        const data = {
            email,
            name,
            lastname,
            address,
            phone,
            cnic,
            investment,
            currency,
            level,
          };
          axios.post("/api/post/join", data).then((res) => {
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
                  theme: "light",
                }
              );
              router.push("/");
            } else {
              toast.error(res.data.error, {
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
          });
    } else {
      toast.error("Minimum $100 dollars plan", {
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
  }catch(e){
    toast.info("Server down ", {
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
  };
  
  return (
    <>
      <div className="PlanForm-Head">
        <div className="Invest-Container">
          <div className="title  space">
            {" "}
            Yearly Plan
            <span className="Address">
              <span className="wallet">
                <select
                  value={wallet}
                  name="select"
                  onChange={(e) => {
                    setwallet(e.target.value);
                  }}
                  className="PlanForm-select"
                >
                  <option value={"TRC20"}>TRC20</option>
                  <option value={"JAZZCASH"}>JAZZCASH</option>
                  <option value={"EASYPAISA"}>EASYPAISA</option>
                  <option value={"RASS"}>RASS</option>
                </select>{" "}
                :{" "}
              </span>
              {wallet == "TRC20" && (
                <span>TXM2g5Dw2u1woTSjFZucA5p3sBqiNDA4HP</span>
              )}{" "}
              {wallet == "JAZZCASH" && <span>03364569511</span>}{" "}
              {wallet == "EASYPAISA" && <span>03364569822</span>}{" "}
              {wallet == "RASS" && <span>03364569533</span>}
            </span>
          </div>
          <div className="content">
            <form action="#" onSubmit={submit}>
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
                    onChange={(e) => {
                      setemail(e.target.value);
                    }}
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
                      onChange={ChangeEvent}
                      className="PlanForm-select"
                    >
                      <option value={"USD"}>USD</option>
                      <option value={"PKR"}>PKR</option>
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
                    currency != "PKR" && (
                      <span className="PlanForm-investment-error">
                        Minimum investment 100$
                      </span>
                    )}
                  {currency == "USD" &&
                    investment >= 100 &&
                    currency != "PKR" && (
                      <span className="PlanForm-investment-error-green">
                        Minimum investment 100$
                      </span>
                    )}
                  {currency == "PKR" &&
                    investment > 0 &&
                    investment < 30000 &&
                    currency != "USD" && (
                      <span className="PlanForm-investment-error">
                        Minimum investment 3000PKR
                      </span>
                    )}
                  {currency == "PKR" &&
                    investment >= 30000 &&
                    currency != "USD" && (
                      <span className="PlanForm-investment-error-green">
                        Minimum investment 3000PKR
                      </span>
                    )}
                </div>

                {/* //file  */}
                {/* <div className="input-box">
                  <input
                    type="file"
                    id="real-file"
                    hidden
                    className="PlanForm-ScreenShot"
                  />
                  <button type="button" id="custom-button">
                    Payment Screenshot
                  </button>
                  <span id="custom-text">No file chosen, yet.</span>
                </div> */}
                <label className="custum-file-upload" for="file">
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
                  <div className="text">
                    <span>Click to upload image</span>
                  </div>
                  <input type="file" id="file" />
                </label>
              </div>
              <div className="button">
                <input type="submit" value="Subscribe" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlanForm;
