import Nav from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemListContainer"

const App = () => {
    return (
        <>
        <header>
            <h1>MOROBAT</h1>
            <Nav />
        </header>
        <ItemListContainer greeting="HOLA! ACA VAN LOS PRODUCTOS" />
        <ItemDetailContainer greeting= "ACA VAN LOS DETALLES DE LOS PRODUCTOS"/>
        </>
    )
}

export default App