import { createBrowserRouter } from "react-router-dom";
// import { Home } from "../pages/Home/home";
import { Signup } from "../pages/auth/signup";
import { Login } from "../pages/auth/login";
import { Products } from "../pages/products/products";
import { ProductInfoPage } from "../pages/product-info/product-info-page";
import { Checkout } from "../pages/checkout/checkout";
import { lazy, Suspense } from "react";

const Home = lazy(()=> import("../pages/Home/home"))


export const publicRoutes = createBrowserRouter([

    {
        path: '/',
        element: <Suspense fallback={<h1>Loading..</h1>}><Home/></Suspense>
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
    },
    {
        path: '/checkout',
        element: <Checkout/>
    },
    
])