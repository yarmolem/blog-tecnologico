import React from 'react'
import { IconComment } from '../../../public/icons/icon'
import Breadcrumb from '../../components/Breadcrumb'

const HeadBlog = (props) => {
  return (
    <div className="bg-white dark:bg-primary-800  p-4 ">
      <div className="flex flex-col">
        <div className="w-full  ">
          <Breadcrumb crumbs={props.crumbs} />
        </div>
        <div className="mt-4 ">
          <h1 className="text-primary-900 md:text-5xl text-3xl dark:text-white font-bold">Como Tener Video Star De iPhone En Android 2021</h1>
        </div>
        <div className="flex justify-between">
          <div className="text-primary-900 dark:text-primary-400">agosto 03, 2021</div>
          <div className="flex w-12">
            <IconComment />
            <span className="ml-2 text-primary-900 dark:text-primary-400">13</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeadBlog
