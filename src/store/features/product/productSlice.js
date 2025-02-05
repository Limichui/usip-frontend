import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    initialValue: 10,
    dataProduct:  [
        {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
        {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
        {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
        {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
        {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
        {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
    ],
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setInitialValue: (state, payload) => {
            state.initialValue = payload
        },
    },
})


export const { setInitialValue } = productSlice.actions

export default productSlice.reducer