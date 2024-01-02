import { createSlice } from "@reduxjs/toolkit";

const wishListSlice = createSlice({
    name: "wishListSlice",
    initialState: [],
    reducers: {
        "addToWishList": (state, action) => {
            const findProduct = state.find((product) => product.id === action.payload.id)
            if (findProduct) {
                findProduct.quantity += 1
            } else {
                const productClone = { ...action.payload, quantity: 1 }
                state.push(productClone)
            }
        },
        "deleteFromWishListe": (state, action) => {
            return state.filter((product) => product.id !== action.payload.id)
        },
        "clear": () => {
            return []
        }
    }
})



export default wishListSlice.reducer;
export const { addToWishList, deleteFromWishListe, clear } = wishListSlice.actions