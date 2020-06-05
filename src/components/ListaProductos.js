import React, { Component } from 'react';

class ListaProductos extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div>
                <h1>
                    {this.props.titulo}
                </h1>
                <ul>
                     {   
                        this.props.productos.map(producto => <li key={producto.id}>Id: {producto.id} - Nombre: {producto.nombre} - Cantidad: {producto.cantidad}</li>)
                    } 
                </ul>
            </div>
        )
    }

}

export default ListaProductos;