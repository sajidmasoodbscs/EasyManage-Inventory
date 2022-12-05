const db=require('../config/dbconfig')
const Users=require('../models/User')


exports.login=async(req,res)=>{
    if (req.body.email && req.body.password){
        let user=await Users.findOne(req.body).select("-password");
        if (user){
            res.send(user);
        }else{
            res.send({Result:"No User Found"});
        }     
    }else{
            res.send({Result:"No User Found"});
        }          
}