"use client"
import react from 'react';
import Image from 'next/image';



import  CustomButton  from './CustomButton';
const Hero =() =>{
    const handleScroll = () =>{

    }
    
    return (
        <div className='hero'>
            <div className='flex-1 pt-36 padding-x'>
                 <h1 className='hero__title'>
                     Find,Book or Buy a gift quicly and easly!!
                </h1>
                <p className=' hero__subtitle'>
                    Streamline your best gift for your soulmate and friends</p>
                <CustomButton  
                 title="explore Gifts" 
                 containerStyles="bg-primary-blue text-white rounded-full mt-10"
                 handleClick={handleScroll} />
            </div>
            <div className='hero__image-container'>
                <div className='hero__image'>
                    <Image src='/hero.png' alt ="hero" fill className="object-contain" />
                    <div className='hero__image-overlay' />
                </div>
            </div>
            
          </div>
    )
}

export default Hero