

const Box = ({ icon, title }) => {
    return (
        <>
            <div className="box pt-3 pb-3 d-flex flex-column justify-content-center align-items-center">
                <span className="icon fs-1 fw-lighter mb-2">
                    {icon}
                </span>
                <span className="title fw-bold text-capitalize">{title}</span>
            </div>
        </>
    )
}

export default Box
