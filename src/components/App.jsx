import { Route, Routes } from "react-router-dom"
import Footer from "./Footer"
import Home from "./Home"
import Navbar from "./Navbar"
import Sign from './Sign'
import Contact from "./Contact"
import About from "./About"
import Cart from '../rtk/cart/Cart'
import Login from "./Login"
import WishList from "../rtk/wishList/WishList"
import Checkout from "./Checkout"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/home" Component={Home} />
        <Route path="/contact" Component={Contact} />
        <Route path="/about" Component={About} />
        <Route path="/sign" Component={Sign} />
        <Route path="/login" Component={Login} />
        <Route path="/cart" Component={Cart} />
        <Route path="/cart/checkout" Component={Checkout} />
        <Route path="/wishlist" Component={WishList} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
