import {Link} from "react-router-dom";

export function NavBar(props) {
    function signOut(){
        localStorage.removeItem('jwt');
    }

    return(
        <>
            <ul className={`header__menu menu ${props.isMenuOpened ? 'menu_opened' : 'menu_closed'}`}>
                <li>
                    <Link to={props.way} onClick={signOut} className="header__link">{props.text}</Link>
                </li>
            </ul>

        </>
    )
}