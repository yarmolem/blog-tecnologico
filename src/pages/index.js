import Head from 'next/head'
import CompleteCard from '../components/Card/CompleteCard'
import Comments from '../sections/Landing/Comments'
import GridAplicaciones from '../sections/Landing/GridAplicaciones'
import GridInicio from '../sections/Landing/GridInicio'
import GridTwoAndroid from '../sections/Landing/GridTwoAndroid'
import GridTwoCols from '../sections/Landing/GridTwoCols'
import GridTwoIphone from '../sections/Landing/GridTwoIphone'
import TagsMenu from '../sections/Landing/TagsMenu'
import ReadMore from '../sections/Landing/ReadMore'
import RecentArticles from '../sections/Landing/RecentArticles'
const Home = () => {
  return (
    <div className=" mx-3">
      <Head><title>Jamesitok</title></Head>
      <GridInicio />
      <div className=" my-4 flex flex-col lg:flex-row  justify-center md:max-w-280 mx-auto gap-5">
        <div className="w-full ">
          <GridAplicaciones title="Aplicaciones" />
          <GridTwoCols title="Iphone" title2="Android" />
          <ReadMore />
          <GridTwoAndroid />
          <GridTwoIphone />
        </div>
        <div className="w-full h-full lg:w-2/4 sticky top-0">
          <CompleteCard title="Articulos Populares" boton={false} />
          <RecentArticles />
          <Comments />
          <TagsMenu />
        </div>
      </div>

    </div >
  )
}

export default Home
