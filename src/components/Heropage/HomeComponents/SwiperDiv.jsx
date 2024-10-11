import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import  React, { useState } from "react";
import { Navigation, Pagination } from "swiper/modules";
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
      id: 4,
      img: 'https://img.youtube.com/vi/J2RX8rGwZtg/hqdefault.jpg',
      videoId: 'J2RX8rGwZtg',
    },
    {
      id: 4,
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
          className="dark !absolute rounded-full hover:bg-gray-700 left-2 top-[29%] z-10 -translate-y-1/2"
        >
          <NavArrowLeft className="h-7 w-7 -translate-x-0.5 stroke-2" />
        </IconButton>
  
        <IconButton
          isCircular
          size="lg"
          variant="ghost"
          color="secondary"
          onClick={() => swiper.slideNext()}
          className="dark !absolute right-2 rounded-full hover:bg-gray-700 top-[29%]  z-10 -translate-y-1/2"
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
    },
    {
      id: 2,
      img: "https://img.youtube.com/vi/TpOsJ7cHd9w/hqdefault.jpg",
      videoId: "TpOsJ7cHd9w",
    },
    {
      id: 3,
      img: "https://img.youtube.com/vi/5gQ0qZo1-Nc/hqdefault.jpg",
      videoId: "5gQ0qZo1-Nc",
    },
    {
      id: 4,
      img: "https://img.youtube.com/vi/J2RX8rGwZtg/hqdefault.jpg",
      videoId: "J2RX8rGwZtg",
    },
    {
      id: 5,
      img: "https://img.youtube.com/vi/eYgYvQFs6G8/hqdefault.jpg",
      videoId: "eYgYvQFs6G8",
    },
    {
      id: 6,
      img: "https://img.youtube.com/vi/zFr6E5H5sRg/hqdefault.jpg",
      videoId: "zFr6E5H5sRg",
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
    <div className="max-w-full h-[80vh]">
    <Swiper
      loop={true} 
      slidesPerView={4}  
      slidesPerGroup={1}  
      spaceBetween={20}  
      pagination={{
        enabled: true,
        clickable: true,
        dynamicBullets: true,
        renderBullet: customPagination,
      }}
      breakpoints={{
        // When the screen width is >= 1024px
        1024: {
          slidesPerView: 4, // Show 4 slides per view
          slidesPerGroup: 1,
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
          slidesPerView: 1, // Show 1 slide per view
          slidesPerGroup: 1,
        },
      }}
      modules={[Navigation, Pagination]}
      className="relative h-[50vh] rounded-lg [&_div.swiper-button-next]:text-background [&_div.swiper-button-prev]:text-background"
    >
      {/* Loop through the cardData array */}
      {data.map((card, index) => (
          <SwiperSlide key={card.id} className="select-none">
            <div
              className="p-1 bg-white shadow-lg rounded-lg cursor-pointer"
              onClick={() => openModal(card.videoId)} // Assuming each card has a videoId
            >
              <img
                src={card.img}
                alt={`image-${index}`}
                className="h-[200px] w-full object-cover rounded-lg"
              />
            </div>
          </SwiperSlide>
        ))}
 <VideoModal open={modalOpen} handleOpen={closeModal} videoId={selectedVideoId} />
      <CustomNavigation />
    </Swiper>
  </div>
  );
}
