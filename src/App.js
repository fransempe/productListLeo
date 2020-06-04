import React, { Component } from 'react';
import './App.css';

import ListaProductos from './components/ListaProductos';
import AltaProductos from './components/AltaProductos';

class App extends Component {

  constructor(props) {
    super(props)
      this.state = [
        { id: 0, nombre: 'Pepsi 1lt', cantidad: 28 },
        { id: 1, nombre: 'CocaCola 2lts', cantidad: 18 },
        { id: 2, nombre: 'Manaos 1 1/2lts', cantidad: 38 },
        { id: 3, nombre: 'Schweppes 1lt', cantidad: 1}
      ] 
    }


   productosEnStock = () => this.state.filter(producto => producto.cantidad > 0)

   productosSinStock = () => this.state.filter(producto => producto.cantidad == 0)
    
   productosAReponerStock = () => this.state.filter(producto => producto.cantidad == 1)

  render(){
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <AltaProductos />
          <ListaProductos titulo="Productos en stock" productos={this.productosEnStock()} />
          <ListaProductos titulo="Productos sin stock" productos={"asd"} />
          <ListaProductos titulo="Productos a reponer" productos={"asd"} />
          {/* <ListaProductos titulo="Productos en oferta" productos={productos} /> */}
        </header>
      </div>
    );
  }
}

export default App;
