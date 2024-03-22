let mongoose=require('mongoose');
const taskSchema=new mongoose.Schema({
   name:{type:"String",required:true},
   completed:{type:"boolean",required:false,default:false},
   doing:{type:"boolean",required:false,default:false}


})
const Task=mongoose.model("tasks",taskSchema);
module.exports={
    Task
}