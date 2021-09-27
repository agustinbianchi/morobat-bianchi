const ItemDetail = ({productos}) => {
    return (
        
        <>
        {productos.map((producto, indice)=>{
            return (
            <>
            <div className="card mt-5 ms-5" style={{ width: "300px" }}>     
                <div className="card-body">
                    <p className="card-text">{producto.detalle}</p>
                </div>
            </div>
            </>
            )
        })}
        </>
            
        
    )
}

export default ItemDetail