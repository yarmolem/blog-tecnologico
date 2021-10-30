import React from 'react'
import Head from 'next/dist/shared/lib/head'
import CompleteCard from '../components/Card/CompleteCard'
import RecentArticles from '../sections/Landing/RecentArticles'
import Comments from '../sections/Landing/Comments'
import TagsMenu from '../sections/Landing/TagsMenu'
import HeaderBlog from '../sections/Contenido/HeaderBlog'
import ContentBlog from '../sections/Contenido/ContentBlog'
import FooterBlog from '../sections/Contenido/FooterBlog'
import GridTwoIphone from '../sections/Landing/GridTwoIphone'
import PostComment from '../sections/Contenido/PostComment'
import { IconMayor, IconMenor } from '../../public/icons/icon'
const Contenido = () => {
  const crumbs = [
    { path: '/', label: 'Inicio' },
    { path: '/android', label: 'android' }
  ]
  return (
    <div className=" mx-3">
      <Head><title>Jamesitok - Contenido</title></Head>
      <div className=" my-4 flex flex-col lg:flex-row  justify-center md:max-w-280 mx-auto gap-5">
        <div className="w-full border-solid border-primary-800 ">
          <div className="border-solid border-primary-50 border-b dark:border-primary-800 ">
            <HeaderBlog crumbs={crumbs} />
          </div>
          <div className="bg-white dark:bg-primary-800  px-4 pt-12">
            <ContentBlog />
            <FooterBlog />
          </div>
          <div className="mt-5 border-primary-50 border-b dark:border-primary-800 ">
            <GridTwoIphone text="Te puede gustar" />
          </div>
          <div className="mt-10 ">
            <PostComment text="Publicar un comentario" />
            <div className="mt-30"></div>
            <div className="flex text-primary-500 dark:text-primary-300 font-mono text-base justify-between ">
              <div className="flex gap-1 hover:text-secondary-500 ">
                <IconMenor className="w-2 " />
                <a href="">Artículo Anterior</a>
              </div>
              <div className="flex gap-1 hover:text-secondary-500">
                <a href="">Artículo Siguiente</a>
                <IconMayor className="w-2 " />
              </div>
            </div>
          </div>
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

export default Contenido
