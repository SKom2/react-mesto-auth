import {Input} from "./Input";

export function Authorization(props) {
    return(
        <div className="authorization root__container">
            <h1 className="authorization__title">{props.text}</h1>
            <form className="authorization__form">
                <Input
                    type="email"
                    className="authorization"
                    id={`${props.id}-email`}
                    name="email"
                    placeholder="Email"
                >
                </Input>
                <Input
                    type="password"
                    className="authorization"
                    id={`${props.id}-password`}
                    name="password"
                    placeholder="Пароль"
                >
                </Input>
            </form>
            <button className="authorization__button">{props.buttonName}</button>
        </div>
    )
}