import { motion } from 'framer-motion'
import { IconExit, IconSearch } from '../../../public/icons/icon'
import Link from 'next/link'

const variants = {
  open: {
    x: 0,
    opacity: 1,
    transition: { ease: 'easeInOut' }
  },
  closed: {
    opacity: 0,
    x: '-100%',
    transition: { ease: 'easeOut' }
  }
}

const fade = {
  open: { opacity: 1, pointerEvents: 'unset' },
  closed: { opacity: 0, pointerEvents: 'none' }
}

const Sidebar = ({ isOpen = false, onClose }) => {
  return (
    <div className="absolute top-0 text-primary-800 h-screen md:right-auto md:bottom-px z-40">
      <motion.div
        variants={fade}
        onClick={onClose}
        animate={isOpen ? 'open' : 'closed'}
        initial={{ opacity: 0, pointerEvents: 'none' }}
        className="fixed top-0 w-full h-screen bg-black bg-opacity-50"
      />
      <motion.div
        variants={variants}
        className="absolute top-0 z-50 h-screen"
        initial={{ opacity: 0, x: '-100%' }}
        animate={isOpen ? 'open' : 'closed'}
      >
        <div className=" text-primary-800 dark:text-white font-semibold w-80 bg-white dark:bg-primary-800 min-h-screen border-r dark:border-black ">
          <div className="w-full h-16 pt-3 dark:bg-primary-700  px-3 ">
            <form action="w-full h-full border-b shadow-lg flex ">
              <div className=" flex sm:flex-row gap-6 items-center justify-center">
                <div className="relative w-full  ">
                  <div className="absolute right-2 top-2.5 w-4 ">
                    <IconSearch className="cursor-pointer" />
                  </div>
                  <input
                    className=" w-full font-semibold border-2 border-on-warn-300 rounded-md  outline-none py-1 pl-2  focus:ring-2 focus:ring-on-warn-400 focus:border-on-warn-400"
                    name="name"
                    type="text"
                    id="name"
                    placeholder="Buscar"
                  />
                </div>
                <div className="relative w-4 h-4 ">
                  <IconExit className="cursor-pointer" onClick={onClose} />
                </div>
              </div>
            </form>
          </div>

          <nav className=" px-3  mt-3">
            <ul>
              <li className="cursor-pointer py-2 text-sm font-bold">
                <Link href="/">
                  <a onClick={onClose}>INICIO</a>
                </Link>
              </li>
              <li className="cursor-pointer py-2 text-sm font-bold">
                <Link href="/tendencias">
                  <a onClick={onClose}>TENDENCIAS</a>
                </Link>
              </li>
              <li className="cursor-pointer py-2 text-sm font-bold">
                <Link href="/">
                  <a onClick={onClose}>ANDROID</a>
                </Link>
              </li>
              <li className="cursor-pointer py-2 text-sm font-bold">
                <Link href="/">
                  <a onClick={onClose}>IPHONE</a>
                </Link>
              </li>
              <li className="cursor-pointer py-2 text-sm font-bold">
                <Link href="/">
                  <a onClick={onClose}>PERSONALIZACIONES</a>
                </Link>
              </li>
            </ul>
          </nav>
          <div className="absolute bottom-4">
            <ul className=" flex">
              <li className="cursor-pointer px-2 text-sm ">
                <Link href="/">
                  <a onClick={onClose}>Inicio</a>
                </Link>
              </li>
              <li className="cursor-pointer px-2 text-sm ">
                <Link href="/">
                  <a onClick={onClose}>Acerca de</a>
                </Link>
              </li>
              <li className="cursor-pointer px-2 text-sm ">
                <Link href="/">
                  <a onClick={onClose}>Contacto</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
      {/*   <HamburguesBtn show={showBtn} handleClick={handleShowBtn} /> */}
    </div>
  )
}
export default Sidebar
