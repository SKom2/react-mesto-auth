import Logo from "../images/header/Vector.svg";
import {Link} from "react-router-dom";

export function Header(props) {
    function signOut(){
        localStorage.removeItem('jwt');
    }

    return (
        <header className="header root__container">
            <img src={Logo} alt="Место" className="header__logo"></img>
            {props.userData &&
                <div className="header__info">
                    <p className="header__email">{props.userData.email}</p>
                    <Link to={props.way} onClick={signOut} className="header__link">{props.text}</Link>
                </div>
            }
            {!props.userData &&
                <Link to={props.way} className="header__link">{props.text}</Link>
            }
        </header>
    )
}