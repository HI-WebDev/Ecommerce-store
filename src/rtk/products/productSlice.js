import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading: false,
    data: [],
    error: ""
}

export const fetchProducts = createAsyncThunk("productSlice/fetchProducts", () => {
    return axios
        .get("https://fakestoreapi.com/products")
        .then((res) => res.data)
})

const productSlice = createSlice({
    name: 'productSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.loading = true
        });
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.loading = false,
                state.data = action.payload,
                state.error = ""
        });
        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.loading = false,
                state.data = [],
                state.error = action.payload.message
        })
    }
})


export default productSlice.reducer

// export const { } = productSlice.actions