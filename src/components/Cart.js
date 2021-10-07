import { useContext } from "react"
import CartContext from "./CartContext"

const Cart = () => {

const {carrito, removeItem, clear} = useContext(CartContext);


const listaDeTotal = []

console.log(carrito);
    return (
        <div>
            <h1>Tu carrito:</h1>
            <ul>
                {carrito.map((producto) => {
                    const total = producto.contador * producto.precio;
                    listaDeTotal.push(total);
                    return (
                        <li key={producto.id} > {producto.contador} {producto.categoria} {producto.marca} {producto.tamanio} ${producto.precio} SUBTOTAL: ${total} <button onClick={removeItem}>X</button></li>) 
                })}
            </ul>
            <h3>TOTAL: ${listaDeTotal.reduce((prev, next) => prev + next,0)} </h3>
            <button onClick={clear}>Vaciar Carrito</button>
        </div>
    )
}

export default Cart