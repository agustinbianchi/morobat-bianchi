import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";

const Item = ({producto}) => {
    return (
        <>
            <div className="card mt-5 ms-5" style={{ width: "300px" }}>
                <img src={producto.imagen} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{producto.categoria} {producto.marca} {producto.tamanio}</h5>
                    <p className="card-text">${producto.precio}</p>
                     <Link to={`/item/${producto.id}`} class="btn btn-info">Ver detalle</Link>
                    <ItemCount stock={producto.cantidad} initial={0} onAdd={() => { } } />
                </div>
            </div>
        </>
    )
}

export default Item