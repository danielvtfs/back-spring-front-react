import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomeClientes from './pages/home/HomeClientes';
import Header from './components/header/Header';
import AddCliente from './pages/addCliente/AddCliente';
import UpdateCliente from './pages/updateCliente/UpdateCliente';

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
          </Switch>
        </BrowserRouter>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
