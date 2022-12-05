const db=require('../config/dbconfig')
const Users=require('../models/User')

exports.register=async(req,res)=>{
    const user=new Users(req.body);
let data=await user.save();
data=data.toObject();
delete data.password;
console.log(data);
res.send(data);
}