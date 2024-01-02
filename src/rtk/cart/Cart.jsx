import { clear, deleteFromCart } from "./cartSlice"
import { FaTrashAlt } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import Button from '../../components/helpers/Button'
import { Link } from "react-router-dom";


const Cart = () => {
    const cart = useSelector((state) => state.cart)
    const dispatch = useDispatch();
    console.log(cart);
    const percontageToSubstract = 2.5;


    const subtotal = cart.reduce((acc, product) => {
        acc += (product.price * product.quantity);
        return acc;
    }, 0)


    const total = subtotal + percontageToSubstract

    return (
        <div className="cart">
            <div className="container">
                <section className="h-100" >
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12">

                            <div className="d-flex justify-content-between align-items-center mt-5 mb-5">
                                <h3 className="fw-bold fs-6 mb-0 text-black">
                                    <span className="text-muted">Home</span> / Cart
                                </h3>
                                <div className={cart.length >= 1 ? "d-block" : "d-none"} onClick={() => dispatch(clear())}>
                                    <Button title="Clear All" />
                                </div>
                            </div>


                            {cart.map((product) => {
                                return (
                                    <div key={product.id} className="card rounded-3 mb-4">
                                        <div className="card-body p-4">
                                            <div className="row d-flex justify-contnt-between align-items-center">
                                                <div className="col-lg-2 ">
                                                    <img src={product.image} className="img-fluid position-relative rounded-3"
                                                        alt="Cotton T-shirt" style={{ width: "4.5rem", height: "4rem" }} />
                                                    <span className="del position-absolute d-flex justify-content-center align-items-center"
                                                        onClick={() => dispatch(deleteFromCart(product))}>
                                                        <FaXmark color="white" />
                                                    </span>
                                                </div>
                                                <div className="col-lg-3 d-flex ms-0 ps-0 fw-bold ">
                                                    <p className="lead fw-normal mb-2">{product.title}</p>
                                                </div>

                                                <div className="col-lg-2 offset-lg-1 d-flex fw-bold r">
                                                    <h5 className="mb-0 fs-6 fw-bold">${product.price}</h5>
                                                </div>

                                                <div className="col-lg-1 d-flex justify-content-center fw-bold ">
                                                    {product.quantity}
                                                </div>

                                                <div className="col-lg-1 offset-lg-1 d-flex justify-content-center fw-bold ">
                                                    <h5 className="mb-0 fs-6 fw-bold">${product.price * product.quantity}</h5>
                                                </div>


                                                <div className="col-lg-1 text-end">
                                                    <span className="text-danger fs-5" style={{ cursor: "pointer" }}
                                                        onClick={() => dispatch(deleteFromCart(product))}>
                                                        <FaTrashAlt />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}

                            <div className="helpers ">
                                <div className="row mt-5">
                                    <div className="col">
                                        <Link to='/home'
                                            className={cart.length >= 1 ? "return btn text-capitalize fs-6  p-2 ps-4 pe-4 fw-bold"
                                                : "d-none"}>
                                            return to shop
                                        </Link>
                                    </div>

                                    <div className="col-5">
                                        <div className={cart.length >= 1 ? "total p-3 pt-3 pb-4" : "d-none"}>
                                            <h1 className="fs-4 mb-3 text-capitalize">cart total</h1>
                                            <div className="line pb-2 d-flex justify-content-between align-items-center">
                                                <h1 className="fs-6 fw-bold text-capitalize">subtotal:</h1>
                                                <h1 className="fs-6 fw-bold">${subtotal}</h1>
                                            </div>
                                            <div className="line mt-4 pb-2  d-flex justify-content-between align-items-center">
                                                <h1 className="fs-6 fw-bold text-capitalize">shipping:</h1>
                                                <h1 className="fs-6 fw-bold text-capitalize">${percontageToSubstract}</h1>
                                            </div>
                                            <div className="last mt-4 mb-4 d-flex justify-content-between align-items-center">
                                                <h1 className="fs-6 fw-bold text-capitalize">total:</h1>
                                                <h1 className="fs-6 fw-bold text-capitalize">${total.toFixed(2)}</h1>
                                            </div>
                                            <Link className="text-center text-decoration-none d-flex justify-content-center" to="/cart/checkout">
                                                <Button title="Procees to checkout" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Cart
