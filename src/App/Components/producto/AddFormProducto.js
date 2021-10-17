import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';

const AddFormProducto = ({    
    producto,
    setmarcaSeleccionada,
    marcaSeleccionada,
    listarMarca,
    onChange,
    onSelectedTypeahead,
    onChangeInputTypeahead,
    onChangeTypeahead,
    onSubmit
}) => {

    return (
        <div>
            <h3>Agregar Producto</h3>
            {/* <Form onSubmit={onSubmit}>
                <Row className="mt-3">
                    <Col>
                        <Form.Group>
                            <Form.Label>Nombre:</Form.Label>
                            <Form.Control
                                size="sm"
                                type="text"
                                name="nombre"
                                placeholder="Ingrese nombre"
                                value={producto.nombre}
                                onChange={onChange}
                                required
                            />
                        </Form.Group>
                    </Col>                    

                </Row>
                <Row className="mt-3">
                    <Col>
                        <Form.Group>
                            <Form.Label>Marca:</Form.Label>
                            <Typeahead
                                size="sm"
                                id="basic-typeahead-single"
                                placeholder="Elige una marca"
                                options={listarMarca}
                                labelKey={opcion => String(opcion.nombre)}
                                selected={onSelectedTypeahead('idMarca', producto.idMarca)}
                                onInputChange={(valorNuevo) =>
                                    onChangeInputTypeahead('idMarca', valorNuevo)}
                                onChange={(valorNuevo) => valorNuevo.length > 0 &&
                                    onChangeTypeahead('idMarca', valorNuevo[0].id)}
                                inputProps = {{ required: true }}
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col>
                        <Button className="btn btn-primary" type="submit" style={{ marginRight: "10px" }}>
                            Registrar
                        </Button>
                        <Link to="/producto" className="btn btn-danger">
                            Cancelar
                        </Link>
                    </Col>
                </Row>
            </Form> */}
        </div>
    );
}

export default AddFormProducto;