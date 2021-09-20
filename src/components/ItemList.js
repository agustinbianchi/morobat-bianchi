import Item from "./Item"

const ItemList = ({productos}) => {
    return (
        <>
        {productos.map((producto, indice)=>{
            return <Item producto={producto} />
        })}
        </>
    )
}

export default ItemList