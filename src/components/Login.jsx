import { Link } from "react-router-dom"
import Input from './helpers/Input';
import shop1 from '../assets/images/shop6.png'

const Login = () => {
    return (
        <div className="login mt-5 mb-5">
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-6 me-5">
                        <div className="image">
                            <img src={shop1} alt="shoping online" className="img-fluid" />
                        </div>
                    </div>

                    <div className="ms-3 col-5">
                        <div className="form">
                            <h1 className="fs-2 mb-2 w-bold">Log in to Exclusive</h1>
                            <h1 className="fs-6 mb-4">Enter your details below</h1>

                            <form action="GET">
                                <div className="inputs mt- d-flex flex-column">
                                    <Input type="email" ariaDesc="emailHelp" ph="email or phone number" />
                                    <Input type="password" ariaDesc="passwordHelp" ph="password" />
                                </div>

                                <div className="buttons m-auto mt-3 d-flex justify-content-between align-items-center">
                                    <input className="submit p-2 ps-5 pe-5 fw-bold" type="submit" value="Log In" />
                                    <Link to="#" className="forget text-danger text-capitalize text-decoration-none pt-2 pb-2 fs-6">
                                        forget password?
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
