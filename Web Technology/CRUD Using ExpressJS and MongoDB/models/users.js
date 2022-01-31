var mongoose=require("mongoose");

var users=mongoose.Schema({
    id:Number,
    name:String,
    password:String,
    gender:String,
    birthdate:String,
    age:Number,
    country:String,
    phone:String
});

module.exports=mongoose.model("users",users);