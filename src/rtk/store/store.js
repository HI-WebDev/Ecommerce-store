import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../cart/cartSlice";
import logger from "redux-logger";
import productSlice from '../products/productSlice'

const store = configureStore({
    reducer: {
        cart: cartSlice,
        products: productSlice
    },
    middleware: (GetDefaultMiddleware) => GetDefaultMiddleware().concat(logger)
})

export default store


