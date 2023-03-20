const validater=require('express-validator')
const emailValidator=require('deep-email-validator')
emailValidator.validate(req.body.email).then((data)=>{
    console.log(data)
    
})

