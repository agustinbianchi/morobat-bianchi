import ItemCount from "./ItemCount";

const ItemDetail = ({producto}) => {

    const reciboDatosDelItemCount = (contador) => {
    console.log("recibo data del itemCount");
    console.log(contador);
}
    
    const onAdd = () => {
        console.log("confirmaste compra");
    }

    return (
        <div className="card mt-5 ms-5" style={{ width: "300px" }}>     
                <div className="card-body">
                    <h5 className="card-title">{producto.categoria} {producto.marca} {producto.tamanio}</h5>
                    <p className="card-text">{producto.detalle}</p>
                    <ItemCount stock={producto.cantidad} initial={0}  miCallBack={reciboDatosDelItemCount} />
                    <button type="button" class="btn btn-success me-3 ms-3 mt-3" onClick={onAdd}>AÑADIR AL CARRITO</button>
                </div>
        </div>
    )
}

export default ItemDetail