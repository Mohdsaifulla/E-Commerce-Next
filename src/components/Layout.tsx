import Header from './Header'
import Footer from './Footer'
import React,{ReactElement} from 'react'

interface props{
    children:ReactElement
}
const Layout = ({children}:props) => {
  return (
    <>
    <Header/>
    {children}
    <Footer/>
    </>
  )
}

export default Layout