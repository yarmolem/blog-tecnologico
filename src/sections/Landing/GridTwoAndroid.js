import React from 'react'
import Card from '../../components/Card/Card'
import HeaderCard from '../../components/Card/HeaderCard'

const GridTwo = (props) => {
  return (
    <div className="">
      <HeaderCard text="Android" boton={true} />
      <div className="bg-white dark:bg-primary-800 p-4 ">
        <div className="w-full h-200 sm:h-120 row-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Card etiqueta={props.etiqueta} titulo={props.titulo} fecha={props.fecha} />
          <Card etiqueta={props.etiqueta} titulo={props.titulo} fecha={props.fecha} />
          <Card etiqueta={props.etiqueta} titulo={props.titulo} fecha={props.fecha} />
          <Card etiqueta={props.etiqueta} titulo={props.titulo} fecha={props.fecha} />
        </div>
      </div>
    </div>
  )
}

export default GridTwo
