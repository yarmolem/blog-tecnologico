import React from 'react'
import CompleteCard from '../../components/Card/CompleteCard'

const GridTwoCols = ({ title, title2 }) => {
  return (
    <div className="my-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <CompleteCard title={title} boton={true} />
        <CompleteCard title={title2} boton={true} />
      </div>
    </div>
  )
}

export default GridTwoCols
