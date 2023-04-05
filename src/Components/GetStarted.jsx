import React from 'react'
import { logo } from '../assets'
const GetStarted = () => (

    <div className='w-[140px]  h-[140px] -mt-6 rounded-full box-gradient  p-1 cursor-pointer'>
       <div className='flex flex-col justify-center items-center  bg-primary w-full h-full rounded-full'>
           <div className="flex flex-row justify-start">
              <p className='font-poppins  font-medium text-[18px] leading-[23px] mr-2' >
                 <span className=''>GET </span>
                  </p>
              <img src={logo} alt="" srcset="" className=' w-6 h-6 object-contain' />
           </div>
           <p className='font-poppins  font-medium text-[18px] leading-[23px]'>
                 <span className=''>Started</span>
             </p>
       </div> 
    </div>
)
    
export default GetStarted