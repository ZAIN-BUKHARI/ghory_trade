import ConnectMongoDB from "../../../middleware/mongoose";
import User from "../../../models/User";
var CryptoJS = require("crypto-js");

const handler = async (req, res) => {
  const today = new Date();
  const yyyy = today.getFullYear();
  let mm = today.getMonth() + 1; // Months start at 0!
  let dd = today.getDate();

  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;
  const formattedToday = dd + "/" + mm + "/" + yyyy;
  const { firstname, lastname, email ,password,cpassword} = req.body;
  if (req.method == "POST") {
    try {
      //-------------------checking input fields-----------------------------------------------
      if(email.length==""  || firstname.length=="" || lastname.length=="" || password.length=="" || cpassword.length=="")
      {
        res.status(200).send({ error:"Please fill the form", success: false });
      }
      else{
      if(password.length<10)
      {
        res.status(200).send({ error:"Password must be 10 characters", success: false });
      }else{
      if(password!=cpassword)
      {
        res.status(200).send({ error:"Password not match", success: false });
      }else{
      //-------------------checking input fields-----------------------------------------------
      let u = new User({
        firstname,
        lastname,
        email,
        password: CryptoJS.AES.encrypt(
          req.body.password,
          "secret123"
        ).toString(),
        date: formattedToday,
      });
      u.save();
      res.status(200).json({ success: true });
      }
    }
  }

    } catch {
      res.status(200).json({success:false, error: "You missed something" });
    }
  } else res.status(200).json({success:false, error: "Try again" });
};

export default ConnectMongoDB(handler);
