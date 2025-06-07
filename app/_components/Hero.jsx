"use client"
import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

const Hero = () => {
  return (
    <div>
        <section className="bg-gray-50">
  <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen ">
    <div className="mx-auto max-w-xl text-center">
    <h1 className="text-4xl font-extrabold sm:text-6xl mb-8">
     <Typewriter
     words={['FLUXFORM', 'Create Smart Forms']}
     loop={false}
     cursor
     cursorStyle='_'
     typeSpeed={50}
     deleteSpeed={50}
     delaySpeed={1000}
     
     />
    </h1>
    <h1 className="text-1xl font-extrabold sm:text-3xl">
  Create Intelligent Forms.
  <strong className="font-extrabold text-primary sm:block"> Boost Engagement. </strong>
</h1>

<p className="mt-4 sm:text-[18px]/relaxed">
  Effortlessly design AI-driven forms that captivate users and gather insights like never before. Transform data collection into a seamless experience!
</p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-purple-600 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
          href="/dashboard"
        >
          + Create AI Form
        </a>

        <a
          className="block w-full rounded px-12 py-3 text-sm font-medium text-primary shadow hover:text-purple-600 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
          href="#"
        >
          Learn More
        </a>
      </div>
    </div>
  </div>
</section>

      <div className="fixed inset-x-0 bottom-0 p-4">
    <div className="rounded-lg bg-primary px-4 py-3 text-white shadow-lg">
      <p className="text-center text-sm font-medium">
        Made with 💖 by <span><a href="https://github.com/rudra016" className="inline-block underline"> Rudra </a></span> 
        
      </p>
    </div>
  </div>
    </div>
  )
}

export default Hero
