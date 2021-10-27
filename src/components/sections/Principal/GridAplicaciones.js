import React from 'react'
import Image from 'next/dist/client/image'

const GridAplicaciones = () => {
  return (
    <div className="my-4">
      <div className="w-full flex justify-between items-center bg-black dark:bg-primary-800 py-2 px-4">
        <div className="text-white font-bold">Aplicaciones</div>
        <div className="bg-secondary-400 dark:bg-primary-700 text-center text-white w-15 text-xs font-bold p-1">
          <h5>Ver todo</h5>
        </div>
      </div>
      <div className="bg-white dark:bg-primary-800 p-4">
        <div className="w-full h-48 row-span-2">
          <div className="container relative h-full bg-grey-lightest mx-auto shadow bg-cover flex">
            <div className="w-full flex justify-center items-end z-10">
              <div className="text-center w-full px-3 pb-4 bg-gradient-to-t from-primary-900 via-primary-800 to-transparent ">
                <div className="bg-secondary-400 text-white  w-15 text-xs font-bold">
                  <h5>ANDROID</h5>
                </div>
                <div className="text-lg text-white font-bold text-left mt-2">
                  <span className="text-right text-sm">
                    Como tener PROCREATE de iOS en Android
                  </span>
                </div>
                <div className="text-primary-200 text-sm text-left">
                  October 18, 2021
                </div>
              </div>
            </div>
            <Image
              alt=""
              layout="fill"
              className="z-0"
              src="/images/imgBlog2.jpeg"
            />
          </div>
        </div>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="flex gap-3">
            <div className="relative w-36 h-16">
              <Image src="/images/aplicacion.jpeg" layout="fill" alt="" />
            </div>
            <div className="flex flex-col gap-1">
              <div className="font-bold text-base dark:text-white">
                TikTok estilo iPhone en Android + Emojis iOs15{' '}
              </div>
              <div className="text-primary-200 text-sm text-left">
                October 18, 2021
              </div>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="relative w-36 h-16">
              <Image src="/images/aplicacion.jpeg" layout="fill" alt="" />
            </div>
            <div className="flex flex-col gap-1">
              <div className="font-bold text-base dark:text-white">
                TikTok estilo iPhone en Android + Emojis iOs15{' '}
              </div>
              <div className="text-primary-200 text-sm text-left">
                October 18, 2021
              </div>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="relative w-36 h-16">
              <Image src="/images/aplicacion.jpeg" layout="fill" alt="" />
            </div>
            <div className="flex flex-col gap-1">
              <div className="font-bold text-base dark:text-white">
                TikTok estilo iPhone en Android + Emojis iOs15{' '}
              </div>
              <div className="text-primary-200 text-sm text-left">
                October 18, 2021
              </div>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="relative w-36 h-16">
              <Image src="/images/aplicacion.jpeg" layout="fill" alt="" />
            </div>
            <div className="flex flex-col gap-1">
              <div className="font-bold text-base dark:text-white">
                TikTok estilo iPhone en Android + Emojis iOs15{' '}
              </div>
              <div className="text-primary-200 text-sm text-left">
                October 18, 2021
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GridAplicaciones
