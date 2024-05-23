import React from "react";
import { useState, useEffect } from 'react'
import { fetchBookedFLights } from "../api/getBookedFlights";


// Componente de todas las reservas de vuelos realizadas
const GetAllBookedFlights = () => {
	const [booked, setBooked] = useState([]);
	const getBooked = async () => {
		const data = await fetchBookedFLights();
		setBooked(data)
	}

	useEffect(() => {
		getBooked();
	},[])

	return (
		<div>
			<h3 className="text-center lead py-5">Vuelos reservados</h3>
			{booked.map((b) => (
				<ul key={b.id}>
					<li>{b.flight}</li>
					<li>{b.citizenship_card}</li>
					<li>{b.nationality}</li>
					<li>{b.phone}</li>
					<li>{b.passenger}</li>
					<li>{b.preference}</li>
					<li>{b.status}</li>
					<li>{b.created_at}</li>
				</ul>
			))}
		</div>
	);
}


export default GetAllBookedFlights;