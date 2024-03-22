const express= require('express');
const router=express.Router();
const {Task}=require("../model/task")
router.post("/add",async(req,res)=>{
const {name}=req.body;


if(name==null)
return res.send({message:"Name is required"})
const add=new Task({name:name});

 const rr=await Task.findOne({name:name});
try{
    if(rr!=null)
    {
    console.log(rr);
     return res.status(200).json({success:"false"});
    }
    else
    {
        
        const result= await add.save();
        return res.json({success:true})
    }
   
}
catch(err)
{
    return res.send({success:false});
}


})

router.post("/delete",async(req,res)=>{
    const {name}=req.body;
    const rr=await Task.findOne({name:name});
    try{
        if(rr!=null)
        {
        const deletedTask = await Task.findByIdAndDelete(rr);
        const rrr=await Task.find({});
        console.log(rrr);
return res.status(200).json({message:"Task deleted successfully"});
        }
        else
        return res.json({message:"Task Not Present"})

    }
    catch(err)
    {
return res.status(404).json({message:err.message});
    }

})

router.get("/completed",async(req,res)=>{
    
    try{


    const rr=await Task.find({completed:true});
    return res.status(200).json({message:rr});

    }
    catch(err)
    {
return res.status(404).json({message:err.message});
    }
})

router.get("/doing",async(req,res)=>{
    
    try{


    const rr=await Task.find({doing:true});
    return res.status(200).json({message:rr});

    }
    catch(err)
    {
return res.status(404).json({message:err.message});
    }
})

module.exports=router