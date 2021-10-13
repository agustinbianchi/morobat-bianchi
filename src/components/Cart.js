import { useContext } from "react"
import { Link } from "react-router-dom";
import CartContext from "./CartContext"

const Cart = () => {

const {carrito, removeItem, clear} = useContext(CartContext);

const listaDeTotal = []

if (carrito.length > 0){
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
            <button>Terminar compra</button>
        </div>)}

else{
    return (
        <div>
            <p>Su carrito esta vacio.</p>
            <Link to="/">Volver a la tienda</Link>
        </div>)}
}

export default Cart