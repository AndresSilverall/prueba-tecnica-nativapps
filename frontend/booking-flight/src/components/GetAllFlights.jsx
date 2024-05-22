import { useState, useEffect } from 'react'


const GetAllFlights = () => {
  const [flights, setFlights] = useState([])

  
    const getFlights = async () => {
      // URL con los endpoints de la API
      const URL = "http://127.0.0.1:8000/api/show_bookings";
      const response = await fetch(URL);
      const flight = await response.json()
      setFlights(flight)

      } 
  
  
  useEffect(() => {
    getFlights();
  },[])

  return (
    <>
      <ul>
        <h3 className='text-center py-5'> Vuelos disponibles</h3>
        {flights.map((f) => {
          return <li key={f.id}>{f.flight}, {f.phone}</li>;
        })}
      </ul>
    </>
  );
}

export default GetAllFlights;
