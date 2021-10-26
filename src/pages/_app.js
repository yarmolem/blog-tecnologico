import '../styles/index.css'

const MyApp = ({ Component, pageProps }) => {
  return <div className="dark">
    <Component {...pageProps} />
  </div>
}

export default MyApp
