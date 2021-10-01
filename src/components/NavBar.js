import CartWidget from "./CartWidget"
import "./style.css"
import { NavLink } from "react-router-dom"

const Nav = () => {
    return (
        <nav>
            <div>
                <ul>
                    <li><NavLink to="/">TODOS LOS PRODUCTOS</NavLink></li>
                    <li><NavLink to="/productos/Bateria">BATERIAS</NavLink></li>
                    <li><NavLink to="/productos/Radiador">RADIADORES</NavLink></li>
                    <li><NavLink to="/productos/Bobina">BOBINAS</NavLink></li>
                    <li><NavLink to="/productos/Aceite">ACEITES</NavLink></li>
                    <li><NavLink to="/cartWidget"><CartWidget/></NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav