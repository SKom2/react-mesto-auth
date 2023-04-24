import background from "../images/authorization/Union.svg"

export function InfoToolTip() {
    return (
        <div className="prompt">
            <div className="prompt__container">
                <button type="button" className="popup__close"></button>
                <div className="prompt__info">
                    <div className="prompt__image" style={{backgroundImage: `url(${background})`}}></div>
                    <p className="prompt__text">Вы успешно зарегистрировались!</p>
                </div>
            </div>
        </div>
    )
}