import React, { Component } from 'react';
import './App.css';

import ListaProductos from './components/ListaProductos';
import AltaProductos from './components/AltaProductos';

class App extends Component {

    state = { 
          productos: []
        }
              
  render(){
    const alAgregar = (nombre, cantidad) => {
       const nuevoProducto = {
         id: this.state.productos.length,
         nombre: nombre,
         cantidad: parseInt(cantidad)
       }
      this.setState({
        productos: [ ...this.state.productos, nuevoProducto],
      });
    }

    const productosEnStock = () =>  this.state.productos.filter(producto => producto.cantidad > 0)
    const productosSinStock = () => this.state.productos.filter(producto => producto.cantidad == 0)
    const productosAReponerStock = () => this.state.productos.filter(producto => producto.cantidad == 1)

    const onDelete = (id) => {
        const nuevosProductos = this.state.productos.filter(producto => producto.id !== id)
        this.setState({productos: nuevosProductos})
      }

    return (
      <div className="App">
        <header className="App-header">
          <AltaProductos datos={alAgregar} />
          <ListaProductos titulo="Productos en Stock" productos={productosEnStock()} deleteproduct={onDelete}/>
          <ListaProductos titulo="Productos sin Stock" productos={productosSinStock()} deleteproduct={onDelete}/>
          <ListaProductos titulo="Productos a Reponer" productos={productosAReponerStock()} deleteproduct={onDelete}/>
        </header>
      </div>
    );
  }
}


export default App;
