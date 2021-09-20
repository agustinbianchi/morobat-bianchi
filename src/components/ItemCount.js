import { useState } from "react";

const ItemCount = ({stock, initial,}) => {


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

const onAdd = () => {
    console.log("confirmaste compra");
} 

return (
    <>
    <div className="item-count">
        <p>Cantidad: {contador}</p>
        <button type="button" class="btn btn-danger me-3 ms-3" onClick={handleResta}>-</button>
        <button type="button" class="btn btn-info me-3 ms-3" onClick={handleSuma}>+</button>
        <button type="button" class="btn btn-success me-3 ms-3 mt-3" onClick={onAdd}>AÑADIR AL CARRITO</button>
    </div>
    </>
    
)
}
export default ItemCount