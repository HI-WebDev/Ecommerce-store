import { LiaShippingFastSolid } from "react-icons/lia";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { AiOutlineSafetyCertificate } from "react-icons/ai";

const Services = () => {
    return (
        <div className="services mt-5 mb-5">
            <div className="container">
                <div className="row m-auto">
                <div className="col-4">
                        <div className="service d-flex flex-column justify-content-center align-items-center">
                            <span className="icon fs-3 fw-bold mb-3 d-flex justify-content-center align-items-center">
                                <LiaShippingFastSolid />
                            </span>
                            <span className="title fs-5 fw-bold mb-1">FREE AND FAST DELIVERY</span>
                            <span className="desc mb-2">Free delivery for all orders over $140</span>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="service d-flex flex-column justify-content-center align-items-center">
                            <span className="icon fs-4 fw-bold mb-3 d-flex justify-content-center align-items-center">
                                <TfiHeadphoneAlt />
                            </span>
                            <span className="title fs-5 fw-bold mb-1">24/7 CUSTOMER SERVICE</span>
                            <span className="desc mb-2">Friendly 24/7 customer support</span>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="service d-flex flex-column justify-content-center align-items-center">
                            <span className="icon fs-3 fw-bold mb-3 d-flex justify-content-center align-items-center">
                                <AiOutlineSafetyCertificate />
                            </span>
                            <span className="title fs-5 fw-bold mb-1">MONEY BACK GUARANTEE</span>
                            <span className="desc mb-2">We reurn money within 15 days</span>
                        </div>
                    </div>    
                </div>
            </div>
        </div>
    )
}


export default Services
