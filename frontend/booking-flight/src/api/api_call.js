// Llamada a la API para obtener todos los vuelos disponibles
export const fetchFlights = async () => {
    // URL con los endpoints de la API
    const URL = "http://127.0.0.1:8000/api/flights";
    const response = await fetch(URL);
    const flight = await response.json()
    return flight;

    } 
