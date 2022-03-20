import React from 'react';
import { NavLink } from 'react-router-dom';
const Navbar = ()=>{
       return(
        
        <header style={{'backgroundColor':"rgb(225,36,84)"}}>
        
        <nav className="navbar navbar-expand-lg navigation" id="navbar">
          <div className="container">
          <NavLink exact className="nav-link" to="/">
              <h3 style={{'marginTop':"10px","color": "rgb(243, 237, 237)"}}>AK Web Services</h3>
              </NavLink>
      
              <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarmain" aria-controls="navbarmain" aria-expanded="false" aria-label="Toggle navigation">
            <span className="icofont-navigation-menu"></span>
            </button>
          
            <div className="collapse navbar-collapse" id="navbarmain">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
              <NavLink exact="true" className="nav-link" to="/">Home</NavLink>
              </li>
               <li className="nav-item"><a className="nav-link" href="about.html">About</a></li>
                <li className="nav-item"><a className="nav-link" href="service.html">Services</a></li>
      
                <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="department.html" id="dropdown02" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Department <i className="icofont-thin-down"></i></a>
                <ul className="dropdown-menu" aria-labelledby="dropdown02">
                  <li><a className="dropdown-item" href="department.html">Departments</a></li>
                  <li><a className="dropdown-item" href="department-single.html">Department Single</a></li>
                </ul>
                </li>
      
                <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="doctor.html" id="dropdown03" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Doctors <i className="icofont-thin-down"></i></a>
                <ul className="dropdown-menu" aria-labelledby="dropdown03">
                  <li><a className="dropdown-item" href="doctor.html">Doctors</a></li>
                  <li><a className="dropdown-item" href="doctor-single.html">Doctor Single</a></li>
                  <li><a className="dropdown-item" href="appoinment.html">Appoinment</a></li>
                </ul>
                </li>
      
               <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="blog-sidebar.html" id="dropdown05" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Blog <i className="icofont-thin-down"></i></a>
                <ul className="dropdown-menu" aria-labelledby="dropdown05">
                  <li><a className="dropdown-item" href="blog-sidebar.html">Blog with Sidebar</a></li>
      
                  <li><a className="dropdown-item" href="blog-single.html">Blog Single</a></li>
                </ul>
                </li>
               <li className="nav-item">
                 <NavLink exact="true" className="nav-link" to="/contact">Contact</NavLink>
              </li>
            </ul>
            </div>
          </div>
        </nav>
      </header>
       ) ;
}
export default Navbar;