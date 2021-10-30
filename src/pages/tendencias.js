import React from 'react'
import Head from 'next/dist/shared/lib/head'
import CompleteCard from '../components/Card/CompleteCard'
import RecentArticles from '../sections/Landing/RecentArticles'
import Comments from '../sections/Landing/Comments'
import TagsMenu from '../sections/Landing/TagsMenu'
import ReadMore from '../sections/Landing/ReadMore'

const trending = () => {
  return (
    <div className=" mx-3">
      <Head><title>Jamesitok - Tendencias</title></Head>
      <div className=" my-4 flex flex-col lg:flex-row  justify-center md:max-w-280 mx-auto gap-5">
        <div className="w-full ">
          <ReadMore header={false} />
        </div>
        <div className="w-full h-full lg:w-2/4 sticky top-0">
          <CompleteCard title="Articulos Populares" boton={false} />
          <RecentArticles />
          <Comments />
          <TagsMenu />
        </div>
      </div>

    </div >
  )
}

export default trending
