import { createBrowserRouter } from "react-router-dom";
// import { Home } from "../pages/Home/home";
// import { Signup } from "../pages/auth/signup";
// import { Login } from "../pages/auth/login";
// import { Products } from "../pages/products/products";
// import { ProductInfoPage } from "../pages/product-info/product-info-page";
// import { Checkout } from "../pages/checkout/checkout";
import { lazy, Suspense } from "react";
import Loader from "../components/loader/loader";

const Home = lazy(() =>
    import("../pages/Home/home").then((module) => ({ default: module.Home }))
);

const Signup = lazy(() =>
    import("../pages/auth/signup").then((module) => ({ default: module.Signup }))
);

const Login = lazy(() =>
    import("../pages/auth/login").then((module) => ({ default: module.Login }))
);

const Products = lazy(() =>
    import("../pages/products/products").then((module) => ({ default: module.Products }))
);

const ProductInfoPage = lazy(() =>
    import("../pages/product-info/product-info-page").then((module) => ({ default: module.ProductInfoPage }))
);

const Checkout = lazy(() =>
    import("../pages/checkout/checkout").then((module) => ({ default: module.Checkout }))
);


export const publicRoutes = createBrowserRouter([

    {
        path: '/',
        element: <Suspense fallback={<Loader/>}><Home/></Suspense>
    },
    {
        path: '/auth/signup',
        element: <Suspense fallback={<Loader/>}><Signup/></Suspense>
    },
    {
        path: '/auth/login',
        element: <Suspense fallback={<Loader/>}><Login/></Suspense>
    },
    {
        path: '/products',
        element: <Suspense fallback={<Loader/>}><Products/></Suspense>
        
    },
    {
        path: '/product-info',
        element: <Suspense fallback={<Loader/>}><ProductInfoPage/></Suspense>
        
    },
    {
        path: '/checkout',
        element: <Suspense fallback={<Loader/>}> <Checkout/></Suspense> 
       
    },
    {
        path: '*',
        element: <h1>404 Not Found</h1>
    },
    
])

export const privateRoutes = createBrowserRouter([

    {
        path: '/',
        element: <Suspense fallback={<Loader/>}><Home/></Suspense>
    },
    {
        path: '/products',
        element: <Suspense fallback={<Loader/>}><Products/></Suspense>
        
    },
    {
        path: '/product-info',
        element: <Suspense fallback={<Loader/>}><ProductInfoPage/></Suspense>
        
    },
    {
        path: '/checkout',
        element: <Suspense fallback={<Loader/>}> <Checkout/></Suspense> 
       
    },
    {
        path: '*',
        element: <h1>404 Not Found</h1>
    },
    
])

