import React from 'react'
import { Page_layout } from '../../components/layouts/page-layout'
import { SectionHeading } from '../../components/section-headings/section-heading'
import styles from "./products.module.scss"
import dummydata from "../../services/dummy-data.json"
import { ProductCards } from '../../components/cards/product-cards'


export const Products = () => {
    return (
        <>
            <Page_layout>
                <div className={`${styles.categorySection} container my-5 py-5`}>
                    <SectionHeading title="Best Selling Products">This Month</SectionHeading>
                    <div className='d-flex flex-wrap justify-content-md-between justify-content-center mt-4'>
                        {
                            dummydata?.products.slice(0, 8).map((item, key) => (
                                <div key={key} className='mt-5'>
                                    <ProductCards data={item} />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </Page_layout>
        </>
    )

}
