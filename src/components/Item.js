import ItemCount from "./ItemCount";

const Item = ({producto}) => {
    return (
        <>
            <div className="card mt-5 ms-5" style={{ width: "300px" }}>
                <img src="https://i0.wp.com/mecanica-express.com.ar/wp-content/uploads/2020/11/Mecanica_Express_varta_bateria-auto_vfb60hd_0.jpg?fit=1280%2C1280&ssl=1s" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{producto.categoria} {producto.marca} {producto.tamanio}</h5>
                    <p className="card-text">${producto.precio}</p>
                    <ItemCount stock={10} initial={0} onAdd={() => { } } />
                </div>
            </div>
        </>
    )
}

export default Item