// Llamada a la API para devolver los vuelos reservados
export const fetchBookedFLights = async () => {
    try {
				const URL = "http://127.0.0.1:8000/api/show_bookings";
        let response = await fetch(URL);
				if (!response.ok) {
					throw new Error({"error": response.status})
				}
        let bookedFlights = await response.json();
        return bookedFlights; 

    } catch (error) {
        console.log({"error": error.message})
    }
};