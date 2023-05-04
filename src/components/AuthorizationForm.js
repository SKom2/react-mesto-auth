    export function AuthorizationForm(props) {
        return(
            <div className="authorization root__container" id={`${props.name}`}>
                <h1 className="authorization__title">{props.text}</h1>
                <form className="authorization__form" onSubmit={props.onSubmit}>
                    {props.children}
                    <button className={`authorization__button`} type="submit">{props.buttonName}</button>
                </form>
            </div>
        )
    }