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

const data = [{
  id: 1,
  title: 'Iphone',
  etiqueta: 'Android',
  titulo: 'Como tener PROCREATE de iOS en Android',
  fecha: 'October 18, 2021',
  boton: true,
  tituloCardSmall: 'TikTok estilo iPhone en Android + Emojis iOs15',
  fechaCardSmall: 'October 18, 2021'
},
{
  id: 2,
  title: 'Android',
  etiqueta: 'Android',
  titulo: 'Como tener PROCREATE de iOS en Android',
  fecha: 'October 18, 2021',
  boton: true,
  tituloCardSmall: 'TikTok estilo iPhone en Android + Emojis iOs15',
  fechaCardSmall: 'October 18, 2021'
}]

const data2 = {
  id: 1,
  title: 'Articulos Populares',
  etiqueta: 'Android',
  titulo: 'Como tener PROCREATE de iOS en Android',
  fecha: 'October 18, 2021',
  boton: false,
  tituloCardSmall: 'TikTok estilo iPhone en Android + Emojis iOs15',
  fechaCardSmall: 'October 18, 2021'
}

const data3 = {
  id: 1,
  title: 'Articulos Populares',
  etiqueta: 'Android',
  titulo: 'Como tener PROCREATE de iOS en Android',
  descripcion: 'Si eres de los que te gusta diseñar y tener una app de dibujo que sea de gran ayuda para la labor que realizas, te cuento que hoy te traeré una increí…',
  fecha: 'October 18, 2021',
  boton: false,
  tituloCardSmall: 'TikTok estilo iPhone en Android + Emojis iOs15',
  fechaCardSmall: 'October 18, 2021'
}

const data4 = {
  id: 1,
  title: 'Articulos Populares',
  etiqueta: 'Android',
  titulo: 'Como tener PROCREATE de iOS en Android',
  descripcion: 'Si eres de los que te gusta diseñar y tener una app de dibujo que sea de gran ayuda para la labor que realizas, te cuento que hoy te traeré una increí…',
  fecha: 'October 18, 2021',
  boton: false,
  tituloCardSmall: 'TikTok estilo iPhone en Android + Emojis iOs15',
  fechaCardSmall: 'October 18, 2021'
}
const Home = () => {
  return (
    <div className=" mx-3">
      <Head><title>Jamesitok</title></Head>
      <GridInicio {...data4} />
      <div className=" my-4 flex flex-col lg:flex-row  justify-center md:max-w-280 mx-auto gap-7">
        <div className="w-full ">
          <GridAplicaciones {...data3} />
          <GridTwoCols {...{ data }} />
          <ReadMore />
          <GridTwoAndroid etiqueta="Android" titulo="Como tener PROCREATE de iOS en Android" fecha="October 18, 2021" />
          <GridTwoIphone etiqueta="Android" titulo="Como tener PROCREATE de iOS en Android" fecha="October 18, 2021" text="Iphone" />
        </div>
        <div className="w-full h-full lg:w-2/4 sticky top-0">
          <CompleteCard {...data2} />
          <RecentArticles />
          <Comments />
          <TagsMenu />
        </div>
      </div>

    </div >
  )
}

export default Home
