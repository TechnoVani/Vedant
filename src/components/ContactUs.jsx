import React from 'react'
import { Helmet } from 'react-helmet-async'
import { FaPhoneAlt } from 'react-icons/fa'
import { IoLocationSharp, IoMailOpenSharp } from 'react-icons/io5'

const ContactUs = () => {
    return (
        <div>
            <Helmet>
                <title>Vedant Devotions | Contact</title>
                <meta name="description" content="Get in touch with Vedant Devotions for inquiries, feedback, and collaborations." />
                <meta name="keywords" content="Contact Vedant Devotions, feedback, inquiries, collaborations" />

            </Helmet>
            <section id="contact">
                <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
                    <div className="mb-4">
                        <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">

                            <h2 className="font-heading mb-4 font-bold tracking-tight text-black dark:text-black text-3xl sm:text-5xl">
                                Get in Touch
                            </h2>
                            <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-600 dark:text-black">
                                We'd Love to Hear from You!
                            </p>
                        </div>
                    </div>
                    <div class="mt-6 w-full">
                        <div class="grid sm:grid-cols-2 md:py-5 items-center gap-5 mx-auto md:max-w-6xl bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md font-[sans-serif]">
                            <div className=' w-full md:w-5/6 py-5 h-full mx-auto px-5 bg-[#fffaf5] border flex flex-col items-start justify-center rounded shadow-xl'>
                                <p className="text-base text-center font-semibold uppercase tracking-wide text-blue-600 dark:text-black">
                                    Contact us
                                </p>
                                <p class="text-sm text-gray-700 mt-4">At Vedant Devotions, we truly value your feedback and inquiries. Please feel free to reach out to us for any questions, suggestions, or collaborations regarding our spiritual content!.</p>

                                <div class="mt-4">
                                    <ul class="mt-4">
                                        <li class="flex items-center">
                                            <div class="bg-[#e6e6e6cf] text-[#007bff] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                                <IoMailOpenSharp /> 
                                            </div>
                                            <a href="#" class="text-[#007bff] text-sm ml-4">
                                                <p>info@vedantdevotions.comm</p>
                                            </a>
                                        </li>
                                    </ul>
                                    <ul class="mt-4">
                                        <li class="flex items-center">
                                            <div class="bg-[#e6e6e6cf] text-[#007bff] h-10 w-10 rounded-full flex items-center justify-center shrink-0">

                                                <FaPhoneAlt />
                                            </div>
                                            <a href="javascript:void(0)" class="text-[#007bff] text-sm ml-4">
                                                <p>+91 9827666706</p>
                                            </a>
                                        </li>
                                    </ul>
                                    <ul class="mt-4">
                                        <li class="flex items-center">
                                            <div class="bg-[#e6e6e6cf] text-[#007bff] h-10 w-10 rounded-full flex items-center justify-center shrink-0">

                                                <IoLocationSharp />
                                            </div>
                                            <a href="javascript:void(0)" class="text-[#007bff] text-sm ml-4">
                                                <p>B-6 Yashoda Gardens Bagmugaliya Bhopal-462043</p>
                                            </a>
                                        </li>
                                    </ul>
                                </div>


                            </div>

                            <form class="ml-auo space-y-4 px-5 pb-5">

                                <input type='text' placeholder='Enter Full Name'
                                    class="w-full text-gray-800 rounded-md py-2.5 px-4 border border-gray-700 text-sm outline-blue-500" />
                                <input type='text' placeholder='Enter Phone Number'
                                    class="w-full text-gray-800 rounded-md py-2.5 px-4 border border-gray-700 text-sm outline-blue-500" />
                                <input type='email' placeholder='Enter Email Address'
                                    class="w-full text-gray-800 rounded-md py-2.5 px-4 border border-gray-700 text-sm outline-blue-500" />
                                <input type='text' placeholder='Subject'
                                    class="w-full text-gray-800 rounded-md py-2.5 px-4 border border-gray-700 text-sm outline-blue-500" />
                                <textarea placeholder='Message' rows="4"
                                    class="w-full text-gray-800 rounded-md px-4 border border-gray-700 text-sm pt-2.5 outline-blue-500"></textarea>
                                <button type='button'
                                    class="text-white bg-blue-500 hover:bg-blue-600 rounded-md text-sm px-4 py-3 w-full !mt-6">Send</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ContactUs