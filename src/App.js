import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import BarraNavegacion from './App/comunes/barraNavegacion/BarraNavegacion';
//marca
import VistaMarca from './App/pages/marca/VistaMarca';
import AgregarMarca from './App/pages/marca/AgregarMarca';
import EditarMarca from './App/pages/marca/EditarMarca';
//producto
import VistaProducto from './App/pages/producto/VistaProfucto';
import AgregarProducto from './App/pages/producto/AgregarProducto';
// trabajador
import VistaTrabajador from "./App/pages/trabajador/VistaTrabajador";
import AgregarTrabajador from "./App/pages/trabajador/AgregarTrabajador";
import EditarTrabajador from "./App/pages/trabajador/EditarTrabajador";
function App() {
  return (
    <BrowserRouter>
    <BarraNavegacion />
    <div className="container mt-4">
        <Switch>
            {/* marca */}
            <Route path="/marca" exact><VistaMarca/></Route>
            <Route path="/agregarmarca" exact><AgregarMarca/></Route>
            <Route path="/editarmarca/:id" exact><EditarMarca/></Route>
            {/* producto */}
            <Route path="/producto" exact><VistaProducto/></Route>
            <Route path="/agregarproducto" exact><AgregarProducto/></Route>
            {/* Trabajador */}
            <Route path="/trabajador" exact><VistaTrabajador/></Route>
            <Route path="/agregartrabajador" exact><AgregarTrabajador/></Route>
            <Route path="/editarTrabajador/:id" exact><EditarTrabajador/></Route>


            <Redirect to="/inicio"></Redirect>
        </Switch>
    </div>
</BrowserRouter>
  );
}

export default App;
