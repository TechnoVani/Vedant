import React from "react";

const AboutUs = () => {
  return (
    <>
      <section className=" overflow-hidden h-full py-10 bg-gray-50 dark:bg-white">
        <div className="px-4 flex justify-center items-center h-full mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid items-center gap-2 grid-cols-1 md:grid-cols-2">
          <div className=" w-full h-full flex justify-center items-center ">
              <img
                className=" h-52 "
                src="/images/god gallery/vedanttttt.jpg"
                alt=""
              />
              {/* <img className="absolute inset-x-0 bottom-10 -mb-10 -translate-x-1/2 left-1/2" src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg" alt="" /> */}

              {/* <img className="relative w-full xl:max-w-lg  xl:mx-auto 2xl:origin-bottom " src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/business-woman.png" alt="" /> */}
            </div>
            <div className=" w-full h-full ">
              <h2 className="text-3xl font-bold leading-tight text-black dark:text-black sm:text-4xl lg:text-5xl">
                Vedant Devotions
              </h2>
              <p className="max-w-xl mt-3 text-lg leading-relaxed text-gray-800 dark:text-zinc-800 text-justify">
                Welcome to Vedant Devotions! We are a digital space dedicated to
                spreading the essence of devotion and spirituality through
                captivating images and inspiring content. Our mission is to
                nurture the spiritual journeys of our audience by sharing
                visually stunning, soul-enriching content that resonates with
                the values of peace, faith, and inner growth. At Vedant
                Devotions, we believe in the power of visual storytelling to
                uplift and connect people with the divine. Our YouTube channel
                features a collection of devotion-themed imagery and spiritual
                insights, designed to bring moments of tranquility and
                reflection into your daily life.
              </p>
            </div>

          </div>
        </div>
      </section>
      <div className="bg-black">
        <section
          id="features"
          className="relative block px-6 py-10 md:py-20 md:px-10  border-t border-b border-neutral-900 bg-neutral-900/30"
        >
          <div className="relative mx-auto max-w-5xl text-center">
            <h2 className="block w-full bg-gradient-to-b from-white to-gray-200 bg-clip-text font-bold text-transparent text-3xl sm:text-4xl">
              About Vedant Devotions
            </h2>
            <p className="mx-auto my-4 w-full max-w-xl bg-transparent text-center font-medium leading-relaxed tracking-wide text-gray-200">
              Bringing Devotion to Life by Inspiring Spiritual Growth Through
              Powerful and Soulful Imagery
            </p>
          </div>
          <div className="relative mx-auto max-w-7xl z-10 grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-3">
            {/* Card 1 */}
            <div className="rounded-md border border-neutral-800 bg-neutral-900/50 p-8 text-center shadow">
              <div
                className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border"
                style={{
                  backgroundImage:
                    "linear-gradient(rgb(80, 70, 229) 0%, rgb(43, 49, 203) 100%)",
                  borderColor: "rgb(93, 79, 240)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-color-swatch"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M19 3h-4a2 2 0 0 0 -2 2v12a4 4 0 0 0 8 0v-12a2 2 0 0 0 -2 -2" />
                  <path d="M13 7.35l-2 -2a2 2 0 0 0 -2.828 0l-2.828 2.828a2 2 0 0 0 0 2.828l9 9" />
                  <path d="M7.3 13h-2.3a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h12" />
                  <line x1="17" y1="17" x2="17" y2="17.01" />
                </svg>
              </div>
              <h3 className="mt-6 font-semibold text-gray-200">
                Our Mission
              </h3>
              <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400 text-justify">
                At Vedant Devotions, we aim to capture the essence of devotion
                through visually stunning images that reflect spiritual beauty
                and inner peace. Our content is carefully curated to inspire
                mindfulness, calmness, and connection with the divine. We
                believe that images can transcend words and touch the soul,
                guiding you toward a path of deeper spiritual reflection.
              </p>
            </div>

            {/* Card 2 */}
            <div className="rounded-md border border-neutral-800 bg-neutral-900/50 p-8 text-center shadow">
              <div
                className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border"
                style={{
                  backgroundImage:
                    "linear-gradient(rgb(80, 70, 229) 0%, rgb(43, 49, 203) 100%)",
                  borderColor: "rgb(93, 79, 240)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-bolt"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <polyline points="13 3 13 10 19 10 11 21 11 14 5 14 13 3" />
                </svg>
              </div>
              <h3 className="mt-6 font-semibold text-gray-200">
                Our Vision
              </h3>
              <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400 text-justify">
                Our platform is more than just a collection of images; it’s a
                journey. Each post on our YouTube channel is designed to inspire
                faith, offering a peaceful pause in your busy life. Whether
                you're seeking a moment of serenity, a spark of inspiration, or
                a gentle reminder of your spiritual path, Vedant Devotions
                provides meaningful content to support your personal growth.
              </p>
            </div>

            {/* Card 3 */}
            <div className="rounded-md border border-neutral-800 bg-neutral-900/50 p-8 text-center shadow">
              <div
                className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border"
                style={{
                  backgroundImage:
                    "linear-gradient(rgb(80, 70, 229) 0%, rgb(43, 49, 203) 100%)",
                  borderColor: "rgb(93, 79, 240)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-tools"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M3 21h4l13 -13a1.5 1.5 0 0 0 -4 -4l-13 13v4" />
                  <line x1="14.5" y1="5.5" x2="18.5" y2="9.5" />
                  <polyline points="12 8 7 3 3 7 8 12" />
                  <line x1="7" y1="8" x2="5.5" y2="9.5" />
                  <polyline points="16 12 21 17 17 21 12 16" />
                  <line x1="16" y1="17" x2="14.5" y2="18.5" />
                </svg>
              </div>
              <h3 className="mt-6 font-semibold text-gray-200">
                Our Goal
              </h3>
              <p className="my-4 mb-0 font-normal tracking-wide text-gray-400 text-justify leading-relaxed">
                At the heart of Vedant Devotions is our community. We are
                passionate about connecting with individuals who share a love
                for spirituality and devotion. As we continue to grow, we invite
                you to join us on this sacred journey. Subscribe to our YouTube
                channel for regular updates, and let’s explore the world of
                devotion together, one image at a time.
              </p>
            </div>

            {/* Decorative elements */}
            <div
              className="absolute bottom-0 left-0 z-0 h-1/3 w-full border-b"
              style={{
                backgroundImage:
                  "linear-gradient(to right top, rgba(79, 70, 229, 0.2) 0%, transparent 50%, transparent 100%)",
                borderColor: "rgba(92, 79, 240, 0.2)",
              }}
            ></div>
            <div
              className="absolute bottom-0 right-0 z-0 h-1/3 w-full"
              style={{
                backgroundImage:
                  "linear-gradient(to left top, rgba(220, 38, 38, 0.2) 0%, transparent 50%, transparent 100%)",
                borderColor: "rgba(92, 79, 240, 0.2)",
              }}
            ></div>
          </div>

          {/* 
        <div className="relative mx-auto max-w-7xl z-10 grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-md border border-neutral-800 bg-neutral-900/50 p-8 text-center shadow">
                <div className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border "
                    style="background-image: linear-gradient(rgb(80, 70, 229) 0%, rgb(43, 49, 203) 100%); border-color: rgb(93, 79, 240);">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-color-swatch" width="24"
                        height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none"
                        strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M19 3h-4a2 2 0 0 0 -2 2v12a4 4 0 0 0 8 0v-12a2 2 0 0 0 -2 -2"></path>
                        <path d="M13 7.35l-2 -2a2 2 0 0 0 -2.828 0l-2.828 2.828a2 2 0 0 0 0 2.828l9 9"></path>
                        <path d="M7.3 13h-2.3a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h12"></path>
                        <line x1="17" y1="17" x2="17" y2="17.01"></line>
                    </svg>
                </div>
                <h3 className="mt-6 font-semibold text-gray-200">Embracing Spirituality Through Imagery</h3>
                <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">At Vedant Devotions, we aim to capture the essence of devotion through visually stunning images that reflect spiritual beauty and inner peace. Our content is carefully curated to inspire mindfulness, calmness, and connection with the divine. We believe that images can transcend words and touch the soul, guiding you toward a path of deeper spiritual reflection.
                </p>
            </div>


            <div className="rounded-md border border-neutral-800 bg-neutral-900/50 p-8 text-center shadow">
                <div className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border "
                    style="background-image: linear-gradient(rgb(80, 70, 229) 0%, rgb(43, 49, 203) 100%); border-color: rgb(93, 79, 240);">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bolt" width="24"
                        height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none"
                        strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <polyline points="13 3 13 10 19 10 11 21 11 14 5 14 13 3"></polyline>
                    </svg>
                </div>
                <h3 className="mt-6 font-semibold text-gray-200"> A Journey of Faith and Inspiration</h3>
                <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">Our platform is more than just a collection of images; it’s a journey. Each post on our YouTube channel is designed to inspire faith, offering a peaceful pause in your busy life. Whether you're seeking a moment of serenity, a spark of inspiration, or a gentle reminder of your spiritual path, Vedant Devotions provides meaningful content to support your personal growth.
                </p>
            </div>


            <div className="rounded-md border border-neutral-800 bg-neutral-900/50 p-8 text-center shadow">
                <div className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border "
                    style="background-image: linear-gradient(rgb(80, 70, 229) 0%, rgb(43, 49, 203) 100%); border-color: rgb(93, 79, 240);">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-tools" width="24"
                        height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none"
                        strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M3 21h4l13 -13a1.5 1.5 0 0 0 -4 -4l-13 13v4"></path>
                        <line x1="14.5" y1="5.5" x2="18.5" y2="9.5"></line>
                        <polyline points="12 8 7 3 3 7 8 12"></polyline>
                        <line x1="7" y1="8" x2="5.5" y2="9.5"></line>
                        <polyline points="16 12 21 17 17 21 12 16"></polyline>
                        <line x1="16" y1="17" x2="14.5" y2="18.5"></line>
                    </svg>
                </div>
                <h3 className="mt-6 font-semibold text-gray-200">A Growing Community of Devotees</h3>
                <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">
                    At the heart of Vedant Devotions is our community. We are passionate about connecting with individuals who share a love for spirituality and devotion. As we continue to grow, we invite you to join us on this sacred journey. Subscribe to our YouTube channel for regular updates, and let’s explore the world of devotion together, one image at a time.
                </p>
            </div>


        </div>

        <div className="absolute bottom-0 left-0 z-0 h-1/3 w-full border-b"
            style="background-image: linear-gradient(to right top, rgba(79, 70, 229, 0.2) 0%, transparent 50%, transparent 100%); border-color: rgba(92, 79, 240, 0.2);">
        </div>
        <div className="absolute bottom-0 right-0 z-0 h-1/3 w-full"
            style="background-image: linear-gradient(to left top, rgba(220, 38, 38, 0.2) 0%, transparent 50%, transparent 100%); border-color: rgba(92, 79, 240, 0.2);">
        </div> */}
        </section>
      </div>
    </>
  );
};

export default AboutUs;
