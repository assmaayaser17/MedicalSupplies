import React from 'react'
import product1 from '../../assets/images/product1.png'
import product2 from '../../assets/images/product2.png'
import product3 from '../../assets/images/product3.png'
import product4 from '../../assets/images/product4.png'
import product5 from '../../assets/images/product5.png'
import product6 from '../../assets/images/product6.png'
export default function Section3() {
  return (
    
    <>

    <div className='container mx-auto bg-gray-200 bg-opacity-30 mt-10 p-5 cursor-pointer' id='PORTOFOLIO'>

        <div className='headline flex flex-col items-center'>

            <h3 className='text-4xl font-bold'>PORTOFOLIO</h3>
            <div className='bg-red-800 h-1 w-44 mt-3'></div>

        </div>

        <div className='cards mt-10 bg-white  pt-5 flex flex-col justify-center items-center gap-5'>
            <div className='part1 grid lg:grid-cols-3 sm:grid-cols-1 gap-5 '>
                <div className='card1 border  border-red-800 border-solid w-96 h-96 flex justify-center items-center  rounded-lg'>
                    <img src={product1} width={300} alt='' />
                </div>

                <div className='card2 border  border-red-800 border-solid w-96 h-96 flex justify-center items-center  rounded-lg'>
                    <img src={product2} width={300} alt='' />
                </div>

                <div className='card3 border  border-red-800 border-solid w-96 h-96 flex justify-center items-center  rounded-lg'>
                    <img src={product3} width={300} alt='' />
                </div>


            </div> 
            <div className='part2 grid lg:grid-cols-3  sm:grid-cols-1 gap-5 '>
                <div className='card4 border  border-red-800 border-solid w-96 h-96 flex justify-center items-center  rounded-lg'>
                    <img src={product4} width={300} alt='' />
                </div>

                <div className='card5 border border-red-800 border-solid w-96 h-96 flex justify-center items-center  rounded-lg'>
                    <img src={product5} width={300} alt='' />
                </div>

                <div className='card6 border border-red-800 border-solid w-96 h-96 flex justify-center items-center  rounded-lg'>
                    <img src={product6} width={300} alt='' />
                </div>


            </div>

            
        </div>









    </div>
    
    
    
    
    
    </>
  )
}
