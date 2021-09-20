import {useState,useEffect} from "react";
import ItemList from "./ItemList";

class Producto {
    constructor(id, categoria, marca, tamanio, precio) {
        this.id = parseInt(id);
        this.categoria = categoria;
        this.marca = marca;
        this.tamanio = tamanio;
        this.precio = parseInt(precio);
    }
}

const productosIniciales = [];

productosIniciales.push (new Producto (1,"Bateria","Moura","12x45", 10000));
productosIniciales.push (new Producto (2,"Bateria","Moura","12x55", 11000));
productosIniciales.push (new Producto (3,"Bateria","Moura","12x65", 12000));
productosIniciales.push (new Producto (4,"Bateria","Moura","12x75", 13000));
productosIniciales.push (new Producto (5,"Bateria","Moura","12x85", 14000));

productosIniciales.push (new Producto (6,"Bateria","Willard","12x65", 10000));
productosIniciales.push (new Producto (7,"Bateria","Willard","12x75", 11000));
productosIniciales.push (new Producto (8,"Bateria","Willard","12x110", 12000));
productosIniciales.push (new Producto (9,"Bateria","Willard","12x180", 13000));

productosIniciales.push (new Producto (10,"Bateria","Energy","12x45", 10000));
productosIniciales.push (new Producto (11,"Bateria","Energy","12x65", 11000));
productosIniciales.push (new Producto (12,"Bateria","Energy","12x75", 12000));
productosIniciales.push (new Producto (13,"Bateria","Energy","12x85", 13000));
productosIniciales.push (new Producto (14,"Bateria","Energy","12x110", 14000));
productosIniciales.push (new Producto (15,"Bateria","Energy","12x180", 15000));

productosIniciales.push (new Producto (16,"Radiador","Ford","", 5000));
productosIniciales.push (new Producto (17,"Radiador","Chevrolet","", 5000));
productosIniciales.push (new Producto (18,"Radiador","Peugeot","", 5000));
productosIniciales.push (new Producto (19,"Radiador","Citroen","", 5000));

productosIniciales.push (new Producto (20,"Bobina","Ford","", 2000));
productosIniciales.push (new Producto (21,"Bobina","Chevrolet","", 2000));
productosIniciales.push (new Producto (22,"Bobina","Peugeot","", 2000));
productosIniciales.push (new Producto (23,"Bobina","Citroen","", 2000));

productosIniciales.push (new Producto (24,"Aceite","","5L", 2000));
productosIniciales.push (new Producto (25,"Aceite","","2L", 2000));

const ItemListContainer = ({greeting}) => {
    
    const [productos,setProductos] = useState ([])
    
    useEffect(()=>{
        const simulacion_de_pedido = new Promise ((resolver)=>{
            setTimeout(()=>{
                resolver(productosIniciales)
            },2000)
        })
        
        simulacion_de_pedido.then(resultado=>{
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
                    <ItemList productos={productos} />
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

export default ItemListContainer