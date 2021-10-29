import React from 'react'
import BigCard from '../../components/Card/BigCard'
import Card from '../../components/Card/Card'

const GridInicio = () => {
  return (
    <div className="w-full my-4 md:flex md:justify-center">
      <div className="bg-white dark:bg-primary-800 p-4 md:w-280 ">
        <div className="grid grid-cols-1 sm:grid-cols-2  gap-3 ">
          <div className="w-full h-44 sm:w-full sm:h-90 md:h-full col-span-1 row-span-3 sm:row-span-1 sm:col-span-2 md:col-span-1 md:row-span-4">
            <BigCard />
          </div>
          <div className="w-full h-44 md:h-72 row-span-2">
            <Card />
          </div>
          <div className="w-full h-44 md:h-72 row-span-2">
            <Card />
          </div>
        </div>
      </div>

    </div >
  )
}

export default GridInicio
