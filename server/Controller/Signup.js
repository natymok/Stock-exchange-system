const users=require('../Model/user')
const otpModel=require('../Model/Otp')
const nodemailer=require('nodemailer')
const user = require('../Model/user')
exports.signup=(req,res)=>{
  users.findOne({email:req.body.email}).then((data)=>{
    if(data){
      res.status(400).json({
        error:"email already exist"
    })
    }
    else{
    
    
                const _user=new users({
                  ...req.body
                })
                _user.save((err,data)=>{
                    if(data){
                      sendOtp(req.body.email)

                    }
                })
           
                 
             
           }
           
          })
          
  sendOtp=(email)=>{
     
    const otP=`${Math.floor(100000+Math.random()*900000)}`
             // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: 'natymok1010@gmail.com', // generated ethereal user
      pass: 'zhawqlemfkpqyccb', // generated ethereal password
    },
  });

  // send mail with defined transport object
  let mailoption = {
    from: '"Ethio Stock  👻" <natymok1010@gmail.com>', // sender address
    to: email,
    subject: "Verify Your Email ✔", // Subject line
    html: `<p> Enter <b> ${otP} </b>  in the app to verify Your Email  <b>This code</b> expires after 1 hour</p>`, // html body
  };



    

      const _otP= new otpModel({
        userEmail:email,
           otp:otP,
           createdAt:Date.now(),
           expiresAt:Date.now()+300000


      })
      _otP.save().then((data)=>{
        if(data){
          transporter.sendMail(mailoption).then((data)=>{
            if(data){
              console.log(data)
              res.status(200).json({
                message:'we have sent otp to your email check your email'
              })
            }
          })
          .catch((err)=>{
            res.status(400).json({
              error:err
            })
          })
        }

      })
      .catch((err)=>{
        res.status(400).json({
          error:'otp save error'
        })
      })

  }

}

