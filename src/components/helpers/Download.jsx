
const Download = ({ icon, title, system }) => {
    return (
        <>
            <div className="download mb-3 p-1 ps-2 pe-2 d-flex align-items-center">
                <span className="icon d-flex  fs-1  me-2">{icon}</span>
                <div className="f-flex flex-column">
                    <h1 className="title fs-6 mt-0 mb-0">{title}</h1>
                    <h1 className="system  mb-0 text-capitalize fs-5">{system}</h1>
                </div>
            </div>
        </>
    )
}

export default Download
