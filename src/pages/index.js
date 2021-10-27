import Head from 'next/head'
import GridInicio from '../components/sections/Principal/GridInicio'
import GridAplicaciones from '../components/sections/Principal/GridAplicaciones'
import GridTwoCols from '../components/sections/Principal/GridTwoCols'
const Home = () => {
  return (
    <div className=" mx-3">
      <Head><title>Jamesitok</title></Head>
      <GridInicio />
      <GridAplicaciones />
      <GridTwoCols />
    </div >
  )
}

export default Home
