import React from 'react'
import Card from '../../components/Card/Card'
import SmallArticle from '../../components/Article/SmallArticle'
import HeaderCard from '../../components/Card/HeaderCard'
const CompleteCard = (props) => {
  console.log(props)
  return (
    <div className="">
      <HeaderCard text={props.title} boton={props.boton} />
      <div className="bg-white dark:bg-primary-800 p-4 ">
        <div className="w-full h-48 md:h-56 row-span-2">
          <Card etiqueta={props.etiqueta} titulo={props.titulo} fecha={props.fecha} />
        </div>
        <div className="mt-4 grid grid-cols-1 gap-5">
          <SmallArticle titulo={props.tituloCardSmall} fecha={props.fechaCardSmall} />
          <SmallArticle titulo={props.tituloCardSmall} fecha={props.fechaCardSmall} />
          <SmallArticle titulo={props.tituloCardSmall} fecha={props.fechaCardSmall} />
          <SmallArticle titulo={props.tituloCardSmall} fecha={props.fechaCardSmall} />
        </div>
      </div>
    </div>
  )
}

export default CompleteCard
