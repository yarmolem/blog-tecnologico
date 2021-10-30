import React from 'react'

const HeaderCard = ({ text, boton = true, header = true }) => {
  return (
    header && (
      <div className="w-full flex justify-between items-center bg-black dark:bg-primary-800 py-2 px-4">
        <div className="text-white font-bold">{text}</div>
        {boton &&
          <div className="bg-secondary-400 dark:bg-primary-700 text-center text-white w-15 text-xs font-bold p-1">
            <button><h5>Ver todo</h5></button>
          </div>}
      </div>
    )
  )
}

export default HeaderCard
