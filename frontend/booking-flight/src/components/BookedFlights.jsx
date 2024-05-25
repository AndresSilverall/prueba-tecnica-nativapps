import React from "react";
import axios from 'axios';
import { useState, useEffect } from 'react'
import { fetchBookedFLights } from "../api/getBookedFlights";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faToggleOn, faPlane, faBan } from '@fortawesome/free-solid-svg-icons';
import flightBooked from '../images/booked.jpg';



// Componente de todas las reservas de vuelos realizadas
const GetAllBookedFlights = () => {
	const [booked, setBooked] = useState([]);
	const getBooked = async () => {
		const data = await fetchBookedFLights();
		setBooked(data)
	}


	// Cancelar reserva
	const cancelBooking = async (id) => {
		await axios.delete(`http://127.0.0.1:8000/api/cancel_booking/${id}`) 
	}


	useEffect(() => {
		getBooked();
	},[])

	return (
		<div className="container">
			<h3 className="text-center lead py-5">Lista de vuelos reservados <FontAwesomeIcon icon={faPaperPlane} /></h3>
			<div className='row'>
			{booked.map((booking) =>  (
				<div className='col-md-4 d-flex align-items-stretch'>
				<div key={booking.id} className="card mb-4 py-4 h-90" style={{ width: '22rem' }}>
				<div key={booking.id} className="modal fade" id={`cancelFlight-${booking.id}`} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
						<div className="modal-dialog" role="document">
							<div className="modal-content">
								<div className="modal-header">
									<h5 className="modal-title" id={`cancelFlight-${booking.id}`}>Cancelar reserva <FontAwesomeIcon icon={faBan} /></h5>
									<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
									</button>
								</div>
								<div className="modal-body">
										<h3>¿Seguro que deseas cancelar esta reserva de vuelo de ID {booking.id}?</h3>
								</div>
								<div className="modal-footer">
									<button type="button" className="btn btn-outline-danger" onClick={() => {cancelBooking(booking.id)}}>Si</button>
									<button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">No</button>
								</div>
							</div>
						</div>
					</div>
					<div key={booking.id} className="modal fade" id={`bookedFlight-${booking.id}`} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
						<div className="modal-dialog" role="document">
							<div className="modal-content">
								<div className="modal-header">
									<h5 className="modal-title" id="exampleModalLabel">Detalles de la reserva <FontAwesomeIcon icon={faPlane} /></h5>
									<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
										<span aria-bs-hidden="true">&times;</span>
									</button>
								</div>
								<div className="modal-body">
									<p className="lead">Detalles adicionales del vuelo.</p>
									<p className="lead">Cliente: {booking.customer} </p>
									<p className="lead">ID de la reserva: {booking.id} </p>
									<p className="lead">Asiento asignado: {booking.preference} </p>
									<p className="lead">Fecha de la reserva:  {booking.created_at}.</p>
								</div>
								<div className="modal-footer">
									<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
								</div>
							</div>
						</div>
					</div>
					<img className="img-card" src={flightBooked} alt="booked" />
					<div className="card-body">
						<h5 className="card-title text-center"><FontAwesomeIcon icon={faPlane} /> {booking.flight}</h5>
						<p className="card-text lead text-center"><FontAwesomeIcon icon={faToggleOn} /> Estado: {booking.status}</p>
						<div className="text-center d-flex btn-group">
							<button className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target={`#bookedFlight-${booking.id}`}>Ver más detalles</button>
							<button className="btn btn-outline-danger" data-bs-toggle="modal" data-bs-target={`#cancelFlight-${booking.id}`}>Cancelar reserva</button>
					</div>
					</div>
				</div>
				</div>
			))}
			</div>
		</div>
	);
};


export default GetAllBookedFlights;