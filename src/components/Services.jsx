import { LiaShippingFastSolid } from "react-icons/lia";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import Service from "./helpers/Service";

const Services = () => {
    return (
        <div className="services mt-5 mb-5">
            <div className="container">
                <div className="row m-auto">
                    <div className="col-12 col-lg-4">
                        <Service icon={<LiaShippingFastSolid />}
                            title="FREE AND FAST DELIVERY"
                            desc="Free delivery for all orders over $140" />
                    </div>

                    <div className="col-12 col-lg-4">
                        <Service icon={<TfiHeadphoneAlt />}
                            title="24/7 CUSTOMER SERVICE"
                            desc="Friendly 24/7 customer support" />
                    </div>

                    <div className="col-12 col-lg-4">
                        <Service icon={<AiOutlineSafetyCertificate />}
                            title="MONEY BACK GUARANTEE"
                            desc="We reurn money within 15 days" />
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Services
