import {useState} from 'react';
import {NavLinks} from '../constants'
import {logo,logomenu,close} from '../assets';

const Navbar = () => {

  const[toggle,setToggle] = useState(false);

  return (
    <nav className="w-full  flex py-6  justify-between">
        <img src={logo} alt='react' className='w-[50px]' />
        <ul className='list-none sm:flex hidden  items-center'>
           {
            NavLinks.map((nav,index)=>(
              <li className='ml-5 ' >
                  <a href={`#${nav.id}`} className={`text-white hover:text-red-200 text-[20px]`}>{nav.title}</a>
              </li>
            ))
           }
        </ul>

      <div className='sm:hidden flex flex-1 justify-end items-center'>
           <img src={toggle?close:logomenu} alt="menu" 
           className='w-[35px] object-contain' onClick={()=>setToggle(x=>!x)}/>
<div className={`${toggle? 'flex' : 'hidden' }
 justify-center items-center  content-center py-6 bg-black absolute    top-20 right-0 mx-4 my-4 min-[140px]    rounded-xl w-[200px]  transition`}>
<ul className='list-none text-center'>
           {
            NavLinks.map((nav,index)=>(
              <li className='ml-5 ' >
                  <a href={`#${nav.id}`} className={`text-white hover:text-red-200 text-[20px]`}>{nav.title}</a>
              </li>
            ))
           }
        </ul>
</div>
      </div>


    </nav>
  
)
}

export default Navbar