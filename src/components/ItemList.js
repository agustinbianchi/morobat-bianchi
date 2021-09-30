import Item from "./Item"

const ItemList = ({productos}) => {
    return (
        <>
        {productos.map((producto, indice)=>{
            return <Item key={producto.id} producto={producto} />
        })}
        </>
    )
}

export default ItemList