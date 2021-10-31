import '../styles/index.css'
import 'tailwindcss/tailwind.css'
import { useState } from 'react'

import Header from '../components/Header'
import useToggle from '../hooks/useToggle'
import Sidebar from '../components/sidebar'
import Footer from '../components/footer/Footer'

const MyApp = ({ Component, pageProps }) => {
  const [theme, setTheme] = useState('')
  const { isOpen, onClose, onOpen } = useToggle()
  return (
    <div className={theme}>
      <div className="bg-primary-50 dark:bg-primary-900">
        <Header {...{ onOpen, theme, setTheme }} />
        <Sidebar {...{ isOpen, onClose }} />
        <Component {...pageProps} />
        <Footer />
      </div>
    </div>
  )
}

export default MyApp
