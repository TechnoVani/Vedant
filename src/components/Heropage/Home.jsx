import React, { useEffect } from "react";
import { SwiperDiv } from "./HomeComponents/SwiperDiv";
import { Link, useLocation } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import SwiperSecond from "./HomeComponents/SwiperSecond";
import { Helmet } from "react-helmet-async";
import VideoSlider from "./HomeComponents/VideoSlider";

const Home = () => {
  const location = useLocation();

  // Show success toast if redirected from signup
  useEffect(() => {
    if (location.state?.signupSuccess) {
      toast.success("Signup Successful! Welcome to Vedant Devotions!");
    }
  }, [location.state]);

  return (
    <div className="justify-center items-center flex">
       <Helmet>
        <title>Vedant Devotions | Home</title>
        <meta name="description" content="Welcome to Vedant Devotions." />
        <meta name="keywords" content="Vedant, Devotions, Vedant Devotions, Vedant Devotions website, Vedant Devotions" />
      </Helmet>
      <div className="container">
        {/* <ToastContainer /> Toast container */}
        {/* <div className="py-2  bg-red-300"> */}

        {/* </div> */}
        <section className="relative w-full py-2 ">
          <div className="text-center mt-5 py-2 headVideo">
            <h3 className='mx-auto font-manrope font-semibold   text-gray-900 text-2xl md:leading-normal'>New <span className=" text-red-600">Releases</span></h3>
          </div>
          <SwiperDiv contentType="videos" />

          {/* <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src="/images/god gallery/peace (1).mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="relative bg-zinc-900 bg-opacity-40 h-full align-middle justify-center flex flex-col w-full text-center z-10">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            Welcome To Vedant Devotions
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
            Here at Flowbite we focus on markets where technology, innovation,
            and capital can unlock long-term value and drive economic growth.
          </p>
        </div> */}
        </section>
        <section>

        </section>
        {/* <SwiperSecond /> */}
        <VideoSlider/>
        <section className=" py-14 my-10 lg:py-10 relative shadow-zinc-600 z-0">
          <div className="mx-auto relative ">
            <h3 className="headVideo text-center mx-auto font-manrope font-bold text-2xl py-2 bg-gray-200 text-gray-900 mb-5  md:leading-normal">
              Discover Our Path to <span className="text-red-600">Devotion </span>
            </h3>

            <p className=" text-lg font-light leading-7 text-gray-800 mb-9 text-justify px-3">
              At the heart of our mission is a dedication to fostering spiritual
              growth and connection through the power of devotion. Our website
              offers a vast collection of devotional videos, prayers, and
              spiritual insights that inspire and guide individuals on their
              personal journeys of faith. We believe in the transformative power
              of devotion to bring peace, clarity, and meaning to life. Whether
              you seek daily inspiration or a deeper connection with the divine,
              our platform is here to nurture and support your spiritual path.
            </p>
          </div>
        </section>
        {/* <section className="max-w-full px-3 md:px-10 py-6 mb-10 bg-gray-900 border border-gray-200 rounded-lg shadow">
          <div className="flex  pb-5 pt-3 justify-between">
            <a href="#">
              <h5
                className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white"
              >
                Trending Videos
              </h5>
            </a>

            <a href="/videos">
              <p
                className="mb-2 text-base font-medium tracking-tight text-white dark:text-white border px-3 py-1 rounded-full"
              >
                See More →
              </p>
            </a>
          </div>
          <SwiperDiv contentType="videos" />
        </section> */}
        <section className="max-w-full mb-10 py-6 ">
          
          <div className='headVideo flex items-center justify-between py-2 px-2 mt-5 bg-gray-200'>
                <h1 className=' font-manrope font-semibold text-gray-900 text-2xl md:leading-normal'>Trending <span className='text-red-600'>Shorts</span></h1>
                <Link to="/videos" className='border px-3 py-1 rounded-full border-black hover:text-red-600 hover:border-red-600 hover:bg-white hover:shadow-lg duration-150'>See More →</Link>
            </div>
          <SwiperDiv contentType="shorts" />
        </section>
      </div>
    </div>
  );
};

export default Home;
