import React from 'react'
import BigArticle from '../../components/Article/BigArticle'
import HeaderCard from '../../components/Card/HeaderCard'

const ReadMore = (props) => {
  return (
    <div className="">
      <HeaderCard text="Leer Mas »" boton={true} header={props.header} />
      <div className="bg-white dark:bg-primary-800 p-4 ">
        <div className="w-full h-full row-span-2 flex flex-col md:flex-wrap gap-y-6">
          <BigArticle
            etiqueta="ANDROID"
            titulo="Como tener PROCREATE de iOS en Android"
            contenido="Si eres de los que te gusta diseñar y tener una app de dibujo que sea de gran ayuda para la labor que realizas…"
            fecha="October 18, 2021"
          />
          <BigArticle
            etiqueta="ANDROID"
            titulo="Como tener PROCREATE de iOS en Android"
            contenido="Si eres de los que te gusta diseñar y tener una app de dibujo que sea de gran ayuda para la labor que realizas…"
            fecha="October 18, 2021"
          />
          <BigArticle
            etiqueta="ANDROID"
            titulo="Como tener PROCREATE de iOS en Android"
            contenido="Si eres de los que te gusta diseñar y tener una app de dibujo que sea de gran ayuda para la labor que realizas…"
            fecha="October 18, 2021"
          />
          <BigArticle
            etiqueta="ANDROID"
            titulo="Como tener PROCREATE de iOS en Android"
            contenido="Si eres de los que te gusta diseñar y tener una app de dibujo que sea de gran ayuda para la labor que realizas…"
            fecha="October 18, 2021"
          />
        </div>
      </div>
    </div>
  )
}

export default ReadMore
