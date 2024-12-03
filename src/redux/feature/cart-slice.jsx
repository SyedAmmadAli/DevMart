import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    product: []
}


const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {

        addProductintoCart(state, action) {

            const productExist = state.product.find(item => item.product_id === action.payload.id)
            if (productExist) {
                productExist.quantity++;
            }
            else {
                state.product.push({
                    quantity: 1,
                    product_id: action.payload.id,
                    product: action.payload
                })
            };
        },
        
        decreaseProductQuantity(state, action) {

            const productExist = state.product.find(item => item.product_id === action.payload.id)
            if (productExist) {
                if (productExist.quantity > 1) {
                    productExist.quantity--;    
                }else{
                    state.product = state.product.filter(item=> item.product_id !== action.payload.id)
                }
            }
        },

        removeProductFromCart(state,action){
            state.product = state.product.filter(item=> item.product_id !== action.payload.id)
        },

        removeAllProduct(state,action){
            state.product = [];
        }

    }
})

export const { addProductintoCart, decreaseProductQuantity, removeProductFromCart, removeAllProduct } = cartSlice.actions
export default cartSlice.reducer;