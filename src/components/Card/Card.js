import React from 'react'
import Image from 'next/dist/client/image'
const Card = ({ etiqueta, titulo, fecha }) => {
  return (
    <div className="relative w-full h-full  mx-auto shadow bg-cover flex">
      <div className="w-full flex justify-center items-end z-10">
        <div className="text-center w-full px-3 pb-4 bg-gradient-to-t from-primary-900 via-primary-800 to-transparent ">
          <div className="bg-secondary-400 text-white  w-15 text-xs font-bold">
            <h5>ANDROID</h5>
          </div>
          <div className="text-lg text-white font-bold text-left mt-2">
            <span className="text-right text-base sm:text-3xl">
              Como tener PROCREATE de iOS en Android
            </span>
          </div>
          <div className="text-primary-200 text-sm text-left">
            October 18, 2021
          </div>
        </div>
      </div>
      <Image
        alt=""
        layout="fill"
        className="z-0"
        src="/images/imgBlog1.jpeg"
      />
    </div>
  )
}

export default Card
