const router=require('express').Router();
const {register , login}=require('./controller');
router.post('/Register' , register);
router.post('/login' , login);
module.exports=router;
