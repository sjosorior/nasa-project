import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-center w-full h-full'>
        <div className='flex mt-8'>
            <Image src="/image/logo-NASA.png" alt="Logo" width={100} height={60} className='my-auto'/>
            <span className='my-auto font-semibold text-4xl font-inter'>NASA Search</span>
        </div>
    </div>
  )
}

export default Header
