import EditFormMarca from '../../Components/marca/EditFormMarca'
import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { buscar, modificar } from '../../../servicios/api';

const EditarMarca = () => {
    const [marca, setmarca] = useState({
        nombre: '',
        vigencia:0
    });
    const { id } = useParams();
    const history = useHistory();
    useEffect(() => {
        const fetchmarca = async () => {
            try {
                const datos = await buscar('/marca', id);
                setmarca({
                    nombre: datos.nombre,
                    vigencia: datos.vigencia
                });
            } catch (error) {
                console.log(error.message);
                alert("Error al traer los datos");
            }
        }
        fetchmarca();
    }, [id])

    const handleChange = (event) => {
        const target = event.target;
        const valor = target.value;
        const nombre = target.name;
        setmarca({
            ...marca,
            [nombre]: valor
        });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            if (event.currentTarget.checkValidity()) {
                const marcaModificada = await modificar('/marca', id, marca);
                console.log(marcaModificada);
                history.push('/marca');
            }           
        } catch (error) {
            console.log(error.message);
            alert("Error al modificar");
            console.log(marca);

        }
    }
    return (
        <EditFormMarca  
        marca={marca}
        onChange={handleChange}
        onSubmit={handleSubmit}
        />
    )
}

export default EditarMarca
