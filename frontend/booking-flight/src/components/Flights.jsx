import { useState, useEffect } from 'react'
import { fetchFlights } from '../api/getFlights';
import flightLogo from '../images/flight.jpg'
import '../styles/flights.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
        faLocationDot, 
        faPlaneArrival, 
        faHandHoldingDollar,
        faPlane
      } from '@fortawesome/free-solid-svg-icons';


//Componente para mostrar todos los vuelos disponibles
const GetAllFlights = () => {
  const [flights, setFlights] = useState([])

  const getFlights = async () => {
    const data = await fetchFlights();
    setFlights(data)

  }
  
  useEffect(() => {
    getFlights();
  },[])

  return (
    <div className='container'>
      <h3 className='text-center py-5 lead'>Vuelos disponibles <FontAwesomeIcon icon={faPlane} /></h3>
      <div className='row'>
        {flights.map((flight) => (
          <div className='col-md-4 d-flex align-items-stretch' key={flight.id}>
            <div key={flight.id} className="modal fade" id={`bookingModal-${flight.id}`} tabIndex="-1" aria-labelledby="bookingModal" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="bookingModal">Reservar vuelo <FontAwesomeIcon icon={faPlane} /></h5>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                      <h3>ID del vuelo: {flight.id}</h3>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-outline-danger" data-bs-dismiss="modal">Cerrar</button>
                      <button type="button" className="btn btn-outline-secondary">Reservar</button>
                    </div>
                  </div>
                </div>
              </div>
            <div className='card mb-4 py-4 h-90' style={{ "width": '22rem' }}>
              <img className='img-card' src={flightLogo} alt="flight.jpg" />
              <div className='card-body'>
                <h5 className='card-title text-center'>{flight.aeroline}</h5>
                <p className='card-text lead'><FontAwesomeIcon icon={faLocationDot} /> {flight.origin}</p>
                <p className='card-text lead'><FontAwesomeIcon icon={faPlaneArrival} /> {flight.destination}</p>
                <p className='card-text lead'>{flight.description}</p>
                <p className='card-text lead'><FontAwesomeIcon icon={faHandHoldingDollar} /> {flight.price}</p>
                  <button className='btn btn-outline-primary text-center' data-bs-toggle="modal"  data-bs-target={`#bookingModal-${flight.id}`}>Reservar vuelo</button> 
              </div>
            </div>
            <br />
          </div>     
        ))}
      </div>
    </div>
  );
}


export default GetAllFlights;
