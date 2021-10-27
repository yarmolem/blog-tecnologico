import React from 'react'

const GridInicio = () => {
  const imagen = '../../../../images/imgBlog1.jpeg'
  return (
    <div className=" my-4">
      <div className="bg-white dark:bg-primary-800 p-4">
        <div className="grid sm:grid-rows-2 sm:grid-flow-col gap-2">
          <div className="w-full h-48 row-span-2">
            <div className="container h-full bg-grey-lightest mx-auto shadow   bg-cover flex " style={{
              backgroundImage: 'url(' + imagen + ')'
            }}>
              <div className="w-full flex justify-center items-end">
                <div className="text-center w-full px-3 pb-4 bg-gradient-to-t from-primary-900 via-primary-800 to-transparent ">
                  <div className="bg-secondary-400 text-white w-15 text-xs font-bold">
                    <h5>ANDROID</h5>
                  </div>
                  <div className="text-lg text-white font-bold text-left mt-2">
                    <span className="text-right text-sm">Como tener PROCREATE de iOS en Android</span>
                  </div>
                  <div className="text-primary-200 text-sm text-left">
                    October 18, 2021
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1"> <div className="w-full h-48 row-span-2">
            <div className="container h-full bg-grey-lightest mx-auto shadow   bg-cover flex " style={{
              backgroundImage: 'url(' + imagen + ')'
            }}>
              <div className="w-full flex justify-center items-end">
                <div className="text-center w-full px-3 pb-4 bg-gradient-to-t from-primary-900 via-primary-800 to-transparent ">
                  <div className="bg-secondary-400 text-white w-15 text-xs font-bold">
                    <h5>ANDROID</h5>
                  </div>
                  <div className="text-lg text-white font-bold text-left mt-2">
                    <span className="text-right text-base">Como tener PROCREATE de iOS en Android</span>
                  </div>
                  <div className="text-primary-200 text-sm text-left">
                    October 18, 2021
                  </div>
                </div>
              </div>
            </div>
          </div></div>
          <div className=" col-span-1"> <div className="w-full h-48 row-span-2">
            <div className="container h-full bg-grey-lightest mx-auto shadow   bg-cover flex " style={{
              backgroundImage: 'url(' + imagen + ')'
            }}>
              <div className="w-full flex justify-center items-end">
                <div className="text-center w-full px-3 pb-4 bg-gradient-to-t from-primary-900 via-primary-800 to-transparent ">
                  <div className="bg-secondary-400 text-white w-15 text-xs font-bold">
                    <h5>ANDROID</h5>
                  </div>
                  <div className="text-lg text-white font-bold text-left mt-2">
                    <span className="text-right text-base">Como tener PROCREATE de iOS en Android</span>
                  </div>
                  <div className="text-primary-200 text-sm text-left">
                    October 18, 2021
                  </div>
                </div>
              </div>
            </div>
          </div></div>
        </div>
      </div>

    </div >
  )
}

export default GridInicio
