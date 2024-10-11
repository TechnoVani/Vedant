import React from 'react'
import ScrollTop from '../components/header-footer/ScrollTop'
import Home from '../components/Heropage/Home'
import { Route, Routes } from 'react-router-dom'
import ContactUs from '../components/ContactUs'
import AboutUs from '../components/AboutUs'
import AllVideos from '../components/AllVideos'

const Routing = () => {
  return (
    <>
    <ScrollTop/>
    <Routes>

    <Route path="/" element={<Home/>} />
    <Route path="/contact" element={<ContactUs/>} />
    <Route path="/about-us" element={<AboutUs/>} />
    <Route path="/videos" element={<AllVideos/>} />
    </Routes>

    </>
  )
}

export default Routing