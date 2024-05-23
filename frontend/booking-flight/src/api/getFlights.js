// Llamada a la API para obtener todos los vuelos disponibles
export const fetchFlights = async () => {
    try {
        // URL con los endpoints de la API
        const URL = "http://127.0.0.1:8000/api/flights";
        let response = await fetch(URL);

        if (!response.ok) {
            throw new Error({"error": response.status})
        }
        let flight = await response.json()
        return flight;
        
    } catch (error) {
        console.log({"error": error.message})
    }
};