const nodemailer = require('nodemailer');

export default async function mail(date,amount,id,address,method,name){
    let transporter = nodemailer.createTransport({
      service: 'Gmail',
  auth: {
      user: 'zainnnnnnnnnnnnnnnnnnnn@gmail.com', 
      pass: 'rcagtodrccdnxsay' 
  }
  });
  let mailOptions;
  if(method=='request'){

      // Email content
       mailOptions = {
          from: 'zainnnnnnnnnnnnnnnnnnnn@gmail.com', 
          to: 'zainyshorts@gmail.com',
  subject: 'GHORY.TRADE',
  text: `Withdrawal Details:
  Request Date: [${address}]
  Withdrawal Amount: [${id}]
  Account Number: [${amount}]
  Transaction ID: [${date}]
  
  Please allow for a processing time of 1-2 mins for the funds to reflect in your account. If you encounter any issues or have further questions, please feel free to reach out to our customer support team at [Customer Support zainnnnnnnnnnnnnnnnnnnn@gmail.com].
  
  We appreciate your trust in our services and are pleased to have the opportunity to assist you with your financial needs. Should you require any assistance in the future, please don't hesitate to contact us.
  
  Thank you for choosing Ghory.trade.
  
  Best regards,
  Usman Iqbal
  Manager`
  };
}else if(method=='signup'){
         // Email content
       mailOptions = {
        from: 'zainnnnnnnnnnnnnnnnnnnn@gmail.com', 
        to: 'zainyshorts@gmail.com',
subject: 'GHORY.TRADE',
text: `Dear ${name},

We are thrilled to welcome you to ghory.trade! Your account has been successfully created, and we're excited to have you as part of our community.

Here are your account details:

With your new account, you can start exploring all that [Your Website Name] has to offer. we have a wide range of offerings to cater to your needs.`
};
}else{
  mailOptions = {
    from: 'zainnnnnnnnnnnnnnnnnnnn@gmail.com', 
    to: 'zainyshorts@gmail.com',
subject: 'GHORY.TRADE',
text: `Dear sir,

We're excited to share the wonderful news that your subscription plan has been successfully activated on your account at ghory.trade. Welcome to a new world of possibilities!

With your active subscription, you now have access to all the premium features and benefits that come with your chosen plan.

Thank you for choosing ghory.trade as your subscription provider. We're committed to delivering exceptional value and service throughout your subscription journey.

Here's to a fantastic experience ahead!

Best regards,
`
};

}


  transporter.sendMail(mailOptions).then(result=>{
    try{

    }catch(e){
        return true
    }
    
     })
}




