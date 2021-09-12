import CartWidget from "./CartWidget"
import style from "./style.css"

const Nav = () => {
    return (
        <nav>
            <ul>
                <li><a href="#">INICIO</a></li>
                <li><a href="#">PRODUCTOS</a></li>
                <li><a href="#">NOSOTROS</a></li>
                <li><a href="#">CONTACTANOS</a></li>
                <li><CartWidget/></li>
            </ul>
        </nav>
    )
}

export default Nav