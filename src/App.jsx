import React from "react"
import '../index.scss'
import { RouterProvider } from "react-router-dom"
import { publicRoutes } from "./routes/router"


function App() {
  

  return (
    <>
    <RouterProvider router={publicRoutes}></RouterProvider>

    </>
  )
}

export default App
