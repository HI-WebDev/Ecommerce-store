
const Input = ({ type, ph }) => {
    return (
        <div>
            <input type={type} className="form-control mainInput mb-4 w-100 ps-0" aria-describedby="emailHelp" placeholder={ph} />
        </div>
    )
}

export default Input
