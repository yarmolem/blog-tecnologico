import React from 'react'
import CompleteCard from '../../components/Card/CompleteCard'

const GridTwoCols = (props) => {
  const card1 = props.data[0]
  const card2 = props.data[1]
  return (
    <div className="my-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <CompleteCard {...card1} />
        <CompleteCard {...card2} />
      </div>
    </div>
  )
}

export default GridTwoCols
