const user=require('../Model/user')
exports.forgot=(req,res)=>{
user.findOne({email:req.body.email}).then((data)=>{
    if(data){

    }
    else{
        res.status(400).json({
            error:"Email not exist"
        })
    }

})
}