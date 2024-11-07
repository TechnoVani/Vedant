import React, { useState } from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import VideoModal from "./Heropage/HomeComponents/VideoModal";
import { Helmet } from "react-helmet";
// Ensure the path is correct for your project

// Example card data for HTML and React sections
const cardData = {
  videos: [
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
  ],
  shorts: [
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
  ],
};

const AllVideos = () => {
  const [activeTab, setActiveTab] = useState("videos");
  const [open, setOpen] = useState(false); // Modal open/close state
  const [selectedVideoId, setSelectedVideoId] = useState(null); // Currently selected video

  const data = [
    {
      label: "VIDEOS",
      value: "videos",

    },
    {
      label: "SHORTS",
      value: "shorts",

    },
  ];

  const handleOpen = () => setOpen(!open);

  const openModal = (videoId) => {
    setSelectedVideoId(videoId); // Set the videoId for the modal
    handleOpen(); // Open the modal
  };

  return (
    <div className="flex items-center justify-center">
      <Helmet>
        <title>Vedant Devotions | All-Videos</title>
        <meta name="description" content="Explore a curated collection of spiritual videos and shorts. Discover insights and teachings that inspire." />
        <meta name="keywords" content="spiritual videos, vedant devotions, motivational shorts, teachings" />

      </Helmet>
      <Tabs id="custom-animation" className="pt-5 container" value={activeTab}>
        <div className="flex justify-center bg-gray-200 py-2 headVideo ">
          <TabsHeader
            className="rounded-none w-60 border-b border-blue-gray-50 bg-transparent p-0"
            indicatorProps={{
              className:
                "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none ",
            }}
          >
            {data.map(({ label, value }) => (
              <Tab
                key={value}
                value={value}
                onClick={() => setActiveTab(value)}
                className={activeTab === value ? "text-gray-900" : ""}

              >
                {label}
              </Tab>
            ))}
          </TabsHeader>
        </div>
        <TabsBody animate={{
          initial: { y: 250 },
          mount: { y: 0 },
          unmount: { y: 250 },
        }}>
          {data.map(({ value, desc }) => (
            <TabPanel key={value} value={value}>

              {/* Render the card data for the active tab */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {cardData[value].map((card, index) => (
                  <div
                    key={card.id}
                    className="p-1 hover:scale-105 duration-300 shadow-lg rounded-lg cursor-pointer"
                    onClick={() => openModal(card.videoId)} // Open modal on card click
                  >
                    <img
                      src={card.img}
                      alt={`image-${index}`}
                      className="h-[200px] w-full object-cover rounded-lg"
                    />
                  </div>
                ))}
              </div>
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>

      {/* Video Modal Component */}
      <VideoModal open={open} handleOpen={handleOpen} videoId={selectedVideoId} />
    </div>
  );
};

export default AllVideos;
