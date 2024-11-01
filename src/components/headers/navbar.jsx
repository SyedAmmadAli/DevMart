import React, { useContext } from 'react'
import styles from "./navbar.module.scss";
import { IoSearchOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
import { Sidebar } from '../sidebar/sidebar';
import { SidebarContext } from '../../context/sidebarContext';
import { GlobalSearch } from "../search-bar/global-search-bar";
import { ShoppingCart } from "../shopping_cart/shopping-cart";
import { useDispatch, useSelector } from 'react-redux';
import { removeUser } from '../../redux/feature/user-slice';


export const Navbar = () => {

    const { is_Sidebar, sidebarOpen, sidebarClose } = useContext(SidebarContext);
    const isLogin = useSelector(state => state.user.isLogin);
    const dispatch = useDispatch()
    const avatar = useSelector(state => state.user.data.avatar);
    const username = useSelector(state => state.user.data.name);

    // console.log(isLogin);

    // console.log(is_Sidebar,sidebarOpen);

    const signOut = () => {
        dispatch(removeUser());
    }


    return (
        <>
            <Sidebar />
            <nav className={`${styles.app_navbar_container} navbar navbar-expand-lg py-3`}>
                <div className="container">
                    <a className="navbar-brand" href="#">Dev Mart</a>
                    <button className="navbar-toggler" onClick={() => sidebarOpen()} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse d-none" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item mx-3">
                                <NavLink to='/' className={`${styles.nav_link_item} nav-link active`} >Home</NavLink>
                            </li>
                            <li className="nav-item mx-3">
                                <NavLink to='/contact' className={`${styles.nav_link_item} nav-link active`} >Contact</NavLink>
                            </li>
                            <li className="nav-item mx-3">
                                <NavLink to='/about' className={`${styles.nav_link_item} nav-link active`} >About</NavLink>
                            </li>
                            {
                                isLogin ?
                                    <li className="nav-item mx-3">
                                        <NavLink onClick={signOut} className={`${styles.nav_link_item} nav-link active`} >Sign Out</NavLink>
                                    </li> :
                                    <li className="nav-item mx-3">
                                        <NavLink to='/auth/signup' className={`${styles.nav_link_item} nav-link active`} >Sign Up</NavLink>
                                    </li>
                            }
                        </ul>
                        <form className="d-flex gap-2" role="search">
                            <GlobalSearch />
                            <ShoppingCart />
                            {/* <img src={avatar} alt="" style={{width:'40px'}}/>
                            <span>{username}</span> */}

                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}
