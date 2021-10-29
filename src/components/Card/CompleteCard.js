import React from 'react'
import Card from '../../components/Card/Card'
import SmallArticle from '../../components/Article/SmallArticle'
import HeaderCard from '../../components/Card/HeaderCard'
const CompleteCard = ({ title, boton }) => {
  return (
    <div className="">
      <HeaderCard text={title} boton={boton} />
      <div className="bg-white dark:bg-primary-800 p-4 ">
        <div className="w-full h-48 md:h-56 row-span-2">
          <Card />
        </div>
        <div className="mt-4 grid grid-cols-1 gap-5">
          <SmallArticle />
          <SmallArticle />
          <SmallArticle />
          <SmallArticle />
        </div>
      </div>
    </div>
  )
}

export default CompleteCard
