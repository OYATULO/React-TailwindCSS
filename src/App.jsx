import React from 'react' ;

import {Navbar,Herro,Billing,Bussines,CTA,CarDealer,Clients,Stats,Button,feadbackCard,footer,testimontials, Forapi } from  './Components';

import styles from './style';

const App = () => (
    <div className='bg-primary w-full  max-sm:px-8 sm:px-[6rem]'>
          <div className={``}>
            <div className={``}>
                <Navbar />
            </div>
          </div>

          <div className='bg-primary '>
            <div className="">
            <Herro />
            </div>
          </div>

        <div className='bg-primary  '>
          <Forapi />
        </div>
        <div className="bg-primary ">
                <Stats/>
             <CTA/>
          
        <Clients/>
        <Bussines/>
        <CarDealer/>
        <Billing/>
        </div>
      

    </div>
);

export default App