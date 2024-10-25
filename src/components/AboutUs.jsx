import React from "react";
import { Helmet } from "react-helmet";

const AboutUs = () => {
  return (
    <>
   <Helmet>
        <title>Vedant Devotions | About Us</title>
        <meta name="description" content="Learn about Vedant Devotion, a platform dedicated to exploring spirituality through music and ancient wisdom." />
        <meta name="keywords" content="Vedant Devotion, spirituality, bhajans, music, Indian mythology" />
    
      </Helmet>
      <section className=" overflow-hidden h-full py-10 ">
        <div className="px-4 flex justify-center items-center h-full mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid items-center gap-2 grid-cols-1 md:grid-cols-2">
            <div className=" w-full h-full flex justify-center items-center ">
              <img
                className=" h-52 rounded-full"
                src="/images/god gallery/vedanttttt.jpg"
                alt=""
              />
              {/* <img className="absolute inset-x-0 bottom-10 -mb-10 -translate-x-1/2 left-1/2" src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg" alt="" /> */}

              {/* <img className="relative w-full xl:max-w-lg  xl:mx-auto 2xl:origin-bottom " src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/business-woman.png" alt="" /> */}
            </div>
            <div className=" w-full h-full ">
              <h1 className="text-4xl font-semibold pb-1 border-b-4 border-gray-900 max-w-max mb-3">About Us</h1>
              <h2 className="text-xl leading-tight text-gray-900 dark:text-black sm:text-4xl lg:text-3xl">
                Welcome to Vedant Devotion: Where Spirituality Sings
              </h2>
              <p className="max-w-xl mt-3 text-md leading-relaxed text-gray-800 dark:text-zinc-800 text-justify">


                At Vedant Devotion, we embark on a vibrant journey through the rich tapestry of ancient Indian mythology, civilization, and culture.
                We delve into the wisdom of the Puranas and Vedas, exploring the vast world of our 33 crore deities, not just through stories and scriptures,
                but also through the enchanting power of music.

              </p>
            </div>

          </div>
        </div>
        <section className="container mx-auto px-4 py-12">
          <div className="mb-8 ">

          </div>


          <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">Melodies of the Divine</h2>
            <p className="text-md leading-relaxed text-justify">
              Our platform resonates with the soulful renditions of bhajans and dharmik geet. We believe that music transcends language and beliefs,
              becoming a universal language of the soul. Through captivating tunes and heartfelt lyrics, we aim to awaken your inner peace, ignite
              your devotion, and connect you to the divine essence within.
            </p>
          </div>


          <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">Amplifying New Voices</h2>
            <p className="text-md leading-relaxed text-justify">
              Vedant Devotion is not just a repository of spiritual music; it's a launchpad for talented singers and musicians.
              We provide a platform for upcoming artists to showcase their work and share their musical interpretations of our cultural heritage
              with the world. We believe in nurturing their talent and amplifying their voices, creating a harmonious confluence of tradition and innovation.
            </p>
          </div>


          <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">Experience & Expertise</h2>
            <p className="text-md leading-relaxed text-justify">
              Our team boasts extensive experience in producing and directing spiritual content for diverse national and international platforms.
              We understand the power of music to resonate across cultures and touch hearts worldwide. With passion, dedication, and meticulous
              attention to detail, we strive to create content that is both authentic and engaging.
            </p>
          </div>


          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">Join us on this soulful journey</h2>
            <p className="text-md leading-relaxed mb-6 text-justify">
              Whether you're a seasoned devotee, a curious explorer, or a budding musician, Vedant Devotion welcomes you with open arms.
              Discover the magic of ancient wisdom reimagined through music, lose yourself in the melody of devotion, and find your unique connection to the divine.
            </p>
            <p className="text-md leading-relaxed text-justify">
              Explore our website, listen to our music, and embark on your spiritual odyssey with Vedant Devotion.
              Should you require any further information or have specific inquiries regarding particular services or projects, please feel free to reach out to us.
            </p>
          </div>
        </section>
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

              <h3 className="mt-0 mb-10 pb-2 text-xl border-b-2 font-semibold text-gray-200">
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

              <h3 className="mt-0 mb-10 pb-2 text-xl border-b-2 font-semibold text-gray-200">
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

              <h3 className="mt-0 mb-10 pb-2 text-xl border-b-2 font-semibold text-gray-200">
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
