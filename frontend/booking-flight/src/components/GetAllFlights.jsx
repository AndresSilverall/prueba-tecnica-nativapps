import { useState, useEffect } from 'react'
import { fetchFlights } from '../api/api_call'
import flight from '../images/flight.jpg'
import '../styles/flights.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPlaneArrival, faHandHoldingDollar } from '@fortawesome/free-solid-svg-icons';

// Componente para mostrar todos los vuelos disponibles
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
      <h3 className='text-center py-5'>Vuelos disponibles</h3>
      <div className='row'>
        {flights.map((f) => (
          <div className='col-md-3 mb-5' key={f.id}>
            <div className='card mb-5' style={{ width: '18rem' }}>
              <img className='img-card' src={flight} alt="flight.jpg" />
              <div className='card-body'>
                <h5 className='card-title'>{f.aeroline}</h5>
                <p className='card-text'><FontAwesomeIcon icon={faLocationDot} /> {f.origin}</p>
                <p className='card-text'><FontAwesomeIcon icon={faPlaneArrival} /> {f.destination}</p>
                <p className='card-text text-justify'>{f.description}</p>
                <p className='card-text'><FontAwesomeIcon icon={faHandHoldingDollar} /> {f.price}</p>
                <button className='btn btn-outline-primary'>Reservar vuelo</button> 
              </div>
            </div>
          </div>     
        ))}
      </div>
    </div>
  );
}


export default GetAllFlights;