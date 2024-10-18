import { useState } from "react";
import { Link } from "react-router-dom";

const videos = [
    {
        id: 1,

        thumbnail: "https://i.ytimg.com/vi/43Ga_uTQnxg/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBPBAB6fcCW_A4eq2OgxisNZ1qzUw",
        url: "https://www.youtube.com/embed/43Ga_uTQnxg?si=uFU-zQe_gBknyv_y",
    },
    {
        id: 2,

        thumbnail: "https://i.ytimg.com/vi/RdVfnDMCINw/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAMZSxGFYXDMJ-Vvt-LTTjbmeK12A",
        url: "https://www.youtube.com/embed/RdVfnDMCINw?si=bi00e1zQCrPiCYny",
    },
    {
        id: 3,
        thumbnail: "https://i.ytimg.com/vi/TpOsJ7cHd9w/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA1PUcZfRd7KYM0gQaP1J20TBTbbg",
        url: "https://www.youtube.com/embed/TpOsJ7cHd9w?si=V5uc_DRQLf63B8Mb",
    },
    {
        id: 4,
        thumbnail: "https://img.youtube.com/vi/5gQ0qZo1-Nc/hqdefault.jpg",
        url: "https://www.youtube.com/embed/5gQ0qZo1-Nc?si=kqS60B-_sBenXSjc",
    },
    {
        id: 5,
        thumbnail: "https://i.ytimg.com/vi/J2RX8rGwZtg/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDoHfHnTq-Z6OLXgh9A9b9WRSvizQ",
        url: "https://www.youtube.com/embed/J2RX8rGwZtg?si=PuKkI7ejN__d0us0",
    },
    {
        id: 6,
        thumbnail: "https://i.ytimg.com/vi/eYgYvQFs6G8/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCgHMluRHQ005hWO2OusMk7Mt8kZQ",
        url: "https://www.youtube.com/embed/eYgYvQFs6G8?si=enLrtOCmUqXWiwcg",
    },
    {
        id: 7,
        thumbnail: "https://i.ytimg.com/vi/zFr6E5H5sRg/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhyIFIoPTAP&rs=AOn4CLBUw0ooVH7VjBNLaeWBglt2r_0d7g",
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
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
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