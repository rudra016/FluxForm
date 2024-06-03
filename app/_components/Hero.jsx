import React from 'react'

const Hero = () => {
  return (
    <div>
        <section className="bg-gray-50">
  <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen ">
    <div className="mx-auto max-w-xl text-center">
    <h1 className="text-3xl font-extrabold sm:text-5xl">
  Create Intelligent Forms.
  <strong className="font-extrabold text-primary sm:block"> Boost Engagement. </strong>
</h1>

<p className="mt-4 sm:text-xl/relaxed">
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
    </div>
  )
}

export default Hero