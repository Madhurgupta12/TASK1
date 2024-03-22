import React from 'react'
import {useEffect,useState} from "react"
import Swal from "sweetalert2"
const ShowPage = () => {
    const [task,setTask]=useState([]);

    useEffect(()=>{
        const res= fetch("http://localhost:5000/completed",{
            method:"GET",
            "Content-Type": "application/json"
        })

        .then(res=>res.json())
        .then(result=>{
            if(result.success==true)
            {
                console.log(result.data);
                setTask(result.data);
            }
            else{
                console.log("error");
            }

        })
        .catch((error)=>{
            console.error(error);
        })
       
    },[window.onload])
const action=(name)=>{
    const res= fetch("http://localhost:5000/delete",{
        method:"POST",
        headers:{
        "Content-Type": "application/json"
        },
        body:JSON.stringify({name:name})
    })
    .then(res=>res.json())
    .then(result=>{
        if(result.success==true)
        {
            Swal.fire({
                icon: 'success',
                title: 'Success!',
                text: 'Your Task Deleted   successfully.',
                confirmButtonColor: '#48BB78', // Match with Tailwind's green color
                confirmButtonText: 'OK'
              })
             window.location.reload();
        }
        else
        {
            Swal.fire({
                icon: 'failure',
                title: 'failure!',
                text: 'Error.',
                confirmButtonColor: '#48BB78', // Match with Tailwind's green color
                confirmButtonText: 'OK'
              })
        }
    })
    .catch((error)=>{
        console.log(error);

    })

}

    const generateBackgroundColor = (index) => {
        const colors = ['bg-blue-200', 'bg-green-200', 'bg-yellow-200', 'bg-pink-200', 'bg-purple-200'];
        return colors[index % colors.length];
      };
  return (
    <div>
      <h1 className=" flex justify-center text-2xl font-bold mb-4">Task List</h1>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {task.map((task,index )=> (
          <div key={task.id} className={`p-4 shadow-md rounded-lg ${generateBackgroundColor(index)}`}>
            <h2 className="text-lg font-semibold">{task.name}</h2>
            <p className="mt-2">Task: {task.completed ? 'Completed' : 'Not Completed'}</p>
            <p>Task: {task.doing ? 'Doing' : 'Not Doing'}</p>
            <button onClick={()=>action(task.name)} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Remove</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ShowPage
