import {useState,useEffect} from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router";
import { firestore } from "../firebase";

const ItemDetailContainer = () => {
    
    const [producto,setProducto] = useState ([])
    const {id} = useParams()

    console.log(id);
    
    useEffect(()=>{

      const db = firestore

      const coleccion = db.collection("productos")

      let consulta = coleccion.doc(id)
      consulta = consulta.get()

      consulta.then((resultado)=>{
        console.log("estuvo todo bien");

        const productos_finales = resultado.data()
        setProducto(productos_finales)
      })
      .catch(()=>{
        console.log("hubo un error");
      })

    },[id])

    console.log(producto)


    return (
        <>
            <div>
                <div>
                    <ItemDetail producto={producto} />
                </div>
            </div>
        </>
    )
    
}

export default ItemDetailContainer