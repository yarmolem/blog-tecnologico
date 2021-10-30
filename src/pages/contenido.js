import React from 'react'
import Head from 'next/dist/shared/lib/head'
import CompleteCard from '../components/Card/CompleteCard'
import RecentArticles from '../sections/Landing/RecentArticles'
import Comments from '../sections/Landing/Comments'
import TagsMenu from '../sections/Landing/TagsMenu'
import Blog from '../sections/Contenido/Blog'
import Image from 'next/dist/client/image'
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
          <div className="border-solid border-primary-50 border-b-2 ">
            <Blog crumbs={crumbs} />
          </div>
          <div className="bg-white dark:bg-primary-800  p-4">
            <div className="relative min-w-56 h-56 sm:h-90 md:h-100">
              <Image src="/images/aplicacion2.jpeg" layout="fill" alt="" />
            </div>
            <div className="mt-3"></div>
            <p className>
              Hola chicos y chicas bienvenidos a un nuevo tics de aplicaciones, Hoy para los amantes creadores de videos musicales que buscan incluir en escenas divertidas,  grandes efectos e incluir la magia que  captara a todos tus seguidores, pues te cuento que conocerás una aplicación muy útil para el desarrollo de tus videos musicales, producirás videos como todo un profesional.
            </p>
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
