import React from 'react'
import {useState} from "react"
const Task = () => {

const [name,Setname]=useState("");
// const [completed,Setcompleted]=useState(false);
// const [doing,Setdoing]=useState(false);

const check=async(e)=>{
    
    try{

        const res=await fetch("http://localhost:5000/add",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
          body:JSON.stringify({name:name})
        })

        .then(res=>res.json())
        .then((result)=>{


     if(result.success==true)
        {
            window.alert("Success");
            console.log("Successfully added");

        }
        else
        {
            console.log("Error");

        }
            console.log(result);
        })

        
        

    }
    catch(error)
    {
        console.log(error);
    }
}
  return (
    <div >

     <input
     className="border-2 border-black"
    type="text" 
    placeholder="Enter name"
     onChange={(e)=>Setname(e.target.value)}
     value={name}>

     </input>
     <br />

{/* <input
     className="border-2 border-black"
    type="text" 
    placeholder="Completed"
     onChange={(e)=>Setcompleted(e.target.value)}
     value={completed}>
     </input>
     <br />

<input
     className="border-2 border-black"
    type="text" 
    placeholder="doing"
     onChange={(e)=>Setdoing(e.target.value)}
     value={doing}>

     </input> */}


  <button  className="bg-red-400" onClick={()=>check()}>Button</button>


    </div>
  )
}

export default Task
