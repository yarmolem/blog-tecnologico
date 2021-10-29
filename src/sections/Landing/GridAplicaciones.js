import React from 'react'
import BigCard from '../../components/Card/BigCard'
import SmallArticle from '../../components/Article/SmallArticle'
import HeaderCard from '../../components/Card/HeaderCard'

const GridAplicaciones = () => {
  return (
    <div className="">
      <HeaderCard text="Aplicaciones" boton={true} />
      <div className="bg-white dark:bg-primary-800 p-4 ">
        <div className="w-full h-48 md:h-72 row-span-2">
          <BigCard />
        </div>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-5">
          <SmallArticle />
          <SmallArticle />
          <SmallArticle />
          <SmallArticle />
        </div>
      </div>
    </div>
  )
}

export default GridAplicaciones
