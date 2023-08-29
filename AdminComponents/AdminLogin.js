import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useRouter } from "next/router";
import { ThemeContext } from "../Context/ThemeContext";
const AdminLogin = () => {
  //useContext
  const {  token, subscription } = useContext(ThemeContext);
  //useRouter
  const router = useRouter();
  // DROP DOWN CURRENCY & PAYMENT METHODS VARIABLE
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

 
  const moveToadminpanel =()=>{
    axios
  }
  
  return (
    <>
    <div>
        
    </div>
      <div className="PlanForm-Head-modal-auth">
        <div className="Invest-Container-authform" id="zain">
          <div className="title  authform-cancel-modal-button">
            
            Admin login
             
          </div>
          <div className="content">
            <form action="#">
              <div className="user-details-auth">
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

export default AdminLogin;
