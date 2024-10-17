import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import React, { useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { IconButton } from "@material-tailwind/react";
import { NavArrowRight, NavArrowLeft } from "iconoir-react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import VideoModal from "./VideoModal";
const cardData = [
  {
    id: 1,
    img: 'https://img.youtube.com/vi/RdVfnDMCINw/hqdefault.jpg',
    videoId: 'RdVfnDMCINw', // YouTube video ID
  },
  {
    id: 2,
    img: 'https://img.youtube.com/vi/RdVfnDMCINw/hqdefault.jpg',
    videoId: 'RdVfnDMCINw',
  },
  {
    id: 3,
    img: 'https://img.youtube.com/vi/TpOsJ7cHd9w/hqdefault.jpg',
    videoId: 'TpOsJ7cHd9w',
  },
  {
    id: 4,
    img: 'https://img.youtube.com/vi/5gQ0qZo1-Nc/hqdefault.jpg',
    videoId: '5gQ0qZo1-Nc',
  },
  {
    id: 5,
    img: 'https://img.youtube.com/vi/J2RX8rGwZtg/hqdefault.jpg',
    videoId: 'J2RX8rGwZtg',
  },
  {
    id: 6,
    img: 'https://img.youtube.com/vi/zFr6E5H5sRg/hqdefault.jpg',
    videoId: 'zFr6E5H5sRg',
  },
  // Add more card data as needed
];

function CustomNavigation() {
  const swiper = useSwiper();

  return (
    <>
      <IconButton
        isCircular
        size="lg"
        variant="ghost"
        color="secondary"
        onClick={() => swiper.slidePrev()}
        className="dark !absolute rounded-full hover:bg-gray-700 left-2 top-[50%] z-10 -translate-y-1/2"
      >
        <NavArrowLeft className="h-7 w-7 -translate-x-0.5 stroke-2" />
      </IconButton>

      <IconButton
        isCircular
        size="lg"
        variant="ghost"
        color="secondary"
        onClick={() => swiper.slideNext()}
        className="dark !absolute right-2 rounded-full hover:bg-gray-700 top-[50%]  z-10 -translate-y-1/2"
      >
        <NavArrowRight className="h-7 w-7 translate-x-px stroke-2" />
      </IconButton>
    </>
  );
}

function customPagination(_, className) {
  return `<span class="${className} w-4 h-4 [&.swiper-pagination-bullet-active]:!opacity-100 [&.swiper-pagination-bullet-active]:[background:rgb(var(--color-background))] !opacity-50 ![background:rgb(var(--color-background))]"></span>`;
}
const videoData = [
  {
    id: 1,
    img: "https://img.youtube.com/vi/RdVfnDMCINw/hqdefault.jpg",
    videoId: "RdVfnDMCINw",
    name: "जय श्री राम |"
  },
  {
    id: 2,
    img: "https://img.youtube.com/vi/TpOsJ7cHd9w/hqdefault.jpg",
    videoId: "TpOsJ7cHd9w",
    name: "जय श्री राम 🙏 |"
  },
  {
    id: 3,
    img: "https://img.youtube.com/vi/5gQ0qZo1-Nc/hqdefault.jpg",
    videoId: "5gQ0qZo1-Nc",
    name: "शिव रुद्राष्टकम |"
  },
  {
    id: 4,
    img: "https://img.youtube.com/vi/J2RX8rGwZtg/hqdefault.jpg",
    videoId: "J2RX8rGwZtg",
    name: "श्री गणेश श्लोक |"
  },
  {
    id: 5,
    img: "https://img.youtube.com/vi/eYgYvQFs6G8/hqdefault.jpg",
    videoId: "eYgYvQFs6G8",
    name: "श्री राम स्तुति भजन |"
  },
  {
    id: 6,
    img: "https://img.youtube.com/vi/zFr6E5H5sRg/hqdefault.jpg",
    videoId: "zFr6E5H5sRg",
    name: "Meri Maiya Aayi Hain Dwar |"
  },
];

const shortsData = [
  {
    id: 1,
    img: "https://img.youtube.com/vi/G3p6MCQDK2s/hqdefault.jpg",
    videoId: "G3p6MCQDK2s",
  },
  {
    id: 2,
    img: "https://img.youtube.com/vi/gvPSWTBDUDk/hqdefault.jpg",
    videoId: "gvPSWTBDUDk",
  },
  {
    id: 3,
    img: "https://img.youtube.com/vi/KfroyqYB3_s/hqdefault.jpg",
    videoId: "KfroyqYB3_s",
  },
  {
    id: 4,
    img: "https://img.youtube.com/vi/MpB9x2h8rt0/hqdefault.jpg",
    videoId: "MpB9x2h8rt0",
  },
  {
    id: 5,
    img: "https://img.youtube.com/vi/NJcG_QaE6XQ/hqdefault.jpg",
    videoId: "NJcG_QaE6XQ",
  },
  {
    id: 6,
    img: "https://img.youtube.com/vi/wZsM302HyJk/hqdefault.jpg",
    videoId: "wZsM302HyJk",
  },
  {
    id: 7,
    img: "https://img.youtube.com/vi/QA3AU7mypwQ/hqdefault.jpg",
    videoId: "QA3AU7mypwQ",
  },
  {
    id: 8,
    img: "https://img.youtube.com/vi/Dr6CgU90JkU/hqdefault.jpg",
    videoId: "Dr6CgU90JkU",
  },
  {
    id: 9,
    img: "https://img.youtube.com/vi/SZ_Tn8kJeao/hqdefault.jpg",
    videoId: "SZ_Tn8kJeao",
  },
];
export function SwiperDiv({ contentType }) {
  const data = contentType === "videos" ? videoData : shortsData;
  const [selectedVideoId, setSelectedVideoId] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = (videoId) => {
    setSelectedVideoId(videoId);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedVideoId(null); // Reset the video ID when closing
  };
  return (
    <>
      {/* <div className="py-2">
        <h1>NEW <span className="font-semibold text-red-900">RELEASES</span></h1>
      </div> */}
      <div className="max-w-full h-fit ">
        <Swiper
          loop={true}
          slidesPerView={4}
          slidesPerGroup={1}
          spaceBetween={20}
          autoplay={{
            delay: 3000, // Set the delay in milliseconds (3 seconds here)
            disableOnInteraction: false, // Auto-swiping will not stop after user interaction
          }}
          pagination={{
            enabled: true,
            clickable: true,
            dynamicBullets: true,
            renderBullet: customPagination,
          }}
          breakpoints={{
            // When the screen width is >= 1024px
            1024: {
              slidesPerView: 5, // Show 4 slides per view
              slidesPerGroup: 1,
              spaceBetween: 1
            },
            // When the screen width is >= 768px
            768: {
              slidesPerView: 3, // Show 2 slides per view
              slidesPerGroup: 1,
            },
            502: {
              slidesPerView: 2, // Show 2 slides per view
              slidesPerGroup: 1,
            },
            // When the screen width is < 768px
            0: {
              slidesPerView: 3, // Show 1 slide per view
              slidesPerGroup: 1,
              spaceBetween: 2
            },
          }}
          modules={[Navigation, Pagination, Autoplay]}
          className="relative h-fit  rounded-lg [&_div.swiper-button-next]:text-background [&_div.swiper-button-prev]:text-background"
        >
          {/* Loop through the cardData array */}
          {data.map((card, index) => (
            <SwiperSlide key={card.id} className="select-none p-1 w-full">
              <div
              onClick={() => openModal(card.videoId)}
              className="relative h-[170px] w-full overflow-hidden cursor-pointer bg-blue-gray-500  rounded-md group">
                {/* Image */}
                <img
                  src={card.img}
                  alt={`image-${index}`}
                  className="h-full w-full overflow-x-hidden object-cover"
                />
                <div
                  className="absolute bottom-[-20%]  h-[20%]  w-full overflow-hidden  bg-black text-white transition-all duration-500 ease-in-out opacity-0 group-hover:bottom-0 group-hover:opacity-100"
                  style={{ width: '100%' }}
                >
                  <p className="text-white z-50 p-2">{card.name}</p> {/* Assuming `card.text` contains the card's text */}
                </div>
              </div>
            </SwiperSlide>
          ))}
          <VideoModal open={modalOpen} handleOpen={closeModal} videoId={selectedVideoId} />
          <CustomNavigation />
        </Swiper>
      </div>

    </>
  );
}
