import React from 'react'
import BigCard from '../../components/Card/BigCard'
import SmallArticle from '../../components/Article/SmallArticle'
import HeaderCard from '../../components/Card/HeaderCard'

const GridAplicaciones = (props) => {
  return (
    <div className="">
      <HeaderCard text="Aplicaciones" boton={true} />
      <div className="bg-white dark:bg-primary-800 p-4 ">
        <div className="w-full h-48 md:h-72 row-span-2">
          <BigCard etiqueta={props.etiqueta} titulo={props.titulo} descripcion={props.descripcion} fecha={props.fecha} />
        </div>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-5">
          <SmallArticle titulo={props.tituloCardSmall} fecha={props.fechaCardSmall} />
          <SmallArticle titulo={props.tituloCardSmall} fecha={props.fechaCardSmall} />
          <SmallArticle titulo={props.tituloCardSmall} fecha={props.fechaCardSmall} />
          <SmallArticle titulo={props.tituloCardSmall} fecha={props.fechaCardSmall} />
        </div>
      </div>
    </div>
  )
}

export default GridAplicaciones
