const express=require("express")
const app=express();
const dotenv=require("dotenv")
const cors=require("cors");
const mongoose=require("mongoose");
const {connectDB}=require("./config/db")
const userRoute=require("./routes/order")
dotenv.config();
const PORT=5000
app.use(express.json());
app.use(cors());


app.use(userRoute);
app.get("/",(req,res)=>{
    res.send("hello");
})
app.listen(PORT,(req,res)=>{
    console.log(`listening on port ${PORT}`);
})
connectDB();





