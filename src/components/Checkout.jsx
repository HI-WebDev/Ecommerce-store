import { useSelector } from "react-redux";
import Button from "./helpers/Button";
import bank from '../assets/images/bank.png'

const Checkout = () => {
    const cart = useSelector((state) => state.cart)
    // const dispatch = useDispatch();
    const percontageToSubstract = 2.5;


    const subtotal = cart.reduce((acc, product) => {
        acc += (product.price * product.quantity);
        return acc;
    }, 0)


    const total = subtotal + percontageToSubstract

    return (
        <div className="checkout mt-5 mb-5 ">
            <div className="container">
                <h3 className="fw-bold fs-6 mb-5 text-black">
                    <span className="text-muted">Cart</span> / CheckOut
                </h3>

                <div className="row">
                    <div className="col-6">
                        <div className="infos d-flex flex-column">
                            <h1 className="text-capitalize fs-2 mb-4">Billing details</h1>
                            <label htmlFor="fname" className="text-capitalize text-black-50 fw-bold mb-1">first name</label>
                            <input type="text" id="fname" className="me- mb-3 p-2" required />

                            <label htmlFor="companyname" className="text-capitalize text-black-50 fw-bold mb-1">company name</label>
                            <input type="text" id="companyname" className="me- mb-3 p-2" required />

                            <label htmlFor="streetadress" className="text-capitalize text-black-50 fw-bold mb-1">street address</label>
                            <input type="text" id="streetadress" className="me- mb-3 p-2" required />

                            <label htmlFor="apartement" className="text-capitalize text-black-50 fw-bold mb-1">Apartment, floor, etc. (optional)</label>
                            <input type="text" id="apartement" className="me- mb-3 p-2" required />

                            <label htmlFor="city" className="text-capitalize text-black-50 fw-bold mb-1">town/city</label>
                            <input type="text" id="city" className="me- mb-3 p-2" required />

                            <label htmlFor="phone" className="text-capitalize text-black-50 fw-bold mb-1">phone number</label>
                            <input type="tel" id="phone" className="me- mb-3 p-2" required />

                            <label htmlFor="mail" className="text-capitalize text-black-50 fw-bold mb-1">email address</label>
                            <input type="email" id="mail" className="me- mb-3 p-2" required />

                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                <label className="form-check-label" htmlFor="defaultCheck1">
                                    Save this information for faster check-out next time
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="col-5">
                        {cart.map((product) => {
                            return (
                                <div key={product.id} className="payment d-flex flex-column">
                                    <div className="prod mb-2 d-flex justify-content-between align-items-center">
                                        <div className="d-flex" style={{ width: "5.5rem",height:"3rem" }}>
                                            <img src={product.image} className="img-fluid" alt="dd" />
                                        </div>
                                        {/* <h1 className="fs-5 fw-bold">{product.title}</h1> */}
                                        <h1 className="fs-6 fw-bold">${product.price}</h1>
                                    </div>

                                    <div className="line mt-4 pb-2  d-flex justify-content-between align-items-center">
                                        <h1 className="fs-6 fw-bold text-capitalize">Subtotal:</h1>
                                        <h1 className="fs-6 fw-bold text-capitalize">${product.price}</h1>
                                    </div>
                                    <div className="line mt-4 pb-2  d-flex justify-content-between align-items-center">
                                        <h1 className="fs-6 fw-bold text-capitalize">shipping:</h1>
                                        <h1 className="fs-6 fw-bold text-capitalize">${percontageToSubstract}</h1>
                                    </div>
                                    <div className=" mt-4 mb-4  d-flex justify-content-between align-items-center">
                                        <h1 className="fs-6 fw-bold text-capitalize">total:</h1>
                                        <h1 className="fs-6 fw-bold text-capitalize">${total}</h1>
                                    </div>

                                    <div className="bank form-check mb-3">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                        <label className="form-check-label d-flex justify-content-between ms-1 fw-bold" htmlFor="flexRadioDefault1">
                                            Bank
                                            <span>
                                                <img src={bank} alt="" className="img-fluid" />
                                            </span>
                                        </label>
                                    </div>

                                    <div className="bank form-check mb-4">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                        <label className="form-check-label ms-1 fw-bold" htmlFor="flexRadioDefault1">
                                            Cash on delivery
                                        </label>
                                    </div>


                                    <div className="coupon d-flex justify-content-between mb-4">
                                        <input className="col-7" type="text" name="coupon" id="coupon" placeholder="Coupon Code" />
                                        <Button title="Apply coupon" />
                                    </div>
                                    <div className="mt-1">
                                        <Button title="place order" />
                                    </div>
                                </div>
                                //adir kolchi f form w dik place order dirha submit!!!!!!1
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout
