import React from 'react';

const Producto = ({producto, productos, carrito, agregarProducto}) => {

    const { nombre, precio, id } = producto;
    //Agregar producto al carrito según el id cliqueado.
    const seleccionarProducto = id => {
        const producto = productos.filter(producto => producto.id === id)[0];
        //Usando el spread operation, guardo una copia del state anterior, sino se pierde el valor anterior
        //con el valor nuevo.
        agregarProducto([
            ...carrito,
            producto
        ]);
    }

    //Elimina un producto del carrito
    const eliminarProducto = id => {
        //".filter" ya te crea un arreglo nuevo, por lo cual no estas modificando el state
        //directamente, entonce es valido agregar los productos directamente
        //sin utilizar spread operator como en seleccionarProducto
        const productos = carrito.filter(producto => producto.id !== id);
        //colocar los productos en el state
        agregarProducto(productos);
    }

    return ( 
        <div>
            <h2>{nombre}</h2>
            <p>${precio}</p>
            {productos
            ?
                (
                    <button 
                    type="button"
                    onClick={() => seleccionarProducto(id)}
                    >
                        Comprar
                    </button>
                )
            :
                (
                    <button 
                    type="button"
                    onClick={() => eliminarProducto(id)}
                    >
                        Eliminar
                    </button>
                )
            }
        </div>
    );
}
 
export default Producto;