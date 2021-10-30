import React from 'react'
import Link from 'next/dist/client/link'

const FooterBlog = () => {
  return (
    <div className="flex flex-wrap gap-x-2 pb-4">
      <span className="font-bold text-primary-900 dark:text-primary-50">Etiquetas:</span>
      <Link href="/" ><a className="text-secondary-500 text-base">android</a></Link>
      <Link href="/" ><a className="text-secondary-500 text-base">android</a></Link>
      <Link href="/" ><a className="text-secondary-500 text-base">android</a></Link>
      <Link href="/" ><a className="text-secondary-500 text-base">android</a></Link>
      <Link href="/" ><a className="text-secondary-500 text-base">android</a></Link>
      <Link href="/" ><a className="text-secondary-500 text-base">android</a></Link>
    </div>
  )
}

export default FooterBlog
