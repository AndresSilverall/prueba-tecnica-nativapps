import React from "react";
import '../styles/navbar.css'
import logo from '../images/logo.png'


const NavBar = () => {
    return (
			<nav className="navbar navbar-expand-lg text-white">
  			<div className="container-fluid">
    			<a className="navbar-brand" href="#"><img src={logo} alt="logo.png" style={{"width": "45px", "height": "40px"}}/>  Flights INC</a>
   				 <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      			<span className="navbar-toggler-icon"></span>
   					 </button>
   						 <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
      				<ul className="navbar-nav">
        				<li className="nav-item justify-end">
          				<a className="nav-link" aria-current="page" href="#">Home</a>
        					</li>
									<li className="nav-item">
          					<	a className="nav-link" href="#">Vuelos disponibles</a>
        					</li>
        				<li className="nav-item">
          				<a className="nav-link" href="#">Vuelos reservados</a>
        				</li>
      				</ul>
    			</div>
  			</div>
			</nav>
    );
}


export default NavBar;