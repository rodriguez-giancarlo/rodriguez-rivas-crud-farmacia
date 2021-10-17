import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import EditFormTrabajador from '../../Components/trabajador/EditFormTrabajador'
import { buscar, modificar } from '../../../servicios/api';


const EditarTrabajador = () => {
    const [trabajador, settrabajador] = useState({
        nombres:'',
        apellidoPaterno:'',
        apellidoMaterno:'',
        tipoDocumento:'',
        numeroDocumento:'',
        celular:'',
        correo:''
    })
    const { id } = useParams();
    const history = useHistory();

    useEffect(() => {
        const fetchTrabajador = async () => {
            try {
                const datos = await buscar('/trabajador', id);
                settrabajador({
                    nombres:datos.nombres,
                    apellidoPaterno:datos.apellidoPaterno,
                    apellidoMaterno:datos.apellidoMaterno,
                    tipoDocumento:datos.tipoDocumento,
                    numeroDocumento:datos.numeroDocumento,
                    celular:datos.celular,
                    correo:datos.correo
                });
            } catch (error) {
                console.log(error.message);
                alert("Error al traer los datos");
            }
        }
        fetchTrabajador();
    }, [id])

    const handleChange = (event) => {
        const target = event.target;
        const valor = target.value;
        const nombre = target.name;
        settrabajador({
            ...trabajador,
            [nombre]: valor
        });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            if (event.currentTarget.checkValidity()) {
                const trabajadorModificado = await modificar('/trabajador', id, trabajador);
                console.log(trabajadorModificado);
                history.push('/trabajador');
            }           
        } catch (error) {
            console.log(error.message);
            alert("Error al modificar");
        }
    }
    return (
        <EditFormTrabajador
            trabajador={trabajador}
            onChange={handleChange}
            onSubmit={handleSubmit}
        />
    )
}

export default EditarTrabajador
