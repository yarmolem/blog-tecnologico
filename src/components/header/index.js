/* import { useState } from 'react' */
import { IconHamburger, IconMoon, IconSearch, IconSun } from '../../../public/icons/icon'
import Image from 'next/dist/client/image'

const index = ({ onOpen, theme, setTheme }) => {
  return (
    <div className="sticky top-0 z-40 h-16 flex w-full justify-between items-center md:justify-end px-3 bg-white dark:bg-primary-800 border-b dark:border-transparent shadow-lg py-1">
      <div className="w-full lg:w-52 flex gap-x-2 justify-between md:justify-end  ">
        <div className="flex items-center gap-4">
          <div className="relative w-5 h-5">
            <IconHamburger className="cursor-pointer" onClick={onOpen} />
          </div>
          <div className="relative w-50 h-10">
            <Image src="/images/logoJamesitok.png" layout="fill" alt="" />
          </div>
        </div>
        <div className="flex items-center gap-5">
          <div className="relative w-4 h-4 cursor-pointer">
            {theme === 'dark' ? (<IconMoon onClick={() => setTheme((theme) => !theme ? 'dark' : '')} />) : <IconSun onClick={() => setTheme((theme) => !theme ? 'dark' : '')} />}

          </div>
          <div className="relative w-4 h-4 cursor-pointer">
            <IconSearch />
          </div>
        </div>
      </div>
    </div>

  )
}

export default index
