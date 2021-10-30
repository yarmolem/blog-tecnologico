import React from 'react'
import Image from 'next/dist/client/image'

const SmallArticle = ({ titulo, fecha, imagen }) => {
  return (
    <div className="flex gap-3">
      <div className="relative w-36 h-16">
        <Image src="/images/aplicacion2.jpeg" layout="fill" alt="" />
      </div>
      <div className="flex flex-col gap-1">
        <div className="font-bold text-base dark:text-white">{titulo}</div>
        <div className="text-primary-200 text-sm text-left">
          {fecha}
        </div>
      </div>
    </div>
  )
}

export default SmallArticle
