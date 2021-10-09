import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomeClientes from './pages/home/HomeClientes';
import Header from './components/header/Header';
import AddCliente from './pages/addCliente/AddCliente';
import UpdateCliente from './pages/updateCliente/UpdateCliente';
import VisualizarCliente from './pages/visualizar/VisualizarCliente';

function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={HomeClientes}></Route>
            <Route path="/addClientes/:id" component={AddCliente}></Route>
            <Route path="/updateCliente/:id" component={UpdateCliente}></Route>
            <Route
              path="/visualizarCliente/:id"
              component={VisualizarCliente}
            ></Route>
          </Switch>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
