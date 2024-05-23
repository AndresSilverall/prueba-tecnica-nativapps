import React from 'react'
import { Route,Routes } from 'react-router-dom';
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import Home from './pages/home';
import BookedFlights from './pages/bookedFlights'; 
import GetAllFlights  from './components/GetAllFlights'
import NavBar from './components/NavBar';


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <NavBar />
    <Routes>        
      <Route path="/home"  element={<Home/>} />
      <Route path="/vuelos"  element={<GetAllFlights/>} />
      <Route path="/reservas"  element={<BookedFlights/>} />
    </Routes>
  </BrowserRouter>,
)
