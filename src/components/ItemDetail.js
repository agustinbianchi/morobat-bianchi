import { useContext } from "react";
import CartContext from "./CartContext";
import ItemCount from "./ItemCount";

const ItemDetail = ({producto}) => {

    const {addItem} = useContext (CartContext)
    
    const onAdd = (contador) => {
        addItem(producto, contador);
    }

    return (
        <div className="card mt-5 ms-5" style={{ width: "300px" }}>     
                <div className="card-body">
                    <h5 className="card-title">{producto.categoria} {producto.marca} {producto.tamanio}</h5>
                    <p className="card-text">{producto.detalle}</p>
                    <ItemCount stock={producto.cantidad} initial={0} onAdd={onAdd}/>
                </div>
        </div>
    )
}

export default ItemDetail