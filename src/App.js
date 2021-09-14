import Nav from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"

const App = () => {
    return (
        <><header>
            <h1>MOROBAT</h1>
            <Nav />
        </header>
        <ItemListContainer greeting="HOLA! ACA VAN LOS PRODUCTOS" /></>
    )
}

export default App