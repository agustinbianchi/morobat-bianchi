import { Link } from "react-router-dom";

const Item = ({producto}) => {
    return (
        <>
            <div className="card mt-5 ms-5" style={{ width: "300px" }}>
                <img src={producto.imagen} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{producto.categoria} {producto.marca} {producto.tamanio}</h5>
                    <p className="card-text">${producto.precio}</p>
                    <Link to={`/item/${producto.id}`} className="btn btn-info">Ver detalle</Link>
                </div>
            </div>
        </>
    )
}

export default Item