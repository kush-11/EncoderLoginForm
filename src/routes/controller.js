const User=require('../models/User');
const validator=require('validator');
var bcrypt = require('bcryptjs');
const register=async(req , res)=>{
    try {
        console.log(req.body)
        const {email ,name ,password , ConfirmPassword , Contact}=req.body;
        // console.log(email_id , name , password);
        if(!email || !name || !password ||  !ConfirmPassword  || !Contact)
        {
            return res.status(401).json({
                message:'plz fill data correctly'
            })
        }
      if(validator.isEmail(email) && validator.isStrongPassword(password))
      {
        const userFind=await User.findOne({email})
        console.log(userFind)
        if(userFind)
        {

               return res.status(409).json({
                message:'user already exist please login!!'
            })
        }
        var salt = bcrypt.genSaltSync(10);
          var hash = bcrypt.hashSync(password, salt);
        const user=await User({email:email ,name:name , password:hash , ConfirmPassword:hash , Contact:Contact})
        console.log(user)
        await user.save();
        if(user){
            return res.status(200).json({
                message:"registration successful",
                data:user
            })
        }

      }else{
        return res.status(409).json({
            message:"invalid id or password"
        })
      }
      
        // console.log('register');
    } catch (error) {
        console.log(error)
    }
}



const login=async(req , res)=>{
    try {
        const {email , password}=req.body
        if(!email || !password)
        {
             return res.status(409).json({
                message:"plz fill data correctly"
            })
            
        }
        if(validator.isEmail(email) && validator.isStrongPassword(password))
        {
            const find=await User.findOne({email})
            if(find)
            {
                console.log(find);
                const pass=await bcrypt.compare(password , find.password);
                if(pass)
                {
                    return res.status(200).json({
                        message:"login success"
                    })
                }else{
                    return res.status(404).json({
                        message:"password not match"
                    })
                }
            }else{
                // console.log("user not found");
                return res.status(404).json({
                    message:"user not found"
                })
            }
        }else{
            return res.status(400).json({
                message:"Invalid id or password"
            })
        }
    } catch (error) {
        console.log(error)
        
    }

}


module.exports={register , login};