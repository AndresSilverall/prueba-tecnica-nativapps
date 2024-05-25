import React from "react";
import FooterComponent from "../components/Footer";
import Carousel from "../components/Carousel";
import Services from "../components/services";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlaneDeparture } from '@fortawesome/free-solid-svg-icons';


// Componte Home con el carousel
const Home = () => {
    return (
				<div>
					<h3 className="text-center py-5 lead"> Fights INC Company <FontAwesomeIcon icon={faPlaneDeparture} /></h3>
					  <div className="container mb-5">
						<Carousel/>
						<Services/>
        		</div>
						<FooterComponent/>
				</div>		 
    );
};

export default Home;