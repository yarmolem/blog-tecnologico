import Link from 'next/dist/client/link'
import { IconHamburger, IconMoon, IconSearch, IconSun } from '../../../public/icons/icon'
import Image from 'next/dist/client/image'

const index = ({ onOpen, theme, setTheme, onClose }) => {
  return (
    <div className="sticky top-0 z-40  h-16 flex w-full  justify-around  items-center  px-3 bg-white dark:bg-primary-800 border-b dark:border-transparent shadow-lg ">
      <div className="w-full flex gap-x-2 md:w-280 justify-between md:justify-between  ">
        <div className="flex items-center gap-4">
          <div className="relative w-5 h-5 sm:block lg:hidden">
            <IconHamburger className="cursor-pointer" onClick={onOpen} />
          </div>
          <Link href="/">
            <a onClick={onClose} className="cursor-pointer">
              <div className="relative w-48 h-9"><Image src="/images/logoJamesitok.png" layout="fill" alt="" />
              </div></a>
          </Link>
          <nav className="hidden lg:block">
            <ul className="flex items-center">
              <li className="cursor-pointer py-6 px-4 text-base font-bold tracking-tight">
                <Link href="/">
                  <a onClick={onClose} >INICIO</a>
                </Link>
              </li>
              <li className="cursor-pointer py-6 px-4 text-base font-bold">
                <Link href="/tendencias">
                  <a onClick={onClose}>TENDENCIAS</a>
                </Link>
              </li>
              <li className="cursor-pointer py-6 px-4 text-base font-bold">
                <Link href="/">
                  <a onClick={onClose}>ANDROID</a>
                </Link>
              </li>
              <li className="cursor-pointer py-6 px-4 text-base font-bold">
                <Link href="/">
                  <a onClick={onClose}>IPHONE</a>
                </Link>
              </li>
              <li className="cursor-pointer py-6 px-4 text-base font-bold">
                <Link href="/">
                  <a onClick={onClose}>PERSONALIZACIONES</a>
                </Link>
              </li>
            </ul>
          </nav>
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
