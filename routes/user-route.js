const express = require('express')
const router = express.Router()

const{saveUser}=require('../controller/user-controller')

router.post('/user_register',saveUser)


module.exports=router;