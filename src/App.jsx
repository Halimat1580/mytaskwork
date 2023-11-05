
import { BrowserRouter, Route, Routes, useMatch,Outlet } from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from '../src/Page/Home'
import NavBar from '../src/Page/NavBar'

import FormTask from './Page/FormTask'
import Hero from './Page/Hero'
import EditTask from './Page/EditTask';
import TaskAdd from './Page/TaskAdd';

function App() {
  

  return (
    <>
      <BrowserRouter>

<NavBar/>
{/* <TaskAdd/> */}





<Routes>


  <Route index element = {<Home/>} />
   
  <Route path='/Form' element= {<FormTask/>}/>
  <Route path='/Hero' element= {<Hero/>}/>

  <Route path='/Edit' element= {<EditTask/>}/>
  <Route path='/Add' element= {<TaskAdd/>}/>


  
  
</Routes>
</BrowserRouter>
    </>
  )
}

export default App
