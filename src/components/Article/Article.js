import React from 'react'
import Image from 'next/dist/client/image'
const Article = ({ titulo, fecha }) => {
  return (
    <div className="w-full h-52 flex flex-col ">
      <div className="relative w-full h-50 md:h-40">
        <Image src="/images/aplicacion2.jpeg" layout="fill" alt="" />
      </div>
      <div className="flex flex-col">
        <div className="text-base text-primary-900 font-bold text-left mt-2">
          <h2 className="text-left text-base mb-2" >
            {titulo}
          </h2>
        </div>
        <div className="text-primary-400 text-sm text-left mb-2">
          {fecha}
        </div>
      </div>
    </div>
  )
}

export default Article
