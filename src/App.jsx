
import Header from './components/header-footer/Header'
import Routing from './utils/Routing'
import Footer from './components/header-footer/Footer'

import React, { useEffect, useState } from 'react';


const App = () => {
  // useEffect(() => {
  //   document.addEventListener('contextmenu', (event) => {
  //     event.preventDefault(); // Disable right-click
  //   });
  // }, []);

 

  return (
    <div >
      <Header />
      <Routing />
      <Footer />
    </div>
  )
}

export default App