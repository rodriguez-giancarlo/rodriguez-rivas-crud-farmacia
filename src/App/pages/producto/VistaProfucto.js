import React from 'react'
import TablaProducto from '../../Components/producto/TablaProducto'
import useFetch from '../../hooks/useFetch';

const VistaProducto = () => {
    const { datos: listaProducto } = useFetch('/producto');

    return (
        <TablaProducto
            listaProducto={listaProducto}
        />
    )
}

export default VistaProducto
