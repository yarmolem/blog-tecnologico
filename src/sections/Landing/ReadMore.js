import React from 'react'
import BigArticle from '../../components/Article/BigArticle'
import HeaderCard from '../../components/Card/HeaderCard'

const ReadMore = () => {
  return (
    <div className="">
      <HeaderCard text="Leer Mas »" boton={true} />
      <div className="bg-white dark:bg-primary-800 p-4 ">
        <div className="w-full h-full row-span-2">
          <BigArticle />
        </div>
      </div>
    </div>
  )
}

export default ReadMore
