import React from 'react'
import ReactDOM from 'react-dom/client'
import GetAllFlights from './components/GetAllFlights'
import NavBar from './components/NavBar'
import FooterComponent from './components/Footer'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar />
    <GetAllFlights />
    <FooterComponent />
  </React.StrictMode>,
)
