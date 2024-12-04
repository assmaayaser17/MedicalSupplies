import React from 'react'
import logo from '../../assets/images/logo.png'
import  {Link}  from "react-router-dom"
export default function Navbar() {
  return (
   <>

<nav className="bg-white shadow-md  w-full">
  <div className="container mx-auto p-5 w-full grid  justify-between  lg:grid-cols-2 sm:grid-cols-6 md:grid-cols-1  items-center">
    
    <div className="logo">
      <img src={logo} width={200} alt="Logo" />
    </div>

   
    <div className=" grid lg:grid-cols-5   sm:grid-cols-1   gap-8 text-lg font-medium">
      <Link to={''} className="hover:text-red-800 hover:underline hover:animate-bounce cursor-pointer">Home</Link >
      <a href='#ABOUT' className="hover:text-red-800 hover:underline hover:animate-bounce cursor-pointer">About</a>
      <a href='#PORTOFOLIO' className="hover:text-red-800 hover:underline hover:animate-bounce cursor-pointer">Portfolio</a>
      <Link to={'/ContactUs'} className="hover:text-red-800 hover:underline hover:animate-bounce cursor-pointer">ContactUs</Link>
      <Link to={'PRODUCTS'} className="hover:text-red-800 hover:underline hover:animate-bounce cursor-pointer">Products</Link>
    </div>

    
 </div>
</nav>
</>

  )}

 
