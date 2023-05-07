import Logo from "../images/header/Vector.svg";
import { NavBar } from "./NavBar";
import { useState, useEffect } from "react";
import close from "../images/popup/Close.svg";
import {Link} from "react-router-dom";

export function Header(props) {
    const [isMenuOpened, setMenuOpened] = useState(true );
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 700);

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth >= 700);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    function handleMenuOpen() {
        setMenuOpened(!isMenuOpened);
    }

    function signOut(){
        localStorage.removeItem('jwt');
    }

    return (
        <>
            <NavBar
                loggedIn={props.loggedIn}
                way={props.way}
                userData={props.userData}
                text={props.text}
                isMenuOpened={isMenuOpened}
            />
            <header className="header root__container">
                <img src={Logo} alt="Место" className="header__logo"></img>
                {!props.isMenuOpened ? (
                    <div className="header__burger-btn" onClick={handleMenuOpen}>
                        <span />
                    </div>
                ) : (
                    <div className="header__burger-close-btn">
                        <img
                            onClick={handleMenuOpen}
                            src={close}
                            style={{ width: "20px", height: "20px" }}
                            alt="Close"
                        />
                    </div>
                )}
                {isDesktop && (
                        <Link to={props.way} onClick={signOut} className="header__link">{props.text}</Link>
                )}
            </header>
        </>
    );
}
