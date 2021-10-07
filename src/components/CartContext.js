import { createContext, useState } from "react";

const CartContext = createContext()

const {Provider} = CartContext

export const ProviderCustomizado = ({children}) => {

    const [carrito, setCarrito] = useState([])

    const addItem = (producto, contador, id)=> {
        const productoConCantidad = {...producto, contador};
        const itemInCart= carrito.find(producto => producto.id === id)
        if(!itemInCart){
            setCarrito([...carrito, productoConCantidad])
        } else {
            const newCarrito = [...carrito]
            newCarrito[carrito.indexOf(itemInCart)].contador = itemInCart.contador + contador
            setCarrito(newCarrito)
        }
    }

    const removeItem = (id) => {
        const itemInCart = carrito.find(item => item.id === id)
        let newCarrito = [...carrito]
        newCarrito.splice(carrito.indexOf(itemInCart), 1)
        setCarrito(newCarrito)
}

    const clear = () => {
        setCarrito([]);
    }

    const valorDelContexto = {
        carrito : carrito,
        addItem : addItem,
        removeItem : removeItem,
        clear : clear,

        setCarrito : setCarrito
    }

    return (
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
    )
}

export default CartContext