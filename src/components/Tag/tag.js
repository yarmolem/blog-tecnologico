import React from 'react'

const Tag = ({ texto, cantidad }) => {
  return (
    <div className="px-3 py-1 font-mono bg-primary-50 dark:bg-primary-700 dark:hover:bg-secondary-500 dark:text-primary-200 text-secondary-500 text-base hover:bg-secondary-500 hover:text-primary-50 rounded-sm">
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
