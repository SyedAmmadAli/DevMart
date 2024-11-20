import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home/home";
import { Signup } from "../pages/auth/signup";
import { Login } from "../pages/auth/login";
import { Products } from "../pages/products/products";
import { ProductInfoPage } from "../pages/product-info/product-info-page";


export const publicRoutes = createBrowserRouter([

    {
        path: '/',
        element: <Home/>
    },
    {
        path: '/auth/signup',
        element: <Signup/>
    },
    {
        path: '/auth/login',
        element: <Login/>
    },
    {
        path: '/products',
        element: <Products/>
    },
    {
        path: '/product-info',
        element: <ProductInfoPage/>
    }
    
])