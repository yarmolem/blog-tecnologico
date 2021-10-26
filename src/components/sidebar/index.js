import Image from 'next/image'
import { motion } from 'framer-motion'

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
  open: { opacity: 1 },
  closed: { opacity: 0 }
}

const Sidebar = ({ isOpen = true, onClose = () => { } }) => {
  return (
    <div
      className=" text-primary-800 h-screen   md:right-auto md:bottom-px top-16  pointer-events-none "
    >
      <motion.div
        variants={fade}
        onClick={onClose}
        initial={{ opacity: 0 }}
        className='absolute top-0 w-full h-screen bg-black bg-opacity-50  '
        animate={isOpen ? 'open' : 'closed'}
      />
      <div className=" text-primary-800 font-semibold  w-80 bg-white  pl-3  z-90 min-h-screen border-r ">
        <form action="w-full  border-b shadow-lg">
          <div className="relative flex sm:flex-row gap-6 items-center">
            <div className="relative w-full  cursor-pointer">
              <div className="absolute right-2 top-2 ">
                <Image src="/images/iconSearch.svg" width="20" height="20" alt="" />
              </div>
              <input className=" text-on-warn-300 w-full font-semibold border-2 border-on-warn-300 rounded-md  outline-none py-1 pl-2  focus:ring-2 focus:ring-on-warn-400 focus:border-on-warn-400"
                name="name"
                type="text"
                id="name"
                placeholder="Buscar"
              />
            </div>
            <div className="relative">
              <Image src="/images/iconExit.svg" width="20" height="20" alt="" />
            </div>
          </div>
        </form>
      </div>
      {/*   <HamburguesBtn show={showBtn} handleClick={handleShowBtn} /> */}
    </div>
  )
}
export default Sidebar
