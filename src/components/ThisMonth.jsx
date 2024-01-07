import Header from "./helpers/Header";
import Button from "./helpers/Button";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchProducts } from "../rtk/products/productSlice";
import { FaHeart, FaStar } from "react-icons/fa";
import { IoIosEyeOff, IoMdEye } from "react-icons/io";
import { addToCart } from "../rtk/cart/cartSlice";
import { addToWishList } from "../rtk/wishList/wishListSlice";


const ThisMonth = () => {
    const data = useSelector((state) => state.products)
    const fourProducts = data.data.slice(5, 9);
    const fiveProducts = data.data.slice(14, 18);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])

    //handle click 
    const [isActive2, setActive2] = useState(false);
    const [isClicked, setClicked] = useState(false);


    const handleClick2 = () => {
        setActive2(!isActive2)
    }

    const handleClicked = () => {
        setClicked(!isClicked)
    }
    return (
        <div className="month mt-5 mb-5">
            <div className="container">
                <Header title='This Month' />
                <div className="d-flex flex-column flex-md-row align-items-center justify-content-between">
                    <h1 className="fs-2 fw-bold text-center mb-3 mb-lg-0">Best Selling Products</h1>
                    <Button title={isClicked ? "View Less" : "View All"} funct={handleClicked} />
                </div>
                {fourProducts.loading && <h1>Loading...</h1>}

                {!fourProducts.loading && fourProducts.length ? (
                    <div className="row mt-4 mt-lg-5">
                        {fourProducts.map((product) => (
                            <div key={product.id} className="col-12 col-md-6 col-lg-3">
                                <div className={`product `}>
                                    <div className="card">
                                        <div className="image position-relative">
                                            <img src={product.image} className={isActive2 ? "card-img-top disable p-5" : "card-img-top p-5"}
                                                alt="product1" />
                                            <span className="discount position-absolute pt-1 pb-1 ps-2 pe-2" >
                                                New
                                            </span>
                                            <div className="outils d-flex flex-column position-absolute">
                                                <span className="heart  d-flex justify-content-center align-items-center mb-2"
                                                    onClick={() => dispatch(addToWishList(product))}>
                                                    <FaHeart />
                                                </span>
                                                <span className="d-flex fs-5 justify-content-center align-items-center"
                                                    onClick={handleClick2}>
                                                    {isActive2 ? <IoIosEyeOff /> : <IoMdEye />}
                                                </span>
                                            </div>
                                            <div className="addCart btn position-absolute w-100 text-center pt-2 pb-1" >
                                                <h1 className="fs-6 fw-bold text-capitalize p-0" onClick={() => dispatch(addToCart(product))} >
                                                    add to cart
                                                </h1>
                                            </div>
                                        </div>
                                        <div className="card-body p-0">
                                            <h5 className="card-title mt-3">{product.title}</h5>
                                            <div>
                                                <p className="card-price d-flex mb-1">
                                                    <span className="fw-bold me-3">${product.price}</span>
                                                    <del className="fw-bold">${Math.floor(product.price + 20)}</del>
                                                </p>
                                                <p className="card-rate d-flex">
                                                    <span className="me-2 d-flex align-items-center fw-bold">
                                                        {product.rating.rate}
                                                        <FaStar className="ms-1" />
                                                    </span>
                                                    <span className="rating fw-bold">({product.rating.count})</span>
                                                </p>
                                            </div>

                                            <div className={`colors position-absolute`}>
                                                <span className="me-2">{product.rating.count >= 200 ? "" : null}</span>
                                                <span className="sec">{product.rating.count >= 200 ? "" : null}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        ))}
                        {fiveProducts.map((product) => (
                            <div key={product.id} className={isClicked ? "col-12 col-md-6 col-lg-3" : "col d-none"}>
                                <div className={`product `}>
                                    <div className="card">
                                        <div className="image position-relative">
                                            <img src={product.image} className={isActive2 ? "card-img-top disable p-5" : "card-img-top p-5"}
                                                alt="product1" />
                                            <span className="discount position-absolute pt-1 pb-1 ps-2 pe-2" >
                                                New
                                            </span>
                                            <div className="outils d-flex flex-column position-absolute">
                                                <span className="heart  d-flex justify-content-center align-items-center mb-2"
                                                    onClick={() => dispatch(addToWishList(product))}>
                                                    <FaHeart />
                                                </span>
                                                <span className="d-flex fs-5 justify-content-center align-items-center"
                                                    onClick={handleClick2}>
                                                    {isActive2 ? <IoIosEyeOff /> : <IoMdEye />}
                                                </span>
                                            </div>
                                            <div className="addCart btn position-absolute w-100 text-center pt-2 pb-1" >
                                                <h1 className="fs-6 fw-bold text-capitalize p-0" onClick={() => dispatch(addToCart(product))} >
                                                    add to cart
                                                </h1>
                                            </div>
                                        </div>
                                        <div className="card-body p-0">
                                            <h5 className="card-title mt-3">{product.title}</h5>
                                            <div>
                                                <p className="card-price d-flex mb-1">
                                                    <span className="fw-bold me-3">${product.price}</span>
                                                    <del className="fw-bold">${Math.floor(product.price + 20)}</del>
                                                </p>
                                                <p className="card-rate d-flex">
                                                    <span className="me-2 d-flex align-items-center fw-bold">
                                                        {product.rating.rate}
                                                        <FaStar className="ms-1" />
                                                    </span>
                                                    <span className="rating fw-bold">({product.rating.count})</span>
                                                </p>
                                            </div>

                                            <div className={`colors position-absolute`}>
                                                <span className="me-2">{product.rating.count >= 200 ? "" : null}</span>
                                                <span className="sec">{product.rating.count >= 200 ? "" : null}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        ))}
                    </div>
                ) : null}

                {!data.loading && data.error ? <h1>Eroor : {data.error}</h1> : null}
                {/* <div className="row mt-5">
                    <div className="col-3">
                        <Product
                            img={pro1}
                            bg='#db4444'
                            display='d-none'
                            discount='-40%'
                            title='HAVIT HV-G92 Gamepad'
                            oneLine='d-flex flex-column'
                            price='120'
                            del='160'
                            rating='⭐⭐⭐⭐⭐'
                            count='88'
                        />
                    </div>
                    <div className="col-3">
                        <Product
                            img={pro1}
                            bg='#db4444'
                            display='d-none'
                            discount='-40%'
                            title='HAVIT HV-G92 Gamepad'
                            oneLine='d-flex flex-column'
                            price='120'
                            del='160'
                            rating='⭐⭐⭐⭐⭐'
                            count='88'
                        />
                    </div>
                    <div className="col-3">
                        <Product
                            img={pro1}
                            bg='#db4444'
                            display='d-none'
                            discount='-40%'
                            title='HAVIT HV-G92 Gamepad'
                            oneLine='d-flex flex-column'
                            price='120'
                            del='160'
                            rating='⭐⭐⭐⭐⭐'
                            count='88'
                        />
                    </div>
                    <div className="col-3">
                        <Product
                            img={pro1}
                            bg='#db4444'
                            display='d-none'
                            discount='-40%'
                            title='HAVIT HV-G92 Gamepad'
                            oneLine='d-flex flex-column'
                            price='120'
                            dispDel='d-none'
                            del='160'
                            rating='⭐⭐⭐⭐⭐'
                            count='88'
                        />
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default ThisMonth
