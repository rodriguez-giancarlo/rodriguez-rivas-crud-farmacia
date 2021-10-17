import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { crear } from '../../../servicios/api';
import useFetch from '../../hooks/useFetch';
import AddFormProducto from '../../Components/producto/AddFormProducto';

const AgregarProducto = () => {
    const [ producto, setproducto ] = useState({
        nombre: '',
        vigencia: '',
        idMarca: 0        
    });
    const [ marcaSeleccionada , setmarcaSeleccionada ] = useState({});
    const listarMarca = useFetch('/marca');
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

    const handleChangeTypeahead = (nombre, valor) => {
        setproducto({
            ...producto,
            [nombre]: valor
        });
    }

    return (
        <>  
            <AddFormProducto
            />
        </>
    );
}

export default AgregarProducto;