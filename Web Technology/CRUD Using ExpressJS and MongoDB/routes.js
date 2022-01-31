var router=require("express").Router();
var users=require("./models/users");

// Get All Users
router.get("/api/users",async function(req,res){
    var usersData=await users.find();
    res.json(usersData);
});

// Get User By ID
router.get("/api/users/:id",async function(req,res){
    try
    {
        var singleUser=await users.findOne({"id":parseInt(req.params.id)});

        if(singleUser==null)
            res.json({"Error":"No Such Record Found."});
        else
            res.json(singleUser);
    }
    catch(error)
    {
        res.send(error);
    }
});

// Insert New User
router.post("/api/users",async function(req,res){
    try
    {
        var insertData=await users.create(req.body);
        res.send("Data Inserted Successfully.");
    }
    catch(err)
    {
        res.send(err);
    }
});

// Update User
router.put("/api/users/:id",async function(req,res){
    try
    {
        await users.updateOne({"id":parseInt(req.params.id)},{$set:req.body});
        res.send("Data Updated Successfully.");
    }
    catch(err)
    {
        res.send(err);
    }
});

// Delete User
router.delete("/api/users/:id",async function(req,res){
    try
    {
        await users.deleteOne({"id":req.params.id});
        res.send("Data Deleted Successfully.");
    }
    catch(err)
    {
        res.send(err);
    }
});

module.exports=router;