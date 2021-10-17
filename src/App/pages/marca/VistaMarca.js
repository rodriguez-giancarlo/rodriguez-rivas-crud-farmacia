import React from 'react'
import TablaMarca from '../../Components/marca/TablaMarca'
import useFetch from '../../hooks/useFetch';


const VistaMarca = () => {
    const { datos: listarMarca} = useFetch('/marca');

    return (
        <TablaMarca
            listarMarca={listarMarca}
        />
    );
}

export default VistaMarca
