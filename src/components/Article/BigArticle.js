import React from 'react'
import Image from 'next/dist/client/image'
import Link from 'next/dist/client/link'

const BigArticle = ({ etiqueta, titulo, contenido, fecha }) => {
  return (
    <div className="flex flex-col md:flex-row gap-4">
      <Link href="/contenido">
        <div className="relative min-w-56 h-50 md:h-40 cursor-pointer">
          <Image src="/images/aplicacion2.jpeg" layout="fill" alt="" />
        </div>
      </Link>
      <div className="flex flex-col">
        <div className=" text-secondary-500  w-15 text-sm font-semibold uppercase">
          <h5>{etiqueta}</h5>
        </div>
        <div className="text-base text-primary-900 font-bold text-left mt-2  cursor-pointer dark:text-white ">
          <Link href="/contenido"><h2 className="text-left text-2xl mb-2 hover:text-secondary-500" >
            {titulo}
          </h2>
          </Link>
        </div>
        <div className="text-primary-800 text-base text-left mb-2 dark:text-primary-200 font-mono">
          {contenido}
        </div>
        <div className="text-primary-300 text-sm text-left mb-2 font-mono">
          {fecha}
        </div>
      </div>
    </div>
  )
}

export default BigArticle
