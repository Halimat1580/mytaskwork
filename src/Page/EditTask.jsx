import React from 'react'
import './EditTask.css'





const EditTask = () => {
    
    
  return (
    <div className='container mt-3'>
    
      <div className="fieldset-container m-5 h-25">
      <h5 className="fieldset-title"> Task Title</h5>
      <input type="text" className=' w-100' placeholder='Project completion ...' />

    </div>
    <div className="fieldset-container2 m-5 h-25">
      <h5 className="fieldset-title">Description</h5>
      <input type="text" className=' w-100' placeholder='Briefly describe your task...' />

    </div>
    <div className="fieldset-container m-5 h-25">
      <h5 className="fieldset-title"> Tags</h5>
      <input type="text" className=' w-100' placeholder='Urgents, Importants ...' />

    </div>
    </div>
  )
}

export default EditTask