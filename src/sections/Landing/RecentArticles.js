import React from 'react'
import Article from '../../components/Article/Article'
import HeaderCard from '../../components/Card/HeaderCard'

const RecentArticles = () => {
  return (
    <div className="mt-3">
      <HeaderCard text="Articulos Recientes" boton={false} />
      <div className="bg-white dark:bg-primary-800 p-4 ">
        <div className="w-full   row-span-2 grid grid-cols-2 gap-4">
          <Article
            titulo="Como tener PROCREATE de iOS en Android"
            fecha="October 18, 2021"
          />
          <Article
            titulo="Como tener PROCREATE de iOS en Android"
            fecha="October 18, 2021"
          />
          <Article
            titulo="Como tener PROCREATE de iOS en Android"
            fecha="October 18, 2021"
          />
          <Article
            titulo="Como tener PROCREATE de iOS en Android"
            fecha="October 18, 2021"
          />
        </div>
      </div>
    </div>
  )
}

export default RecentArticles
