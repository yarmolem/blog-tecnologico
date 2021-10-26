import Image from 'next/image'
import Head from 'next/head'
import { useState } from 'react'
import Sidebar from '../components/sidebar'

const Home = () => {
  const [showBtn, setShowBtn] = useState(false)
  /*   const [showSidebar, setShowSidebar] = useState(true) */

  const handleShowBtn = () => {
    setShowBtn(!showBtn)
  }
  return (
    <div className="dark">
      <Head><title>Jamesitok</title></Head>
      <div className="sticky top-0 z-10 h-16 flex w-full justify-between items-center md:justify-end px-3 bg-white border-b shadow-lg py-1">
        <div className="w-full lg:w-52 flex gap-x-2 justify-between md:justify-end  ">
          <div className="flex items-center gap-4">
            <div className="relative w-8 h-6">
              <Image src="/images/iconHamburger.svg" onClick={handleShowBtn} layout="fill" alt="" />
            </div>
            <div className="relative w-50 h-10">
              <Image src="/images/logoJamesitok.png" layout="fill" alt="" />
            </div>
          </div>
          <div className="flex items-center gap-5">
            <div className="relative w-4 h-4 p-2 cursor-pointer">
              <Image src="/images/iconMoon.svg" layout="fill" alt="" />
            </div>
            <div className="relative w-4 h-4 cursor-pointer">
              <Image src="/images/iconSearch.svg" layout="fill" alt="" />
            </div>
          </div>
        </div>
      </div>
      {showBtn && (
        /*  <div className="flex max-w-full  relative ">
           <div className="fixed text-primary-800 h-screen md:sticky md:top-0 z-99 left-0  md:left-auto right-0 md:right-auto bottom-0
        md:bottom-px top-16 bg-white  md:bg-white ">dasdas</div>
         </div> */
        <Sidebar />
      )}
      {/*  <div className="w-full h-screen dark:bg-gray-800">
        <h1 className="text-6xl text-secondary-400 dark:text-white">HOLA</h1>
        <Image src="/images/playa.jpeg" width="200" height="200" alt="" />
        <div className="relative w-9/10 h-26">
          <Image src="/images/playa.jpeg" layout="fill" alt="" />
        </div>
      </div> */}
    </div >
  )
}

export default Home
