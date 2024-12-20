import React, { useContext } from 'react'
import styles from './sidebar.module.scss'
import { SidebarContext } from '../../context/sidebarContext'
import { RxCross1 } from "react-icons/rx";
import { NavLink, useNavigate } from 'react-router-dom';
import { GlobalSearch } from '../search-bar/global-search-bar';
import { ShoppingCart } from '../shopping_cart/shopping-cart';
import { useDispatch, useSelector } from 'react-redux';
import { removeUser } from '../../redux/feature/user-slice';


export const Sidebar = () => {


  const isLogin = useSelector(state => state.user.isLogin);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signOut = () =>{
      dispatch(removeUser());
      navigate("/");
  } 

  const { is_Sidebar, sidebarOpen, sidebarClose } = useContext(SidebarContext);

  const is_Sidebar_active = is_Sidebar ? `${styles.sidebar_container} ${styles.active}` : `${styles.sidebar_container}`

  return (
    <aside className={is_Sidebar_active}>
      <span className={styles.close_sidebar_icon} onClick={() => sidebarClose()}><RxCross1 /></span>

      <div className={styles.nav_content_container}>
        <div className={styles.GlobalSearch_container}>
          <GlobalSearch />
        </div>
        <div className={styles.ShoppingCart_wrapper}>
          <h5>My Shopping</h5><ShoppingCart /> 
        </div>
        <div className={styles.Nav_link_container}>
          <ul>
            <li>
              <NavLink to='/' className={`${styles.nav_link_item} nav-link active`}>Home</NavLink>
            </li>
            <li>
              <NavLink to='/contact' className={`${styles.nav_link_item} nav-link active`}>Contact</NavLink>
            </li>
            <li>
              <NavLink to='/about' className={`${styles.nav_link_item} nav-link active`}>About</NavLink>
            </li>
            {isLogin ?
            <li>
              <NavLink onClick={signOut} className={`${styles.nav_link_item} nav-link active`}>Sign Out</NavLink>
            </li>:
            <li>
              <NavLink to='/auth/signup' className={`${styles.nav_link_item} nav-link active`}>Sign Up</NavLink>
            </li>
            
            }
          </ul>
        </div>
      </div>
    </aside>
  )
}
