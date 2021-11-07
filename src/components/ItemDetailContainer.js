import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router";
import { firestore } from "../firebase";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const db = firestore;

    const coleccion = db.collection("productos");

    let consulta = coleccion.doc(id);
    consulta = consulta.get();

    consulta
      .then((resultado) => {
        const productos_finales = resultado.data();
        setProducto(productos_finales);
      })
      .catch(() => {});
  }, [id]);

  if (producto.length === 0) {
    return (
      <div className="d-flex align-items-center">
        <strong>Loading...</strong>
        <div
          className="spinner-border ml-auto"
          role="status"
          aria-hidden="true"
        ></div>
      </div>
    );
  } else {
    return (
      <div>
        <div>
          <ItemDetail producto={producto} />
        </div>
      </div>
    );
  }
};

export default ItemDetailContainer;
