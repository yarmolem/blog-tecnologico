import '../styles/index.css'
import Sidebar from '../components/sidebar'
import Header from '../components/Header'
import useToggle from '../hooks/useToggle'
import { useState } from 'react'

const MyApp = ({ Component, pageProps }) => {
  const [theme, setTheme] = useState('')
  const { isOpen, onClose, onOpen } = useToggle()
  return (
    <div className={theme}>
      <div className="bg-primary-50 dark:bg-primary-900">
        <Header {...{ onOpen, theme, setTheme }} />
        <Sidebar {...{ isOpen, onClose }} />
        <Component {...pageProps} />
      </div>

    </div>
  )
}

export default MyApp
