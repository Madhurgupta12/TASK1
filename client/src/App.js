import React from 'react'
import {Routes,Route} from "react-router-dom";
import Task from "./Component/Task"
const App = () => {
  return (
   
    <div>
    <Routes>
      <Route path="/" element={<Task></Task>}></Route>
      </Routes>
    </div>
  )
}

export default App
