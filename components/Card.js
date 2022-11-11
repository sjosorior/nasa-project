import Image from 'next/image'
import React from 'react'

const Card = () => {
  return (
    <div>
      <div
      className="drop-shadow-md w-[275px] h-[244px] rounded">
      <div className="w-full mt-12">
        <Image
          src={"/image/space-NASA.png"}
          alt="rick-morty"
          width={256}
          height={244}
          className="rounded"
        />
      </div>
      <div className=" flex flex-col pl-2 pt-2 rounded w-[275px] text-white">
        <span className="text-[14px] pl-0">Infrared Spotlight on Orion Sword</span>
        <span className="pb-3 pl-0 text-[14px] text-gray-300">185 MB {"."} <span className='text-[14px] text-gray-300'>14 minutes ago</span></span>
        <div className='rounded-3xl bg-violet-300 w-15 h-5 text-center'>
        <span className='font-semibold pb-2'>PHOTO</span>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Card
