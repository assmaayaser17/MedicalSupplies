import React from 'react'
import style from './ContactUs.module.css'


export default function ContactUs() {
  return (
    <>

    <div className='container  bg-gray-400  mx-auto   text-white font-bold grid lg:grid-cols-1 md:grid-cols-1 justify-center items-center'>
        <div className='p-5    '>
            <div className='p-5'>
               <div  className='flex flex-col items-center' >
                <p className='text-center text-3xl'>Follow Us:</p>
                <div className='flex gap-7 mt-7 justify-center'>  
                  <a href='https://www.instagram.com/uni.medic1/profilecard/?igsh=MTgzZ3lhMmxxdXVmbg=='>
                    
                    <i class="fa-brands fa-instagram fa-xl"  ></i>
    
    
                    </a>
    
                    <a href='https://www.facebook.com/share/1B7cPV9dJS/?mibextid=LQQJ4d'>
                    <i class="fa-brands fa-facebook fa-xl"></i>
                    </a>


                </div>
                <div className='flex justify-center items-center gap-4 '>
                <i class="fa-solid fa-phone fa-xl mt-6"></i>
                
                <p className='mt-7 text-2xl '> : 01508017801</p>

                </div>
                
              

  

                

               </div>

            </div>

        </div>
    </div>
    
    
    
    
    
    
    </>
  )
}
