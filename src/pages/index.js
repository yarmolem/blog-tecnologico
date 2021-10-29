import Head from 'next/head'
import CompleteCard from '../components/Card/CompleteCard'
import GridAplicaciones from '../sections/Landing/GridAplicaciones'
import GridInicio from '../sections/Landing/GridInicio'
import GridTwoCols from '../sections/Landing/GridTwoCols'
import ReadMore from '../sections/Landing/ReadMore'
const Home = () => {
  return (
    <div className=" mx-3">
      <Head><title>Jamesitok</title></Head>
      <GridInicio />
      <div className=" my-4 flex flex-col lg:flex-row  justify-center md:max-w-280 mx-auto gap-4">
        <div className="w-full ">
          <GridAplicaciones title="Aplicaciones" />
          <GridTwoCols title="Iphone" title2="Android" />
          <ReadMore />
        </div>
        <div className="w-full lg:w-2/4">
          <CompleteCard title="Articulos Populares" boton={false} />
          <CompleteCard title="Articulos Populares" boton={false} />
          <CompleteCard title="Articulos Populares" boton={false} />
        </div>
      </div>

    </div >
  )
}

export default Home
