let mongoose=require('mongoose');
const taskSchema=new mongoose.Schema({
   name:{type:"String",required:true},
   completed:{type:"boolean",required:true},
   doing:{type:"boolean",required:true}


})
const Task=mongoose.model("tasks",taskSchema);
module.exports={
    Task
}