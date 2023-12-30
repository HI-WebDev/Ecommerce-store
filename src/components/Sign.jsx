import { Link, Route, Routes } from "react-router-dom"
import { FcGoogle } from "react-icons/fc";
import Button from './helpers/Button';
import Input from './helpers/Input';
import Login from "./Login";
import shop1 from '../assets/images/shop1.png'



const Sign = () => {
    return (
        <div className="sign up mt-5 mb-5">
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-6 me-5">
                        <div className="image">
                            <img src={shop1} alt="shoping online" className="img-fluid" />
                        </div>
                    </div>

                    <div className="ms-3 col-5">
                        <div className="form">
                            <h1 className="fs-2 mb-2 w-bold">Create an account</h1>
                            <h1 className="fs-6 mb-4">Enter your details below</h1>

                            <div className="inputs d-flex flex-column">
                                <Input type="text" ph="Name" />
                                <Input type="email" ph="email or phone number" />
                                <Input type="password" ph="password" />
                            </div>

                            <div className="buttons m-auto mt-3 d-flex flex-column w- text-center">
                                <Button title="Create Account" bg="#db4444" />
                                <span className="gg pt-2 pb-2 fw-bold btn mt-3 d-flex align-items-center justify-content-center"
                                    style={{ border: "1px solid #aaa", borderRadius: "4px" }}>
                                    <FcGoogle className="me-2 fs-5" />
                                    Sign up with Google
                                </span>
                            </div>
                            <div className="toLogin d-flex mt-4 justify-content-center">
                                Already have an account?
                                <Link className='ms-2' to="/login">Log in</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Routes>
                <Route path="/login" Component={Login} />
            </Routes>
        </div>
    )
}

export default Sign
