const mongoose=require('mongoose');

const productSchema=new mongoose.Schema({
    name:String,
    price:String,
    userId:String,
    Companay:String
});

module.exports=mongoose.model("products",productSchema);

