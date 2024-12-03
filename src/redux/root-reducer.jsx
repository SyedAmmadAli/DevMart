import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./feature/user-slice";
import cartReducer from "./feature/cart-slice";

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer
})

export default rootReducer