import React, { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { Link } from 'react-router-dom';

const SwiperSecond = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <>
        <div className='flex items-center justify-between py-2 mt-5'>
        <h1 >LATEST <span className='font-semibold'>VIDEOS</span></h1>
        <Link to="/videos">MORE..</Link>
        </div>
        <div className='h-[30rem] w-full gap-3 flex flex-col md:flex-row justify-between border-2 drop-shadow-xl border-gray-400 py-4 px-1 shadow-xl'>
            <Swiper
                style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                }}
                loop={true}
                spaceBetween={10}
                navigation={true}
                // Only pass the thumbs prop when thumbsSwiper is not null
                thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2 w-full md:w-3/4 h-full"
            >
                <SwiperSlide >
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/43Ga_uTQnxg?si=uFU-zQe_gBknyv_y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen />
                </SwiperSlide>
                <SwiperSlide>
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/RdVfnDMCINw?si=bi00e1zQCrPiCYny" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen />
                </SwiperSlide>
                <SwiperSlide>
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/TpOsJ7cHd9w?si=V5uc_DRQLf63B8Mb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen />
                </SwiperSlide>
                <SwiperSlide>
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/5gQ0qZo1-Nc?si=kqS60B-_sBenXSjc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen />
                </SwiperSlide>
                <SwiperSlide>
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/J2RX8rGwZtg?si=PuKkI7ejN__d0us0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </SwiperSlide>
                <SwiperSlide>
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/eYgYvQFs6G8?si=enLrtOCmUqXWiwcg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen />
                </SwiperSlide>
                <SwiperSlide>
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/zFr6E5H5sRg?si=R021V1YLU7zkcNCc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen />
                </SwiperSlide>
              
               
             
               
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
               
                slidesPerView={4}
                freeMode={true}
                
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper w-full md:w-[19%] h-full overflow-y-scroll m-0 pr-5 "
                breakpoints={{
                    // When the screen width is >= 768px (md), change direction to vertical and adjust space
                    768: {
                        direction: 'vertical',
                        slidesPerView: 4,
                        spaceBetween: 10,  // Larger space for larger screens
                    },
                    // When the screen width is < 768px (smaller than md), direction stays horizontal
                    0: {
                        direction: 'horizontal',
                        slidesPerView: 4,
                        spaceBetween: 5,   // Smaller space for smaller screens
                    }
                }}
            >
                <SwiperSlide className='md:w-[100%] hover:scale-95  '>
                    <img src="https://i.ytimg.com/vi/43Ga_uTQnxg/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBPBAB6fcCW_A4eq2OgxisNZ1qzUw" className="h-[100px] md:w-[100%] object-cover" alt="Nature Thumb 1" />
                </SwiperSlide>
                <SwiperSlide className='md:w-[100%] hover:scale-95'>
                    <img src="https://i.ytimg.com/vi/RdVfnDMCINw/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAMZSxGFYXDMJ-Vvt-LTTjbmeK12A" className="h-[100px] md:w-[100%] object-cover" alt="Nature Thumb 2" />
                </SwiperSlide>
                <SwiperSlide className='md:w-[100%] hover:scale-95'>
                    <img src="https://i.ytimg.com/vi/TpOsJ7cHd9w/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA1PUcZfRd7KYM0gQaP1J20TBTbbg" className="h-[100px] md:w-[100%] object-cover" alt="Nature Thumb 3" />
                </SwiperSlide>
                <SwiperSlide className='md:w-[100%] hover:scale-95'>
                    <img src="https://img.youtube.com/vi/5gQ0qZo1-Nc/hqdefault.jpg" className="h-[100px] md:w-[100%] object-cover" alt="Nature Thumb 4" />
                </SwiperSlide>
                <SwiperSlide className='md:w-[100%] hover:scale-95'>
                    <img src="https://i.ytimg.com/vi/J2RX8rGwZtg/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDoHfHnTq-Z6OLXgh9A9b9WRSvizQ" className="h-[100px] md:w-[100%] object-cover" alt="Nature Thumb 4" />
                </SwiperSlide>
              
                <SwiperSlide className='md:w-[100%] hover:scale-95'>
                    <img src="https://i.ytimg.com/vi/eYgYvQFs6G8/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCgHMluRHQ005hWO2OusMk7Mt8kZQ" className="h-[100px] md:w-[100%] object-cover" alt="Nature Thumb 4" />
                </SwiperSlide>
              
                <SwiperSlide className='md:w-[100%] hover:scale-95'>
                    <img src="https://i.ytimg.com/vi/zFr6E5H5sRg/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhyIFIoPTAP&rs=AOn4CLBUw0ooVH7VjBNLaeWBglt2r_0d7g" className="h-[100px] md:w-[100%] object-cover" alt="Nature Thumb 4" />
                </SwiperSlide>
              
            </Swiper>
        </div>
        
        </>
    );
}

export default SwiperSecond;
