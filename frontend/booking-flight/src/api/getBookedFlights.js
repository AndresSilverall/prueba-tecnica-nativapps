// Llamada a la API para devolver los vuelos reservados
export const fetchBookedFLights = async () => {
	const URL = "http://127.0.0.1:8000/api/show_bookings";
	let response = await fetch(URL);
	let bookedFlights = await response.json();
	return bookedFlights; 
}