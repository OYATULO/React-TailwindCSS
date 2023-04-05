import React from 'react';
import { CTAlist } from '../constants';
import Button from './button';

var Test = (({id,icon,title,caption})=>{
        return (
               <div className={`flex flex-row items-center w-full hover:bg-gradient-to-tr from-slate-600 to-slate-900 hover:p-5 id-${id} ${id !== CTAlist.listIteme.length-1 ? "mb-6": "mb-0" }`}>
                                <div className="p-5  mx-4 my-4  rounded-full bg-slate-900">
                                        <img  src={`${icon}`} className='object-contain w-fit' />
                                 </div>
                                <div className="flex flex-1 flex-col ">
                                        <h2 className='font-extrabold text-[25px]'>{title}</h2>
                                        <p className='text-[20px]'>{caption}</p>
                                </div>  
                </div>
        )
})

const CTA = () => (

  <section className='flex flex-row max-[1000px]:flex-col w-full justify-center content-between  mt-6 mb-6 bg-primary'>
          <div className='max-[1000px]:w-full  w-6/12   flex flex-col  justify-between mr-4 '>
                 <h1 className='leading-[5rem]'>{CTAlist.title} </h1>
                 <p className='text-justify  mr-10 max-w-[470px]'>{CTAlist.caption}</p>
                <Button  Text="Get Started"/>
          </div>
          <div className="max-[1000px]:w-full w-6/12  flex flex-col mt-10 justify-between content-start items-start ">
                {
                    CTAlist.listIteme.map((data, index)=>(
                        <Test key={data.id} {...data} index={index}/>
                    ))
                        
                }
          </div>
  </section>

)
export default CTA