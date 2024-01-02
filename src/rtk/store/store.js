import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../cart/cartSlice";
import logger from "redux-logger";
import productSlice from '../products/productSlice'
import wishListSlice from '../wishList/wishListSlice'

const store = configureStore({
    reducer: {
        cart: cartSlice,
        products: productSlice,
        wishList: wishListSlice
    },
    middleware: (GetDefaultMiddleware) => GetDefaultMiddleware().concat(logger)
})

export default store


