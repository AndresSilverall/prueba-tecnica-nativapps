import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const URL = "http://127.0.0.1:8000/api/flights";

function App() {
  const [flights, setFlights] = useState([])

  const getFlights = async () => {
    const response = await fetch(URL);
    const flight = await response.json()
    setFlights(flight);
  } 
  useEffect(() => {
    getFlights();
  },[])

  return (
    <>
      <ul>
        <h3> Vuelos disponibles</h3>
        {flights.map((f) => {
          return <li key={f.id}>{f.destination}</li>;
        })}
      </ul>
    </>
  );
}

export default App;
