
const Input = ({ type, ariaDesc, ph }) => {
    return (
        <div>
            <input type={type} className="form-control mainInput mb-4 w-100 ps-0"
                aria-describedby={ariaDesc} placeholder={ph} required />
        </div>
    )
}

export default Input
