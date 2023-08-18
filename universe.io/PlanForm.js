import React, { useState } from "react";
import { toast } from "react-toastify";

const PlanForm = () => {
  // DROP DOWN CURRENCY & PAYMENT METHODS VARIABLE
  const [wallet, setwallet] = useState("TRC20");

  const [currency, setcurrency] = useState("USD");
  // DATA STATE VARIABLE
  const [amount, setamount] = useState("");
  const [phone, setphone] = useState("");
  const [email, setemail] = useState("");
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [cnic, setcnic] = useState("");
  const [address, setaddress] = useState("");
  // ERROR STATE
  const [usderror, seterror] = useState(false);
  const [pkrerror, setpkrerror] = useState(false);
  // TYPE-OF-USER
  const [level, setlevel] = useState("");

  const ChangeEvent = (e) => {
    if (e.target.name == "select") {
      setcurrency(e.target.value);
    } else if (e.target.name == "amount") {
      if (currency == "USD" && e.target.value < "100") {
        var val = e.target.value;
        if (val >= 100 && val < 200) setlevel("1");
        else if (val >= 200 && val < 300) setlevel(2);
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
    if (
      email.length >= 5 &&
      phone.length >= 15 &&
      firstname.length >= 3 &&
      lastname.length >= 3 &&
      address.length >= 7 &&
      cnic.length >= 6
    ) {
      alert("done");
    } else {
      toast.error("Your info is incorrect please check it again", {
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
        <div class="Invest-Container">
          <div class="title  space">
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
          <div class="content">
            <form action="#" onSubmit={submit}>
              <div class="user-details">
                <div class="input-box">
                  <span class="details">First Name</span>
                  <input
                    type="text"
                    onChange={(e) => {
                      setfirstname(e.target.value);
                    }}
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div class="input-box">
                  <span class="details">Last Name</span>
                  <input
                    type="text"
                    onChange={(e) => {
                      setlastname(e.target.value);
                    }}
                    placeholder="Enter your username"
                    required
                  />
                </div>
                <div class="input-box">
                  <span class="details">Email</span>
                  <input
                    type="text"
                    onChange={(e) => {
                      setemail(e.target.value);
                    }}
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div class="input-box">
                  <span class="details">Phone Number</span>
                  <input
                    type="text"
                    onChange={(e) => {
                      setphone(e.target.value);
                    }}
                    placeholder="Enter your number"
                    required
                  />
                </div>
                <div class="input-box">
                  <span class="details">Address</span>
                  <input
                    type="text"
                    onChange={(e) => {
                      setaddress(e.target.value);
                    }}
                    placeholder="Enter your Address"
                    required
                  />
                </div>
                <div class="input-box">
                  <span class="details">CNIC</span>
                  <input
                    type="text"
                    onChange={(e) => {
                      setcnic(e.target.value);
                    }}
                    placeholder="Enter your Cnic"
                    required
                  />
                </div>
                <div class="input-box">
                  <span class="details">Amount</span>
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
                      type="text"
                      value={amount}
                      onChange={ChangeEvent}
                      name="amount"
                      placeholder="Enter your Amount"
                    />
                  </div>
                  {usderror && (
                    <span class="PlanForm-Amount-error">
                      Minimum Amount 100$
                    </span>
                  )}
                  {pkrerror && (
                    <span class="PlanForm-Amount-error">
                      Minimum Amount 3000PKR
                    </span>
                  )}
                </div>
                <div class="input-box">
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
                </div>
              </div>

              <div class="button">
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
