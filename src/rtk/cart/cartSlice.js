import { createSlice } from "@reduxjs/toolkit";



const cartSlice = createSlice({
    name: 'cartSlice',
    initialState: [],
    reducers: {
        'addToCart': (state, action) => {
            const findProduct = state.find((product) => product.id === action.payload.id)
            if (findProduct) {
                findProduct.quantity += 1
            } else {
                const productClone = { ...action.payload, quantity: 1 }
                state.push(productClone)
            }
        },
        'deleteFromCart': (state, action) => {
            return state.filter((product) => product.id !== action.payload.id)
        },
        'clear': () => {
            return [];
        }
    },
})

export default cartSlice.reducer;

export const { addToCart, deleteFromCart, clear } = cartSlice.actions