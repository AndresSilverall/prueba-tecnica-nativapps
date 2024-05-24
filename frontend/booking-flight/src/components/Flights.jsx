import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { fetchFlights } from '../api/getFlights';
import flightLogo from '../images/flight.jpg'
import '../styles/flights.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPlaneArrival, faHandHoldingDollar, faPlane, faPassport} from '@fortawesome/free-solid-svg-icons';


//Componente para mostrar todos los vuelos disponibles
const GetAllFlights = () => {
  const [flights, setFlights] = useState([])

  // Obtener y establecer los datos del formulario
  const [idFlight, setIdFlight] = useState("")
  const [customer, setCustomer] = useState("")
  const [citizenId, setCitizenId] = useState("")
  const [nationality, setNationality] = useState("")
  const [phone, setPhone] = useState("")
  const [passenger, setPassenger] = useState("")
  const [preference, setPreference] = useState("")
  const [status, setStaus] = useState("")


  // agregar los datos obtenidos del formulario
  const bookingNewFlight = async() => {
    const navigate = useNavigate;
    let formField = new FormData()
    formField.append('flight', idFlight)
    formField.append('customer', customer)
    formField.append('citizenship_card', citizenId)
    formField.append('nationality', nationality)
    formField.append('phone', phone)
    formField.append('passenger', passenger)
    formField.append('preference', preference)
    formField.append('status', status)

    // realizar un request de tipo POST para realizar una reserv
    await axios.post(
      "http://127.0.0.1:8000/api/booking",
      formField, 
      ).then((response) => {
      navigate("/vuelos")
      alert("Vuelo reservado con exito!")
      console.log(response.data)
    })
  }


  // Obtener vuelos disponibles
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
                      <form action='/vuelos'>
                      <div className='form-group mb-3'>
                        <label htmlFor='idFlight'>Ingrese el ID del vuelo</label>
                        <input className='form-control' type="text"  id='idFlight' value={idFlight} onChange={(e) => setIdFlight(e.target.value)} name='idFlight'/>
                      </div>
                      <div className='form-group mb-3'>
                        <label htmlFor='customer'>Nombre del cliente</label>
                        <input className='form-control' type="text"  id='customer' value={customer} onChange={(e) => setCustomer(e.target.value)} name='customer' placeholder='Ingrese su nombre'/>
                      </div>
                      <div className='form-group mb-3'>
                        <label htmlFor='citizenID'>Cédula</label>
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
                        <select className='form-control' name="preference" id="preference" value={preference} onChange={(e) => setPreference(e.target.value)}>
                          <option></option>
                          <option onChange={(e) => setPreference(e.target.value)}>Clase A</option>
                          <option onChange={(e) => setPreference(e.target.value)}>Clase B</option>
                          <option onChange={(e) => setPreference(e.target.value)}>Clase C</option>
                        </select>
            
                      </div>
                      <div className='form-group mb-3'>
                        <label htmlFor="status">Estado</label>
                        <select className='form-control' id="status" value={status} onChange={(e) => setStaus(e.target.value)}>
                          <option value={status}>Activo</option>
                        </select>
                      </div>
                      <button type='submit'  className="btn btn-outline-secondary" onClick={bookingNewFlight}>Reservar</button>
                      </form>
                    </div>
                    <div className="modal-footer">
                      <button type='button' className="btn btn-outline-danger" data-bs-dismiss="modal">Cerrar</button>
                    </div>
                  </div>
                </div>
              </div>
            <div className='card mb-4 py-4 h-90' style={{ "width": '22rem' }}>
              <img className='img-card' src={flightLogo} alt="flight.jpg" />
              <div className='card-body'>
                <h5 className='card-title text-center'>{flight.aeroline}</h5>
                <p className='card-text lead'><FontAwesomeIcon icon={faLocationDot} /> Origen: {flight.origin}</p>
                <p className='card-text lead'><FontAwesomeIcon icon={faPlaneArrival} /> Destino: {flight.destination}</p>
                <p className='card-text lead'><FontAwesomeIcon icon={faPassport} /> ID del vuelo: {flight.id}</p>
                <p className='card-text lead'>{flight.description}</p>
                <p className='card-text lead'><FontAwesomeIcon icon={faHandHoldingDollar} /> Precio: {flight.price}</p>
                  <button className='btn btn-outline-primary' data-bs-toggle="modal"  data-bs-target={`#bookingModal-${flight.id}`}>Reservar vuelo</button> 
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
