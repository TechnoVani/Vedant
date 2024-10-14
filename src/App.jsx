import React, { useEffect } from 'react'
import Header from './components/header-footer/Header'
import Routing from './utils/Routing'
import Footer from './components/header-footer/footer'

const App = () => {
  // useEffect(() => {
  //   document.addEventListener('contextmenu', (event) => {
  //     event.preventDefault(); // Disable right-click
  //   });
  // }, []);
  return (
    <>
    <Header />
    <Routing />
    <Footer/>
    </>
  )
}

export default App