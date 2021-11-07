import {useState,useEffect} from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router";
import "./style.css"
import { firestore } from "../firebase";

const ItemListContainer = () => {

    const [productos,setProductos] = useState ([])
    const {categoria} = useParams()
    
    useEffect(()=>{

        const db = firestore
        const coleccion = db.collection("productos")

        if (categoria === "Bateria") {
          let consulta = coleccion.where("categoria","==","Bateria")
          consulta = consulta.get()
  
          consulta
          .then((resultado)=>{
            const productos_finales = resultado.docs.map(producto => {
              const producto_final = {
                id: producto.id,
                ...producto.data()
              }
              return producto_final
            })
            setProductos(productos_finales)
          })
          .catch(()=>{
          })
        }else if (categoria === "Radiador") {
          let consulta = coleccion.where("categoria","==","Radiador")
          consulta = consulta.get()
  
          consulta
          .then((resultado)=>{
            const productos_finales = resultado.docs.map(producto => {
              const producto_final = {
                id: producto.id,
                ...producto.data()
              }
              return producto_final
            })
            setProductos(productos_finales)
          })
          .catch(()=>{
          })
        } else if (categoria === "Bobina") {
          let consulta = coleccion.where("categoria","==","Bobina")
          consulta = consulta.get()
  
          consulta
          .then((resultado)=>{
            const productos_finales = resultado.docs.map(producto => {
              const producto_final = {
                id: producto.id,
                ...producto.data()
              }
              return producto_final
            })
            setProductos(productos_finales)
          })
          .catch(()=>{
          })
        }else if (categoria === "Aceite") {
          let consulta = coleccion.where("categoria","==","Aceite")
          consulta = consulta.get()
  
          consulta
          .then((resultado)=>{
            const productos_finales = resultado.docs.map(producto => {
              const producto_final = {
                id: producto.id,
                ...producto.data()
              }
              return producto_final
            })
            setProductos(productos_finales)
          })
          .catch(()=>{
          })
        }else {
          coleccion
          .get()
          .then((resultado)=>{
            const productos_finales = resultado.docs.map(producto => {
              const producto_final = {
                id: producto.id,
                ...producto.data()
              }
              return producto_final
            })
            setProductos(productos_finales)
          })
          .catch(()=>{
          })
        }
    },[categoria])

    if (productos.length > 0) {
        return (
            <div>
                <div className="item-list-container">
                    <ItemList productos={productos} />
                </div>
            </div>
    )
    } else {
        return (
        <div className="d-flex align-items-center">
            <strong>Loading...</strong>
            <div className="spinner-border ml-auto" role="status" aria-hidden="true"></div>
        </div>
    )
    }
    
}

export default ItemListContainer