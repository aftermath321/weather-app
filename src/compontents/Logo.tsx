import React from 'react'
import Image from 'next/image'
import Icon from '../../public/logo.png'
import Weather from './../../types/weather';

const Logo = () => {
  return (
    <div className="z-30 lg:absolute right-[80%] top-[-5%] sm:static">
  
      <Image src="/logo.png" alt="logo" width={125} height={125} className="relative " />
    </div>
  );
}

export default Logo