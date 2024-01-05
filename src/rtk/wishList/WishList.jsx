import { useDispatch, useSelector } from "react-redux"
import { FaStar, FaTrashAlt } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import Header from '../../components/helpers/Header'
import { IoMdEye } from "react-icons/io";
import { useEffect, useState } from "react";
import { fetchProducts } from "../products/productSlice";
import { addToCart } from "../cart/cartSlice";
import { clear, deleteFromWishListe } from "./wishListSlice";




const WishList = () => {
    const wishlist = useSelector((state) => state.wishList)
    const dispatch = useDispatch()
    //products
    const data = useSelector((state) => state.products)
    const fourProducts = data.data.slice(5, 9);
    const fiveProducts = data.data.slice(14, 18);

    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])

    //handle click 
    const [isClicked, setClicked] = useState(false);

    const handleClicked = () => {
        setClicked(!isClicked)
    }

    return (
        <div className="wishlist mt-5 mb-5">
            <div className="container">
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mt-5 mb-5">
                    <h3 className="fw-bold fs-6 mb-3 mb-md-0 text-black">
                        Wishlist <span className="fs-">({wishlist.length})</span>
                    </h3>
                    <span className={wishlist.length > 0 ? "clear ps-4 pe-4 pt-2 pb-2 fw-bold btn d-flex align-items-center justify-content-center"
                        : "d-none"}
                        onClick={() => dispatch(clear())}>
                        Move All To Bag
                    </span>
                </div>

                <div className="row d-flex justify-content-ceter">
                    {wishlist.map((product) => {
                        return (
                            <div key={product.id} className="col-12 col-lg-3 mb-4">
                                <div className="product">
                                    <div className="card">
                                        <div className="image position-relative">
                                            <img src={product.image} className="card-img-top p-5" alt="product1" />
                                            <div className="outils d-flex flex-column position-absolute">
                                                <span className="heart  d-flex justify-content-center align-items-center mb-2"
                                                    onClick={() => dispatch(deleteFromWishListe(product))}>
                                                    <FaTrashAlt />
                                                </span>

                                            </div>
                                            <div className="addCart btn position-absolute w-100 text-center pt-2 pb-1" >
                                                <h1 className="fs-6 fw-bold d-felx align-items-center text-capitalize p-0"
                                                    onClick={() => dispatch(addToCart(product))}>
                                                    <FiShoppingCart className="me-2" />
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
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        )
                    })}
                </div>

                <div className={wishlist.length > 0 ? "mt-4 mt-md-5" : "d-none"}>
                    <Header title="Just For You" />
                    <div className="d-flex justify-content-center justify-content-md-end mb-5">
                        <span className="clear ps-5 ps-md-4 pe-5 pe-md-4 pt-2 pb-2 fw-bold btn d-flex align-items-center justify-content-center"
                            onClick={handleClicked}>
                            {isClicked ? "View Less" : "View All"}
                        </span>
                    </div>

                    {fourProducts.loading && <h1>Loading...</h1>}

                    {!fourProducts.loading && fourProducts.length ? (
                        <div className="row mt-5">
                            {fourProducts.map((product) => (
                                <div key={product.id} className="col-12 col-md-6 col-lg-3 mb-3 mb-md-4">
                                    <div className={`product `}>
                                        <div className="card">
                                            <div className="image position-relative">
                                                <img src={product.image} className="card-img-top p-5" alt="product1" />
                                                <span className="discount position-absolute pt-1 pb-1 ps-2 pe-2" >
                                                    New
                                                </span>
                                                <div className="outils d-flex flex-column position-absolute">
                                                    <span className="d-flex fs-5 justify-content-center align-items-center">
                                                        <IoMdEye />
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

                                            </div>
                                        </div>
                                    </div>
                                </div>

                            ))}

                            {fiveProducts.map((product) => (
                                <div key={product.id} className={isClicked ? "col-12 col-md-6 col-lg-3 mb-3 mb-md-4" : "col d-none"}>
                                    <div className={`product `}>
                                        <div className="card">
                                            <div className="image position-relative">
                                                <img src={product.image} className="card-img-top p-5" alt="product1" />
                                                <span className="discount position-absolute pt-1 pb-1 ps-2 pe-2" >
                                                    New
                                                </span>
                                                <div className="outils d-flex flex-column position-absolute">
                                                    <span className="d-flex fs-5 justify-content-center align-items-center">
                                                        <IoMdEye />
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

                                            </div>
                                        </div>
                                    </div>
                                </div>

                            ))}
                        </div>
                    ) : null}

                    {!data.loading && data.error ? <h1>Eroor : {data.error}</h1> : null}

                </div>
            </div>
        </div>
    )
}

export default WishList
