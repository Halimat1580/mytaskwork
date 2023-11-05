import React from 'react'
import arrow from '../Assets/eva_arrow-ios-back-fill.png';
import './FormTask.css'
import { Link } from 'react-router-dom';




const FormTask = () => {


  return (
    <div className='container mt-3'>
      <div>
      <Link className='text-decoration-none text-dark' to='/Add'> <h2 className=''> <span ><img src={arrow} alt="" /></span> New Task</h2></Link>
      </div>
      <div className="fieldset-container m-5 h-25">
      <h5 className="fieldset-title"> Task Title</h5>
      <input type="text" className=' w-100' placeholder='E.g Project Defense, Assignment ...' />

    </div>
    <div className="fieldset-container2 m-5 h-25">
      <h5 className="fieldset-title">Description</h5>
      <input type="text" className=' w-100' placeholder='Briefly describe your task...' />

    </div>
    <div className="fieldset-container m-5 h-25">
      <h5 className="fieldset-title"> Tags</h5>
      <input type="text" className=' w-100' placeholder='Urgents, Importants ...' />

     

    </div>


    <div className='d-flex justify-content-between align-items-center text-right'>
    <button style={{backgroundColor:'#974FD0'}} className="btn btn- text-light btn-lg   w-50">Done</button>
    </div>
    </div>
    
  )
}

export default FormTask