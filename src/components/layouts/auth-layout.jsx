import React from 'react'
import { Page_layout } from './page-layout'
import AuthBanner from '../../assets/imgs/Auth_Banner.png'
import styles from './layouts.module.scss'

export const AuthLayout = ({ children }) => {
    return (
        <>
            <Page_layout>
                <div className='container-fluid px-0'>
                    <div className="row m-0 p-0">
                        <div className="col-6 m-0 p-0 d-lg-block d-none">
                            <figure className={styles.AuthBanner_img}>
                                <img src={AuthBanner} alt="" />
                            </figure>
                        </div>
                        <div className="col-lg-6 col-sm-10 col-11 mx-auto">

                            <div className={styles.form_wrapper}>
                               
                                {children}
                            </div>
                        </div>
                    </div>

                </div>
            </Page_layout>
        </>
    )
}
