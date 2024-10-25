import { useState } from "react";
import { Link } from "react-router-dom";

const videos = [
    {
        id: 1,

        thumbnail: "/images/Slider1/video1.avif",
        url: "https://www.youtube.com/embed/43Ga_uTQnxg?si=uFU-zQe_gBknyv_y",
    },
    {
        id: 2,

        thumbnail: "/images/Slider1/video2.avif",
        url: "https://www.youtube.com/embed/RdVfnDMCINw?si=bi00e1zQCrPiCYny",
    },
    {
        id: 3,
        thumbnail: "/images/Slider1/video3.avif",
        url: "https://www.youtube.com/embed/TpOsJ7cHd9w?si=V5uc_DRQLf63B8Mb",
    },
    {
        id: 4,
        thumbnail: "/images/Slider1/video4.avif",
        url: "https://www.youtube.com/embed/5gQ0qZo1-Nc?si=kqS60B-_sBenXSjc",
    },
    {
        id: 5,
        thumbnail: "/images/Slider1/video5.avif",
        url: "https://www.youtube.com/embed/J2RX8rGwZtg?si=PuKkI7ejN__d0us0",
    },
    {
        id: 6,
        thumbnail: "/images/Slider1/video6.avif",
        url: "https://www.youtube.com/embed/eYgYvQFs6G8?si=enLrtOCmUqXWiwcg",
    },
    {
        id: 7,
        thumbnail: "/images/Slider1/video7.avif",
        url: "https://www.youtube.com/embed/zFr6E5H5sRg?si=R021V1YLU7zkcNCc",
    },
];

const VideoSlider = () => {
    const [selectedVideo, setSelectedVideo] = useState(videos[0].url);

    return (
        <>
         <div className='flex items-center justify-between py-2 px-2 mt-5 bg-gray-200'>
                <h1 className='font-manrope font-semibold bg-gray-200 text-gray-900 text-2xl md:leading-normal'>Latest <span className='text-red-600'>Videos</span></h1>
                <Link to="/videos" className='border px-3 py-1 rounded-full border-black hover:text-red-600 hover:border-red-600 hover:bg-white hover:shadow-lg duration-150'>See More →</Link>
            </div>
        <div className="flex md:flex-row flex-col md:h-[40rem] bg-gray-100 border shadow-xl">

           
            {/* Video Player Section */}
            <div className="flex-1 flex items-center justify-center py-2 px-5">
                <div className="w-full aspect-video">
                    <iframe
                        width="100%"
                        height="100%"
                        src={selectedVideo}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        loading="lazy"
                    ></iframe>
                </div>
            </div>


            {/* Thumbnail Slider Section */}
            <div className="md:w-1/5 flex gap-5 md:flex-col overflow-y-auto md:py-10 p-4 shadow-lg">
                {videos.map((video) => (
                    <div
                        key={video.id}
                        className="cursor-pointer flex-shrink-0 "
                        onClick={() => setSelectedVideo(video.url)}
                    >
                        <img
                            src={video.thumbnail}
                            className="rounded-md h-16 md:h-full shadow-lg hover:scale-105 transition-transform"
                        />
                    </div>
                ))}
            </div>

        </div>
        </>
        
    );
};

export default VideoSlider;