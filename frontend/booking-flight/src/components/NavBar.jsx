import React from "react";
import '../styles/navbar.css'
import logo from '../images/logo.png'
import { Link } from "react-router-dom";


const NavBar = () => {
    return (
			<nav className="navbar navbar-expand-lg text-white">
  			<div className="container-fluid">
					<Link className="navbar-brand" to="/"><img src={logo} alt="logo.png" style={{"width": "45px", "height": "40px"}}/> Flights INC</Link>
   				 <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      			<span className="navbar-toggler-icon"></span>
   					 </button>
   						 <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
      				<ul className="navbar-nav">
        				<li className="nav-item justify-end">
									<Link className="nav-link" to="/"> Home </Link>
        					</li>
									<li className="nav-item">
									<Link className="nav-link" to="/vuelos"> Vuelos disponibles </Link>
        					</li>
        				<li className="nav-item">
								<Link className="nav-link" to="/reservas"> Vuelos reservados </Link>
        				</li>
      				</ul>
    			</div>
  			</div>
			</nav>
    );
}


export default NavBar;