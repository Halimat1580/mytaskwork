import React from "react";
import Logo from "../Assets/Group 1.png";
import Profile from '../Assets/Group 6.png'
import './NavBar.css'
import Hero from "./Hero";
import { Link, useMatch} from "react-router-dom";


const NavBar = () => {

  const isAbout = useMatch('/Add')
  const isNew = useMatch('/Form')
  
  
 
  // const isNext = useMatch('/Edit')

  return (
     <>
      <header className="container-fluid shadow-sm d-flex justify-content-between align-items-center mt-3">
        <div className="logo">
          <Link to='/'>

        <img src={Logo} alt=""  className="logo"/>
          </Link>
          
        </div>

         <div className="heading3">
        <h3>Task Duty</h3>
        </div>

        <ul className="d-flex gap-3 link list-unstyled  pt-2 align-items-center">

        {!isNew && '/Add'&&(

          <li >
            <Link className="text-decoration-none text-dark" to='/Form'> New Task</Link>
          </li>
        )}


          {!isAbout && '/Form'&&(

          <li>
          <Link className="text-decoration-none text-dark" to='/Add' > All Task</Link>
          </li>
          )}

{/* {!isAbout && '/Edit'&&(

<li to='./EditTask.jsx ' >
  
 

</li>
)} */}


          <Link className="text-decoration-none text-dark " to='./Form'> <img className="profile" src={Profile} alt="" /></Link>


        </ul>

      </header>

       </>






  );
};

export default NavBar;