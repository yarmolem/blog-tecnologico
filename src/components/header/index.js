import Link from 'next/dist/client/link'
import { IconHamburger, IconMoon, IconSearch, IconSun } from '../../../public/icons/icon'
import Image from 'next/dist/client/image'

const index = ({ onOpen, theme, setTheme, onClose }) => {
  return (
    <>
      <div className="w-full hidden lg:flex justify-center h-7  bg-secondary-400 text-primary-50  dark:bg-primary-900 dark:text-primary-100  font-mono text-sm items-center ">
        <div className="md:w-280">
          <ul className=" flex ">
            <li className="cursor-pointer px-2 ">
              <Link href="/">
                <a onClick={onClose} className="hover:text-secondary-100 dark:hover:text-secondary-500">Inicio</a>
              </Link>
            </li>
            <li className="cursor-pointer px-2">
              <Link href="/">
                <a onClick={onClose} className="hover:text-secondary-100 dark:hover:text-secondary-500">Acerca de</a>
              </Link>
            </li>
            <li className="cursor-pointer px-2">
              <Link href="/">
                <a onClick={onClose} className="hover:text-secondary-100 dark:hover:text-secondary-500">Contacto</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="sticky top-0 z-40  h-13 flex w-full  justify-around  items-center  px-3 bg-white dark:bg-primary-800 border-b dark:border-transparent shadow-lg ">
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
              <ul className="flex items-center dark:text-primary-50 ">
                <li className="cursor-pointer py-6 px-4 text-base font-bold tracking-tight">
                  <Link href="/">
                    <a onClick={onClose} className="cursor-pointer dark:hover:text-secondary-500 hover:text-secondary-500" >INICIO</a>
                  </Link>
                </li>
                <li className="cursor-pointer py-6 px-4 text-base font-bold">
                  <Link href="/tendencias">
                    <a onClick={onClose} className="cursor-pointer dark:hover:text-secondary-500 hover:text-secondary-500">TENDENCIAS</a>
                  </Link>
                </li>
                <li className="cursor-pointer py-6 px-4 text-base font-bold">
                  <Link href="/">
                    <a onClick={onClose} className="cursor-pointer dark:hover:text-secondary-500 hover:text-secondary-500">ANDROID</a>
                  </Link>
                </li>
                <li className="cursor-pointer py-6 px-4 text-base font-bold">
                  <Link href="/">
                    <a onClick={onClose} className="cursor-pointer dark:hover:text-secondary-500 hover:text-secondary-500">IPHONE</a>
                  </Link>
                </li>
                <li className="cursor-pointer py-6 px-4 text-base font-bold">
                  <Link href="/">
                    <a onClick={onClose} className="cursor-pointer dark:hover:text-secondary-500 hover:text-secondary-500">PERSONALIZACIONES</a>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="flex items-center ">
            <div className="p-4 cursor-pointer dark:hover:text-secondary-500" >
              {theme === 'dark' ? (<IconSun className="w-4 " onClick={() => setTheme((theme) => !theme ? 'dark' : '')} />) : <IconMoon className="w-4" onClick={() => setTheme((theme) => !theme ? 'dark' : '')} />}
            </div>
            <div className="cursor-pointer p-4">
              <IconSearch className="w-4" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default index
