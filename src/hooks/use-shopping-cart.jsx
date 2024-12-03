import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProductintoCart, decreaseProductQuantity, removeProductFromCart } from '../redux/feature/cart-slice';
import { Navigate, useNavigate } from 'react-router-dom';


const useShoppingCart = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.cart.product) ?? []
    const isLogin = useSelector(state => state.user.isLogin);
    const navigate = useNavigate();

    function addToCart(p) { 
        if (!isLogin) {
            navigate("/auth/signup")
            return;
        };
        if (!p) return;
        dispatch(addProductintoCart(p))
    }

    function decreaseProductQuantityInCart(p) {
        if (!p) return;
        dispatch(decreaseProductQuantity(p))
    }

    function removeFromCart(p) {
        if (!p) return;
        dispatch(removeProductFromCart(p))
    }


    function clearCart() {
        dispatch(removeProductFromCart())
    }

    function getCartCount(p) {
        return products.length;
    }

    function getCartProducts(p) {
        return products;
    }

    function getCartProductsQuantity(p) {
        if (!p) return; 
        return products.find(item => item.products_id === p.id)?.quantity ?? 0;
    }

    function getCartSingleProduct(p) {
        if (!p) return;
        return products.find(item => item.products_id === p.id);
    }


    return { addToCart, decreaseProductQuantityInCart, removeFromCart, getCartCount, getCartProducts, getCartProductsQuantity, getCartSingleProduct, clearCart }
}

export default useShoppingCart