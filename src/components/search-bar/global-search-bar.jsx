import React from 'react'
import styles from "./searchbar.module.scss";
import { IoSearchOutline } from "react-icons/io5";


export const GlobalSearch = () => {
    return (
        <div className={`${styles.global_search_container} d-flex align-items-center`}>
            <input className="form-control me-2" type="search" placeholder="What are you looking for?" aria-label="Search" />
            <IoSearchOutline style={{ fontSize: '26px' }} />
        </div>
    )
}

