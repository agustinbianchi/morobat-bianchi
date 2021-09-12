import Nav from "./NavBar"
import ItemListContainer from "./ItemListContainer"

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