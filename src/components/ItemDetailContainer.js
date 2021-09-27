import {useState,useEffect} from "react";
import ItemDetail from "./ItemDetail";

class ProductoDetalle {
    constructor(detalle) {
        this.detalle = detalle;
    }
}

const productosDetalle = [];

productosDetalle.push (new ProductoDetalle ("La batería es el elemento encargado de suministrarle energía eléctrica a nuestro vehículo, permitiendo que el motor y los elementos auxiliares puedan funcionar correctamente. ... La función principal de la batería es propiciar la puesta en marcha del motor de arranque, entrando posteriormente en acción el alternador." ));

const ItemDetailContainer = ({greeting}) => {
    
    const [productos,setProductos] = useState ([])
    
    useEffect(()=>{
        const simulacion_de_pedido_detalle = new Promise ((resolver)=>{
            setTimeout(()=>{
                resolver(productosDetalle)
            },2000)
        })
        
        simulacion_de_pedido_detalle.then(resultado=>{
            setProductos(resultado);
        })
    },[])

    console.log(productos)


    if (productos.length > 0) {
        return (
        <>
            <div>
                <h2>{greeting}</h2>
                <div>
                    <ItemDetail productos={productos} />
                </div>
            </div>
        </>
    )
    } else {
        return (
        <>
        <div class="d-flex align-items-center">
            <strong>Loading...</strong>
            <div class="spinner-border ml-auto" role="status" aria-hidden="true"></div>
        </div>
        </>
    )
    }
    
}

export default ItemDetailContainer