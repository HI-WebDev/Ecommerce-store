import Download from "./helpers/Download"
import { FaGooglePlay, FaApple } from "react-icons/fa6";
import { RiFacebookLine, RiInstagramLine, RiTwitterLine, RiLinkedinLine } from "react-icons/ri";


const Footer = () => {
    const date = new Date().getFullYear();

    return (
        <div className="footer me-0 ms-0 ps-0 pe-0 mt-5 pt-5">
            <div className="container">
                <div className="row mb-4 text-center text-lg-start">
                    <div className="col-12 col-lg-3 ">
                        <ul className="list-unstyled">
                            <li className="fs-5 text-capitalize fw-bold mb-4">exclusive</li>
                            <li className="text-capitalize mb-3">subscribe</li>
                            <li className="text-capitalize mb-3">Get 10% off your first order</li>
                        </ul>
                    </div>
                    <div className="col-12 col-lg-3 mb-3">
                        <ul className="list-unstyled">
                            <li className="fs-5 text-capitalize fw-bold mb-4">support</li>
                            <li className="text-capitalize mb-3">morroco,casablanca</li>
                            <li className=" mb-3">hidevelopper@gmail.com</li>
                            <li className="text-capitalize mb-3">+212710xxxxx</li>
                        </ul>
                    </div>
                    <div className="col-12 col-lg-3 mb-3">
                        <ul className="list-unstyled">
                            <li className="fs-5 text-capitalize fw-bold mb-4">quick link</li>
                            <li className="text-capitalize mb-3">Privacy Policy</li>
                            <li className="text-capitalize mb-3">Terms Of Use</li>
                            <li className="text-capitalize mb-3">FAQ</li>
                            <li className="text-capitalize mb-3">Contact</li>
                        </ul>
                    </div>
                    <div className="col-12 col-lg-3">
                        <div className="d-flex flex-column">
                            <span className="fs-5 text-capitalize fw-bold mb-4">download app</span>
                            <span className="mb-2 text-white-50 fw-bold">Save $3 with App New User Only</span>
                            <div className="Qrcode d-flex ms-auto me-auto ms-lg-0 me-lg-0 mb-1">
                                <div className="system d-flex flex-column">
                                    <Download icon={<FaGooglePlay />} title='get it on' system='google play' />
                                    <Download icon={<FaApple />} title='Download on' system='app store' />
                                </div>
                            </div>
                            <div className="socials m-auto m-lg-0 d-flex">
                                <span className="me-4 fs-2"><RiFacebookLine /></span>
                                <span className="me-4 fs-2"><RiTwitterLine /></span>
                                <span className="me-4 fs-2"><RiInstagramLine /></span>
                                <span className=" fs-2"><RiLinkedinLine /></span>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="row">
                    <div className="col-12">
                        <p className="copyright pt-3 mb-3  text-white-50 fw-bold text-center">
                            &copy; Copyright Hi {date}. All right reserved
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
