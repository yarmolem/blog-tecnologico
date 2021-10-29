import React from 'react'
import Image from 'next/dist/client/image'

const BigArticle = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4">
      <div className="relative min-w-56 h-50 md:h-40">
        <Image src="/images/aplicacion2.jpeg" layout="fill" alt="" />
      </div>
      <div className="flex flex-col">
        <div className=" text-secondary-500  w-15 text-sm font-semibold ">
          <h5>ANDROID</h5>
        </div>
        <div className="text-base text-primary-900 font-bold text-left mt-2">
          <h2 className="text-left text-2xl mb-2" >
            Como tener PROCREATE de iOS en Android
          </h2>
        </div>
        <div className="text-primary-800 text-base text-left mb-2">
          Si eres de los que te gusta diseñar y tener una app de dibujo que sea de gran ayuda para la labor que realizas…
        </div>
        <div className="text-primary-400 text-sm text-left mb-2">
          October 18, 2021
        </div>
      </div>
    </div>
  )
}

export default BigArticle
