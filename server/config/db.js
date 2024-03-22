const mongoose=require("mongoose");
const dotenv=require("dotenv");
dotenv.config();

 const connectDB=()=>{
    mongoose.connect(process.env.MONGOURI,{
    
    });
    mongoose.connection.on('connected',()=>{
    console.log('Connected Established to Database');
    });
    
    mongoose.connection.on('error',(err)=>{
    console.log('error connection',err);
    })
}
module.exports = {
   connectDB
  };