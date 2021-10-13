import { useContext, useState, useEffect } from "react"
import CartContext from "./CartContext"
import "./style.css"

const CartWidget = () => {

const {carrito, getCantidad}  = useContext(CartContext);

const [totalProductos, setTotalProductos] = useState(0)
    
    useEffect(() => {
            let total = 0
            carrito.map( producto => total = total + producto.contador)
            setTotalProductos(total)
        }, [carrito])

    return(
        <>
            {totalProductos > 0 && 
                <div><span className="card-widget_counter">{getCantidad()}{totalProductos}</span> <span className="material-icons cart-widget">shopping_cart</span></div>
            }
        </>
    )
}

export default CartWidget