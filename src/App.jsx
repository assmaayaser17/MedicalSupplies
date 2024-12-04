import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout'
import Products from './Components/Products/Products'
import ContactUs from './Components/ContactUs/ContactUs'
import Section2 from './Components/Sections/Section1'



function App() {
  const [count, setCount] = useState(0)



  let routes = createBrowserRouter([

    {path:'' , element:<Layout/> , children:[
      {index: true , element:<Home/>},
      {path:"PRODUCTS" , element:<Products/>},
      {path:"ContactUs" , element:<ContactUs/>}
      





    ] }




  ])

  return (
    <>

    <RouterProvider router={routes} >


    </RouterProvider>



   
    </>
  )
}

export default App
