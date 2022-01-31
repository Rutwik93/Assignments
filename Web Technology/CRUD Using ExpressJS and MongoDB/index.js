var express=require("express");
var router=require("./routes");
var mongoose=require("mongoose");
var parser=require("body-parser");
var server=express();

server.use(parser.json());
server.use("/",router);

mongoose.connect("mongodb://localhost/aimdek");

server.listen(9000,function(){console.log("Server started on Port: http://localhost:9000")});