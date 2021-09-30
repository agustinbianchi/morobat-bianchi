const ItemDetail = ({producto}) => {
    return (
        <div className="card mt-5 ms-5" style={{ width: "300px" }}>     
                <div className="card-body">
                    <h5 className="card-title">{producto.categoria} {producto.marca} {producto.tamanio}</h5>
                    <p className="card-text">{producto.detalle}</p>
                </div>
        </div>
    )
}

export default ItemDetail