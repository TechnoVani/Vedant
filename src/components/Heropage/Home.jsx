import React from "react";
import { SwiperDiv } from "./HomeComponents/SwiperDiv";

const Home = () => {
  return (
    <>
      <section className="relative h-[80vh] w-full bg-gray-700 bg-blend-multiply">
        <video
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
        </div>
      </section>
      <section className="py-14 lg:py-10 relative shadow-zinc-600 z-0 bg-zinc-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative text-center">
          <h3 className="max-w-2xl mx-auto text-center font-manrope font-bold text-4xl text-gray-900 mb-5 md:text-3xl md:leading-normal">
            Discover Our Path to <span className="text-red-600">Devotion </span>
          </h3>

          <p className="text-center text-lg font-normal leading-7 text-gray-500 mb-9">
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
      <section className="max-w-full px-3 h-[60vh] md:px-10 py-6 bg-gray-900 border border-gray-200 rounded-lg shadow">
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
        className="mb-2 text-base font-medium tracking-tight text-white dark:text-white"
      >
        See More →
      </p>
    </a>
  </div>
      <SwiperDiv contentType="videos" />
      </section>
      <section className="max-w-full h-[60vh] px-3 md:px-10 py-6 bg-white border border-gray-200 rounded-lg shadow">
      <div className="flex  pb-5 pt-3 justify-between">
    <a href="#">
      <h5
        className="mb-2 text-2xl font-bold tracking-tight text-black dark:text-black"
      >
        Trending Shorts
      </h5>
    </a>

    <a href="/videos">
      <p
        className="mb-2 text-base font-medium tracking-tight text-black dark:text-black"
      >
        See More →
      </p>
    </a>
  </div>
      <SwiperDiv  contentType="shorts"/>
      </section>
    </>
  );
};

export default Home;
