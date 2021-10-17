import React from 'react';
import { NavLink } from 'react-router-dom';
import './BarraNavegacion.css';

const BarraNavegacion = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <NavLink to="/home" className="container-title">Framacia</NavLink>                   
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav" >
                            <NavLink to="/marca" className="opt-barra">
                                Marca
                            </NavLink>
                            <NavLink to="/producto" className="opt-barra">
                                Porducto
                            </NavLink>
                            <NavLink to="/trabajador" className="opt-barra">
                                Trabajador
                            </NavLink>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default BarraNavegacion;