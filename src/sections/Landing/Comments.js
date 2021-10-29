import React from 'react'
import HeaderCard from '../../components/Card/HeaderCard'

const Comments = () => {
  return (
    <div className="my-3">
      <HeaderCard text="Comentarios" boton={false} />
      <div className="bg-white dark:bg-primary-800 p-4 ">
        <div className="w-full   row-span-2 grid grid-cols-1 gap-4">
        </div>
      </div>
    </div>
  )
}

export default Comments
