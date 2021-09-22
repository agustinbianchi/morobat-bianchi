import {useState,useEffect} from "react";
import ItemDetail from "./ItemDetail";

class ProductoDetalle {
    constructor(id, categoria, marca, tamanio, precio, detalle) {
        this.id = parseInt(id);
        this.categoria = categoria;
        this.marca = marca;
        this.tamanio = tamanio;
        this.precio = parseInt(precio);
        this.detalle = detalle;
    }
}

const productosDetalle = [];

productosDetalle.push (new ProductoDetalle (1,"Bateria","Moura","12x45", 10000," lorem ipsum lorem lorem loremo oasdasddfgfdsfadsfdgfdsfaf" ));

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