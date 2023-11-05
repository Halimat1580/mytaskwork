import React from 'react'
import Plus from '../Assets/Vector.png'
import Edit from '../Assets/clarity_note-edit-line.png'
import Delete from '../Assets/fluent_delete-24-regular.png'
import './TaskAdd.css'

import { Link} from 'react-router-dom';

const TaskAdd = () => {
  // const isNew = useMatch('/Edit')

  return (
    <div className='container'>
      <div className='mt-3 d-flex justify-content-between align-items-center'>
        <h2>My Tasks</h2>
        <h5 className='d-flex gap-2'>

          <img src={Plus} alt="" />
          <span className='ml-3'>Add new Task</span>
        </h5>
      </div>
        <div className="mt-5 border  rounded">
            <div className="d-flex cont justify-content-between align-items-center px-2" >
                <h4 className="text-danger ms-3">Urgent</h4>
                <div className="d-flex gap-3  my-2">


                {/* {!isNew && './EditTask.jsx'&&( */}
            <Link to='./Edit'>
              <button  style={{backgroundColor:'#974FD0'}} className="btn btn- text-light btn-lg"><img src={Edit} alt='edit'  />Edit</button>
            </Link>  
                {/* )} */}
                    {/* <button  style={{backgroundColor:'#974FD0'}} className="btn btn- text-light btn-lg"><img src={Edit} alt='edit'  />Edit</button> */}
                   <div>
                   <button style={{color:'#974FD0'}} className="btn btn-light btn-lg  del "><img src={Delete} alt={Delete} />Delete</button>
                   </div>
                </div>
            </div>
            <hr />
           <div className="mt-4">
           <h2>FinTech Website Update</h2>
            <p className="fs-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet quis nibh posuere non tempor. Erat mattis gravida pulvinar nibh aliquam faucibus et magna. Interdum eu tempus ultricies cras neque mi. Eget tellus suspendisse et viverra.</p>
           </div>
        </div>




      </div>



  )
}

export default TaskAdd