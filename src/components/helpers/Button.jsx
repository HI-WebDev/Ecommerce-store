
const Button = ({ funct, title, bg }) => {
    return (
        <>
            <span
                className="mainBtn ps-4 pe-4 pt-2 pb-2 fw-bold text-capitalize"
                style={{ backgroundColor: bg, transition: ".4s linear" }} onClick={funct}>
                {title}
            </span>
        </>
    )
}

export default Button
