import Nav from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer"
import { BrowserRouter, Link, Route, Switch } from "react-router-dom"
import CartWidget from "./components/CartWidget"
import Cart from "./components/Cart"
import { ProviderCustomizado } from "./components/CartContext"

const App = () => {
    return (
        <BrowserRouter>
            <ProviderCustomizado>
                <header>
                    <Link to="/"><h1>MOROBAT</h1></Link>
                    <Nav />
                </header>
                <Switch>
                    <Route path="/" component={ItemListContainer} exact/>
                    <Route path="/productos/:categoria" component={ItemListContainer} exact/>
                    <Route path="/item/:id" component={ItemDetailContainer} exact/>
                    <Route path="/cartWidget" component={CartWidget} exact/>
                    <Route path="/cart" component={Cart} exact/>
                </Switch>
            </ProviderCustomizado>
        </BrowserRouter>
    )
}

export default App