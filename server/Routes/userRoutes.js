const express=require('express')
const router=express.Router()
const {verifyOtp}=require('../Controller/VerfifyOtp')
const {signup}=require('../Controller/Signup')
const {resendOtp}=require('../Controller/ResendOtP')
router.post('/Signup',signup)
router.post('/Verifyotp',verifyOtp)
router.post('/resendOtp',resendOtp)
module.exports=router

