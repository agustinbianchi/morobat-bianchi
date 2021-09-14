import CartWidget from "./CartWidget"
import style from "./style.css"

const Nav = () => {
    return (
        <nav>
            <div>
                <ul>
                    <li><a href="a">INICIO</a></li>
                    <li><a href="a">PRODUCTOS</a></li>
                    <li><a href="a">NOSOTROS</a></li>
                    <li><a href="a">CONTACTANOS</a></li>
                    <li><CartWidget/></li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav