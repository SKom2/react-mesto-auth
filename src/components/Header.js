import Logo from "../images/header/Vector.svg";
import close from "../images/popup/Close.svg";
import {Link} from "react-router-dom";

export function Header(props) {
    return (
        <>
            <header className="header root__container">
                <img src={Logo} alt="Место" className="header__logo"></img>
                {props.loggedIn && (!props.isMenuOpened ? (
                    <div className="header__burger-btn" onClick={props.onMenuIconClick}>
                        <span />
                    </div>
                ) : (
                    <div className="header__burger-close-btn">
                        <img
                            onClick={props.onMenuIconClick}
                            src={close}
                            style={{ width: "20px", height: "20px" }}
                            alt="Close"
                        />
                    </div>
                ))}
                {(props.isDesktop || !props.loggedIn) && (
                        <Link to={props.way} onClick={props.signOut} className="header__link">{props.text}</Link>
                )}
            </header>
        </>
    );
}
