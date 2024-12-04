import React from 'react'
import style from './Section1.module.css'

export default function Section1() {
  return (
    <>

<div className={`  ${style.element} relative flex items-center justify-start h-screen bg-cover bg-center cursor-pointer`} id='SECTION1'>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black bg-opacity-40"></div>

  {/* Content */}
  <div className="relative p-5 md:p-10 lg:ml-9 bg-black bg-opacity-40 max-w-4xl">
    <p className="text-4xl md:text-6xl lg:text-7xl hover:underline hover:animate-bounce hover:text-red-800  font-bold text-white leading-tight">
      WE SERVE
    </p>
    <p className="text-lg md:text-xl lg:text-2xl text-white mt-4">
      MEDICAL SUPPLIES
    </p>
    <p className="text-4xl md:text-6xl lg:text-7xl pt-4 font-bold  hover:underline hover:animate-bounce hover:text-red-800  text-white leading-tight">
      YOU DESERVE
    </p>
    <p className="text-lg md:text-xl lg:text-2xl text-white mt-4">
      The Best Health Services and Solutions
    </p>
  </div>
</div>


    
    
    
    
    </>
  )
}
