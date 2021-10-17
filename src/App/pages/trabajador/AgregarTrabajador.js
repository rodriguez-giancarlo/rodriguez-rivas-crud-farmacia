import React, { useState } from 'react';
import AddFromTrabajador from '../../Components/trabajador/AddFormTrabajador'
import { crear } from '../../../servicios/api';
import { useHistory } from 'react-router';

const AgregarTrabajador = () => {
    const [trabajador, settrabajador] = useState({
        nombres:'',
        apellidoPaterno:'',
        apellidoMaterno:'',
        tipoDocumento:'',
        numeroDocumento:'',
        celular:'',
        correo:''
    })
    const history = useHistory();
    const handleChange=(event)=>{
        const target=event.target
        const valor=target.value
        const nombre=target.name
        settrabajador({
            ...trabajador,
            [nombre]:valor
        })
    }
    const handleSubmit=async(event)=>{
        event.preventDefault();
        try {
            if (event.currentTarget.checkValidity()) {
                const nuevotrabajador = await crear('/trabajador', trabajador);
                console.log(nuevotrabajador);
                history.push('/trabajador');
            }
        } catch (error) {
            console.log(error.message);
            alert("Error al agregar un trabajador");
        }
        console.log('enviado');
    }
    return (
        <>
            <AddFromTrabajador
                trabajador={trabajador}
                onChange={handleChange}
                onSubmit={handleSubmit}
            />
        </>
    )
}

export default AgregarTrabajador
