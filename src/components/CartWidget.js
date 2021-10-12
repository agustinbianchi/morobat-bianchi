import { useContext } from "react"
import CartContext from "./CartContext"
import "./style.css"

const CartWidget = () => {

const {carrito, cantidad}  = useContext(CartContext);
console.log(cantidad);
    return (
        <div className={carrito.length === 0 ? "ocultar":"mostrar"}>
            <span className="card-widget_counter">{cantidad}</span> <span className="material-icons cart-widget">shopping_cart</span>
        </div>
    )
}

export default CartWidget