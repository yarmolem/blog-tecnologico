import React from 'react'
import { useRouter } from 'next/router'

const DetalleBlog = () => {
  const router = useRouter()
  console.log(router)
  return (
    <div>
      Desde Detalle del blog
    </div>
  )
}

export default DetalleBlog
