import React from 'react'
import ReactDOM from 'react-dom/client'
import GetAllFlights from './components/GetAllFlights'
import NavBar from './components/NavBar'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar />
    <GetAllFlights />
  </React.StrictMode>,
)
