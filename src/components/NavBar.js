import {Link} from "react-router-dom";

export function NavBar(props) {
    return(
        <div className={`menu ${props.isMenuOpened && window.innerWidth < 700 ? 'menu_opened' : 'menu_closed'}`}>
            <ul className="menu__items">
                <li className="menu__item">
                    <p className="menu__email">{props.userData.email}</p>
                </li>
                <li className="menu__item">
                    <Link to={props.way} onClick={props.signOut} className="menu__link">{props.text}</Link>
                </li>
            </ul>
        </div>
    )
}