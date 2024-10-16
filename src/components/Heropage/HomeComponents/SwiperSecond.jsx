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

const SwiperSecond = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <div className='h-[70vh] w-screen gap-1 flex flex-col md:flex-row'>
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
                className="mySwiper2 w-full md:w-3/4 h-full "
            >
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt="Nature 1" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-2.jpg" alt="Nature 2" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-3.jpg" alt="Nature 3" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-4.jpg" alt="Nature 4" />
                </SwiperSlide>
               
             
               
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
               
                slidesPerView={4}
                freeMode={true}
                
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper w-full md:w-1/4 h-full "
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
                <SwiperSlide >
                    <img src="https://swiperjs.com/demos/images/nature-1.jpg" className="h-[100px] md:w-[77%] object-cover" alt="Nature Thumb 1" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-2.jpg" className="h-[100px] md:w-[77%] object-cover" alt="Nature Thumb 2" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-3.jpg" className="h-[100px] md:w-[77%] object-cover" alt="Nature Thumb 3" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-4.jpg" className="h-[100px] md:w-[77%] object-cover" alt="Nature Thumb 4" />
                </SwiperSlide>
            
            </Swiper>
        </div>
    );
}

export default SwiperSecond;
