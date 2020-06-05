import React from 'react'

class AltaProductos extends React.Component {
    constructor( props ) {
        super( props );
    }
        
    handleSubmit = (e) => {
        let nombre = e.target.nombre.value 
        let cantidad = e.target.cantidad.value 
        this.props.datos(nombre, cantidad)
        event.preventDefault()
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>
                        Nombre:
                        <input type="text" name="nombre" />
                    </label>
                </div>
                <div>
                    <label>
                        Cantidad:
                        <input type="text" name="cantidad" />
                    </label>
                </div>
                <input className="btn btn-primary p-4 m-2" type="submit" value="Agregar Producto" />
            </form>

        )
    }
}

export default AltaProductos;