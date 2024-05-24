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

  // Obtener y establecer los datos del formulario
  const [idFlight, setIdFlight] = useState("")
  const [citizenId, setCitizenId] = useState("")
  const [nationality, setNationality] = useState("")
  const [phone, setPhone] = useState("")
  const [passenger, setPassenger] = useState("")
  const [preference, setPreference] = useState("")
  const [status, setStaus] = useState("")

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
                <div className="modal-dialog modal-dialog-scrollable">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="bookingModal">Reservar vuelo <FontAwesomeIcon icon={faPlane} /></h5>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                      <div className='form-group mb-3'>
                        <label htmlFor="aeroline">ID del vuelo</label>
                        <input className='form-control' type="text"  id='aeroline' value={flight.id} readOnly onChange={(e) => setIdFlight(e.target.value)} name='fightId'/>
                      </div>
                      <div className='form-group mb-3'>
                        <label htmlFor="citizenID">Cédula</label>
                        <input className='form-control' type="text"  id='citizenID' value={citizenId} onChange={(e) => setCitizenId(e.target.value)} name='citizenID' placeholder='Ingrese su cédula'/>
                      </div>
                      <div className='form-group mb-3'>
                        <label htmlFor="nationality">Nacionalidad</label>
                        <input className='form-control' type="text"  id='nationality' value={nationality} onChange={(e) => setNationality(e.target.value)} name='nationality' placeholder='Ingrese su nacionalidad'/>
                      </div>
                      <div className='form-group mb-3'>
                        <label htmlFor="phone">Teléfono</label>
                        <input className='form-control' type="text"  id='phone' value={phone} onChange={(e) => setPhone(e.target.value)} name='phone' placeholder='Ingrese su teléfono'/>
                      </div>
                      <div className='form-group mb-3'>
                        <label htmlFor="passengers"># de pasajeros</label>
                        <input className='form-control' type="text"  id='passengers' value={passenger} onChange={(e) => setPassenger(e.target.value)} name='passengers' placeholder='Ingrese el numero de pasajeros a viajar'/>
                      </div>
                      <div className='form-group mb-3'>
                        <label htmlFor="preference">Asiento de preferencia</label>
                        <input className='form-control' type="text"  id='preference' value={preference} onChange={(e) => setPreference(e.target.value)} name='preference' placeholder='Ingrese su asiento de preferencia'/>
                      </div>
                      <div className='form-group mb-3'>
                        <label htmlFor="status">Estado</label>
                        <input className='form-control' type="text"  id='status' value={status} onChange={(e) => setStaus(e.target.value)} name='status' placeholder='Activo'/>
                      </div>
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
