import Logo from "../images/header/Vector.svg";
import {Link} from "react-router-dom";

export function Header(props) {
    return (
        <header className="header root__container">
            <img src={Logo} alt="Место" className="header__logo"></img>
            <Link to={props.way} className="header__link">{props.text}</Link>
        </header>
    )
}