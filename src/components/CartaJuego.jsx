
import React, { useState } from 'react';

function CartaJuego({ titulo, categoria, anio, destacado }) {
    const [vistaActual, setVistaActual] = useState("normal");


    return (
        <div className="card">
            <h3>{titulo}</h3>
            <p>Categoria: {categoria}</p>
            <p>Año de lanzamiento: {anio}</p>
            <p>Juego destacado: {destacado}</p>
        </div>
    );
}

export default CartaJuego;

//imports

//component

//export