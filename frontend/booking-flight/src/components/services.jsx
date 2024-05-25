import React from "react";
import searchFlight from "../images/search.png";
import bookedFlight from "../images/bookedFlight.png";
import cancelFlight from "../images/cancelFlight.avif";

const Services = () => {
    return (
        <div className="container py-4" id="services">
            <h3 className="lead text-center py-3">Servicios</h3>
            <div className="row">
                <div className="col-sm-6 py-3">
                    <div className="card mb-3" style={{ "max-width": "540px"}}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={bookedFlight} className="img-fluid rounded-start" alt="booked.png" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-header lead">
                                    Reserva de vuelos
                                </div>
                                <div className="card-body">
                                    <p className="card-text">
																		Nuestro sistema de reserva de vuelos facilita la planificación y compra de boletos de avión de manera eficiente y segura. Ofrecemos una plataforma intuitiva donde los usuarios pueden buscar vuelos, comparar precios y seleccionar las mejores opciones según sus necesidades.                                     </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 py-3">
                    <div className="card mb-3" style={{ "max-width": "540px"}}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={searchFlight} className="img-fluid rounded-start" alt="search.png" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-header lead">
                                    Busqueda de vuelos
                                </div>
                                <div className="card-body">
                                    <p className="card-text">
																		Nuestro sistema de búsqueda de vuelos ofrece una solución rápida y eficiente para encontrar las mejores opciones de viaje aéreo. Con una interfaz intuitiva, los usuarios pueden ingresar sus destinos y fechas de viaje para obtener resultados instantáneos de diversas aerolíneas.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 py-3">
                    <div className="card mb-3" style={{ "max-width": "540px"}}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={cancelFlight} className="img-fluid rounded-start" alt="cancel.avif" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-header lead">
                                    Cancelar reservas
                                </div>
                                <div className="card-body">
                                    <p className="card-text">
																			Nuestro sistema de cancelación de reservas de vuelos proporciona una forma fácil y rápida de gestionar cambios inesperados en tus planes de viaje. Los usuarios pueden acceder a su historial de reservas y cancelar sus vuelos con solo unos clics. 
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;
