import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux'
// import Home from './Home'
import { Link } from 'react-router-dom'
// import { useState } from 'react'


const Navbar = () => {
    // const [active, setActive] = useState(false);

    // const handleClick = () => {
    //     setActive(!active)
    // }
    const cart = useSelector((state) => state.cart);
    const wishlist = useSelector((state) => state.wishList)

    return (
        <>
            <div className="discount d-flex align-items-center justify-content-evenly p-2">
                <h2 className="fs-6 ">
                    {/* Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! */}
                    Summer Sale on All Swimwear with Free Express Shipping - 50% Off!
                    <span className="fw-bold text-decoration-underline ms-3">ShopNow</span>
                </h2>
                <div className="dropdown">
                    <button className="btn language text-light dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        English
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a className="dropdown-item" href="#">French</a></li>
                        <li><a className="dropdown-item" href="#">Arabic</a></li>
                        <li><a className="dropdown-item" href="#">Amazigh</a></li>
                    </ul>
                </div>
                {/* <div className="language d-flex align-items-center me-0" onClick={handleClick}>
                    English
                    {active ? <FontAwesomeIcon className='ms-2' icon={faAngleRight} />
                        : <FontAwesomeIcon className='ms-2' icon={faAngleDown} />}
                </div> */}
            </div>
            <nav className="navbar sticky  navbar-expand-lg navbar-light pt-3">
                <div className="container">
                    <a className="navbar-brand fw-bold" href="#">HI-ECOMMERCE</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link fw-bold me-3" aria-current="page" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fw-bold me-3" to="/contact">Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fw-bold me-3" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fw-bold" to="/sign">Sign Up</Link>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <div className="form-outline d-flex align-items-center">
                                <FontAwesomeIcon className='ms-2' icon={faMagnifyingGlass} />
                                <input className="form-control " type="search" placeholder="Search for products" aria-label="Search" />
                            </div>
                            <div className="buttons d-flex align-items-center  ms-3">
                                <Link className="like me-2 text-decoration-none text-black" to="/wishlist">
                                    <FontAwesomeIcon icon={faHeart} />
                                    <span className='ms-1'>({wishlist.length})</span>
                                </Link>
                                <Link className="cart ms-1 text-decoration-none text-black" to='/cart'>
                                    <FontAwesomeIcon icon={faCartShopping} />
                                    <span className='ms-1'>({cart.length})</span>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </nav>
            {/* <Home /> */}
        </>
    )
}

export default Navbar
