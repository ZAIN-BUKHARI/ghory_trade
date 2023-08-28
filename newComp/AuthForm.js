import React from "react";
import { FcRedo } from "react-icons/fc";
import { ThemeContext } from "../Context/ThemeContext";
import { useState } from "react";
import { useContext } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import axios from "axios";
import { useEffect } from "react";
const AuthForm = () => {
  //router
  const router = useRouter();
  // state variables
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [cpassword, setcpassword] = useState("");

  const { setAuth, mobile } = useContext(ThemeContext);
  const [ActiveLoginModal, setActiveLoginModal] = useState(false);

  const hideModla = () => {
    setAuth(false);
  };
  const showsignin = () => {
    setActiveLoginModal(true);
    document.getElementById("zain").classList.remove("form-auth-height");
    document
      .getElementById("zain")
      .classList.add("Invest-Container-authform-signin");
  };
  const showsignup = () => {
    setActiveLoginModal(false);
    document
      .getElementById("zain")
      .classList.remove("Invest-Container-authform-signin");
  };

  //SIGNUP
  const signup = (e) => {
    e.preventDefault();
    const data = { email, password, firstname, lastname, cpassword };
    axios.post("/api/post/signup", data).then((res) => {
      if (res.data.success == true) {
        toast.success("Successfully signup", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setActiveLoginModal(true);
        setAuth(false);
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
  };
  const signin = (e) => {
    e.preventDefault();
    const data = { email, password };
    axios.post("/api/post/signin", data).then((res) => {
      if (res.data.success == true) {
        toast.success("successfully logged in", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        localStorage.setItem("token", res.data.user.email);
        setAuth(true);
        setTimeout(() => {
          window.location.reload();
        }, 1000);
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
        localStorage.setItem("token", "no");
      }
    });
  };

  if (mobile) {
    return (
      <>
        <div className="PlanForm-Head-modal-auth">
          <div className="Invest-Container" id="zain">
            <div className="title  authform-cancel-modal-button">
              {" "}
              Yearly Plan
            </div>
            <div className="content">
              <form action="#">
                <div className="user-details">
                  <div className="input-box">
                    <span className="details">First Name</span>
                    <input
                      type="text"
                      onChange={(e) => {
                        setfirstname(e.target.value);
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
                        setfirstname(e.target.value);
                      }}
                      placeholder="Enter your lastname"
                      required
                    />
                  </div>
                  <div className="input-box">
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
                  <div className="input-box">
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
                  <div className="input-box">
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
                  <input type="Signup" value="Subscribe" onClick={signup} />
                </div>
                {!ActiveLoginModal && (
                  <span className="authform-invest-spanone">
                    Already have an account?{" "}
                    <span
                      className="authform-invest-spantwo"
                      onClick={showsignin}
                    >
                      Signin
                    </span>
                  </span>
                )}
                {ActiveLoginModal && (
                  <span className="authform-invest-spanone">
                    Don't have an account?{" "}
                    <span
                      className="authform-invest-spantwo"
                      onClick={showsignup}
                    >
                      Signup
                    </span>
                  </span>
                )}
              </form>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="PlanForm-Head-modal-auth">
          <div className="Invest-Container-authform" id="zain">
            <div className="title  authform-cancel-modal-button">
              {" "}
              {!ActiveLoginModal && "Sign up"}
              {ActiveLoginModal && "Sign in"}
              <h1 onClick={hideModla}>X</h1>
            </div>
            <div className="content">
              <form action="#">
                <div className="user-details-auth">
                  {!ActiveLoginModal && (
                    <>
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
                    </>
                  )}
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
                  {!ActiveLoginModal && (
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
                  )}
                </div>
                <div className="button-auth">
                  {!ActiveLoginModal && (
                    <input type="button" value="Signup" onClick={signup} />
                  )}
                  {ActiveLoginModal && (
                    <input type="button" value="Signin" onClick={signin} />
                  )}
                </div>
                {!ActiveLoginModal && (
                  <span className="authform-invest-spanone">
                    Already have an account?{" "}
                    <span
                      className="authform-invest-spantwo"
                      onClick={showsignin}
                    >
                      Signin
                    </span>
                  </span>
                )}
                {ActiveLoginModal && (
                  <span className="authform-invest-spanone">
                    Don't have an account?{" "}
                    <span
                      className="authform-invest-spantwo"
                      onClick={showsignup}
                    >
                      Signup
                    </span>
                  </span>
                )}
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default AuthForm;
