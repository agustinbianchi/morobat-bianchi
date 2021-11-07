import { Link } from "react-router-dom"
import { useState } from "react";

const ItemCount = ({stock, initial, onAdd}) => {

const [contador, setContador] = useState(initial)

const handleSuma = () => {
    if (contador >= stock) {
        return;
    } else {
        setContador(contador+1);
    }
    
}

const handleResta = () => {
    if (contador === 0) {
        return;
    }
    setContador(contador-1);
}

return (
    <div className="item-count">
        <p>Cantidad: {contador}</p>
        <button type="button" className="btn btn-danger me-3 ms-3" onClick={handleResta}>-</button>
        <button type="button" className="btn btn-info me-3 ms-3" onClick={handleSuma}>+</button>
        <Link to="/cart"><button type="button" className="btn btn-success me-3 ms-3 mt-3" onClick={()=>onAdd(contador)}>AÑADIR AL CARRITO</button></Link>
    </div>
)
}
export default ItemCount