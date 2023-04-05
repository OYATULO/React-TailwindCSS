import React from 'react'
import { logo } from '../assets'
import GetStarted from './GetStarted'

const Herro = () =>(

  <section className='flex  md:flex-row flex-col  justify-between '>
    <div className='flex  flex-col '>
        <div className='box-gradient flex flex-row w-fit items-center py-[6px] px-4 rounded-[10px] mb-2 '>
          <img src={logo} alt="" srcset=""  className='w-[15px] h-[15px]' />
          <p className='ml-2'>
            <span className='text-white'> 20% </span> 
              discount for {" "}
            <span className='text-white'>1 month </span>
              acount
          </p>
        </div>

      <div className="flex flex-row  justify-between items-center ">
        <h1 className='flex-1  font-poppins font-semibold ss:text-[65px] text-[50px] text-white ss:leading-[90px] leading-[90px]'>
          The Next <br className='sm:block hidden '/> {" "}
          <span className='text-gray-400' > 
          Generation
          </span>{" "}
        </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
      </div>

      <h1 className='font-poppins font-semibold ss:text-[60px] text-[50px] ss:leading-[100px] leading-[75px] text-white '>
        Payment Method.
      </h1>
      <p className='max-w-[470px] text-justify mt-5 mb-10  '>
      The standard chunk of Lorem Ipsum used since the 1500s is 
      reproduced below for those interested. Sections 1.10.32 and 1.10.33 from 
      "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, 
      accompanied by English versions from the 1914 translation by H. Rackham.
      </p>

    </div>  
    <div className='relative'>
      <img src={logo} alt="" className='max-md:w-[80%] m-auto  w-[600px]  relative z-[5]' />
   
      <div className="w-[100%] h-[60%] absolute z-0 pink-gradient top-0  right-0"> </div>
      <div className="w-[100%] h-[60%] absolute z-0 red-gradient bottom-0 right-0 "> </div>
    </div>

    <div className="flex ss:hidden mt-[6rem] mb-10 justify-center  ">
      <GetStarted/>
    </div>
   
  </section>  
)
export default Herro