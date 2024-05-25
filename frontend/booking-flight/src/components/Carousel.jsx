import React from "react";
import carouselOne from "../images/carouselOne.jpg";
import carouselTwo from "../images/carouselTwo.jpg";
import { Link } from "react-router-dom";


const Carousel = () => {
	return (
				<div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
					<div className="carousel-inner">
						<div className="carousel-item active">
							<img className="d-block w-100" src={carouselOne} alt="First slide"/>
							<div className="carousel-caption d-none d-md-block">
    					<h5>Solicite los viajes de su agrado, brindamos servicios de calidad.</h5>
							</div>
						</div>
						<div className="carousel-item">
						<img className="d-block w-100" src={carouselTwo} alt="Second slide"/>
						<div className="carousel-caption d-none d-md-block">
    					<Link className="btn btn-success" to="/vuelos">Click aqui para ver los viajes disponibles.</Link>
							</div>
						</div>
					</div>
					<a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-bs-slide="prev">
						<span className="carousel-control-prev-icon" aria-hidden="true"></span>
						<span className="sr-only">Previous</span>
					</a>
					<a className="carousel-control-next" href="#carouselExampleControls" role="button" data-bs-slide="next">
						<span className="carousel-control-next-icon" aria-hidden="true"></span>
						<span className="sr-only">Next</span>
					</a>
		</div>
	);
};


export default Carousel;