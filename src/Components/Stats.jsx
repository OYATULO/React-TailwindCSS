import { Statslist } from '../constants'

import React from 'react'


const Stats = () =>  (

  <section className='flex  flex-row max-[1000px]:flex-col  mb-10 w-full justify-center items-center ' >
              {
                Statslist.map((data)=>(
                   <div key={data.id} className="flex flex-row justify-center items-center  px-5 ">
                        <h4 className='text-[35px] mr-3 max-[1000px]:text-[40px] '>{data.value}</h4>
                        <p className='text-[18px] max-[1000px]:text-[25px]  text-transparent bg-clip-text bg-gradient-to-tl from-blue-600 to-white'>{data.title}</p>
                     
                    </div>
                ))
              }
  </section>
  )
export default Stats