import React from 'react'
import { TopBar } from '../headers/top-bar'
import { Navbar } from '../headers/navbar'
import { Footer } from '../footer/footer'

export const Page_layout = ({children}) => {
    return (
        <>
            <TopBar/>
            <Navbar/>
            {children}
            <Footer/>
        </>)
}
