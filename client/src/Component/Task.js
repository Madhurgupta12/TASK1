import React from 'react'
import {useState,useEffect} from "react"
import Swal from "sweetalert2"
import {Link} from "react-router-dom"
const Task = () => {

const [name,Setname]=useState("");
const [completed,Setcompleted]=useState(false);
const [doing,Setdoing]=useState(false);

const check=async(e)=>{
    
    try{

        const res=await fetch("http://localhost:5000/add",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
          body:JSON.stringify({name:name,completed:completed,doing:doing})
        })

        .then(res=>res.json())
        .then((result)=>{


     if(result.success==true)
        {
            Swal.fire({
                icon: 'success',
                title: 'Success!',
                text: 'Your Task Was Added  successfully.',
                confirmButtonColor: '#48BB78', // Match with Tailwind's green color
                confirmButtonText: 'OK'
              })
              
          
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
useEffect(()=>{

    if(doing==true)
    {
        Setcompleted(false);
    }
    if(completed==true)
    {
        Setdoing(false);
    }
    



},[completed,doing])
  return (
    <>
    <div className="bg-sky-300">
    <h1 className=" flex justify-center bg-blue-900 text-4xl font-bold text-transparent bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text">
  To-Do List
</h1>
</div>
    <div className="flex flex-col mt-0.3 justify-center space-y-4 bg-gradient-to-r from-green-400 to-blue-500 p-4 rounded-lg">
  <input
    className="border-2 border-black p-2"
    type="text"
    placeholder="Enter Task"
    onChange={(e) => Setname(e.target.value)}
    value={name}
  />
  <label className="flex items-center space-x-2">
    <input
      type="checkbox"
      className="form-checkbox h-5 w-5 text-green-500"
      checked={completed}
      onChange={(e) => Setcompleted(!completed)}
    />
    <span className="text-gray-700">Completed</span>
  </label>
  <label className="flex items-center space-x-2">
    <input
      type="checkbox"
      className="form-checkbox h-5 w-5 text-green-500"
      checked={doing}
      onChange={(e) => Setdoing(!doing)}
    />
    <span className="text-gray-700">Doing</span>
  </label>
  <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={() => check()}>
    Button
  </button>
</div>

<Link to="/show"><button className=" mt-7 bg-red-500 hover:bg-green-600 rounded-lg p-2">All Task List</button></Link>
</>
    
  )
}

export default Task
