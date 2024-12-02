import React from "react"
import '../index.scss'
import { RouterProvider } from "react-router-dom"
import { privateRoutes, publicRoutes } from "./routes/router"
import { useSelector } from "react-redux"


function App() {

  
  const isLogin = useSelector(state => state.user.isLogin) 

  return (
    <>
    <RouterProvider router={isLogin? privateRoutes : publicRoutes }></RouterProvider>

    </>
  )
}

export default App
