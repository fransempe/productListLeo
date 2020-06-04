import React, { Component } from 'react';

class ListaProductos extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div>

                <h4>
                    {this.props.titulo}
                </h4>
                <ul>
                     {   
                        //console.log(this.props.productos)
                     this.props.productos.map(producto => <li>{producto.nombre}</li>)
                        
                    } 
                </ul>

            </div>
        )
    }

}

export default ListaProductos;