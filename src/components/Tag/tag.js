import React from 'react'

const Tag = ({ texto, cantidad }) => {
  return (
    <div className="px-3 py-1  bg-primary-50 text-secondary-500 text-base">
      <a href="">
        {texto}
        <span className="ml-2">
          ({cantidad})
        </span>
      </a>
    </div>
  )
}

export default Tag
