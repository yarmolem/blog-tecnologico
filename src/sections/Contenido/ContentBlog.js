import React from 'react'
import Image from 'next/dist/client/image'

const ContentBlog = () => {
  return (
    <div className="">
      <div className="relative min-w-56 h-56 sm:h-90 md:h-100">
        <Image src="/images/aplicacion2.jpeg" layout="fill" alt="" />
      </div>
      <div className="mb-10"></div>
      <div className="text-primary-900 dark:text-primary-200 my-10">
        <p className="text-xl font-mono">
          Hola chicos y chicas bienvenidos a un nuevo tics de aplicaciones, Hoy para los amantes <b>creadores de videos musicales</b> que buscan incluir en escenas divertidas,&nbsp; grandes efectos e incluir la magia que&nbsp; captara a todos tus seguidores, pues te cuento que conocerás una aplicación muy útil para el desarrollo de tus videos musicales, producirás videos como todo un profesional.&nbsp;
        </p>
        <p className="text-xl font-mono">
          <br />
          <b>¿Qué es video?</b>
        </p>
        <p className="text-xl font-mono">
          <b>Los videos </b>
          son series de imágenes que se captan a través de una cámara para luego llevarlas a la edición y producción; también son conocidos como fotogramas acompañados de sonidos, se dice que el primer proyecto de video fue el credo para la televisión y podemos ver como en la actualidad hasta nosotros mismos podemos hacer un video desde nuestro celular.&nbsp;&nbsp;
        </p>
        <p className="text-xl font-mono">
          También podemos relacionar la palabra video con los videoclips dirigidos principalmente al ámbito musical y con una duración máxima de 7 minutos. De aquí a la importancia que tiene YouTube siendo una de las principales plataformas en donde podemos compartir videoclips musicales de grandes y pequeños artistas de todo el mundo.
        </p>
      </div>
    </div>
  )
}

export default ContentBlog
