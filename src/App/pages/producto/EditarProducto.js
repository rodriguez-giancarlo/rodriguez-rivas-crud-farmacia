import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { buscar, modificar } from '../../../servicios/api';

const EditarProducto = () => {
    const [ producto, setproducto ] = useState({
        nombre: '',
        vigencia: 0,
        idMarca: 0        
    });
    const history = useHistory();

    const handleChange = (event) => {
        const target = event.target;
        const valor = target.value;
        const nombre = target.name;
        setproducto({
            ...producto,
            [nombre]: valor
        });
    }
    return (
        <div>
            
        </div>
    )
}

export default EditarProducto
