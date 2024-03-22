import React from 'react'
import {Routes,Route} from "react-router-dom";
import Task from "./Component/Task"
import ShowPage from './Component/ShowPage';
const App = () => {
  return (
   
    <div>
    <Routes>
      <Route path="/" element={<Task></Task>}></Route>
      <Route path="/show" element={<ShowPage></ShowPage>}></Route>
      </Routes>
    </div>
  )
}

export default App
