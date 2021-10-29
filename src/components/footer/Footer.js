import Image from 'next/dist/client/image'
import React from 'react'

const index = () => {
  return (
    <div className="bg-primary-800 text-center md:text-left ">
      <div className="flex flex-col lg:flex-row  justify-center md:max-w-280 mx-auto gap-5 px-4 sm:px-0">
        <div className=" my-7  w-full flex flex-col md:flex-row  gap-5 items-center">
          <div className="relative w-40 h-7">
            <Image src="/images/jamesitokBlanco.png" layout="fill" alt="" />
          </div>
          <div className="text-white ">
            <h3 className="font-bold text-xl mb-1">Acerca de</h3>
            <p className="text-gray-300 text-base">Aquí encontraras las mejores aplicaciones y personalizaciones para tu teléfono <br /> celular con Android.Blog de tecnología y apps moviles.</p>
          </div>
        </div>
      </div>
      <div className="w-full    items-center bg-black  py-3 px-4">
        <div className="justify-start flex md:max-w-280 mx-auto text-white text-base text-left">
          <p> Copyright © 2021 Jamesitok</p>
        </div>
      </div>
    </div >
  )
}

export default index
